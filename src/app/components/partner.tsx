import React from "react";
import { Image } from "@nextui-org/react";

export default function Partner() {
  return (
    <div className="container mt-10 mb-10 grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Our Partners
      </h2>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <Image
          className="max-w-full h-auto"
          src="./partner1.jpg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner2.jpg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner3.jpg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner4.jpeg"
          width={250}
          height={150}
        />
         <Image
          className="max-w-full h-auto"
          src="./partner5.jpeg"
          width={250}
          height={150}
        />
         <Image
          className="max-w-full h-auto"
          src="./partner6.jpeg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner7.jpeg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner8.jpeg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner9.jpeg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner10.jpeg"
          width={250}
          height={150}
        />
        <Image
          className="max-w-full h-auto"
          src="./partner11.jpeg"
          width={250}
          height={150}
        />
         <Image
          className="max-w-full h-auto"
          src="./partner12.jpeg"
          width={250}
          height={150}
        />
      </div>
    </div>
  );
}
