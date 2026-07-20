"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

import { company } from "@/content/company";
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

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(true)}
        className={[
          "inline-flex size-11 items-center justify-center",
          "rounded-button border border-border-default",
          "bg-white text-text-strong shadow-card",
          "transition hover:bg-brand-50",
        ].join(" ")}
      >
        <Menu aria-hidden="true" size={22} />
      </button>

      {isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[100]">
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="absolute inset-0 bg-surface-inverse/60 backdrop-blur-sm"
              />

              <div
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={[
                  "absolute inset-y-0 right-0",
                  "flex w-full max-w-sm flex-col",
                  "bg-white p-6 shadow-lifted",
                ].join(" ")}
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl font-bold text-text-strong">
                    Menu
                  </p>

                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={closeMenu}
                    className={[
                      "inline-flex size-11 items-center justify-center",
                      "rounded-button border border-border-default",
                      "text-text-strong transition",
                      "hover:bg-brand-50",
                    ].join(" ")}
                  >
                    <X aria-hidden="true" size={22} />
                  </button>
                </div>

                <nav
                  aria-label="Mobile navigation"
                  className="mt-10"
                >
                  <ul className="space-y-2">
                    {mainNavigation.map((item) => {
                      const isActive = isActiveRoute(
                        pathname,
                        item.href,
                      );

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            aria-current={
                              isActive ? "page" : undefined
                            }
                            className={[
                              "flex min-h-14 items-center",
                              "justify-between rounded-button",
                              "px-4 text-base font-semibold",
                              "transition-colors",
                              isActive
                                ? "bg-brand-50 text-brand-700"
                                : [
                                    "text-ink-700",
                                    "hover:bg-surface-sunken",
                                    "hover:text-brand-700",
                                  ].join(" "),
                            ].join(" ")}
                          >
                            {item.label}

                            <ArrowRight
                              aria-hidden="true"
                              size={18}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-auto border-t border-border-default pt-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Get in touch
                  </p>

                  <div className="mt-5 space-y-3">
                    <a
                      href={company.phoneHref}
                      className={[
                        "flex min-h-12 items-center gap-3",
                        "rounded-button text-sm font-semibold",
                        "text-text-strong transition-colors",
                        "hover:text-brand-700",
                      ].join(" ")}
                    >
                      <Phone
                        aria-hidden="true"
                        size={19}
                        className="text-brand-600"
                      />

                      {company.phoneDisplay}
                    </a>

                    <a
                      href={company.emailHref}
                      className={[
                        "flex min-h-12 items-center gap-3",
                        "rounded-button text-sm font-semibold",
                        "text-text-strong transition-colors",
                        "hover:text-brand-700",
                      ].join(" ")}
                    >
                      <Mail
                        aria-hidden="true"
                        size={19}
                        className="text-brand-600"
                      />

                      {company.email}
                    </a>
                  </div>

                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className={[
                      "mt-5 inline-flex min-h-12 w-full",
                      "items-center justify-center gap-2",
                      "rounded-button bg-brand-600 px-5",
                      "font-semibold text-white shadow-brand",
                      "transition hover:bg-brand-700",
                    ].join(" ")}
                  >
                    Contact us

                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                    />
                  </Link>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}