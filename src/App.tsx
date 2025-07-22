import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Teams from './components/Teams';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminAccess from './components/AdminAccess';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check for admin access in URL
    const checkAdminAccess = () => {
      const hash = window.location.hash;
      if (hash === '#admin' || hash === '#management' || hash === '#bookings') {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }
    };

    // Check on load
    checkAdminAccess();

    // Listen for hash changes
    window.addEventListener('hashchange', checkAdminAccess);
    
    // Update page title
    document.title = 'BgSpin & STK Spark - Table Tennis Excellence in Belgrade';
    
    // Add smooth scrolling to HTML element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading optimization
    const handleLoad = () => {
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
      return () => {
        window.removeEventListener('load', handleLoad);
        window.removeEventListener('hashchange', checkAdminAccess);
      };
    }
  }, []);

  // Show admin panel if accessed via special URL
  if (showAdmin) {
    return <AdminAccess />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Locations />
        <Services />
        <BookingForm />
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