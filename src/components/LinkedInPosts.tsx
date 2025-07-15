export default function LinkedInPosts() {
  const posts = [
    {
      id: "7339350208171962369",
      type: "ugcPost",
      height: 896,
    },
    {
      id: "7319334843929022464", 
      type: "ugcPost",
      height: 568,
    },
    {
      id: "7290746116101328896",
      type: "share", 
      height: 532,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-6">
            Nos Actualités
          </h2>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            Suivez nos dernières actualités et insights sur LinkedIn. Restez informé de nos analyses du marché, 
            de nos événements et de notre expertise sectorielle.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/urn:li:${post.type}:${post.id}?collapsed=1`}
                  height={Math.min(post.height, 600)} // Limite la hauteur pour uniformiser
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title={`Publication LinkedIn ${index + 1}`}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir plus */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/company/nexia-fiducia-maroc/posts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200"
          >
            Voir toutes nos publications
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