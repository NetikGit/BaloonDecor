"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";

import SpecificGrid from "@/app/components/SpecificGrid";

// Simple image slider component
const images = [
  "/backgroundimg.webp",
  "/backgroungimg2.webp",
  "/party3.webp",
];

function BackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {images.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`w-full h-120 object-cover transition-opacity duration-1000 absolute inset-0 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

const page = () => {
  return (
    <div>
    <Header />
    <BackgroundSlider />
    <section className=" max-w-3xl mx-auto py-24 px-4">
    <h2 className="text-6xl font-bold text-center text-pink-700 outlined-text mb-10">Anniverary Decoration Services</h2>
    </section>
    <SpecificGrid />
    </div>
  )
}

export default page
