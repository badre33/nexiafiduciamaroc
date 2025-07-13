import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactMap from "@/components/ContactMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;