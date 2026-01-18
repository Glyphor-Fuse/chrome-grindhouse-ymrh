import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/11097899/pexels-photo-11097899.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Rally Destruction" 
          className="w-full h-full object-cover opacity-60 grayscale contrast-125 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent" />
      </div>

      {/* Typography Layer */}
      <div className="relative z-10 w-full px-4 text-center mix-blend-overlay">
        <motion.h1 
          style={{ y: y1 }}
          className="font-display font-extrabold text-[12vw] leading-[0.8] tracking-tighter text-concrete uppercase"
        >
          Total
        </motion.h1>
        <motion.h1 
          style={{ y: y2 }}
          className="font-display font-extrabold text-[12vw] leading-[0.8] tracking-tighter text-transparent text-outline uppercase"
        >
          Carnage
        </motion.h1>
      </div>

      {/* Floating Elements */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <button className="w-24 h-24 rounded-full border border-acid flex items-center justify-center hover:scale-110 hover:bg-acid hover:text-asphalt transition-all duration-300 group backdrop-blur-sm">
          <Play className="w-8 h-8 fill-current ml-1" />
        </button>
      </motion.div>
      
      <div className="absolute bottom-32 w-full text-center z-10">
        <p className="font-body text-acid tracking-[0.5em] text-sm uppercase">Physics Left the Chat</p>
      </div>
    </section>
  );
};