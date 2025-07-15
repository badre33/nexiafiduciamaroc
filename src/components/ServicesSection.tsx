const publications = [
  {
    id: 1,
    title: "Nexia welcomes a new member firm in Uzbekistan",
    description: "Nexia International continue son expansion avec l'arrivée d'un nouveau membre en Ouzbékistan, renforçant notre présence en Asie centrale.",
    category: "Réseau international",
    author: "Nexia International",
    date: "Juillet 2025",
    readTime: "5 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/07/shutterstock_2341786405.jpg",
    excerpt: "Nexia International est ravi d'annoncer l'adhésion de notre nouveau cabinet membre en Ouzbékistan..."
  },
  {
    id: 2,
    title: "Nexia welcomes a new member firm in Mexico",
    description: "Le réseau Nexia accueille un nouveau cabinet membre au Mexique, élargissant notre couverture en Amérique latine pour mieux servir nos clients internationaux.",
    category: "Réseau international",
    author: "Nexia International",
    date: "Juillet 2025",
    readTime: "5 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/07/shutterstock_188040947.jpg",
    excerpt: "Nous sommes heureux d'accueillir notre nouveau cabinet partenaire au Mexique..."
  },
  {
    id: 3,
    title: "International Business Report 2024",
    description: "Rapport complet sur les tendances du business international et les opportunités d'investissement pour 2024.",
    category: "Business international",
    author: "Nexia International",
    date: "Juin 2025",
    readTime: "8 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/06/business-report-2024.jpg",
    excerpt: "Notre rapport annuel présente les principales tendances économiques mondiales..."
  },
  {
    id: 4,
    title: "Tax Updates Q2 2025",
    description: "Mise à jour des réglementations fiscales internationales pour le deuxième trimestre 2025.",
    category: "Fiscalité internationale",
    author: "Nexia Tax Team",
    date: "Juin 2025",
    readTime: "6 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/06/tax-updates-q2.jpg",
    excerpt: "Découvrez les dernières modifications réglementaires qui impactent vos activités..."
  },
  {
    id: 5,
    title: "Digital Transformation in SMEs",
    description: "Guide pratique pour la transformation digitale des PME dans un contexte international.",
    category: "Transformation digitale",
    author: "Nexia Digital Team",
    date: "Mai 2025",
    readTime: "7 min",
    image: "https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2025/05/digital-transformation.jpg",
    excerpt: "Les clés pour réussir votre transformation digitale et rester compétitif..."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-nexia-primary mb-6">
            Publications Nexia International
          </h3>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez nos dernières publications et analyses du réseau international Nexia. 
            Restez informé des tendances du marché, des évolutions réglementaires et de nos insights sectoriels.
          </p>
        </div>

        {/* Publications avec scroll horizontal */}
        <div className="relative">
          <style dangerouslySetInnerHTML={{
            __html: `
              .scroll-container::-webkit-scrollbar {
                display: none;
              }
              .scroll-container {
                scrollbar-width: none;
                -ms-overflow-style: none;
              }
            `
          }} />
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-container">
            {publications.map((publication, index) => (
              <div
                key={publication.id}
                className="flex-none w-80 bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-nexia-accent bg-nexia-accent/10 px-2 py-1 rounded">
                      {publication.category}
                    </span>
                    <span className="text-xs text-nexia-primary/60">
                      {publication.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-nexia-primary mb-3 line-clamp-2">
                    {publication.title}
                  </h4>
                  <p className="text-nexia-primary/80 text-sm mb-4 line-clamp-3">
                    {publication.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-nexia-primary/60">
                    <span>{publication.author}</span>
                    <span>{publication.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA pour voir toutes les publications */}
        <div className="text-center mt-12">
          <a
            href="/publications-nexia-international"
            className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200"
          >
            Voir toutes les publications Nexia International
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
    </section>
  );
}