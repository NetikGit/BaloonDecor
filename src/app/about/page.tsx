import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <>
    <Header />
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        About Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-2xl text-pink-400 font-semibold mb-4">
            Making Your Celebrations Unforgettable 🎉
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">Balloon Decorwala</span>, we
            believe every occasion deserves a touch of magic. With years of
            experience in creating unique balloon decorations, we transform
            ordinary venues into extraordinary memories.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether it’s a birthday, wedding, anniversary, or corporate event,
            our creative team ensures each setup reflects your style and adds
            joy to the celebration.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From simple balloon bouquets to grand stage backdrops, we bring
            elegance, creativity, and professionalism to every project.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/party5.webp"
            alt="About Balloon Decorwala"
            className="rounded-2xl shadow-lg w-full md:w-4/5"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-2xl text-pink-400 font-semibold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold  text-pink-400 text-lg mb-2">✨ Creative Designs</h3>
            <p className="text-gray-600">
              Unique and customized balloon arrangements to match your event’s
              theme.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold  text-pink-400 text-lg mb-2">⏰ On-Time Delivery</h3>
            <p className="text-gray-600">
              We ensure timely setup so your celebration starts without delay.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold  text-pink-400 text-lg mb-2">💖 Customer Happiness</h3>
            <p className="text-gray-600">
              Our priority is to create lasting memories with 100% client
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
