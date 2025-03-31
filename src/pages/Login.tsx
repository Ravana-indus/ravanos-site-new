import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      
      // Check credentials
      // This is a simple check - valid credentials are admin@ravanos.com/password123
      if (email === 'admin@ravanos.com' && password === 'password123') {
        // Success - navigate to home
        navigate('/');
      } else {
        // Invalid credentials
        setError('Invalid email or password. Please try again.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">Welcome Back</h1>
              <p className="text-white/60">Sign in to access your RavanOS account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80 block">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com" 
                  required
                  className="w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-medium text-white/80">Password</label>
                  <Link to="#" className="text-xs text-ravan-accent hover:text-ravan-accent-light">
                    Forgot password?
                  </Link>
                </div>
                <input 
                  id="password"
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  required
                  className="w-full px-4 py-3 bg-white/5 text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full button-primary flex items-center justify-center gap-2 text-lg py-3 disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login; 