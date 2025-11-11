import AboutCouple from './components/AboutCouple';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import LandingSection from './components/LandingSection';
import LocationSection from './components/LocationSection';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <LandingSection />
      <AboutCouple />
      <EventDetails />
      <LocationSection />
      <Gallery />
      {/* <RSVPForm /> */}
      <Footer />
    </div>
  );
}

export default App;
