
import React from 'react';
import { Command, VolumeX, Volume2, Cpu } from 'lucide-react';

const CommandCard = ({ title, command, result, delay }: { title: string, command: string, result: string, delay: string }) => (
  <div className="glass-card p-5 rounded-xl animate-fade-in-up" style={{ animationDelay: delay }}>
    <div className="flex items-center space-x-2 mb-3">
      <Command className="h-4 w-4 text-ravan-accent" />
      <h4 className="text-white font-medium text-sm">{title}</h4>
    </div>
    <div className="bg-ravan-black/60 p-3 rounded-lg mb-3 font-mono text-xs text-ravan-accent">
      &gt; {command}
    </div>
    <p className="text-white/70 text-sm">{result}</p>
  </div>
);

const ControlSection = () => {
  return (
    <section id="control" className="section-padding bg-ravan-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-ravan-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-ravan-blue/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CommandCard 
                title="Natural Language Control"
                command="Find all sales leads from last month that haven't been contacted"
                result="RavanOS parses your natural language request and executes complex database queries and business logic without needing specific syntax."
                delay="0s"
              />
              <CommandCard 
                title="Business Process Automation"
                command="Analyze support tickets and create a report on common issues"
                result="The AI automatically categorizes tickets, identifies patterns, and generates an actionable report with improvement recommendations."
                delay="0.1s"
              />
              <CommandCard 
                title="Smart Task Delegation"
                command="Have marketing team review new campaign assets"
                result="RavanOS assigns tasks to the right team members, tracks approvals, and ensures deadlines are met without manual follow-up."
                delay="0.2s"
              />
              <CommandCard 
                title="Data-Driven Insights"
                command="Predict Q3 sales based on current trends"
                result="Leveraging historical data and current patterns, the AI provides reliable forecasts and explains key factors influencing the prediction."
                delay="0.3s"
              />
            </div>
          </div>
          
          <div className="flex-1 order-1 lg:order-2">
            <div className="animate-fade-in-up">
              <h2 className="section-title mb-6">Natural Language & <span className="text-gradient">Complete Control</span></h2>
              <p className="section-subtitle mb-8">
                No need to learn a system—just talk to it like a colleague and take control whenever you want. RavanOS understands your intent and executes complex operations through simple conversations.
              </p>
              
              <div className="flex flex-col space-y-8 mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ravan-accent/20 flex items-center justify-center">
                    <Volume2 className="h-6 w-6 text-ravan-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">AI Assistance When You Want It</h4>
                    <p className="text-white/70 text-sm mt-1">Intelligent agents ready to help with any business task</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ravan-purple/20 flex items-center justify-center">
                    <VolumeX className="h-6 w-6 text-ravan-purple" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Silent When You Don't</h4>
                    <p className="text-white/70 text-sm mt-1">Take manual control anytime with zero interference</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-ravan-blue/20 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-ravan-blue" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Human-AI Collaboration</h4>
                    <p className="text-white/70 text-sm mt-1">The perfect balance of automation and human oversight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection;
