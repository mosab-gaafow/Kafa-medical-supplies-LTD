import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import { Product } from "@/types/products";


type ProductCardProps = {
  product: Product;
};

export function ProductCard({
  product,
}: ProductCardProps) {
  const quoteUrl = `/contact?subject=${encodeURIComponent(
    `Quote request: ${product.name}`,
  )}`;

  return (
    <article
      className={[
        "group flex h-full flex-col overflow-hidden",
        "rounded-card border border-border-default",
        "bg-white shadow-card",
        "transition duration-200",
        "hover:-translate-y-1",
        "hover:border-brand-200",
        "hover:shadow-lifted",
      ].join(" ")}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={
              product.imageAlt ?? product.name
            }
            fill
            sizes={[
              "(min-width: 1280px) 256px",
              "(min-width: 640px) 45vw",
              "100vw",
            ].join(", ")}
            className={[
              "object-cover",
              "transition duration-500",
              "group-hover:scale-[1.03]",
            ].join(" ")}
          />
        ) : (
          <div
            className={[
              "brand-gradient flex h-full",
              "items-center justify-center p-6",
            ].join(" ")}
          >
            <div className="flex flex-col items-center text-center">
              <Stethoscope
                aria-hidden="true"
                size={30}
                strokeWidth={1.5}
                className="text-white"
              />

              <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                Kafa Medical
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-text-strong">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          {product.shortDescription}
        </p>

        <Link
          href={quoteUrl}
          aria-label={`Request a quote for ${product.name}`}
          className={[
            "group/cta mt-auto inline-flex min-h-11",
            "items-center gap-2 pt-6",
            "font-semibold text-brand-700",
            "transition-colors hover:text-brand-800",
          ].join(" ")}
        >
          Request a quote

          <ArrowRight
            aria-hidden="true"
            size={17}
            className={[
              "transition-transform duration-200",
              "group-hover/cta:translate-x-1",
            ].join(" ")}
          />
        </Link>
      </div>
    </article>
  );
}
