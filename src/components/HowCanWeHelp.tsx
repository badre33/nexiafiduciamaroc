import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import helpImage from "@/assets/help-section.jpg";

export default function HowCanWeHelp() {
  return (
    <section className="py-0">
      <div className="bg-nexia-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-[500px] lg:h-[600px]">
              <img
                src={helpImage}
                alt="How we can help you"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-16 flex items-center">
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-nexia-primary">
                  How Can We Help You
                </h3>
                <p className="text-nexia-primary text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button asChild variant="professional" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}