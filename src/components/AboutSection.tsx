import aboutVideoThumbnail from "@/assets/about-video-thumbnail.jpg";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function AboutSection() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Us Text */}
        <div className="text-center mb-16">
          <p className="text-nexia-primary font-semibold text-sm uppercase tracking-wide mb-4">
            {t('aboutVideo.tagline')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-nexia-primary mb-6">
            {t('aboutVideo.title')}
          </h2>
          <p className="text-nexia-primary text-lg max-w-4xl mx-auto leading-relaxed">
            {t('aboutVideo.description')}
          </p>
        </div>

        {/* YouTube Video */}
        <div className="relative rounded-lg overflow-hidden shadow-professional hover:shadow-hover transition-shadow duration-300">
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/eMQr3TObNcU"
              title={t('aboutVideo.videoTitle')}
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