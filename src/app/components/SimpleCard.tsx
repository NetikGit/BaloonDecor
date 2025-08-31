import Image from "next/image";
import Link from "next/link";



interface Props {
title: string;
img: string;
}


export default function ServiceCard({ title="", img }: Props) {
return (
<Link href={`/services/${title.toLowerCase().replace(/\s+/g, "-")}`}>
<div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
<Image src={img} alt={title} width={400} height={300} className="rounded-xl" />
<h3 className="mt-4 text-lg text-neutral-900 font-semibold">{title}</h3>
</div>
</Link>
);
}