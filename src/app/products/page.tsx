import PricingBox from "@/components/pricing-box";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    title: "Solo Set",
    for: "~500-750 sq/ft",
    quantity: 20,
    price: 85,
    dolleys: "1 Tote dolley",
  },
  {
    title: "Home Haul",
    for: "~750-1250 sq/ft",
    quantity: 40,
    price: 125,
    dolleys: "1 Tote dolley",
  },
  {
    title: "Family Pack",
    for: "~1250-2000 sq/ft",
    quantity: 60,
    price: 160,
    dolleys: "1 Tote dolley",
  },
  {
    title: "Mega Move",
    for: "~2000-3000 sq/ft",
    quantity: 80,
    price: 195,
    dolleys: "1 Tote dolley",
  },
];
export default function page() {
  return (
    <div>
      <section className="my-12 text-center">
        <h1 className="text-6xl font-bold my-2">
          Products<span className="text-accent text-6xl">.</span>
        </h1>
      </section>
      <section className="bg-zinc-200 hidden md:flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold mt-5">1. Select Totes</h1>
        <div className="flex">
          {products.map((product, index) => (
            <PricingBox key={index} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-zinc-200 flex flex-col md:hidden justify-center items-center">
        <h1 className="text-5xl font-semibold mt-5">1. Select Totes</h1>
        <Carousel
          className="flex max-w-[95vw]"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="min-w-[205px]">
                <PricingBox product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="text-center text-2xl font-semibold py-2 px-4 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold my-5">2. Add Moving Supplies</h1>

        {/* <p className="max-w-[650px]">
          Need more totes or a long term rental? We got you covered. Send us a
          message and we&apos;ll take care of you!
        </p>
        <Link href="/contact-us">
          <Button className="text-xl text-gray-950 font-semibold bg-accent my-3 mx-5 px-5 py-3 shadow-sm hover:text-gray-950 focus:text-gray-950 hover:bg-amber-400/80 rounded-full transistion">
            Contact Us!
          </Button>
        </Link> */}
      </section>
    </div>
  );
}
