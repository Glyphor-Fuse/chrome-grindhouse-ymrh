import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-asphalt text-concrete pt-32 pb-12 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
             <h4 className="font-body text-danger tracking-widest text-sm mb-4">LIVE FEED PENDING</h4>
             <div className="w-full h-64 bg-black border border-white/20 relative overflow-hidden group">
                <img 
                    src="https://images.pexels.com/photos/15573679/pexels-photo-15573679.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
                    className="w-full h-full object-cover opacity-50 mix-blend-overlay" 
                    alt="Static"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-4xl text-white/20 group-hover:text-acid/80 transition-colors">OFFLINE</span>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col justify-between">
            <p className="font-display text-4xl md:text-5xl leading-tight uppercase">
              We orchestrate the <span className="text-outline-acid">demolition</span> of the ground beneath your feet.
            </p>
            
            <div className="mt-12 grid grid-cols-2 gap-4 font-body text-sm text-gray-500">
                <a href="#" className="hover:text-acid transition-colors">Instagram -&gt;</a>
                <a href="#" className="hover:text-acid transition-colors">TikTok -&gt;</a>
                <a href="#" className="hover:text-acid transition-colors">Discord -&gt;</a>
                <a href="#" className="hover:text-acid transition-colors">Legal (LOL) -&gt;</a>
            </div>
          </div>
        </div>

        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end"
        >
            <h1 className="font-display text-[15vw] leading-[0.7] text-white/10 select-none pointer-events-none">
                TERRA
            </h1>
            <p className="font-body text-xs text-gray-600 mb-4 md:mb-8 text-right">
                © 2024 TERRA FRACTURE EVENTS LLC. <br/>
                ENTER AT YOUR OWN RISK. NO REFUNDS FOR INJURY OR DEATH.
            </p>
        </motion.div>
      </div>
    </footer>
  );
};