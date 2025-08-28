export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services', 
    'nav.insights': 'Perspectives',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.slide1.title': 'L\'expertise de confiance, au service de votre performance',
    'hero.slide1.subtitle': 'Audit, fiscalité, stratégie, conformité, corporate finance… Nos domaines d\'expertise s\'adaptent à vos enjeux au Maroc et à l\'international.',
    'hero.slide1.button': 'Découvrir nos domaines d\'expertise',
    'hero.slide2.title': 'Une signature locale, un réseau mondial',
    'hero.slide2.subtitle': 'Nexia Fiducia Maroc, membre du réseau Nexia International, accompagne les entreprises marocaines et étrangères avec un engagement d\'excellence, d\'éthique et de proximité.',
    'hero.slide2.button': 'En savoir plus sur Nexia Fiducia Maroc',
    'hero.slide3.title': 'Une équipe dirigeante engagée à vos côtés',
    'hero.slide3.subtitle': 'Découvrez les profils et expertises des associés qui portent la vision de Nexia Fiducia Maroc et accompagnent nos clients au quotidien.',
    'hero.slide3.button': 'Rencontrer notre équipe',
    
    // About Section
    'about.title': 'À propos de nous',
    'about.description': 'Chez Nexia Fiducia Maroc, notre mission est d\'accompagner les entreprises marocaines et internationales dans toutes les étapes de leur croissance, de leur structuration et de leur mise en conformité. Grâce à notre ancrage local fort, allié à la puissance du réseau Nexia International, nous offrons des expertises pluridisciplinaires, rigoureuses et adaptées à vos enjeux réels.',
    'about.link': 'En savoir plus sur nous',
    'about.service1': 'Audit',
    'about.service2': 'Fiscalité', 
    'about.service3': 'Conseil',
    
    // Hero About Page
    'aboutHero.tagline': 'À PROPOS DE NOUS',
    'aboutHero.title': 'Expertise et proximité au service de votre réussite',
    'aboutHero.button': 'En savoir plus',
    
    // About Page Section
    'aboutPage.tagline': 'À PROPOS DE NOUS',
    'aboutPage.title': 'Nexia Fiducia Maroc, votre partenaire de confiance',
    'aboutPage.description': 'Nexia Fiducia Maroc est né de la fusion entre le cabinet Advisoris et Nexia Maroc en 2022, créant ainsi un acteur majeur de l\'audit, du commissariat aux comptes et du conseil au Maroc. Forts de notre expertise reconnue et de notre appartenance au réseau international Nexia, nous accompagnons nos clients dans leur développement avec une approche personnalisée et des solutions innovantes.',
    'aboutPage.videoTitle': 'Présentation Nexia Fiducia Maroc',
    
    // Services Page
    'servicesHero.tagline': 'Nos Domaines d\'Expertise',
    'servicesHero.title': 'Un accompagnement global, une expertise locale et internationale',
    'servicesHero.description': 'Chez Nexia Fiducia Maroc, nous offrons une palette complète de services conçus pour accompagner les entreprises à chaque étape de leur développement. Nos domaines d\'expertise couvrent l\'ensemble des enjeux stratégiques, financiers, fiscaux, réglementaires et organisationnels de nos clients.',
    
    // Services
    'services.title': 'Nos domaines d\'expertise',
    'services.subtitle': 'Découvrez l\'ensemble de nos services professionnels conçus pour accompagner votre entreprise dans sa croissance et sa réussite.',
    
    // Capabilities Section
    'capabilities.title': 'Vous avez un projet ou une problématique spécifique ?',
    'capabilities.description': 'Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.',
    'capabilities.button': 'Contactez-nous',
    
    // Insights Page
    'insightsPage.title': 'Perspectives Mondiales',
    'insightsPage.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insightsPage.search': 'Rechercher un article...',
    'insightsPage.featured': 'Article mis en avant',
    'insightsPage.featuredBadge': 'À la une',
    'insightsPage.readArticle': 'Lire l\'article',
    'insightsPage.category.all': 'Tous',
    'insightsPage.category.health': 'Santé publique',
    'insightsPage.category.international': 'Réseau international',
    'insightsPage.category.trade': 'Commerce international',
    'insightsPage.category.investment': 'Investissement international',
    'insightsPage.category.tax': 'Fiscalité internationale',
    'insightsPage.category.audit': 'Audit & conformité',
    'insightsPage.category.strategy': 'Stratégie d\'entreprise',
    'insightsPage.category.finance': 'Corporate Finance',
    'insightsPage.category.regulation': 'Réglementation',
    
    // Contact Page
    'contactHero.title': 'Contactez-nous',
    'contact.form.title': 'Contactez nos experts',
    'contact.form.description': 'Parlez-nous de votre projet. Notre équipe d\'experts vous accompagnera dans toutes vos démarches comptables et fiscales.',
    'contact.form.firstName': 'Prénom',
    'contact.form.lastName': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service souhaité',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.required': 'requis',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.successDesc': 'Nous vous répondrons dans les plus brefs délais.',
    'contact.form.errors.firstName': 'Le prénom est requis',
    'contact.form.errors.lastName': 'Le nom est requis',
    'contact.form.errors.email': 'L\'email est requis',
    'contact.form.errors.emailInvalid': 'Format email invalide',
    'contact.form.errors.phone': 'Le téléphone est requis',
    'contact.form.errors.message': 'Le message est requis',
    
    // Insights
    'insights.title': 'Perspectives Mondiales',
    'insights.subtitle': 'Découvrez nos analyses d\'experts sur les tendances mondiales qui façonnent l\'avenir des entreprises au Maroc et à l\'international',
    'insights.featured.title': 'Le coût des médicaments au Maroc : un enjeu économique et stratégique qui persiste',
    'insights.featured.description': 'Plus de deux ans après l\'annonce de mesures visant à réduire les prix des médicaments, la question reste d\'une brûlante actualité.',
    'insights.read': 'Lire l\'article',
    'insights.viewAll': 'Voir Toutes Nos Perspectives',
    
    // Why Nexia Section
    'whyNexia.title': 'Pourquoi',
    'whyNexia.subtitle': 'Nexia Fiducia Maroc',
    'whyNexia.description1': 'Fort de notre appartenance au réseau international Nexia, nous combinons l\'expertise locale approfondie du marché marocain avec les standards internationaux les plus exigeants.',
    'whyNexia.description2': 'Notre approche personnalisée et notre engagement envers l\'excellence nous permettent d\'accompagner efficacement nos clients dans leurs défis financiers et stratégiques.',
    'whyNexia.stats.experience': 'Années d\'expérience',
    'whyNexia.stats.clients': 'Clients satisfaits',
    'whyNexia.stats.offices': 'Bureaux Nexia mondial',
    'whyNexia.button': 'En savoir plus',
    
    // How Can We Help Section
    'help.title': 'Comment pouvons-nous vous aider ?',
    'help.description': 'Nos équipes sont à votre écoute pour construire avec vous des solutions sur-mesure, efficaces et conformes aux meilleures pratiques.',
    'help.button': 'Contactez-nous',
    
    // Service Cards
    'service.audit.title': 'Audit & Commissariat aux comptes',
    'service.expertise.title': 'Expertise comptable & Conseil',
    'service.fiscal.title': 'Fiscalité & Optimisation fiscale',
    'service.finance.title': 'Corporate Finance & M&A',
    'service.legal.title': 'Accompagnement juridique & social',
    'service.outsourcing.title': 'Outsourcing & Externalisation',
    'service.digitalization.title': 'Digitalisation et systèmes d\'information',
    'service.support.title': 'Support aux investisseurs étrangers',
    'service.strategy.title': 'Conseil en stratégie & développement',
    'service.talent.title': 'Talent & Mobility',
    
    // Footer
    'footer.description': 'Nexia Fiducia Maroc est membre de Nexia, un réseau mondial de premier plan de cabinets indépendants de comptabilité et de conseil.',
    'footer.disclaimer': 'Member firm disclaimer',
    'footer.privacy': 'Privacy policy', 
    'footer.cookie': 'Cookie Policy',
    'footer.email': 'Email disclaimer',
    'footer.copyright': '© 2024 Nexia Templates. All rights reserved.',
    
    // Common
    'common.readMore': 'En savoir plus',
    'common.contact': 'Nous contacter',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Maroc',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.insights': 'Insights', 
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.slide1.title': 'Trusted expertise, at the service of your performance',
    'hero.slide1.subtitle': 'Audit, taxation, strategy, compliance, corporate finance... Our areas of expertise adapt to your challenges in Morocco and internationally.',
    'hero.slide1.button': 'Discover our areas of expertise',
    'hero.slide2.title': 'A local signature, a global network',
    'hero.slide2.subtitle': 'Nexia Fiducia Morocco, member of the Nexia International network, supports Moroccan and foreign companies with a commitment to excellence, ethics and proximity.',
    'hero.slide2.button': 'Learn more about Nexia Fiducia Morocco',
    'hero.slide3.title': 'A management team committed to your side',
    'hero.slide3.subtitle': 'Discover the profiles and expertise of the partners who carry the vision of Nexia Fiducia Morocco and support our clients on a daily basis.',
    'hero.slide3.button': 'Meet our team',
    
    // About Section  
    'about.title': 'About us',
    'about.description': 'At Nexia Fiducia Morocco, our mission is to support Moroccan and international companies in all stages of their growth, structuring and compliance. Thanks to our strong local roots, combined with the power of the Nexia International network, we offer multidisciplinary, rigorous expertise adapted to your real challenges.',
    'about.link': 'Learn more about us',
    'about.service1': 'Audit',
    'about.service2': 'Taxation', 
    'about.service3': 'Advisory',
    
    // Hero About Page
    'aboutHero.tagline': 'ABOUT US',
    'aboutHero.title': 'Expertise and proximity at the service of your success',
    'aboutHero.button': 'Learn more',
    
    // About Page Section
    'aboutPage.tagline': 'ABOUT US',
    'aboutPage.title': 'Nexia Fiducia Morocco, your trusted partner',
    'aboutPage.description': 'Nexia Fiducia Morocco was born from the merger between Advisoris and Nexia Morocco in 2022, creating a major player in audit, statutory audit and advisory in Morocco. With our recognized expertise and membership in the Nexia international network, we support our clients in their development with a personalized approach and innovative solutions.',
    'aboutPage.videoTitle': 'Nexia Fiducia Morocco Presentation',
    
    // Services Page
    'servicesHero.tagline': 'Our Areas of Expertise',
    'servicesHero.title': 'Global support, local and international expertise',
    'servicesHero.description': 'At Nexia Fiducia Morocco, we offer a complete range of services designed to support companies at every stage of their development. Our areas of expertise cover all strategic, financial, tax, regulatory and organizational challenges of our clients.',
    
    // Services
    'services.title': 'Our areas of expertise',
    'services.subtitle': 'Discover our comprehensive range of professional services designed to support your business growth and success.',
    
    // Capabilities Section
    'capabilities.title': 'Do you have a specific project or issue?',
    'capabilities.description': 'Our teams are here to work with you to build tailor-made, effective solutions that comply with best practices.',
    'capabilities.button': 'Contact us',
    
    // Insights Page
    'insightsPage.title': 'Global Perspectives',
    'insightsPage.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insightsPage.search': 'Search for an article...',
    'insightsPage.featured': 'Featured article',
    'insightsPage.featuredBadge': 'Featured',
    'insightsPage.readArticle': 'Read article',
    'insightsPage.category.all': 'All',
    'insightsPage.category.health': 'Public health',
    'insightsPage.category.international': 'International network',
    'insightsPage.category.trade': 'International trade',
    'insightsPage.category.investment': 'International investment',
    'insightsPage.category.tax': 'International taxation',
    'insightsPage.category.audit': 'Audit & compliance',
    'insightsPage.category.strategy': 'Business strategy',
    'insightsPage.category.finance': 'Corporate Finance',
    'insightsPage.category.regulation': 'Regulation',
    
    // Contact Page
    'contactHero.title': 'Contact us',
    'contact.form.title': 'Contact our experts',
    'contact.form.description': 'Tell us about your project. Our team of experts will support you in all your accounting and tax procedures.',
    'contact.form.firstName': 'First name',
    'contact.form.lastName': 'Last name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.phone': 'Phone',
    'contact.form.service': 'Desired service',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.required': 'required',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.successDesc': 'We will respond to you as soon as possible.',
    'contact.form.errors.firstName': 'First name is required',
    'contact.form.errors.lastName': 'Last name is required',
    'contact.form.errors.email': 'Email is required',
    'contact.form.errors.emailInvalid': 'Invalid email format',
    'contact.form.errors.phone': 'Phone is required',
    'contact.form.errors.message': 'Message is required',
    
    // Insights
    'insights.title': 'Global Perspectives',
    'insights.subtitle': 'Discover our expert analyses on global trends shaping the future of businesses in Morocco and internationally',
    'insights.featured.title': 'The cost of medicines in Morocco: a persistent economic and strategic challenge',
    'insights.featured.description': 'More than two years after the announcement of measures aimed at reducing drug prices, the issue remains of burning relevance.',
    'insights.read': 'Read article',
    'insights.viewAll': 'View All Our Perspectives',
    
    // Why Nexia Section
    'whyNexia.title': 'Why',
    'whyNexia.subtitle': 'Nexia Fiducia Morocco',
    'whyNexia.description1': 'Through our membership in the Nexia international network, we combine deep local expertise of the Moroccan market with the most demanding international standards.',
    'whyNexia.description2': 'Our personalized approach and commitment to excellence enable us to effectively support our clients in their financial and strategic challenges.',
    'whyNexia.stats.experience': 'Years of experience',
    'whyNexia.stats.clients': 'Satisfied clients',
    'whyNexia.stats.offices': 'Nexia offices worldwide',
    'whyNexia.button': 'Learn more',
    
    // How Can We Help Section
    'help.title': 'How can we help you?',
    'help.description': 'Our teams are here to work with you to build tailor-made, effective solutions that comply with best practices.',
    'help.button': 'Contact us',
    
    // Service Cards
    'service.audit.title': 'Audit & Statutory Audit',
    'service.expertise.title': 'Accounting Expertise & Advisory',
    'service.fiscal.title': 'Taxation & Tax Optimization',
    'service.finance.title': 'Corporate Finance & M&A',
    'service.legal.title': 'Legal & Social Support',
    'service.outsourcing.title': 'Outsourcing & Externalization',
    'service.digitalization.title': 'Digitalization & Information Systems',
    'service.support.title': 'Support for Foreign Investors',
    'service.strategy.title': 'Strategy & Development Advisory',
    'service.talent.title': 'Talent & Mobility',
    
    // Footer
    'footer.description': 'Nexia Fiducia Morocco is a member of Nexia, a leading global network of independent accounting and advisory firms.',
    'footer.disclaimer': 'Member firm disclaimer',
    'footer.privacy': 'Privacy policy',
    'footer.cookie': 'Cookie Policy', 
    'footer.email': 'Email disclaimer',
    'footer.copyright': '© 2024 Nexia Templates. All rights reserved.',
    
    // Common
    'common.readMore': 'Learn more',
    'common.contact': 'Contact us',
    'common.minutes': 'min',
    'common.author': 'Nexia Fiducia Morocco',
  }
} as const;

export const translate = (language: Language, key: string): string => {
  const translation = translations[language]?.[key as keyof typeof translations['fr']];
  return translation || key;
};