import "./App.css";
import Button from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import landingPageData from "./constant/webData";

function App() {
  const { header, hero, features, testimonials } = landingPageData;
  const user = {
    isLogin: false,
  };
  return (
    <div>
      <Header header={header} user={user} />
      <Hero hero={hero} />
      <Features features={features} />
      <Testimonials testimonials={testimonials} />
      <Footer header={header} />
    </div>
  );
}

export default App;
