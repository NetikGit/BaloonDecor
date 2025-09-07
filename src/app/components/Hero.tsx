"use client";
import { useState, useEffect } from "react";
import { waLink } from "@/lib/utils";
import BalloonsBackground from "./BaloonsBackground";

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
          className={`w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-pink-900/40" /> {/* Optional overlay */}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative py-40 text-center flex flex-col items-center justify-between min-h-[400px] px-4 overflow-hidden">
       <BackgroundSlider /> 
      <h1 className="pt-4 text-4xl md:text-6xl  max-w-4xl font-bold text-pink-600 outlined-text">
        Transform Your Events with BalloonDecor
      </h1>
      <p className="mt-8 text-xl text-mono font-semibold max-w-4xl text-neutral-200">
        Make every celebration unforgettable with our beautifully crafted balloon decorations. From birthdays to weddings and corporate events, we bring creativity, elegance, and joy to your special moments!
      </p>
      <a
        href={waLink(process.env.NEXT_PUBLIC_PHONE || "919999999999")}
        target="_blank"
        className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-700"
      >
        Book Now on WhatsApp
      </a>
    </section>
  );
}