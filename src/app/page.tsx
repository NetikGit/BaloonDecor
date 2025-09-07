import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import ServicesGrid from "../app/components/ServicesGrid";
import Gallery from "../app/components/Galary";
import Footer from "../app/components/Footer";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import Script from "next/script";




export default function HomePage() {
     const testimonials = [
    {
      quote: "This service is amazing!",
      name: "John Doe",
      title: "CEO, Example Inc."
    },
    {
      quote: "Best experience ever.",
      name: "Jane Smith",
      title: "CTO, Startup"
    },
    {
      quote: "Highly recommend to everyone.",
      name: "David Lee",
      title: "Founder, TechCorp"
    },
  ];

return (
<>

<Header />
<Hero />
   <Script
        src='https://www.noupe.com/embed/01990ac361597a51bf762a0e1818a8913824.js'
        strategy="afterInteractive"
      />

      {/* Initialize AFTER the script loads */}
      <Script id="botpress-init" strategy="afterInteractive">
        {`
          window.addEventListener("load", function () {
            if (window.botpressWebChat) {
              window.botpressWebChat.init({
                host: "https://cdn.botpress.cloud/webchat/v1",
                botId: "your-bot-id",
                // any other options...
              });
            } else {
              console.error("Botpress WebChat script not loaded");
            }
          });
        `}
      </Script>
<ServicesGrid />
<About />
<Gallery />
<WhyUs />
<InfiniteMovingCards 
 items={testimonials}
        direction="left"
        speed="normal"
/>
<Footer />
</>
);
}
//'https://www.noupe.com/embed/01990ac361597a51bf762a0e1818a8913824.js'
