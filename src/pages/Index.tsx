import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { InteractiveSection } from '../components/InteractiveSection';
import { Footer } from '../components/Footer';

const Index = () => {
  
  useEffect(() => {
    // Smooth scroll logic could go here if using Lenis
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-asphalt min-h-screen">
      <Navbar />
      <Hero />
      <InteractiveSection />
      
      {/* Manifesto Section */}
      <section className="py-32 px-4 bg-acid text-asphalt">
         <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
                <p className="font-display text-5xl md:text-7xl font-bold leading-tight uppercase -indent-12 md:-indent-24 ml-12 md:ml-24">
                    "Where horsepower reigns supreme and safety protocols are merely suggestions."
                </p>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;