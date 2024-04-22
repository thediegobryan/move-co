import Image from "next/image";
import triangleMap from "../../public/triangleMap.png";
import { BoxModelIcon } from "@radix-ui/react-icons";
const locations = [
  "Raleigh",
  "Durham",
  "Chapel Hill",
  "Cary",
  "Morrisville",
  "Apex",
  "Holly Springs",
  "Fuquay-Varina",
  "Garner",
  "Wake Forest",
  "Knightdale",
  "Rolesville",
  "Clayton",
];

export default function Locations() {
  return (
    <section className="mx-2 my-2 py-4 bg-accent rounded-xl flex flex-col items-center">
      <h2 className="text-5xl font-bold">Proudly Serving the Triangle</h2>
      <Image
        src={triangleMap}
        alt="Map of the triangle, NC"
        width={800}
        height={900}
        className="my-5 mx-4 scale-[.95] md:scale-100 shadow-md rounded-xl bg-white"
      />
      <ul className="flex flex-col text-center md:flex-row flex-wrap max-w-[500px] gap-2">
        {locations.map((location) => (
          <li key={location} className="text-2xl font-bold flex relative">
            <BoxModelIcon className="aboslute mt-[10px] mx-2" />
            {location}
          </li>
        ))}
      </ul>
    </section>
  );
}
