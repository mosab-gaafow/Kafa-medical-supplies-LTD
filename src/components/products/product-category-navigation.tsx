import Link from "next/link";

import { productCategories } from "@/content/product-categories";

type ProductCategoryNavigationProps = {
  activeSlug?: string;
};

export function ProductCategoryNavigation({
  activeSlug,
}: ProductCategoryNavigationProps) {
  return (
    <nav aria-label="Product categories">
      <ul className="flex flex-wrap justify-center gap-3">
        <li>
          <Link
            href="/products"
            aria-current={
              activeSlug === undefined
                ? "page"
                : undefined
            }
            className={[
              "inline-flex min-h-10 items-center",
              "rounded-full border px-4 py-2",
            //   "text-sm font-semibold transition",
            "text-sm font-semibold transition duration-200",
"motion-safe:hover:-translate-y-0.5",
"motion-safe:active:translate-y-0",
              activeSlug === undefined
                ? [
                    "border-brand-600",
                    "bg-brand-600 text-white",
                  ].join(" ")
                : [
                    "border-border-default",
                    "bg-white text-ink-700",
                    "hover:border-brand-300",
                    "hover:text-brand-700",
                  ].join(" "),
            ].join(" ")}
          >
            All
          </Link>
        </li>

        {productCategories.map((category) => {
          const isActive =
            category.slug === activeSlug;

          return (
            <li key={category.slug}>
              <Link
                href={`/products/${category.slug}`}
                aria-current={
                  isActive ? "page" : undefined
                }
                className={[
                  "inline-flex min-h-10 items-center",
                  "rounded-full border px-4 py-2",
                //   "text-sm font-semibold transition",
                "text-sm font-semibold transition duration-200",
"motion-safe:hover:-translate-y-0.5",
"motion-safe:active:translate-y-0",
                  isActive
                    ? [
                        "border-brand-600",
                        "bg-brand-600 text-white",
                      ].join(" ")
                    : [
                        "border-border-default",
                        "bg-white text-ink-700",
                        "hover:border-brand-300",
                        "hover:text-brand-700",
                      ].join(" "),
                ].join(" ")}
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}