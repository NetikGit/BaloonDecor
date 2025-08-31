import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";


export default function ContactPage() {
return (
<>
<Header />
<section className="max-w-4xl mx-auto py-16 px-4 text-center text-gray-700">
<h1 className="text-4xl font-bold text-pink-700 mb-6">Contact Us</h1>
<p className="text-lg text-gray-600 mb-8">We’d love to hear from you! Reach out by phone, email, or send us a message below.</p>
<ContactForm />
<div className="mt-12 space-y-2">
<p>📍 Jaipur, Rajasthan</p>
<p>📞 <a href="tel:+919999999999" className="text-pink-600">+91 99999 99999</a></p>
<p>✉️ <a href="mailto:info@balloondecor.com" className="text-pink-600">info@balloondecor.com</a></p>
<p><a href="https://maps.google.com" target="_blank" className="text-pink-600 underline">View on Google Maps</a></p>
</div>
</section>
<Footer />
</>
);
}