import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="text-blue-600 hover:text-blue-800 text-3xl"
      >
        <FaFacebook />
      </a>

      <a
        href="https://instagram.com/yourpage"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="text-pink-600 hover:text-pink-800 text-3xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
