import type {
  ContactFormValues,
} from "@/lib/validation/contact-schema";

type ContactEmailData = Omit<
  ContactFormValues,
  "website" | "startedAt"
>;

function escapeHtml(
  value: string,
) {
  return value.replace(
    /[&<>"']/g,
    (character) => {
      const entities: Record<
        string,
        string
      > = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };

      return entities[character];
    },
  );
}

export function createContactEmail(
  data: ContactEmailData,
) {
  const safeName =
    escapeHtml(data.fullName);

  const safeEmail =
    escapeHtml(data.email);

  const safePhone =
    escapeHtml(data.phone);

  const safeFacility =
    escapeHtml(data.facilityName);

  const safeSubject =
    escapeHtml(data.subject);

  const safeMessage =
    escapeHtml(data.message).replace(
      /\n/g,
      "<br />",
    );

  const cleanEmailSubject =
    data.subject
      .replace(/[\r\n]+/g, " ")
      .trim();

  const subject =
    `[Website enquiry] ${cleanEmailSubject}`;

  const html = `
    <!doctype html>
    <html lang="en">
      <body style="margin:0;padding:24px;background:#f5f8f8;font-family:Arial,sans-serif;color:#111b21;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dde4e6;border-radius:16px;overflow:hidden;">
          <div style="background:#117a70;padding:24px 28px;color:#ffffff;">
            <p style="margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;opacity:.75;">
              Kafa Medical Supplies LTD
            </p>

            <h1 style="margin:10px 0 0;font-size:26px;line-height:1.3;">
              New website enquiry
            </h1>
          </div>

          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;">
              <tbody>
                <tr>
                  <td style="padding:10px 0;color:#65747c;width:170px;">
                    Full name
                  </td>

                  <td style="padding:10px 0;font-weight:700;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#65747c;">
                    Email
                  </td>

                  <td style="padding:10px 0;">
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#65747c;">
                    Phone
                  </td>

                  <td style="padding:10px 0;">
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#65747c;">
                    Company or facility
                  </td>

                  <td style="padding:10px 0;">
                    ${safeFacility}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#65747c;">
                    Subject
                  </td>

                  <td style="padding:10px 0;">
                    ${safeSubject}
                  </td>
                </tr>
              </tbody>
            </table>

            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #dde4e6;">
              <p style="margin:0 0 10px;color:#65747c;">
                Message
              </p>

              <div style="font-size:16px;line-height:1.7;">
                ${safeMessage}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const text = [
    "New Kafa Medical website enquiry",
    "",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Company or facility: ${data.facilityName}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  return {
    subject,
    html,
    text,
  };
}