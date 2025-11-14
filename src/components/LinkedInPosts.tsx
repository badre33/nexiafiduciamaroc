import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function LinkedInPosts() {
  const { t } = useSimpleLanguage();
  
  const posts = [
    {
      id: "pme-article",
      type: "custom",
      height: 600,
      title: "Les petites et moyennes entreprises au Maroc : un potentiel important limité par des obstacles structurels",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQHIpX8I5WvWMA/article-cover_image-shrink_720_1280/B4EZqDJK.NIwAI-/0/1763136814513?e=2147483647&v=beta&t=3hLRNecmitrG_jloFriZJ1diUiqLZUNNJOMnetayWao",
      link: "https://www.linkedin.com/pulse/les-petites-et-moyennes-entreprises-au-maroc-un-potentiel-h0bfe",
      date: "14 Nov 2025"
    },
    {
      id: "7394411157484097537",
      type: "activity",
      height: 600,
    },
    {
      id: "7395133774478409730",
      type: "activity",
      height: 600,
    },
    {
      id: "7392603637279055872",
      type: "activity",
      height: 600,
    },
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
    {
      id: "7308097941490024450",
      type: "activity",
      height: 600,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-6">
            {t('linkedinPosts.title')}
          </h2>
          <p className="text-nexia-primary text-lg max-w-3xl mx-auto leading-relaxed">
            {t('linkedinPosts.subtitle')}
          </p>
        </div>

        {/* Posts Grid avec scroll horizontal */}
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
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="flex-none w-80 bg-white rounded-lg shadow-professional hover:shadow-hover transition-all duration-300 overflow-hidden"
              >
                {post.type === 'custom' ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-[500px] flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <img 
                          src="/lovable-uploads/nexia-member-firm-logo.png" 
                          alt="Nexia Morocco"
                          className="w-8 h-8 rounded"
                        />
                        <div className="text-sm">
                          <p className="font-semibold text-nexia-primary">Nexia Morocco</p>
                          <p className="text-gray-500 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-nexia-primary line-clamp-3 mb-3">
                        {post.title}
                      </h3>
                      <div className="mt-auto">
                        <span className="text-xs text-nexia-secondary hover:underline">
                          Lire l'article →
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative">
                    <iframe
                      src={`https://www.linkedin.com/embed/feed/update/urn:li:${post.type}:${post.id}?collapsed=1`}
                      height={Math.min(post.height, 500)}
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={`Publication LinkedIn ${index + 1}`}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA pour voir plus */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/company/nexia-morocco/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nexia-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-nexia-primary transition-colors duration-200"
          >
            {t('linkedinPosts.viewProfile')}
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