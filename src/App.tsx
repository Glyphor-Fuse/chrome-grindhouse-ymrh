import Index from './pages/Index';
import { GlyphorBadge } from './utils/GlyphorBadge';

const App = () => {
  return (
    <main className="relative w-full min-h-screen bg-asphalt cursor-crosshair">
      <Index />
      <GlyphorBadge />
    </main>
  );
};

export default App;