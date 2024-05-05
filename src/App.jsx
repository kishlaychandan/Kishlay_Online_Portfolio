import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Work from "./components/Work";
import Graphics from "./components/Graphics";
import Skills from "./components/skills";
function App() {
  return (
    <div>
      <Home />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Graphics />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
