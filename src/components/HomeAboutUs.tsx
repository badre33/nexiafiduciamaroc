import { Link } from "react-router-dom";
import { Calculator, Receipt, Users } from "lucide-react";

export default function HomeAboutUs() {
  return (
    <section className="nexia-section-padding bg-white max-w-[1050px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* About Us Text - Left Column */}
        <div className="flex flex-col justify-center pr-0 lg:pr-[15%] pt-10 pb-10">
          <p className="bolder text-nexia-primary font-poppins text-lg mb-6">
            À propos de nous
          </p>
          <p className="text-nexia-primary font-poppins text-[28px] leading-relaxed mb-6">
            Chez Nexia Fiducia Maroc, notre mission est d'accompagner les entreprises marocaines et internationales dans toutes les étapes de leur croissance, de leur structuration et de leur mise en conformité. Grâce à notre ancrage local fort, allié à la puissance du réseau Nexia International, nous offrons des expertises pluridisciplinaires, rigoureuses et adaptées à vos enjeux réels.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-nexia-secondary font-poppins">15+</div>
              <div className="text-sm text-nexia-primary font-poppins">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-nexia-secondary font-poppins">200+</div>
              <div className="text-sm text-nexia-primary font-poppins">Clients accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-nexia-secondary font-poppins">25+</div>
              <div className="text-sm text-nexia-primary font-poppins">Pays couverts</div>
            </div>
          </div>
          <Link
            to="/a-propos"
            className="inline-flex items-center text-nexia-primary font-poppins font-medium text-lg hover:text-nexia-secondary transition-colors duration-300 group"
          >
            En savoir plus sur nous
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Services List with Background Image - Right Column */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/c6eaa709-a9e2-42bc-8d20-36f8616c4e6e.png" 
              alt="Chefchaouen, Morocco" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Services with Icons - Interactive */}
          <div className="relative z-10 space-y-4 p-8">
            <Link 
              to="/domaines-expertise#audit" 
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-nexia-secondary/10 p-3 rounded-lg group-hover:bg-nexia-secondary/20 transition-colors">
                <Calculator className="w-8 h-8 text-nexia-secondary" />
              </div>
              <h2 className="text-[60px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight group-hover:text-nexia-secondary transition-colors">
                Audit.
              </h2>
            </Link>
            
            <Link 
              to="/domaines-expertise#fiscalite" 
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-nexia-secondary/10 p-3 rounded-lg group-hover:bg-nexia-secondary/20 transition-colors">
                <Receipt className="w-8 h-8 text-nexia-secondary" />
              </div>
              <h2 className="text-[60px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight group-hover:text-nexia-secondary transition-colors">
                Fiscalité.
              </h2>
            </Link>
            
            <Link 
              to="/domaines-expertise#conseil" 
              className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-nexia-secondary/10 p-3 rounded-lg group-hover:bg-nexia-secondary/20 transition-colors">
                <Users className="w-8 h-8 text-nexia-secondary" />
              </div>
              <h2 className="text-[60px] lg:text-[70px] font-bold text-nexia-primary font-poppins leading-tight group-hover:text-nexia-secondary transition-colors">
                Conseil.
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}