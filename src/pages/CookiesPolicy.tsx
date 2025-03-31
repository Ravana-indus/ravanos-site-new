import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-ravan-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Cookies Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-6">Last updated: {new Date().toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">1. What Are Cookies</h2>
            <p className="text-white/80 mb-4">
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">2. How RavanOS Uses Cookies</h2>
            <p className="text-white/80 mb-4">
              When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
              <li>To enable certain functions of the Service</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable advertisements delivery, including behavioral advertising</li>
            </ul>
            <p className="text-white/80 mb-4">
              We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
            </p>
            <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
              <li>Essential cookies: These cookies are required for the operation of our website and enable you to use its features.</li>
              <li>Analytical/performance cookies: These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li>Functionality cookies: These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you.</li>
              <li>Targeting cookies: These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3. Third-Party Cookies</h2>
            <p className="text-white/80 mb-4">
              In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4. What Are Your Choices Regarding Cookies</h2>
            <p className="text-white/80 mb-4">
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p className="text-white/80 mb-4">
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">5. How to Control and Delete Cookies</h2>
            <p className="text-white/80 mb-4">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" className="text-ravan-accent hover:text-ravan-accent-light">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-ravan-accent hover:text-ravan-accent-light">www.allaboutcookies.org</a>.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Find out how to manage cookies on popular browsers:</h3>
            <ul className="list-disc pl-6 text-white/80 mb-6 space-y-2">
              <li><a href="https://support.google.com/accounts/answer/61416" className="text-ravan-accent hover:text-ravan-accent-light">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-ravan-accent hover:text-ravan-accent-light">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-ravan-accent hover:text-ravan-accent-light">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-ravan-accent hover:text-ravan-accent-light">Microsoft Edge</a></li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="text-white/80 mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p className="text-white/80 mb-4">
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4">7. Contact Us</h2>
            <p className="text-white/80 mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiesPolicy; 