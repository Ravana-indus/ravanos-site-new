import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-6">Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">1. Agreement to Terms</h2>
            <p className="text-white/80 mb-4">
              By accessing and using RavanOS's services, you agree to be bound by these Terms of Service. If you don't agree to these terms, you may not access or use the services.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">2. Changes to Terms</h2>
            <p className="text-white/80 mb-4">
              We may modify the Terms at any time, at our sole discretion. If we do so, we'll let you know either by posting the modified Terms on the Site or through other communications. 
              It's important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, 
              you are indicating to us that you agree to be bound by the modified Terms.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3. Services</h2>
            <p className="text-white/80 mb-4">
              The RavanOS AI operating system provides AI-powered automation, assistance, and business intelligence capabilities. We reserve the right to change, suspend, 
              or discontinue any aspect of our services at any time, including the availability of any feature, database, or content.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4. Privacy Policy</h2>
            <p className="text-white/80 mb-4">
              Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">5. User Accounts</h2>
            <p className="text-white/80 mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are solely responsible for the activity 
              that occurs on your account, and you must keep your account password secure. You must notify us immediately of any breach of security or unauthorized 
              use of your account. We will not be liable for any losses caused by any unauthorized use of your account.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">6. Intellectual Property Rights</h2>
            <p className="text-white/80 mb-4">
              The Services and their original content, features, and functionality are and will remain the exclusive property of RavanOS and its licensors. 
              The Services are protected by copyright, trademark, and other laws of the United States and foreign countries.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">7. Subscription and Payments</h2>
            <p className="text-white/80 mb-4">
              Some of our Services may be subject to payments or subscription fees. By using a paid feature of the Services, you agree to pay the fees associated with such Service. 
              We may change the fees for any feature of the Service, including additional charges or subscriptions, at any time.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">8. Disclaimer</h2>
            <p className="text-white/80 mb-4">
              YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT 
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
              PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">9. Limitation of Liability</h2>
            <p className="text-white/80 mb-4">
              IN NO EVENT SHALL RAVANOS, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, 
              RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">10. Governing Law</h2>
            <p className="text-white/80 mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">11. Contact Us</h2>
            <p className="text-white/80 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-white/80 mb-4">
              RavanOS<br />
              Email: legal@ravanos.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService; 