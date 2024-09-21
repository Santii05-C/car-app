import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import MostSearchdCar from "./components/MostSearchdCar";

function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <Hero />
      {/* CATEGORY */}
      <Category />
      {/* MOST SEARCHED CAR */}
      <MostSearchdCar />
      {/* INFOSECTION */}
      <InfoSection />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
