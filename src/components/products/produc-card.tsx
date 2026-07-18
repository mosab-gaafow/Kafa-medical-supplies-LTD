import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import { ProductItem } from "@/types/products";


type ProductCardProps = {
  product: ProductItem;
  categoryName: string;
};

export function ProductCard({
  product,
  categoryName,
}: ProductCardProps) {
  const quoteUrl = `/contact?subject=${encodeURIComponent(
    `Quote request: ${product.name}`,
  )}`;

  return (
    <article
      className={[
        "flex h-full flex-col overflow-hidden",
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
              product.imageAlt ??
              `${product.name} medical product`
            }
            fill
            sizes={[
              "(min-width: 1024px) 33vw",
              "(min-width: 640px) 50vw",
              "100vw",
            ].join(", ")}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <div>
              <ImageIcon
                aria-hidden="true"
                size={32}
                strokeWidth={1.5}
                className="mx-auto text-brand-500"
              />

              <p className="mt-4 text-sm text-text-muted">
                Product image will be added later.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-700">
          {categoryName}
        </p>

        <h2 className="mt-3 text-xl font-bold tracking-tight text-text-strong">
          {product.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          {product.shortDescription}
        </p>

        <Link
          href={quoteUrl}
          className={[
            "mt-6 inline-flex min-h-11 items-center",
            "gap-2 font-semibold text-brand-700",
            "transition-colors hover:text-brand-800",
          ].join(" ")}
        >
          Request a quote

          <ArrowRight
            aria-hidden="true"
            size={17}
          />
        </Link>
      </div>
    </article>
  );
}