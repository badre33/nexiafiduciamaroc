import { ExternalLink } from "lucide-react";
import auditService from "@/assets/audit-service.jpg";
import taxService from "@/assets/tax-service.jpg";
import advisoryService from "@/assets/advisory-service.jpg";

const services = [
  {
    title: "Audit",
    image: auditService,
    href: "/services#audit"
  },
  {
    title: "Tax",
    image: taxService,
    href: "/services#tax"
  },
  {
    title: "Advisory",
    image: advisoryService,
    href: "/services#advisory"
  }
];

export default function ServiceTabs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-professional hover:shadow-hover transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <h4 className="text-white text-xl font-bold">
                  {service.title}
                </h4>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-nexia-secondary transition-colors duration-300">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}