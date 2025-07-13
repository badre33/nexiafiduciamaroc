import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export default function RealHomeHero() {
  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Nexia professional background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-professional">
          <h1 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          
          <Button asChild variant="professional" size="lg" className="mb-8">
            <Link to="/about">Discover more</Link>
          </Button>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <span className="text-nexia-primary font-medium">2/3</span>
            <div className="w-32 h-1 bg-nexia-primary/20 rounded-full">
              <div className="w-2/3 h-full bg-nexia-primary rounded-full"></div>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-nexia-primary hover:text-nexia-secondary">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}