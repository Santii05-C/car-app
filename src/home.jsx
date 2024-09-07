// import { SignInButton } from "@clerk/clerk-react";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import MostSearchdCar from "./components/MostSearchdCar";

function Home() {
  return (
    <div>
      {/* <div>
        <SignInButton>
          <button>Sign</button>
        </SignInButton>
      </div> */}
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
