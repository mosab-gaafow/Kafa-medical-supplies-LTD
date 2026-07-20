import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost";

type ButtonSize = "small" | "medium" | "large";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonLinkProps = SharedButtonProps & {
  href: string;
  "aria-label"?: string;
};

const baseClasses = [
  "inline-flex",
  "min-h-11",
  "items-center",
  "justify-center",
  "gap-2",
  "rounded-button",
  "font-semibold",
  "transition",
  "duration-200",
  "motion-safe:hover:-translate-y-0.5",
  "motion-safe:active:translate-y-0",
  "motion-reduce:transition-none",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
].join(" ");

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-brand hover:bg-brand-700 active:bg-brand-800",

  secondary:
    "border border-border-default bg-white text-text-strong shadow-card hover:bg-surface-sunken",

  accent:
    "bg-accent-400 text-white shadow-brand hover:bg-accent-500 active:bg-accent-600",

  ghost:
    "text-brand-700 hover:bg-brand-50 active:bg-brand-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-5 py-3 text-base",
  large: "px-7 py-4 text-lg",
};

function getButtonClasses({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className: string;
}) {
  return [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClasses({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "medium",
  className = "",
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={getButtonClasses({
        variant,
        size,
        className,
      })}
    >
      {children}
    </Link>
  );
}