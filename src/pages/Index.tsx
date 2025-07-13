import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeHero />
        <HomeServices />
        <HomeAbout />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
