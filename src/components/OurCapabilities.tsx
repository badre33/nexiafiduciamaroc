import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function OurCapabilities() {
  return (
    <section className="nexia-section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-nexia-primary mb-6 font-poppins">
          Vous avez un projet ou une problématique spécifique ?
        </h2>
        <p className="text-lg text-nexia-primary mb-8 leading-relaxed font-poppins">
          Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.
        </p>
        <Button asChild className="nexia-button font-poppins font-medium px-10 text-lg">
          <Link to="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </section>
  );
}