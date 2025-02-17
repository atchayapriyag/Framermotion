import Navbar from "./NavbarComponent/Navbar";
import Hero from "./Herocomponent/Hero";
import Howit from "./Howithelpscomponent/Howit";
import Uses from "./Usescomponent/Uses";
import Trust from "./Trustcomponent/Trust";
import Footer from "./Footercomponent/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Howit />
      <Uses />
      <Trust />
      <Footer />
    </main>
  );
};

export default App;
