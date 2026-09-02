"use client";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants } from "./ui/button";

export function ButtonLink({
  className,
  variant = "default",
  size = "default",
  ...props
}: ComponentProps<typeof NextLink> & VariantProps<typeof buttonVariants>) {
  return (
    <NextLink
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  );
}
