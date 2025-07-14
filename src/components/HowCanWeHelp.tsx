import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import helpImage from "@/assets/help-section.jpg";

export default function HowCanWeHelp() {
  return (
    <section className="w-full bg-nexia-secondary h-[700px]">
      <div className="h-full flex flex-col lg:flex-row gap-0">
        {/* Image Column */}
        <div className="flex-1 h-full">
          <img
            src="/lovable-uploads/d94f1f3b-e519-4e70-ac5b-aa9ce953e580.png"
            alt="How we can help you"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="flex-1 flex items-center justify-center px-8 lg:px-12 py-16">
          <div className="space-y-6 pr-0 lg:pr-[20%] pl-0 lg:pl-12">
            <p className="bolder text-nexia-primary font-poppins text-lg">
              Comment pouvons-nous vous aider ?
            </p>
            <p className="text-nexia-primary font-poppins text-[28px] leading-relaxed">
              Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.
            </p>
            <Button asChild className="nexia-button-primary font-poppins font-medium px-10">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}