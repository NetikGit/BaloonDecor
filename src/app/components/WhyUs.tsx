

export default function WhyUs() {
  return (
<div className="py-20">
        <h2 className="text-4xl text-pink-400 font-semibold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-100 p-8 rounded-2xl shadow hover:shadow-lg transition">
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
  );
}