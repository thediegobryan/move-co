import Locations from "@/components/locations";
import React from "react";

export default function Page() {
  return (
    <div className="text-center">
      <section className="my-12">
        <h1 className="text-6xl font-bold my-2">
          Locations<span className="text-accent text-6xl">.</span>
        </h1>
        <h3 className="text-xl"></h3>
      </section>
      <Locations />
    </div>
  );
}
