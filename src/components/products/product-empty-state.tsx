import {
  ArrowRight,
  MessageCircle,
  PackageSearch,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";

type ProductEmptyStateProps = {
  categoryName: string;
};

export function ProductEmptyState({
  categoryName,
}: ProductEmptyStateProps) {
  const quoteUrl = `/contact?subject=${encodeURIComponent(
    `Quote request: ${categoryName}`,
  )}`;

  return (
    <div
      className={[
        "rounded-hero border border-border-default",
        "bg-surface-sunken px-6 py-12",
        "text-center sm:px-10 sm:py-16",
      ].join(" ")}
    >
      <div className="mx-auto flex size-14 items-center justify-center rounded-card bg-brand-50 text-brand-700">
        <PackageSearch
          aria-hidden="true"
          size={27}
        />
      </div>

      <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-text-strong">
        Looking for a product in {categoryName}?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted">
        The detailed product list is being prepared.
        Send us the product name, required quantity and
        specifications. Our team will check availability
        and prepare a quote.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <ButtonLink
          href={quoteUrl}
          size="large"
        >
          <MessageCircle
            aria-hidden="true"
            size={19}
          />

          Request a quote

          <ArrowRight
            aria-hidden="true"
            size={19}
          />
        </ButtonLink>

        <ButtonLink
          href="/products"
          variant="secondary"
          size="large"
        >
          View other categories
        </ButtonLink>
      </div>
    </div>
  );
}