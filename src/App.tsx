import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
