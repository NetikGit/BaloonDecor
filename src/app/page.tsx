import Header from "../app/components/Header";
import Hero from "../app/components/Hero";
import ServicesGrid from "../app/components/ServicesGrid";
import Gallery from "../app/components/Galary";
import Footer from "../app/components/Footer";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";





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

