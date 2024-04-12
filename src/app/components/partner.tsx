import React from "react";
import { Image } from "@nextui-org/react";

export default function Partner() {
  return (
    <div className="container mt-10 mb-10 grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Our School Partners
      </h2>
      <div className="flex gap-10">
        <Image
          className="max-w-full h-auto"
          src="./partner1.jpg"
          width={400}
          height={300}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner2.jpg"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
