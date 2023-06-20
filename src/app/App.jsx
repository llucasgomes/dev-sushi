import { About } from "../shared/components/About";
import { Foods } from "../shared/components/Foods";
import { Hero } from "../shared/components/Hero";
import { NavBar } from "../shared/components/Navbar";
import { Trending } from "../shared/components/Trending";

function App() {
  return (
    <>
       <NavBar />
      <Hero />
      <About />
      <Foods />
      <Trending />
    </>
  );
}

export default App;
