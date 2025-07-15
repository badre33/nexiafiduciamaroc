import aboutVideoThumbnail from "@/assets/about-video-thumbnail.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Us Text */}
        <div className="text-center mb-16">
          <p className="text-nexia-primary font-semibold text-sm uppercase tracking-wide mb-4">
            À PROPOS DE NOUS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-6">
            Nexia Fiducia Maroc, votre partenaire de confiance
          </h2>
          <p className="text-nexia-primary text-lg max-w-4xl mx-auto leading-relaxed">
            Nexia Fiducia Maroc est né de la fusion entre le cabinet Advisoris et Nexia Maroc en 2022, 
            créant ainsi un acteur majeur de l'audit, du commissariat aux comptes et du conseil au Maroc. 
            Forts de notre expertise reconnue et de notre appartenance au réseau international Nexia, 
            nous accompagnons nos clients dans leur développement avec une approche personnalisée et des solutions innovantes.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="relative rounded-lg overflow-hidden shadow-professional hover:shadow-hover transition-shadow duration-300">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/eMQr3TObNcU"
              title="Présentation Nexia Fiducia Maroc"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}