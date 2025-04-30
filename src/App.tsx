import { ParallaxProvider } from 'react-scroll-parallax';
import { FeaturesSection } from './components/FeaturesSection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </ParallaxProvider>
  );
}

export default App;
