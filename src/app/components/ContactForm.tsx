"use client";
import { useState } from "react";


export default function ContactForm() {
const [status, setStatus] = useState("");


const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setStatus("Sending...");
setTimeout(() => setStatus("Message sent!"), 1500); // Mock submit
};


return (
<form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-gray-700">
<input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded bg-pink-100 text-gray-700" required />
<input type="email" name="email" placeholder="Your Email" className="w-full border p-3  rounded bg-pink-100" required />
<textarea name="message" placeholder="Your Message" className="w-full border p-3 rounded bg-pink-100" rows={4} required />
<button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700">
Send Message
</button>
{status && <p className="text-sm text-gray-600">{status}</p>}
</form>
);
}