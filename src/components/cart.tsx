import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Cart() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>cart (0)</SheetTrigger>
        <SheetContent side="right" className="bg-zinc-50">
          <SheetHeader>
            <SheetTitle className="font-extrabold text-2xl">
              Shopping Cart{" "}
              <span className="text-zinc-300 font-semibold text-xl ml-3">
                0 Items
              </span>
            </SheetTitle>
            <SheetDescription>You have no items in your cart.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
