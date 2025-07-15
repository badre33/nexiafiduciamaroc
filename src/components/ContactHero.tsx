// import heroBackground from "@/assets/hero-background.jpg";

export default function ContactHero() {
  return (
    <section className="relative min-h-[600px] py-12 md:py-16 lg:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/cd1d5d63-1fdb-4d40-9016-a19aaeb69709.png"
          alt="Contact us hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nexia-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg shadow-professional">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-nexia-primary mb-6 md:mb-8 text-center">
            Contactez-nous
          </h1>
          
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-nexia-primary mb-4 md:mb-6 text-center">Nos Bureaux</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Bureau 1 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nexia-primary mb-3 sm:mb-4">Bureau 1</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary text-sm sm:text-base">3, Rue Bab El Mansour</p>
                <p className="text-nexia-primary text-sm sm:text-base">Résidence Imrane - RDC Bureau n°15</p>
                <p className="text-nexia-primary text-sm sm:text-base">Espace Porte d'Anfa</p>
                <p className="text-nexia-primary text-sm sm:text-base">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3 text-sm sm:text-base">
                  Tél: <a href="tel:+212522364588" className="text-nexia-secondary hover:underline break-all">+(212) 05 22 36 45 88/89</a>
                </p>
              </div>
            </div>

            {/* Bureau 2 */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-nexia-primary mb-3 sm:mb-4">Bureau 2</h3>
              <div className="space-y-2">
                <p className="text-nexia-primary text-sm sm:text-base">Rue des Pléaides</p>
                <p className="text-nexia-primary text-sm sm:text-base">Quartier des Hôpitaux</p>
                <p className="text-nexia-primary text-sm sm:text-base">Casablanca - Maroc</p>
                <p className="text-nexia-primary font-medium mt-3 text-sm sm:text-base">
                  Tél: <a href="tel:+212522863715" className="text-nexia-secondary hover:underline break-all">+(212) 522 863 715</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}