type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignmentClasses}`}
    >
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="section-title text-text-strong">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}