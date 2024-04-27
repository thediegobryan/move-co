import React from "react";
import BtnRentNow from "./btn-rent-now";

export default function HowItWorks() {
  return (
    <section className="my-9">
      <h2 className="text-5xl font-bold mb-5">How it works</h2>
      <div className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4 mx-4">
        <div className="row-start-1 col-start-1 col-span-1 px-2 md:my-3 border rounded-xl py-2">
          <p className="text-6xl">🚛🏚</p>
          <h3 className="text-2xl font-extrabold">We drop-off</h3>
          <p>
            We deliver our reusable plastic totes right to your garage or
            doorstep. No more dumpster diving for dirty used boxes!
          </p>
        </div>
        <div className="row-start-2 md:row-start-1 md:col-start-2 col-span-1 px-2 md:my-3 border rounded-xl py-2">
          <p className="text-6xl">📥💪🏽</p>
          <h3 className="text-2xl font-extrabold">You Pack and Move</h3>
          <p>
            Pack your things confidently in strong plastic totes. They easily
            stack to transport to your new place.
          </p>
        </div>
        <div className="row-start-3 md:row-start-1 md:col-start-3 col-span-1 px-2 md:my-3 border rounded-xl py-2">
          <p className="text-6xl">🏡🚛 </p>
          <h3 className="text-2xl font-extrabold">We pick-up</h3>
          <p>
            Get your things unpacked, and we’ll come and pick-up the totes. No
            more breaking down boxes or piles of cardboard.
          </p>
        </div>
      </div>
      <h3 className="text-3xl font-bold my-4 mb-6">
        Each rental includes{" "}
        <span className="text-accent bg-zinc-200/10 px-2 font-extrabold shadow-md">
          FREE
        </span>{" "}
        drop-off and pick-up!
      </h3>
      <BtnRentNow>View Products</BtnRentNow>
    </section>
  );
}
