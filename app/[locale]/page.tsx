import Hero from "./_components/Hero";
import Reservation from "./_components/Reservation";
import ContactForm from "./_components/ContactForm";
import Features from "./_components/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="my-30"></div>
      <Reservation />
      <div className="my-30"></div>
      <ContactForm />
      <div className="my-30"></div>
      <Features />
    </div>
  );
}
