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
    <section className="nexia-section-padding bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="nexia-card-rounded w-full h-[550px] object-cover"
              />
              
              {/* Content Overlay */}
              <div className="absolute bottom-[5%] left-[5%] right-[5%] flex items-center justify-between">
                <div className="text-white">
                  <p className="text-[35px] font-bold font-poppins mb-0">
                    {service.title}
                  </p>
                </div>
                <div className="w-11 h-11 flex items-center justify-center">
                  <ExternalLink className="h-11 w-11 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}