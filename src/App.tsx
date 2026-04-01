import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import TheSigns from './sections/TheSigns';
import TheMessage from './sections/TheMessage';
import TheMessengers from './sections/TheMessengers';
import YouWereMade from './sections/YouWereMade';
import FlawlessDesign from './sections/FlawlessDesign';
import TheInvitation from './sections/TheInvitation';
import Connect from './sections/Connect';
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
        <TheSigns />
        <TheMessage />
        <TheMessengers />
        <YouWereMade />
        <FlawlessDesign />
        <TheInvitation />
        <Connect />
      </main>
      <Footer />
    </>
  );
}

export default App;
