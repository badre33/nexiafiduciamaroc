import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import heroBackground from "@/assets/hero-background.jpg";

export default function RealHomeHero() {
  return (
    <section className="nexia-hero relative w-full flex">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/622c05eb-5be8-4d65-8337-8b1100601dbb.png"
          alt="Nexia professional background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1350px] mx-auto flex items-end lg:ml-auto lg:mr-0 lg:pl-0">
        <div className="nexia-hero-content">
          <p className="bolder text-nexia-primary mb-4 font-poppins">Home</p>
          
          <h1 className="nexia-hero-title font-poppins font-bold leading-tight mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          
          <Button 
            asChild 
            className="nexia-button-secondary font-poppins font-medium px-10 py-3 mb-12"
          >
            <Link to="/about">Discover more</Link>
          </Button>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <span className="text-nexia-primary font-poppins font-medium">2/3</span>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent"
              >
                <ChevronLeft className="h-11 w-11" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-nexia-primary hover:text-nexia-secondary p-0 h-auto w-auto hover:bg-transparent"
              >
                <ChevronRight className="h-11 w-11" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}