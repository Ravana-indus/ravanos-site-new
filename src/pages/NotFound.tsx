
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ravan-black text-white">
      <Navbar />
      <div className="min-h-[80vh] flex items-center justify-center section-padding relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-ravan-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-80 h-80 bg-ravan-blue/10 rounded-full blur-3xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="glass-card p-10 rounded-3xl border border-white/10 relative z-10 text-center max-w-lg mx-auto animate-fade-in-up">
          <h1 className="text-8xl font-display font-bold mb-4 text-gradient">404</h1>
          <h2 className="text-2xl text-white mb-6">Page Not Found</h2>
          <p className="text-white/70 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <a href="/" className="button-primary inline-flex items-center justify-center gap-2">
            <Home size={18} />
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
