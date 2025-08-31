import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";


const services = [
{ title: "Birthday Decoration", img: "/party1.webp" },
{ title: "Anniversary Setup", img: "/party2.webp" },
{ title: "Wedding Decor", img: "/party3.webp" },
{ title: "Baby Shower", img: "/party4.webp" },
{ title: "Car Boot Surprise", img: "/party5.webp" },
{ title: "Corporate Event", img: "/party6.webp" },
];
export default function ServicesPage() {
return (
<>
<Header />
<section className="max-w-6xl mx-auto py-16 px-4">
<h1 className="text-4xl font-bold text-center text-pink-700 mb-12">Our Services</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
{services.map((s) => (
<ServiceCard key={s.title} title={s.title} img={s.img} />
))}
</div>
</section>
<Footer />
</>
);
}

