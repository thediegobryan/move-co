"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import BtnRentNow from "./btn-rent-now";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const routes = [
  {
    label: "Why Rent?",
    path: "/why-rent",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Locations",
    path: "/locations",
  },
  {
    label: "FAQs",
    path: "/faqs",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
];

export default function Header() {
  const activePathName = usePathname();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="flex md:justify-center justify-between bg-white border-b border-white/10 px-4 py-2 z-10">
      <div className="max-w-[1200px] flex flex-col">
        <div className="flex flex-col item-center text-center">
          <Link href="/">
            <h1 className="text-5xl font-bold">TOTES</h1>
            <p className="text-sm font-bold -mt-1">Move Co.</p>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-2 text-lg mt-1 mx-5">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  className={cn(
                    "text-gray-900/90 font-semibold px-3 py-2 hover:text-gray-950 focus:text-gray-950 transistion",
                    {
                      "font-extrabold shadow-md text-[1.25rem] rounded-xl transistion":
                        route.path === activePathName,
                    }
                  )}
                  href={route.path}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li key="/rent-now">
              <BtnRentNow className="py-2 px-4" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden">
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger>
            <HamburgerMenuIcon className="scale-[2.5] mt-5 mx-5" />
          </DialogTrigger>
          <DialogContent className="bg-zinc-100 opacity-95 py-10 rounded">
            <DialogHeader className="">
              <Link href="/" onClick={() => setIsFormOpen(false)}>
                <h1 className="text-5xl font-bold">TOTES</h1>
                <p className="text-sm font-bold -mt-1">Move Co.</p>
              </Link>
            </DialogHeader>
            <hr />
            <div>
              <nav className="md:block h-full mt-0">
                <ul className="flex flex-col items-center justify-start gap-6">
                  {routes.map((route) => (
                    <li key={route.path}>
                      <Link
                        className={cn(
                          "text-gray-900/90 text-2xl underline font-semibold px-3 py-2 hover:text-gray-950 focus:text-gray-950 transistion",
                          {
                            "font-extrabold shadow-md text-[1.25rem] rounded-xl transistion":
                              route.path === activePathName,
                          }
                        )}
                        href={route.path}
                        onClick={() => setIsFormOpen(false)}
                      >
                        {route.label}
                      </Link>
                    </li>
                  ))}
                  <li key="/rent-now">
                    <BtnRentNow className="px-16 py-4" />
                  </li>
                </ul>
              </nav>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
