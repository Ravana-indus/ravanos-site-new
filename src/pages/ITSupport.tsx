import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Shield, Users, FileText, CalendarCheck, Check } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ITSupport = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white overflow-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -left-20 w-80 h-80 bg-ravan-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
                <span className="text-sm font-medium text-white">Complete Technology Support</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight mb-6">
                OUTSOURCE YOUR <span className="text-gradient">IT</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Beyond Software: Your Entire IT Department on Demand, Powered by RavanOS
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Beyond Software: Your Entire IT Department on Demand</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    With RavanOS powering your business operations, why stop at software? Eliminate the complexity of managing your technology infrastructure by outsourcing your entire IT operation to the team that knows your systems best.
                  </p>
                  <div className="mt-8">
                    <a href="#plans" className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-ravan-purple to-ravan-accent group w-full sm:w-auto">
                      <span>View Subscription Plans</span>
                      <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Comprehensive Support That Goes Beyond Our Platform</h3>
                  <p className="text-white/70 mb-6">
                    Your dedicated support team handles everything from strategic technology planning to fixing paper jams:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="h-5 w-5 text-ravan-purple" />, text: "RavanOS Optimization" },
                      { icon: <Users className="h-5 w-5 text-ravan-blue" />, text: "Hardware Troubleshooting" },
                      { icon: <FileText className="h-5 w-5 text-ravan-green" />, text: "Network Management" },
                      { icon: <Shield className="h-5 w-5 text-ravan-accent" />, text: "Security Monitoring" },
                      { icon: <Users className="h-5 w-5 text-ravan-purple" />, text: "User Support" },
                      { icon: <CalendarCheck className="h-5 w-5 text-ravan-blue" />, text: "Technology Planning" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 glass-card rounded-lg">
                        <div className="p-2 rounded-full bg-white/10">{item.icon}</div>
                        <span className="text-white">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="section-padding bg-ravan-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">How It <span className="text-gradient">Works</span></h2>
              <p className="section-subtitle mx-auto">
                A seamless process designed to provide your business with exceptional IT support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Dedicated Team Assignment", description: "A specialized support team gets to know your business" },
                { title: "Multiple Support Channels", description: "Get help via call, chat, or remote access" },
                { title: "On-Site Visits When Needed", description: "For issues that require physical presence" },
                { title: "Proactive Monitoring", description: "We identify and resolve issues before they impact your business" },
                { title: "Regular Reviews", description: "Ensure your technology continues to serve your business goals" }
              ].map((step, index) => (
                <Card key={index} className="bg-ravan-gray/30 border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-ravan-accent text-white flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Subscription Plans */}
        <section id="plans" className="section-padding bg-ravan-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">Subscription <span className="text-gradient">Plans</span></h2>
              <p className="section-subtitle mx-auto">
                Whether you're a growing startup or an established enterprise, we offer flexible support options
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute inset-0 bg-ravan-black/50 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-white/70">Our subscription plans are being finalized. Stay tuned!</p>
                </div>
              </div>
              {[
                {
                  name: "Essential",
                  description: "Small businesses with basic IT needs",
                  features: [
                    "Mon-Fri support",
                    "Remote assistance",
                    "Monthly check-ins",
                    "Email & chat support",
                    "RavanOS updates"
                  ]
                },
                {
                  name: "Professional",
                  description: "Medium businesses with diverse IT requirements",
                  features: [
                    "24/5 support",
                    "Remote & on-site assistance",
                    "Weekly check-ins",
                    "Priority email & chat",
                    "Phone support",
                    "Network monitoring",
                    "Security assessments"
                  ],
                  highlight: true
                },
                {
                  name: "Enterprise",
                  description: "Organizations where technology is mission-critical",
                  features: [
                    "24/7 support",
                    "Priority response",
                    "Dedicated team",
                    "Strategic planning",
                    "Unlimited on-site visits",
                    "Hardware procurement",
                    "Executive reporting",
                    "Disaster recovery planning"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`relative rounded-3xl overflow-hidden group transition-all duration-300 ${plan.highlight ? 'transform hover:-translate-y-2' : 'hover:-translate-y-1'}`}>
                  {plan.highlight && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-ravan-purple to-ravan-accent rounded-3xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  )}
                  <div className={`h-full glass-card p-8 rounded-3xl relative z-10 flex flex-col ${plan.highlight ? 'bg-gradient-to-b from-ravan-gray/40 to-ravan-gray/20 border-white/20' : ''}`}>
                    {plan.highlight && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-ravan-purple to-ravan-accent px-4 py-1 rounded-full text-white text-sm font-medium">
                        Popular Choice
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    
                    <div className="flex-grow space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-green-500/20 flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-green-400" />
                          </div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href="#" 
                        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-medium transition-all ${
                          plan.highlight 
                            ? 'bg-gradient-to-r from-ravan-purple to-ravan-accent text-white hover:shadow-lg hover:shadow-ravan-accent/20' 
                            : 'bg-ravan-gray text-white hover:bg-ravan-lightgray border border-white/10 hover:border-white/20'
                        }`}
                      >
                        <span>Get Started</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="section-padding bg-ravan-black relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              <h2 className="section-title mb-6">Ready to <span className="text-gradient">Simplify Your IT?</span></h2>
              <p className="section-subtitle mx-auto mb-10">
                Schedule a consultation to learn how our support subscription can free your team to focus on what matters most—growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/early-adopters" className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-ravan-purple to-ravan-accent group">
                  <span>Get Started</span>
                  <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITSupport; 