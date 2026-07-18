import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCategory } from "@/types/products";


type ProductCategoryCardProps = {
  category: ProductCategory;
};

export function ProductCategoryCard({
  category,
}: ProductCategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className={[
  "group block h-full overflow-hidden",
  "rounded-card border border-border-default",
  "bg-white shadow-card",
  "transition duration-200",
  "hover:-translate-y-1",
  "hover:border-brand-200",
  "hover:shadow-lifted",
  "focus-visible:-translate-y-1",
  "focus-visible:border-brand-300",
  "focus-visible:shadow-lifted",
].join(" ")}
    >
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
          <Image
            src={category.imageSrc}
            alt={category.imageAlt}
            fill
            sizes={[
              "(min-width: 1024px) 33vw",
              "(min-width: 640px) 50vw",
              "100vw",
            ].join(", ")}
            className={[
              "object-cover",
              "transition duration-500",
              "group-hover:scale-[1.03]",
            ].join(" ")}
          />

          <div
            aria-hidden="true"
            className={[
              "absolute inset-0",
              "bg-gradient-to-t",
              "from-ink-950/20",
              "via-transparent",
              "to-transparent",
            ].join(" ")}
          />

          <span
            className={[
              "absolute left-4 top-4",
              "rounded-full border border-white/30",
              "bg-surface-inverse/65 px-3 py-1",
              "font-mono text-[9px] font-semibold",
              "uppercase tracking-[0.14em]",
              "text-white backdrop-blur-md",
            ].join(" ")}
          >
            Temporary image
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span
            className={[
              "w-fit rounded-full bg-brand-50",
              "px-3 py-1 font-mono text-[10px]",
              "font-semibold uppercase tracking-[0.12em]",
              "text-brand-700",
            ].join(" ")}
          >
            {category.badge}
          </span>

          <h3 className="mt-4 text-xl font-bold tracking-tight text-text-strong">
            {category.name}
          </h3>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            {category.description}
          </p>

          <span
            className={[
              "mt-6 inline-flex items-center gap-2",
              "text-sm font-semibold text-brand-700",
            ].join(" ")}
          >
            View category

            <ArrowRight
              aria-hidden="true"
              size={17}
              className={[
                "transition-transform duration-200",
                "group-hover:translate-x-1",
              ].join(" ")}
            />
          </span>
        </div>
      </article>
    </Link>
  );
}