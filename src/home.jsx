import Category from "./components/Category";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
    </div>
  );
}

export default Home;
