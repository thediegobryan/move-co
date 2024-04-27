import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type rentNowProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export default function BtnRentNow({
  children,
  className,
  href,
}: rentNowProps) {
  return (
    <Link
      className={cn(
        "text-lg text-gray-950 font-semibold bg-accent mt-1 mx-5 px-5 py-3 shadow-sm hover:text-gray-950 focus:text-gray-950 rounded-full transistion",
        className
      )}
      href={href || "/products"}
    >
      {children}
    </Link>
  );
}
