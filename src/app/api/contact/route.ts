import nodemailer from "nodemailer";

import { createContactEmail } from "@/lib/email/contact-email";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { contactFormSchema } from "@/lib/validation/contact-schema";

export const runtime = "nodejs";

const MAX_BODY_SIZE = 20_000;
const MINIMUM_FORM_TIME = 1_200;
const MAXIMUM_FORM_TIME =
  24 * 60 * 60 * 1000;

function getClientIp(
  headers: Headers,
) {
  const forwardedFor =
    headers.get("x-forwarded-for");

  if (forwardedFor) {
    return (
      forwardedFor
        .split(",")[0]
        ?.trim() || "unknown"
    );
  }

  return (
    headers.get("x-real-ip") ||
    "unknown"
  );
}

function hasValidOrigin(
  request: Request,
) {
  const origin =
    request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    const requestUrl =
      new URL(request.url);

    const originUrl =
      new URL(origin);

    return (
      requestUrl.host ===
      originUrl.host
    );
  } catch {
    return false;
  }
}

export async function POST(
  request: Request,
) {
  if (!hasValidOrigin(request)) {
    return Response.json(
      {
        message:
          "This request is not allowed.",
      },
      {
        status: 403,
      },
    );
  }

  const contentType =
    request.headers.get(
      "content-type",
    );

  if (
    !contentType?.includes(
      "application/json",
    )
  ) {
    return Response.json(
      {
        message:
          "The request must contain JSON data.",
      },
      {
        status: 415,
      },
    );
  }

  const contentLength =
    Number(
      request.headers.get(
        "content-length",
      ) || 0,
    );

  if (
    contentLength >
    MAX_BODY_SIZE
  ) {
    return Response.json(
      {
        message:
          "The submitted form is too large.",
      },
      {
        status: 413,
      },
    );
  }

  const clientIp =
    getClientIp(request.headers);

  const rateLimit =
    checkRateLimit(
      `contact:${clientIp}`,
    );

  if (!rateLimit.allowed) {
    return Response.json(
      {
        message:
          "Too many enquiries were submitted. Please wait and try again.",
      },
      {
        status: 429,

        headers: {
          "Retry-After":
            rateLimit.retryAfterSeconds.toString(),
        },
      },
    );
  }

  let body: unknown;

  try {
    body =
      await request.json();
  } catch {
    return Response.json(
      {
        message:
          "The submitted form could not be read.",
      },
      {
        status: 400,
      },
    );
  }

  const validationResult =
    contactFormSchema.safeParse(
      body,
    );

  if (
    !validationResult.success
  ) {
    return Response.json(
      {
        message:
          "Please check the highlighted fields.",

        fieldErrors:
          validationResult.error
            .flatten()
            .fieldErrors,
      },
      {
        status: 400,
      },
    );
  }

  const {
    website,
    startedAt,
    ...contactData
  } = validationResult.data;

  /*
   * A bot filled the hidden field.
   * Return success without sending an email.
   */
  if (website) {
    return Response.json({
      success: true,
      message:
        "Your enquiry has been received.",
    });
  }

  const formStartedAt =
    Number(startedAt);

  const formElapsedTime =
    Date.now() - formStartedAt;

  if (
    !Number.isFinite(
      formStartedAt,
    ) ||
    formElapsedTime <
      MINIMUM_FORM_TIME ||
    formElapsedTime >
      MAXIMUM_FORM_TIME
  ) {
    return Response.json(
      {
        message:
          "The form session is invalid. Refresh the page and try again.",
      },
      {
        status: 400,
      },
    );
  }

  const smtpHost =
    process.env.SMTP_HOST;

  const smtpPort =
    process.env.SMTP_PORT;

  const smtpUser =
    process.env.SMTP_USER;

  const smtpPassword =
    process.env
      .SMTP_PASSWORD;

  const fromEmail =
    process.env
      .CONTACT_FROM_EMAIL;

  const toEmail =
    process.env
      .CONTACT_TO_EMAIL;

  if (
    !smtpHost ||
    !smtpPort ||
    !smtpUser ||
    !smtpPassword ||
    !fromEmail ||
    !toEmail
  ) {
    console.error(
      "The contact email environment variables are missing.",
    );

    return Response.json(
      {
        message:
          "The contact service is not configured yet. Please call or email us directly.",
      },
      {
        status: 503,
      },
    );
  }

  const port = Number(smtpPort);

  const secure =
    process.env.SMTP_SECURE ===
    "true";

  const transporter =
    nodemailer.createTransport({
      host: smtpHost,
      port,
      secure,

      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

  const emailContent =
    createContactEmail(
      contactData,
    );

  const safeSenderName =
    contactData.fullName.replace(
      /[\r\n"<>]/g,
      "",
    );

  const fromHeader = `"${safeSenderName} (via website)" <${fromEmail}>`;

  try {
    await transporter.sendMail({
      from: fromHeader,
      to: toEmail,
      replyTo:
        contactData.email,
      subject:
        emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    return Response.json({
      success: true,
      message:
        "Thank you. Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact form email error:",
      error,
    );

    return Response.json(
      {
        message:
          "We could not send your enquiry. Please try again or contact us directly.",
      },
      {
        status: 502,
      },
    );
  }
}