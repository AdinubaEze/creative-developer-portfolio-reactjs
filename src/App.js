import Navbar from './components/Navbar';
import Header from "./components/Header";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Services from './components/Services';


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
