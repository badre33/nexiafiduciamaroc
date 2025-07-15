export default function GovernanceSection() {
  return (
    <section className="relative py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/031a3c04-ca5d-4ca8-b276-f114c99bd54f.png"
          alt="Vue aérienne de la médina marocaine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Héritage Marocain
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ancrés dans la richesse culturelle du Maroc, nous combinons tradition et modernité 
            pour offrir des services d'expertise comptable et de conseil de classe mondiale.
          </p>
        </div>
      </div>
    </section>
  );
}