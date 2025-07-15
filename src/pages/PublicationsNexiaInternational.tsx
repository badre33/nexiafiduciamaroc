import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PublicationsNexiaInternational() {
  const publications = [
    {
      id: "7339350208171962369",
      type: "ugcPost",
      title: "Actualité Nexia International - Innovation",
      description: "Découvrez les dernières innovations du réseau Nexia International",
    },
    {
      id: "7319334843929022464", 
      type: "ugcPost",
      title: "Insights Sectoriels - Analyses de marché",
      description: "Analyses approfondies des tendances sectorielles par nos experts",
    },
    {
      id: "7290746116101328896",
      type: "share", 
      title: "Perspectives Mondiales - Économie",
      description: "Vision globale des enjeux économiques internationaux",
    },
    {
      id: "7308097941490024450",
      type: "activity",
      title: "Best Practices - Gouvernance",
      description: "Meilleures pratiques en matière de gouvernance d'entreprise",
    },
    {
      id: "7293563000186155009",
      type: "activity", 
      title: "Transformation Digitale - Finance",
      description: "L'impact du digital sur les services financiers",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-nexia-primary via-nexia-primary/90 to-nexia-secondary py-20 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Publications Nexia International
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Découvrez les dernières analyses, insights et perspectives du réseau mondial Nexia.
                Restez informé des tendances et innovations qui façonnent l'avenir des entreprises.
              </p>
            </div>
          </div>
        </section>

        {/* Publications Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((publication, index) => (
                <div
                  key={publication.id}
                  className="bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-nexia-primary mb-3 group-hover:text-nexia-secondary transition-colors">
                      {publication.title}
                    </h3>
                    <p className="text-nexia-primary/70 leading-relaxed">
                      {publication.description}
                    </p>
                  </div>
                  <div className="relative">
                    <iframe
                      src={`https://www.linkedin.com/embed/feed/update/urn:li:${publication.type}:${publication.id}?collapsed=1`}
                      height="500"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={publication.title}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-nexia-primary/5 to-nexia-secondary/5 rounded-2xl">
              <h3 className="text-2xl font-bold text-nexia-primary mb-4">
                Restez connecté avec Nexia International
              </h3>
              <p className="text-nexia-primary/80 mb-6 max-w-2xl mx-auto">
                Suivez-nous sur LinkedIn pour ne manquer aucune de nos publications et analyses sectorielles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/company/nexia-fiducia-maroc/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200"
                >
                  Suivre Nexia Fiducia Maroc
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/nexia-international/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-nexia-secondary text-nexia-secondary px-8 py-3 rounded-lg font-medium hover:bg-nexia-secondary hover:text-white transition-all duration-200"
                >
                  Nexia International
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}