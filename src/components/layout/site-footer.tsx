import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { company } from "@/content/company";
import { mainNavigation } from "@/content/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-inverse text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              aria-label="Kafa Medical Supplies home"
              className={[
                "relative block h-16 w-[210px]",
                "overflow-hidden rounded-card bg-white",
                "p-2 shadow-card",
              ].join(" ")}
            >
              <Image
                src="/images/brand/kafa_logo.png"
                alt="Kafa Medical Supplies"
                fill
                sizes="210px"
                className="object-contain p-2"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65 sm:text-base">
              {company.description}
            </p>

            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={[
                "mt-7 inline-flex min-h-12 items-center",
                "justify-center gap-3 rounded-button",
                "border border-white/15 bg-white/10 px-5",
                "text-sm font-semibold text-white",
                "transition duration-200",
                "hover:border-brand-300/50",
                "hover:bg-white/15",
              ].join(" ")}
            >
              <MessageCircle
                aria-hidden="true"
                size={19}
                className="text-brand-300"
              />

              Chat on WhatsApp

              <ArrowUpRight
                aria-hidden="true"
                size={17}
              />
            </a>
          </div>

          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Quick links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-6"
            >
              <ul className="space-y-1">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={[
                        "inline-flex min-h-11 items-center",
                        "text-sm font-medium text-white/65",
                        "transition-colors",
                        "hover:text-brand-200",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Get in touch
            </h2>

            <address className="mt-6 space-y-5 not-italic">
              <a
                href={company.emailHref}
                className={[
                  "group flex items-start gap-3",
                  "text-sm leading-6 text-white/65",
                  "transition-colors hover:text-white",
                ].join(" ")}
              >
                <Mail
                  aria-hidden="true"
                  size={18}
                  className="mt-1 shrink-0 text-brand-300"
                />

                <span className="break-all">
                  {company.email}
                </span>
              </a>

              <a
                href={company.phoneHref}
                className={[
                  "group flex items-start gap-3",
                  "text-sm leading-6 text-white/65",
                  "transition-colors hover:text-white",
                ].join(" ")}
              >
                <Phone
                  aria-hidden="true"
                  size={18}
                  className="mt-1 shrink-0 text-brand-300"
                />

                <span>{company.phoneDisplay}</span>
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-white/65">
                <MapPin
                  aria-hidden="true"
                  size={18}
                  className="mt-1 shrink-0 text-brand-300"
                />

                <span className="max-w-xs">
                  {company.address}
                </span>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {company.name}. All rights reserved.
            </p>

            <p>
              Medical supplies for the Kenyan market.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}