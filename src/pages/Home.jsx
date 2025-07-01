import Hero from "../components/homeComponents/Hero";
import About from "../components/homeComponents/About";
import Categories from "../components/homeComponents/categories";
import History from "../components/homeComponents/history";
import Latest from "../components/homeComponents/latest";
import LookoutSection from "../components/homeComponents/lookOut";
import Subscribe from "../components/homeComponents/subscribe";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Latest />
      <Categories />
      <History />
      <LookoutSection />
      <Subscribe />
    </>
  );
};

export default Home;
