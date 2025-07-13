import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhyNexia() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Title */}
          <div>
            <h3 className="text-3xl font-bold text-nexia-primary">
              Why Nexia
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-nexia-primary text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-nexia-primary text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/about">Discover more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}