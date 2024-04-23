import PricingBox from "@/components/pricing-box";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    title: "Solo Set",
    for: "~500-750 sq/ft",
    quantity: 25,
    price: 99,
    dolleys: "1 Tote dolley",
    packingPaper: "25 Sheets of packing paper",
  },
  {
    title: "Home Haul",
    for: "~750-1250 sq/ft",
    quantity: 40,
    price: 125,
    dolleys: "1 Tote dolley",
    packingPaper: "50 Sheets of packing paper",
  },
  {
    title: "Family Pack",
    for: "~1250-2000 sq/ft",
    quantity: 60,
    price: 160,
    dolleys: "2 Tote dolley",
    packingPaper: "50 Sheets of packing paper",
  },
  {
    title: "Mega Move",
    for: "~2000-3000 sq/ft",
    quantity: 80,
    price: 195,
    dolleys: "2 Tote dolley",
    packingPaper: "75 Sheets of packing paper",
  },
];
export default function page() {
  return (
    <div>
      <section className="my-12 text-center">
        <h1 className="text-6xl font-bold my-2">
          Pricing<span className="text-accent text-6xl">.</span>
        </h1>
        <h3 className="text-xl">See how we save you time and money</h3>
      </section>
      <section className="bg-zinc-200 hidden md:flex items-center justify-center">
        {products.map((product, index) => (
          <PricingBox key={index} product={product} />
        ))}
      </section>
      <section className="bg-zinc-200 flex md:hidden justify-center">
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
    </div>
  );
}
