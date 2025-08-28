import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSimpleLanguage } from "@/hooks/useSimpleLanguage";

export default function OurCapabilities() {
  const { t } = useSimpleLanguage();
  
  return (
    <section className="nexia-section-padding bg-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-nexia-primary mb-6 font-poppins">
          {t('capabilities.title')}
        </h2>
        <p className="text-lg text-nexia-primary mb-8 leading-relaxed font-poppins">
          {t('capabilities.description')}
        </p>
        <Button asChild className="nexia-button font-poppins font-medium px-10 text-lg">
          <Link to="/contact">{t('capabilities.button')}</Link>
        </Button>
      </div>
    </section>
  );
}