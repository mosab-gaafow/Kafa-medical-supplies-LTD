"use client";

import type { ReactNode } from "react";
import * as m from "motion/react-m";
import type { Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
};

export function StaggerGrid({
  children,
  className = "",
  as = "div",
}: StaggerGridProps) {
  const MotionTag =
    as === "ul" ? m.ul : m.div;

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
        margin: "0px 0px -40px 0px",
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  className = "",
  as = "div",
}: StaggerItemProps) {
  const MotionTag =
    as === "li" ? m.li : m.div;

  return (
    <MotionTag
      className={className}
      variants={itemVariants}
    >
      {children}
    </MotionTag>
  );
}
