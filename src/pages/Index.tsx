
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PricePrediction } from "@/components/PricePrediction";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { Team } from "@/components/Team";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PropertyShowcase />
      <Services />
      <PricePrediction />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
