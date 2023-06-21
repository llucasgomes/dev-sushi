import { About } from "../shared/components/About";
import { Foods } from "../shared/components/Foods";
import { Footer } from "../shared/components/Footer";
import { Hero } from "../shared/components/Hero";
import { NavBar } from "../shared/components/Navbar";
import { NewLetter } from "../shared/components/NewLetter";
import { Trending } from "../shared/components/Trending";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Foods />
      <Trending />
      <NewLetter />
      <Footer />
    </>
  );
}

export default App;
