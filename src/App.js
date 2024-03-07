import Nav from "./components/Nav";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
function App() {
  return (
    <div className="App ">
      <Nav />
      <Home />
      <About/>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
