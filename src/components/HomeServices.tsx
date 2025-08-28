import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, TrendingUp, Users, Shield } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting & Audit",
    description: "Comprehensive accounting and auditing services to ensure financial accuracy and compliance.",
  },
  {
    icon: TrendingUp,
    title: "Tax Advisory",
    description: "Strategic tax planning and advisory services to optimize your financial position.",
  },
  {
    icon: Users,
    title: "Talent & Mobility Solutions",
    description: "Recrutement – Accompagnement RH – Installation au Maroc. 10+ ans d'expérience, 100+ talents placés avec succès.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and management solutions for your business.",
  },
];

export default function HomeServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-nexia-primary mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-nexia-primary/80 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive professional services to help businesses thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center group hover-scale cursor-pointer"
            >
              <div className="bg-nexia-secondary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-nexia-secondary group-hover:text-white transition-all duration-300">
                <service.icon className="h-10 w-10 text-nexia-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-nexia-primary mb-4">
                {service.title}
              </h3>
              <p className="text-nexia-primary/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="professional" size="lg">
            <Link to="/about">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}