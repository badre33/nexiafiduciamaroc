import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Globe, Users } from "lucide-react";

const stats = [
  { icon: Globe, number: "120+", label: "Countries Served" },
  { icon: Users, number: "30,000+", label: "Professionals" },
  { icon: Award, number: "50+", label: "Years Experience" },
];

export default function HomeAbout() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6">
              Global Network, Local Expertise
            </h2>
            <p className="text-lg text-nexia-primary/80 mb-8 leading-relaxed">
              As a member of Nexia International, we combine global reach with local knowledge to deliver exceptional professional services. Our commitment to excellence and client success drives everything we do.
            </p>
            <p className="text-lg text-nexia-primary/80 mb-8 leading-relaxed">
              We understand that every business is unique, which is why we tailor our approach to meet your specific needs and objectives.
            </p>
            <Button asChild variant="professional" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-professional text-center hover:shadow-hover transition-shadow duration-300"
              >
                <div className="bg-nexia-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-nexia-secondary" />
                </div>
                <div className="text-3xl font-bold text-nexia-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-nexia-primary/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}