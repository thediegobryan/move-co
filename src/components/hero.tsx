"use client";

import React from "react";
import BtnRentNow from "./btn-rent-now";
import Image from "next/image";
import toteStack from "../../public/totesStack.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-zinc-100">
      <div className="min-h-[88vh] max-w-[1200px] mx-auto grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 justify-center items-center">
        <motion.div
          className="row-start-1 col-start-1 col-span-1 px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-7xl font-semibold my-4">
            Moving just got{" "}
            <span className="text-accent font-bold shadow-xl bg-transparent px-2 py-1 rounded-md">
              easier.
            </span>
          </h1>
          <p className="py-4 px-4 text-l">
            Delivered right to your door, our reusable moving totes save you
            time and money.
          </p>
          <BtnRentNow>View Products</BtnRentNow>
        </motion.div>
        <motion.div
          className="md:col-start-2 col-span-1 row-start-2 md:row-start-1 flex flex-col justify-center items-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={toteStack}
            alt="Totes stacked on top of each other."
            width={600}
            height={800}
            className="mx-10 shadow-md rounded-xl bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
