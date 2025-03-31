import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-6">Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
            <p className="text-white/80 mb-4">
              Welcome to RavanOS. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the service.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">2. Collection of Your Information</h2>
            <p className="text-white/80 mb-4">
              We may collect information about you in a variety of ways. The information we may collect via the Service includes:
            </p>
            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Personal Data</h3>
            <p className="text-white/80 mb-4">
              Personally identifiable information, such as your name, email address, and telephone number, 
              that you voluntarily give to us when you register with the Service or when you choose to participate 
              in various activities related to the Service. You are under no obligation to provide us with personal 
              information of any kind, however your refusal to do so may prevent you from using certain features of the Service.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">2.2 Derivative Data</h3>
            <p className="text-white/80 mb-4">
              Information our servers automatically collect when you access the Service, such as your IP address, 
              your browser type, your operating system, your access times, and the pages you have viewed directly 
              before and after accessing the Service.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3. Use of Your Information</h2>
            <p className="text-white/80 mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and 
              customized experience. Specifically, we may use information collected about you via the Service to:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Service.</li>
              <li>Increase the efficiency and operation of the Service.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Service.</li>
              <li>Notify you of updates to the Service.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-white/80 mb-4">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">4.1 By Law or to Protect Rights</h3>
            <p className="text-white/80 mb-4">
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential 
              violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted 
              or required by any applicable law, rule, or regulation.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">5. Security of Your Information</h2>
            <p className="text-white/80 mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
              that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
              can be guaranteed against any interception or other type of misuse.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">6. Contact Us</h2>
            <p className="text-white/80 mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-white/80 mb-4">
              RavanOS<br />
              Email: privacy@ravanos.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 