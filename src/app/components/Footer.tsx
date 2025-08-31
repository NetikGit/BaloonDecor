import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
return (
<footer className="bg-pink-100 py-16 mt-12">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4 text-gray-700">
<div> 
<h1 className="text-5xl text-pink-700 font-bold">Baloon Decor</h1>
<h3 className="font-semibold mb-2">Follow Us</h3>
<div className="flex space-x-4">
  <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
 <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
</div>
</div>
<div>
<h3 className="font-semibold mb-2">Quick Links</h3>
<ul className="space-y-1">
<li><Link href="/">Home</Link></li>
<li><Link href="/services">Services</Link></li>
<li><Link href="/contact">Contact</Link></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-2">Contact</h3>
<p>📍 Jaipur, Rajasthan</p>
<p>📞 <a href="tel:+919999999999">+91 99999 99999</a></p>
<p>✉️ <a href="mailto:info@balloondecor.com">info@balloondecor.com</a></p>
</div>
<div>
</div>
</div>
<div className="text-center text-sm mt-4 text-gray-500">© 2025 BalloonDecor. All rights reserved.</div>
</footer>
);
}