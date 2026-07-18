"use client";

import { useState } from "react";
import type { FieldPath } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Send,
} from "lucide-react";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/contact-schema";

type ContactFormProps = {
  initialSubject?: string;
};

type ContactApiResponse = {
  success?: boolean;
  message: string;
  fieldErrors?: Partial<
    Record<keyof ContactFormValues, string[]>
  >;
};

type SubmitStatus =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

const inputClasses = [
  "mt-2 block min-h-12 w-full",
  "rounded-button border border-border-default",
  "bg-white px-4 py-3",
  "text-base text-text-strong",
  "placeholder:text-ink-400",
  "transition duration-200",
  "hover:border-brand-300",
  "focus:border-brand-600",
  "focus:outline-none",
  "focus:ring-4 focus:ring-brand-100",
  "disabled:cursor-not-allowed",
  "disabled:bg-surface-sunken",
  "disabled:opacity-70",
].join(" ");

const labelClasses =
  "block text-sm font-semibold text-text-strong";

const errorClasses =
  "mt-2 text-sm font-medium text-danger";

export function ContactForm({
  initialSubject = "",
}: ContactFormProps) {
  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>(null);

  const [startedAt] = useState(
    () => Date.now().toString(),
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

   defaultValues: {
  fullName: "",
  email: "",
  phone: "",
  facilityName: "",
  subject: initialSubject,
  message: "",
  website: "",
  startedAt,
},
  });

  async function onSubmit(
    values: ContactFormValues,
  ) {
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });

      const result =
        (await response.json()) as ContactApiResponse;

      if (!response.ok) {
        if (result.fieldErrors) {
          Object.entries(
            result.fieldErrors,
          ).forEach(([field, messages]) => {
            const message = messages?.[0];

            if (!message) {
              return;
            }

            setError(
              field as FieldPath<ContactFormValues>,
              {
                type: "server",
                message,
              },
            );
          });
        }

        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "We could not send your enquiry.",
        });

        return;
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message ||
          "Your enquiry has been sent successfully.",
      });

      reset({
  fullName: "",
  email: "",
  phone: "",
  facilityName: "",
  subject: initialSubject,
  message: "",
  website: "",
  startedAt,
});
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "A connection problem occurred. Please try again.",
      });
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto size-px overflow-hidden"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <input
        type="hidden"
        {...register("startedAt")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className={labelClasses}
          >
            Full name
          </label>

          <input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            aria-invalid={
              errors.fullName ? "true" : "false"
            }
            aria-describedby={
              errors.fullName
                ? "fullName-error"
                : undefined
            }
            className={inputClasses}
            {...register("fullName")}
          />

          {errors.fullName ? (
            <p
              id="fullName-error"
              className={errorClasses}
            >
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className={labelClasses}
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
            disabled={isSubmitting}
            aria-invalid={
              errors.email ? "true" : "false"
            }
            aria-describedby={
              errors.email
                ? "email-error"
                : undefined
            }
            className={inputClasses}
            {...register("email")}
          />

          {errors.email ? (
            <p
              id="email-error"
              className={errorClasses}
            >
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className={labelClasses}
          >
            Phone number
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+254 722 818 199"
            disabled={isSubmitting}
            aria-invalid={
              errors.phone ? "true" : "false"
            }
            aria-describedby={
              errors.phone
                ? "phone-error"
                : undefined
            }
            className={inputClasses}
            {...register("phone")}
          />

          {errors.phone ? (
            <p
              id="phone-error"
              className={errorClasses}
            >
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="facilityName"
            className={labelClasses}
          >
            Company or facility name
          </label>

          <input
            id="facilityName"
            type="text"
            autoComplete="organization"
            placeholder="Hospital, clinic or company"
            disabled={isSubmitting}
            aria-invalid={
              errors.facilityName
                ? "true"
                : "false"
            }
            aria-describedby={
              errors.facilityName
                ? "facilityName-error"
                : undefined
            }
            className={inputClasses}
            {...register("facilityName")}
          />

          {errors.facilityName ? (
            <p
              id="facilityName-error"
              className={errorClasses}
            >
              {errors.facilityName.message}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className={labelClasses}
        >
          Subject
        </label>

        <input
          id="subject"
          type="text"
          placeholder="What products do you need?"
          disabled={isSubmitting}
          aria-invalid={
            errors.subject ? "true" : "false"
          }
          aria-describedby={
            errors.subject
              ? "subject-error"
              : undefined
          }
          className={inputClasses}
          {...register("subject")}
        />

        {errors.subject ? (
          <p
            id="subject-error"
            className={errorClasses}
          >
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div>
        <div className="flex items-center justify-between gap-4">
          <label
            htmlFor="message"
            className={labelClasses}
          >
            Message
          </label>

          <span className="text-xs text-text-muted">
            Maximum 3,000 characters
          </span>
        </div>

        <textarea
          id="message"
          rows={7}
          placeholder="Tell us the product names, quantities and specifications you need."
          disabled={isSubmitting}
          aria-invalid={
            errors.message ? "true" : "false"
          }
          aria-describedby={
            errors.message
              ? "message-error"
              : undefined
          }
          className={`${inputClasses} resize-y`}
          {...register("message")}
        />

        {errors.message ? (
          <p
            id="message-error"
            className={errorClasses}
          >
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {submitStatus ? (
        <div
          role={
            submitStatus.type === "error"
              ? "alert"
              : "status"
          }
          className={[
            "flex items-start gap-3",
            "rounded-button border p-4",
            submitStatus.type === "success"
              ? [
                  "border-success/25",
                  "bg-success/10",
                  "text-success",
                ].join(" ")
              : [
                  "border-danger/25",
                  "bg-danger/10",
                  "text-danger",
                ].join(" "),
          ].join(" ")}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2
              aria-hidden="true"
              size={20}
              className="mt-0.5 shrink-0"
            />
          ) : (
            <AlertCircle
              aria-hidden="true"
              size={20}
              className="mt-0.5 shrink-0"
            />
          )}

          <p className="text-sm font-semibold leading-6">
            {submitStatus.message}
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={[
          "inline-flex min-h-12 w-full",
          "items-center justify-center gap-3",
          "rounded-button bg-brand-600",
          "px-6 py-3 font-semibold text-white",
          "shadow-brand transition duration-200",
          "hover:bg-brand-700",
          "disabled:cursor-not-allowed",
          "disabled:opacity-65",
          "sm:w-auto",
        ].join(" ")}
      >
        {isSubmitting ? (
          <>
            <LoaderCircle
              aria-hidden="true"
              size={19}
              className="animate-spin"
            />

            Sending enquiry...
          </>
        ) : (
          <>
            <Send
              aria-hidden="true"
              size={19}
            />

            Send enquiry
          </>
        )}
      </button>
    </form>
  );
}