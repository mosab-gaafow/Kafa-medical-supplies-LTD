"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/content/navigation";

function isActiveRoute(
  currentPath: string,
  linkPath: string,
) {
  if (linkPath === "/") {
    return currentPath === "/";
  }

  return currentPath.startsWith(linkPath);
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {mainNavigation.map((item) => {
          const isActive = isActiveRoute(
            pathname,
            item.href,
          );

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative inline-flex min-h-11 items-center",
                  "text-sm font-semibold transition-colors",
                  "after:absolute after:inset-x-0 after:bottom-1",
                  "after:h-0.5 after:origin-center after:rounded-full",
                  "after:bg-brand-600 after:transition-transform",
                  isActive
                    ? "text-brand-700 after:scale-x-100"
                    : [
                        "text-ink-700",
                        "hover:text-brand-700",
                        "after:scale-x-0",
                        "hover:after:scale-x-100",
                      ].join(" "),
                ].join(" ")}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}