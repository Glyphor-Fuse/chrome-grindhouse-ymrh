import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 p-6 mix-blend-difference text-concrete">
      {/* Top Left: Brand */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 left-6 pointer-events-auto"
      >
        <h1 className="font-display font-bold text-2xl tracking-tighter leading-none">
          TERRA<br/><span className="text-acid">FRACTURE</span>
        </h1>
      </motion.div>

      {/* Top Right: Dates */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 right-6 text-right font-body uppercase tracking-widest text-sm"
      >
        <div>Sector 7 // Nevada Dust Bowl</div>
        <div>OCT 14 — 17</div>
      </motion.div>

      {/* Bottom Left: Status */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-6 left-6 flex items-center gap-2 font-body text-xs"
      >
        <span className="w-2 h-2 bg-danger animate-pulse block rounded-full"></span>
        LIVE TELEMETRY: ACTIVE
      </motion.div>

      {/* Bottom Right: CTA */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-6 right-6 pointer-events-auto"
      >
        <button className="group flex items-center gap-4 bg-acid text-asphalt px-8 py-4 font-display font-bold text-xl uppercase tracking-tighter hover:bg-white transition-colors duration-300">
          Secure Access
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </nav>
  );
};