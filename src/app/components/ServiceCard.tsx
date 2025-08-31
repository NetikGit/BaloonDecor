import Image from "next/image";
import { waLink } from "@/lib/utils";


interface Props {
title: string;
img: string;
}


export default function ServiceCard({ title, img }: Props) {
return (
<div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
<Image src={img} alt={title} width={400} height={300} className="rounded-xl" />
<h3 className="mt-4 text-lg text-neutral-900 font-semibold">{title}</h3>
<a
href={waLink(process.env.NEXT_PUBLIC_PHONE || "919999999999", `Hi, I want to book ${title}`)}
target="_blank"
className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700"
>
Book Now
</a>
</div>
);
}