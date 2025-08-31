"use client";
import Image from "next/image";
import { waLink } from "@/lib/utils";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Fix: load react-slick only on client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const gallery = [
  "/party1.webp",
  "/party2.webp",
  "/party3.webp",
  "/party4.webp",
  "/party5.webp",
  "/party6.webp",
  "/party7.webp",
  "/party8.webp",
];

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-pink-50">
    <section className="max-w-6xl mx-auto py-8 px-4">
      <h2 className="py-8 text-5xl font-bold text-center text-pink-700 mb-10">
        Gallery
      </h2>

      <Slider {...settings}>
        {gallery.map((img, i) => (
          <div key={i} className="px-2">
            <Image
              src={img}
              alt={`Decoration ${i + 1}`}
              width={400}
              height={300}
              className="rounded-xl mx-auto"
            />
          </div>
        ))}
      </Slider>


      <div className="text-center mt-20">
        <a
          href={waLink(
            process.env.NEXT_PUBLIC_PHONE || "919999999999",
            "Hi, I want to book a decoration from the gallery"
          )}
          target="_blank"
          className=" bg-pink-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-pink-700"
        >
          Book Now on WhatsApp
        </a>
      </div>
    </section>
    </div>
  );
}
