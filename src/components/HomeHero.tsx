import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import homeHero from "@/assets/home-hero.jpg";

export default function HomeHero() {
  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={homeHero}
          alt="Nexia corporate headquarters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Professional <span className="text-nexia-secondary">Accounting</span> & Consulting
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Leading global network of independent accounting and consulting firms providing exceptional service to businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild variant="nexia" size="lg" className="text-lg px-8 py-4">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 text-white border-white hover:bg-white hover:text-nexia-primary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}