"use client";

import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="text-center">
      {/* <section className="my-12">
        <h1 className="text-6xl font-bold my-2">
          K<span className="text-accent text-6xl">.</span>I
          <span className="text-accent text-6xl">.</span>S
          <span className="text-accent text-6xl">.</span>S
          <span className="text-accent text-6xl">.</span>
        </h1>
        <motion.h3
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Keep It Simple (Sally)
        </motion.h3>
      </section> */}
      <section className="my-12 text-center">
        <h1 className="text-6xl font-bold my-2">
          Why Rent<span className="text-accent text-6xl">.</span>
        </h1>
        <h3 className="text-xl">Your move has never been so easy</h3>
      </section>
    </div>
  );
}
