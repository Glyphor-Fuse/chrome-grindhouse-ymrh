import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const drivers = [
  { name: "Viper Rex", vehicle: "The Mangler V8", kills: 142, status: "UNSTABLE" },
  { name: "Dust Devil", vehicle: "Sandstorm 4x4", kills: 89, status: "READY" },
  { name: "Iron Maiden", vehicle: "Ferrous Oxide", kills: 210, status: "CRITICAL" },
];

export const InteractiveSection = () => {
  return (
    <section className="relative py-32 bg-asphalt overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-steel opacity-10 -skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <motion.h2 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="font-display text-8xl md:text-9xl text-concrete uppercase leading-none"
          >
            The <span className="text-acid italic">Kill</span> <br />
            Sheet
          </motion.h2>
          <div className="h-1 w-full bg-concrete mt-8 clip-shard" />
        </div>

        {/* Broken Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-8">
          
          {/* Column 1: Driver List */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-8 pt-12">
            {drivers.map((driver, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/20 pb-4 hover:border-acid transition-colors cursor-none"
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-3xl uppercase text-concrete group-hover:text-acid transition-colors">{driver.name}</h3>
                  <span className="font-body text-xs text-danger tracking-widest">{driver.status}</span>
                </div>
                <div className="flex justify-between font-body text-sm text-gray-400">
                  <span>RIDE: {driver.vehicle}</span>
                  <span>CONFIRMED KILLS: {driver.kills}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Visual Overload (Offset) */}
          <div className="col-span-1 md:col-span-6 md:col-start-7 relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] md:translate-y-[-100px]"
            >
              <img 
                src="https://images.pexels.com/photos/33861182/pexels-photo-33861182.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
                alt="Driver Profile"
                className="w-full h-full object-cover grayscale contrast-125 border-2 border-transparent hover:border-acid transition-all duration-500"
              />
              <div className="absolute -bottom-10 -left-10 bg-acid p-6 w-48 shadow-2xl rotate-3">
                <p className="font-display text-asphalt font-black text-2xl leading-none">NO MERCY<br/>GUARANTEED</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Merch Banner */}
        <div className="mt-40 relative">
            <div className="absolute -top-12 left-0 text-[10rem] md:text-[15rem] font-display font-black text-white/5 whitespace-nowrap overflow-hidden select-none">
                WRECKAGE SHOP WRECKAGE SHOP
            </div>
            <div className="flex flex-col md:flex-row items-end justify-between border-t border-acid pt-8">
                <h3 className="font-display text-6xl text-white">GEAR UP <br/> OR GET OUT.</h3>
                <button className="flex items-center gap-2 text-acid font-body tracking-widest uppercase hover:text-white transition-colors mt-8 md:mt-0">
                    Enter the Shop <ArrowRight />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};