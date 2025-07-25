import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Shield,
  Users,
  FileText,
  CalendarCheck,
  Check,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ManagedITPricing from "@/components/pricing/ManagedITPricing";

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
                <span className="text-sm font-medium text-white">
                  Complete Technology Support
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight mb-6">
                OUTSOURCE YOUR <span className="text-gradient">IT</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
                Beyond Software: Your Entire IT Department on Demand, Powered by
                RavanOS
              </p>
            </div>

            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Beyond Software: Your Entire IT Department on Demand
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    With RavanOS powering your business operations, why stop at
                    software? Eliminate the complexity of managing your
                    technology infrastructure by outsourcing your entire IT
                    operation to the team that knows your systems best.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#plans"
                      className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-ravan-purple to-ravan-accent group w-full sm:w-auto"
                    >
                      <span>View Subscription Plans</span>
                      <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Comprehensive Support That Goes Beyond Our Platform
                  </h3>
                  <p className="text-white/70 mb-6">
                    Your dedicated support team handles everything from
                    strategic technology planning to fixing paper jams:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Shield className="h-5 w-5 text-ravan-purple" />,
                        text: "RavanOS Optimization",
                      },
                      {
                        icon: <Users className="h-5 w-5 text-ravan-blue" />,
                        text: "Hardware Troubleshooting",
                      },
                      {
                        icon: <FileText className="h-5 w-5 text-ravan-green" />,
                        text: "Network Management",
                      },
                      {
                        icon: <Shield className="h-5 w-5 text-ravan-accent" />,
                        text: "Security Monitoring",
                      },
                      {
                        icon: <Users className="h-5 w-5 text-ravan-purple" />,
                        text: "User Support",
                      },
                      {
                        icon: (
                          <CalendarCheck className="h-5 w-5 text-ravan-blue" />
                        ),
                        text: "Technology Planning",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 glass-card rounded-lg"
                      >
                        <div className="p-2 rounded-full bg-white/10">
                          {item.icon}
                        </div>
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
              <h2 className="section-title mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
              <p className="section-subtitle mx-auto">
                A seamless process designed to provide your business with
                exceptional IT support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  title: "Dedicated Team Assignment",
                  description:
                    "A specialized support team gets to know your business",
                },
                {
                  title: "Multiple Support Channels",
                  description: "Get help via call, chat, or remote access",
                },
                {
                  title: "On-Site Visits When Needed",
                  description: "For issues that require physical presence",
                },
                {
                  title: "Proactive Monitoring",
                  description:
                    "We identify and resolve issues before they impact your business",
                },
                {
                  title: "Regular Reviews",
                  description:
                    "Ensure your technology continues to serve your business goals",
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="bg-ravan-gray/30 border-white/10 backdrop-blur-md hover:border-white/20 transition-all"
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-full bg-ravan-accent text-white flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-white text-lg">
                      {step.title}
                    </CardTitle>
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
        <section
          id="plans"
          className="section-padding bg-[#0B0C1B] relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6">
                Subscription <span className="text-gradient">Plans</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Whether you're a growing startup or an established enterprise,
                we offer flexible support options
              </p>
            </div>
            <ManagedITPricing
              title=""
              description=""
              tiers={[
                {
                  title: "IT Essential",
                  subtitle: "Reliable daily support",
                  price: "LKR 20k – 45k",
                  features: [
                    "Business Hours Remote Helpdesk",
                    "Managed Antivirus & Workstation Backup",
                  ],
                },
                {
                  title: "IT Business",
                  subtitle: "Proactive IT management",
                  price: "LKR 75k – 150k",
                  features: [
                    "Extended Hours Helpdesk + 2 On-site Visits",
                    "Advanced Endpoint Security",
                  ],
                  isPopular: true,
                },
                {
                  title: "IT Enterprise",
                  subtitle: "Strategic, 24/7 IT oversight",
                  price: "LKR 200,000+",
                  features: [
                    "24/7/365 Helpdesk + 4+ On-site Visits",
                    "vCIO Strategic Guidance",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Call To Action */}
        <section className="section-padding bg-[#0B0C1B] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              <h2 className="section-title mb-6">
                Ready to{" "}
                <span className="text-gradient">Simplify Your IT?</span>
              </h2>
              <p className="section-subtitle mx-auto mb-10">
                Schedule a consultation to learn how our support subscription
                can free your team to focus on what matters most—growing your
                business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/early-adopters"
                  className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-ravan-purple to-ravan-accent group"
                >
                  <span>Get Started</span>
                  <div className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
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
