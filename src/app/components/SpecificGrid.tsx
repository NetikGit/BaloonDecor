import ServiceCard from "./ServiceCard";
import SimpleCard from "./SimpleCard";

const services = [
{ title: "Birthday Decoration", img: "/party1.webp" },
{ title: "Anniversary Setup", img: "/party2.webp" },
{ title: "Wedding Decor", img: "/party3.webp" },
{ title: "Corporate Event", img: "/party4.webp" },
{ title: "Baby Shower", img: "/party5.webp" },
{ title: "First-Night Decor", img: "/party6.webp" },
{ title: "welcome Baby Decor", img: "/party7.webp" },
{ title: "Bride to Bride Decor", img: "/party8.webp" },    
];


export default function ServicesGrid() {
return (
<div className="bg-pink-50">
<section className=" max-w-6xl mx-auto py-16 px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
{services.map((s) => (
<ServiceCard key={s.title} title="" img={s.img} />
))}
</div>
</section>
</div>
);
}