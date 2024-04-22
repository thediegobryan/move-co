import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type rentNowProps = {
  className?: string;
};

export default function BtnRentNow({ className }: rentNowProps) {
  return (
    <Link
      className={cn(
        "text-lg text-gray-950 font-semibold bg-accent mt-1 mx-5 px-5 py-3 shadow-sm hover:text-gray-950 focus:text-gray-950 rounded-full transistion",
        className
      )}
      href="/rent-now"
    >
      Rent Now
    </Link>
  );
}
