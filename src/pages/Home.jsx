import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
