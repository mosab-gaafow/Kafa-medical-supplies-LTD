import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
} from "lucide-react";

import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/ui/button";
import { company } from "@/content/company";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  return (
    <header
      className={[
        "sticky top-0 z-50",
        "border-b border-border-default/80",
        "bg-white/95 backdrop-blur-xl",
      ].join(" ")}
    >
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="Kafa Medical Supplies home"
          className={[
            "relative block h-14 w-[165px]",
            "shrink-0 sm:w-[190px]",
          ].join(" ")}
        >
          <Image
            src="/images/brand/kafa_logo.png"
            alt="Kafa Medical Supplies"
            fill
            sizes="190px"
            loading="eager"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden lg:block">
          <DesktopNavigation />
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={company.phoneHref}
            className={[
              "inline-flex min-h-11 items-center gap-2",
              "text-sm font-semibold text-ink-700",
              "transition-colors hover:text-brand-700",
            ].join(" ")}
          >
            <Phone
              aria-hidden="true"
              size={18}
            />

            {company.phoneDisplay}
          </a>

          <ButtonLink
            href="/contact"
            size="small"
          >
            Contact us

            <ArrowRight
              aria-hidden="true"
              size={17}
            />
          </ButtonLink>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}