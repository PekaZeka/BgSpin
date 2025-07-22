import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Services from './components/Services';
import Teams from './components/Teams';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'BgSpin & STK Spark - Table Tennis Excellence in Belgrade';
    
    // Add smooth scrolling to HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading optimization
    const handleLoad = () => {
      // Preload critical images
      const criticalImages = [
        'https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/8007513/pexels-photo-8007513.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Locations />
        <Services />
        <Teams />
        <Pricing />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;