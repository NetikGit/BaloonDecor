"use client";
import Image from "next/image";

interface AboutProps {
  showFull?: boolean; // if true → full "About Us" section, else → short version
}

export default function About({ showFull = true }: AboutProps) {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-700 mb-10">
        About Us
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h3 className="text-2xl text-pink-400 font-semibold mb-4">
            Making Your Celebrations Unforgettable 🎉
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">Balloon Decorwala</span>, we
            believe every occasion deserves a touch of magic. With years of
            experience in balloon decoration, we transform venues into
            unforgettable memories.
          </p>
          {showFull ? (
            <>
              <p className="text-gray-700 leading-relaxed mb-4">
                From birthdays and weddings to anniversaries and corporate
                events, our team ensures each setup reflects your style while
                adding joy to the celebration.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether it’s a simple balloon bouquet or a grand backdrop, we
                bring elegance, creativity, and professionalism to every event.
              </p>
            </>
          ) : (
            <p className="text-gray-700 leading-relaxed">
              We specialize in balloon decorations for birthdays, weddings, and
              all special occasions.
            </p>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/party5.webp"
            alt="About Balloon Decorwala"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg w-full md:w-4/5"
          />
        </div>
      </div>

    </section>
  );
}
