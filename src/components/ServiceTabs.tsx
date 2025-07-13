import { ExternalLink } from "lucide-react";
// import auditService from "@/assets/audit-service.jpg";
// import taxService from "@/assets/tax-service.jpg";
// import advisoryService from "@/assets/advisory-service.jpg";

const expertiseDomains = [
  {
    title: "Audit et Commissariat aux Comptes",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#audit"
  },
  {
    title: "Conseil financier & optimisation",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#conseil-financier"
  },
  {
    title: "Inspection, Investigation & Fraude",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#investigation"
  },
  {
    title: "Fiscalité & Tax Management",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#fiscalite"
  },
  {
    title: "Analyses financières et évaluation d'entreprises",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#analyses-financieres"
  },
  {
    title: "Consolidation selon les normes Marocaines & IFRS",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#consolidation"
  },
  {
    title: "Conseils et accompagnement stratégique",
    image: "/lovable-uploads/ae4b3ada-ab5f-4b1c-ab7f-32b8bf6df87c.png",
    href: "/services#conseil-strategique"
  }
];

export default function ServiceTabs() {
  return (
    <section className="nexia-section-padding bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {expertiseDomains.map((domain, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
          >
            <div className="relative">
              <img
                src={domain.image}
                alt={domain.title}
                className="nexia-card-rounded w-full h-[400px] object-cover"
              />
              
              {/* Content Overlay */}
              <div className="absolute bottom-[5%] left-[5%] right-[5%] flex items-center justify-between">
                <div className="text-white">
                  <p className="text-[24px] font-bold font-poppins mb-0 leading-tight">
                    {domain.title}
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