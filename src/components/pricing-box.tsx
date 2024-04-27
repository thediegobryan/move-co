import Image from "next/image";
import React from "react";
import toteStack from "../../public/totesStack.png";
import BtnRentNow from "./btn-rent-now";

type ProductProps = {
  product: {
    title: string;
    for: string;
    quantity: number;
    price: number;
    dolleys: string;
  };
};

export default function PricingBox({ product }: ProductProps) {
  return (
    <form className="grid grid-rows-auto grid-cols-1 border border-zinc-300 min-w-[210px] text-center rounded-xl py-4 px-5 my-5 mx-1 bg-zinc-50/90 shadow-xl md:hover:scale-105 md:hover:bg-zinc-50 transition">
      <div className="row-start-1 mb-0">
        <h3 className="text-3xl font-bold">{product.title}</h3>
        <p className="text-zinc-500 text-sm">{product.for}</p>
        <p className="text-5xl text-accent shadow-md py-3 px-2 mt-1 font-extrabold rounded-xl border border-zinc-300/50">
          {product.quantity} Totes
        </p>
      </div>
      <div className="row-start-2 flex justify-center items-center">
        <Image
          src={toteStack}
          alt="Totes stacked on top of each other."
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
          className="bg-white rounded-xl shadow-sm my-3"
        />
      </div>
      <div className="mb-2">
        <ul className="">
          <li className="text-3xl font-extrabold">${product.price}</li>
          <li className="font-extrabold">3 week rental</li>
          <hr />
          <li className="">{product.quantity} Label cards</li>
          <hr />
          <li className="">{product.dolleys}</li>
          <hr />
          <li className="">Drop-off & Pick-up</li>
        </ul>
      </div>
      <BtnRentNow />
    </form>
  );
}
