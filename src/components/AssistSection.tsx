
import React from 'react';
import { Bot, MessageSquare, Zap } from 'lucide-react';

const AssistSection = () => {
  return (
    <section id="agents" className="section-padding bg-ravan-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-ravan-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-ravan-accent/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up">
          <h2 className="section-title">Assist, Agent, Comms</h2>
          <p className="section-subtitle mx-auto">
            The right AI agent for every scenario—whether you need assistance, autonomous action, or advanced communication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-purple/20 to-ravan-purple/5 border border-ravan-purple/30 p-3 mb-5 backdrop-blur-sm">
              <Bot className="w-8 h-8 text-ravan-purple" />
            </div>
            <h3 className="feature-title">AI Assistance</h3>
            <p className="feature-description">
              Get immediate help with information retrieval, research, and guidance from AI assistants designed to augment your capabilities.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-accent/20 to-ravan-accent/5 border border-ravan-accent/30 p-3 mb-5 backdrop-blur-sm">
              <Zap className="w-8 h-8 text-ravan-accent" />
            </div>
            <h3 className="feature-title">Autonomous Agents</h3>
            <p className="feature-description">
              Deploy autonomous AI agents that can perform complex tasks, make decisions, and execute workflows without constant supervision.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-ravan-blue/20 to-ravan-blue/5 border border-ravan-blue/30 p-3 mb-5 backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-ravan-blue" />
            </div>
            <h3 className="feature-title">Advanced Communication</h3>
            <p className="feature-description">
              Facilitate seamless customer interactions and internal communications with AI agents that understand context and provide meaningful responses.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#features" className="button-primary">
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default AssistSection;
