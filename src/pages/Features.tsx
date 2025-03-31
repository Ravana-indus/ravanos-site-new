import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, ExternalLink, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Features = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32 bg-gradient-to-b from-ravan-dark to-ravan-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-ravan-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                <span className="text-gradient">RavanOS Features</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                The Intelligent Business Operating System
              </p>
              <div className="mt-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <p className="text-lg text-white/70 max-w-3xl mx-auto">
                  RavanOS reimagines how businesses operate by combining powerful enterprise functionality with intuitive AI interactions. Built on a robust open-source foundation and enhanced with our revolutionary AI Agent architecture.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Agent First Architecture */}
        <section id="ai-agent" className="section-padding bg-ravan-dark relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-ravan-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -right-20 w-72 h-72 bg-ravan-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title">AI Agent First Architecture</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Interact naturally with systems designed for human-AI collaboration
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard 
                title="Natural Language Interface"
                description="Interact with your business systems through conversation rather than complex menus. Ask questions, delegate tasks, and solve problems using natural language."
                delay="0s"
                className="bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
              />
              
              <FeatureCard 
                title="Three Powerful Interaction Modes"
                description={
                  <>
                    <div className="mb-4">Choose the right mode for your needs:</div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-accent mr-2 mt-0.5" />
                        <span><strong className="text-ravan-accent">Chat Mode:</strong> Ask questions and retrieve information from across your business</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-blue mr-2 mt-0.5" />
                        <span><strong className="text-ravan-blue">Com Mode:</strong> Collaborate seamlessly with departments and external partners</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-green mr-2 mt-0.5" />
                        <span><strong className="text-ravan-green">Agent Mode:</strong> Delegate tasks to AI agents that execute operations across systems</span>
                      </li>
                    </ul>
                  </>
                }
                delay="0.1s"
                className="bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
              />
              
              <FeatureCard 
                title="Multi-Level Intelligence"
                description={
                  <>
                    <div className="mb-4">Our AI operates at four distinct levels, each with appropriate capabilities:</div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-accent mr-2 mt-0.5" />
                        <span><strong>User Level:</strong> Personalized assistance for individual team members</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-accent mr-2 mt-0.5" />
                        <span><strong>Department Level:</strong> Specialized agents for marketing, sales, operations, and more</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-accent mr-2 mt-0.5" />
                        <span><strong>Executive Level:</strong> Cross-functional insights for leadership</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-accent mr-2 mt-0.5" />
                        <span><strong>External Level:</strong> Secure connections to partners, government, and customers</span>
                      </li>
                    </ul>
                  </>
                }
                delay="0.2s"
                className="bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
              />
              
              <FeatureCard 
                title="Human-Centered Control"
                description={
                  <>
                    <div className="mb-4">Always maintain control with:</div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-green mr-2 mt-0.5" />
                        <span>Seamless transitions between AI assistance and manual operation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-green mr-2 mt-0.5" />
                        <span>Approval workflows for automated processes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-green mr-2 mt-0.5" />
                        <span>Complete visibility into agent activities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-ravan-green mr-2 mt-0.5" />
                        <span>Customizable permission structures</span>
                      </li>
                    </ul>
                  </>
                }
                delay="0.3s"
                className="bg-gradient-to-br from-ravan-green/20 to-ravan-green/5"
              />
            </div>
          </div>
        </section>
        
        {/* Inter-Business Connectivity */}
        <section id="connectivity" className="section-padding bg-ravan-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-ravan-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title">Inter-Business Connectivity</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Create a seamless network of connected businesses and partners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Connected Business Ecosystem",
                  description: "RavanOS creates a network of businesses that can interact seamlessly, discover partners, exchange information securely, and automate routine transactions.",
                  delay: "0s",
                  className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                },
                {
                  title: "Unified B2B Commerce Platform",
                  description: "Conduct business more efficiently with integrated e-commerce capabilities, automated procurement workflows, digital contract management, and secure payment processing.",
                  delay: "0.1s",
                  className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                },
                {
                  title: "End-to-End Supply Chain Optimization",
                  description: "Gain real-time visibility across your entire supply network with AI-powered demand forecasting, automated inventory management, and early disruption detection.",
                  delay: "0.2s",
                  className: "bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
                },
                {
                  title: "Cross-Business Intelligence",
                  description: "Access insights through anonymized benchmarking against industry peers, market trend identification, and collaborative forecasting with partners.",
                  delay: "0.3s",
                  className: "bg-gradient-to-br from-ravan-green/20 to-ravan-green/5"
                },
                {
                  title: "Secure Data Exchange Framework",
                  description: "Share only what you choose with granular permission management, blockchain-verified transaction records, and automated compliance with data regulations.",
                  delay: "0.4s",
                  className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                },
                {
                  title: "Global Marketplace",
                  description: "Expand your business horizons through global partner discovery, standardized quality metrics, reputation management, and cross-border compliance assistance.",
                  delay: "0.5s",
                  className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                }
              ].map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                  className={feature.className}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Business Management */}
        <section id="business-management" className="section-padding bg-ravan-dark relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-ravan-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -right-20 w-72 h-72 bg-ravan-green/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title">Comprehensive Business Management</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Complete enterprise functionality with industry-specific solutions
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-display font-bold mb-8 text-center">Core Enterprise Foundation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  "Accounting & Finance",
                  "Inventory & Warehouse",
                  "Manufacturing & Production",
                  "CRM & Sales Pipeline",
                  "Purchase Management",
                  "Asset Management",
                  "Quality Management",
                  "Project Management",
                  "Buying & Selling Management",
                  "E-Commerce Platform",
                  "Payroll Administration",
                  "Website Builder & Management",
                  "Quality Control & Assurance",
                  "Customer Relationship Management",
                  "Support Ticket System",
                  "Field Service Management"
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl text-center shadow-lg animate-fade-in-up hover:from-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 text-center">Industry-Specific Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Financial Books",
                    description: "Advanced financial management system for businesses of all sizes.",
                    features: ["Invoice Generation", "Expense Tracking", "Financial Reporting", "Tax Calculations", "Bank Reconciliation", "Multi-currency Support"],
                    delay: "0s",
                    className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                  },
                  {
                    title: "Human Resources",
                    description: "Comprehensive HR management system for employee lifecycle management.",
                    features: ["Employee Management", "Recruitment", "Performance Tracking", "Leave & Attendance", "Payroll", "Career Development"],
                    delay: "0.1s",
                    className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                  },
                  {
                    title: "Customer Relationship Management",
                    description: "Powerful customer engagement system for improved relationships and sales.",
                    features: ["Contact Management", "Lead Qualification", "Opportunity Tracking", "Sales Pipeline", "Customer Segmentation", "Email Campaigns"],
                    delay: "0.2s",
                    className: "bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
                  },
                  {
                    title: "Payroll Administration",
                    description: "Comprehensive payroll management system ensuring accurate and timely compensation.",
                    features: ["Salary Structures", "Tax Calculations", "Benefits Management", "Automated Payments", "Compliance Reporting", "Employee Self-Service"],
                    delay: "0.3s",
                    className: "bg-gradient-to-br from-ravan-green/20 to-ravan-green/5"
                  },
                  {
                    title: "E-Commerce Platform",
                    description: "All-in-one online selling solution for businesses entering digital markets.",
                    features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Inventory Sync", "Order Management", "Customer Accounts"],
                    delay: "0.4s",
                    className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                  },
                  {
                    title: "Website Builder & Management",
                    description: "Intuitive website creation and management tools for online presence.",
                    features: ["Drag-and-Drop Builder", "Responsive Templates", "Content Management", "SEO Optimization", "Form Builder", "Analytics Integration"],
                    delay: "0.5s",
                    className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                  },
                  {
                    title: "Quality Control & Assurance",
                    description: "Robust quality management system ensuring consistent product excellence.",
                    features: ["Inspection Workflows", "Quality Standards", "Non-conformance Tracking", "Corrective Actions", "Quality Certificates", "Supplier Quality Rating"],
                    delay: "0.6s",
                    className: "bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
                  },
                  {
                    title: "Field Service Management",
                    description: "Comprehensive system for managing on-site service operations and technicians.",
                    features: ["Service Scheduling", "Technician Dispatch", "Mobile Work Orders", "Inventory Management", "Time Tracking", "On-site Invoicing"],
                    delay: "0.7s",
                    className: "bg-gradient-to-br from-ravan-green/20 to-ravan-green/5"
                  },
                  {
                    title: "Buying & Selling Management",
                    description: "Complete procurement and sales management system for streamlined business transactions.",
                    features: ["Purchase Planning", "Supplier Management", "Request for Quotations", "Purchase Orders", "Sales Quotations", "Sales Order Processing"],
                    delay: "0.8s",
                    className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                  },
                  {
                    title: "Communications Hub",
                    description: "Unified communications platform for seamless business communication.",
                    features: ["Multi-channel Messaging", "Automated Notifications", "Communication Logging", "Template Management", "Analytics", "Scheduling"],
                    delay: "0.9s",
                    className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                  },
                  {
                    title: "Customer Support",
                    description: "Advanced customer support system for exceptional service delivery.",
                    features: ["Ticket Management", "SLA Tracking", "Knowledge Base", "Customer Portal", "Performance Metrics", "Automated Routing"],
                    delay: "1s",
                    className: "bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
                  },
                  {
                    title: "Secure Drive",
                    description: "Enterprise-grade secure document management and storage system.",
                    features: ["Document Storage", "Version Control", "Collaborative Editing", "Access Control", "Mobile Access", "Process Integration"],
                    delay: "1.1s",
                    className: "bg-gradient-to-br from-ravan-green/20 to-ravan-green/5"
                  },
                  {
                    title: "Healthcare Management",
                    description: "Comprehensive healthcare management system for hospitals, clinics, and medical practices.",
                    features: ["Patient Records", "Appointment Scheduling", "Laboratory Management", "Pharmacy Integration", "Medical Billing", "Clinical Workflows"],
                    delay: "1.2s",
                    className: "bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5"
                  },
                  {
                    title: "Education Management",
                    description: "Complete education management system for schools, colleges, and training institutions.",
                    features: ["Student Information", "Course Management", "Examination System", "Fee Management", "Attendance Tracking", "Learning Management"],
                    delay: "1.3s",
                    className: "bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5"
                  },
                  {
                    title: "Lending Platform",
                    description: "Complete lending management system for financial institutions.",
                    features: ["Loan Processing", "Credit Scoring", "Repayment Scheduling", "Collection Management", "Risk Assessment", "Compliance Reporting"],
                    delay: "1.4s",
                    className: "bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5"
                  }
                ].map((solution, index) => (
                  <div 
                    key={index}
                    className={`glass-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up ${solution.className}`}
                    style={{ animationDelay: solution.delay }}
                  >
                    <h3 className="text-xl font-display font-semibold mb-3">{solution.title}</h3>
                    <p className="text-white/70 mb-4">{solution.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start group/item"
                        >
                          <CheckCircle className={`w-4 h-4 ${
                            solution.className.includes('purple') ? 'text-ravan-purple' : 
                            solution.className.includes('blue') ? 'text-ravan-blue' : 
                            solution.className.includes('accent') ? 'text-ravan-accent' : 
                            'text-ravan-green'
                          } shrink-0 mt-0.5 mr-2 group-hover/item:scale-110 transition-transform`} />
                          <span className="text-sm text-white/80 group-hover/item:text-white transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* More Sectors Section */}
            <div className="mt-12 text-center">
              <div className="glass-card p-6 border border-white/10 bg-gradient-to-br from-ravan-purple/10 to-ravan-blue/10 backdrop-blur-sm rounded-2xl inline-block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ravan-purple/20 to-ravan-blue/20 flex items-center justify-center">
                    <Plus className="w-6 h-6 text-ravan-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-display font-semibold mb-1">Many More Sectors to Come</h3>
                    <p className="text-white/70">Customizable solutions tailored to your specific industry needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Extensibility & Security */}
        <section id="extensibility" className="section-padding bg-ravan-black relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-20 w-96 h-96 bg-ravan-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-ravan-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="section-title mb-8 text-left">Extensibility</h2>
                <div className="space-y-6">
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">Open Source Foundation</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-accent/20 text-ravan-accent">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Access to source code for complete transparency</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Community-driven improvements and innovations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Freedom from vendor lock-in</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Ability to modify for unique business needs</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">Developer Tools</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-blue/20 text-ravan-blue">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Comprehensive API for custom integrations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Low-code customization options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Workflow designer for business process automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Custom field creation without coding</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">App Marketplace</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-green/20 text-ravan-green">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-green shrink-0 mt-0.5 mr-2" />
                          <span>Pre-built integrations with popular services</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-green shrink-0 mt-0.5 mr-2" />
                          <span>Industry-specific extensions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-green shrink-0 mt-0.5 mr-2" />
                          <span>Community-contributed plugins</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-green shrink-0 mt-0.5 mr-2" />
                          <span>Premium add-ons for specialized needs</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
              
              <div>
                <h2 className="section-title mb-8 text-left">Security & Compliance</h2>
                <div className="space-y-6">
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">Enterprise-Grade Security</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-purple/20 text-ravan-purple">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-purple shrink-0 mt-0.5 mr-2" />
                          <span>Role-based access control</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-purple shrink-0 mt-0.5 mr-2" />
                          <span>Data encryption at rest and in transit</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-purple shrink-0 mt-0.5 mr-2" />
                          <span>Multi-factor authentication</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-purple shrink-0 mt-0.5 mr-2" />
                          <span>Comprehensive audit logging</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">Compliance Frameworks</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-accent/20 text-ravan-accent">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>GDPR compliance tools</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>ISO 27001 alignment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Industry-specific compliance features</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-accent shrink-0 mt-0.5 mr-2" />
                          <span>Data residency options</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                  
                  <Collapsible className="border border-white/10 rounded-lg overflow-hidden">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-white/5 hover:bg-white/10 transition-colors">
                      <h3 className="text-xl font-display font-semibold">Data Sovereignty</h3>
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-ravan-blue/20 text-ravan-blue">+</div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-white/5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Control where your data is stored</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Transparent data handling policies</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Data export capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-ravan-blue shrink-0 mt-0.5 mr-2" />
                          <span>Backup and disaster recovery</span>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* RavanOS Advantage */}
        <section id="advantage" className="section-padding bg-ravan-dark relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-ravan-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 -right-20 w-72 h-72 bg-ravan-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="section-title">RavanOS Advantage</h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                The complete business operating system for the AI era
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                RavanOS combines comprehensive enterprise functionality with our revolutionary AI Agent architecture to create an Intelligent Business Operating System that:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    title: "Simplifies Complexity",
                    description: "Through natural language interaction",
                    icon: "text-ravan-purple"
                  },
                  {
                    title: "Connects Businesses",
                    description: "For unprecedented optimization and commerce",
                    icon: "text-ravan-blue"
                  },
                  {
                    title: "Adapts to Any Industry",
                    description: "With specialized modules",
                    icon: "text-ravan-accent"
                  },
                  {
                    title: "Scales With You",
                    description: "From startup to enterprise",
                    icon: "text-ravan-green"
                  },
                  {
                    title: "Remains Under Your Control",
                    description: "With human-centered design",
                    icon: "text-ravan-purple"
                  },
                  {
                    title: "Evolves Continuously",
                    description: "Through our open ecosystem",
                    icon: "text-ravan-blue"
                  }
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`w-6 h-6 ${advantage.icon} mr-3 mt-0.5`} />
                    <div>
                      <h3 className="text-lg font-bold mb-1">{advantage.title}</h3>
                      <p className="text-white/70">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" className="button-primary flex items-center justify-center gap-2 text-lg px-8 py-4 bg-gradient-to-r from-ravan-purple to-ravan-accent">
                  <span>Request a Demo</span>
                  <div className="p-1 bg-white/10 rounded-full">
                    <ExternalLink size={18} />
                  </div>
                </a>
                <a href="#" className="button-secondary flex items-center justify-center gap-2 text-lg px-8 py-4">
                  <span>Start Free Trial</span>
                  <div className="p-1 bg-white/10 rounded-full">
                    <ArrowRight size={18} />
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

// Feature Card Component
const FeatureCard = ({ title, description, delay, className }) => {
  return (
    <div 
      className={`glass-card p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up ${className}`}
      style={{ animationDelay: delay }}
    >
      <h3 className="text-xl font-display font-semibold mb-4">{title}</h3>
      <div className="text-white/80">
        {description}
      </div>
    </div>
  );
};

export default Features; 