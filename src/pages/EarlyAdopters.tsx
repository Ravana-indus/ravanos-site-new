import React, { useState } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EarlyAdopters = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    employees: "",
    useCase: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Map formData to Frappe doctype fields
      const frappeData = {
        doctype: "RavanOS Early",
        full_name: formData.name,
        email_address: formData.email,
        contact_number: formData.phone,
        company_name: formData.company,
        your_role: formData.role,
        company_size: formData.employees,
        how_do_you_plan_to_use_ravanos: formData.useCase,
      };

      // Send data to Frappe backend
      const response = await fetch(
        "https://erp.ravanaindustries.com/api/resource/RavanOS Early",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(frappeData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ravan-black text-white">
      <Navbar />

      <main className="flex-grow">
        <section className="section-padding relative overflow-hidden pt-24 md:pt-32 bg-ravan-black">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl bg-ravan-purple/10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-ravan-blue/10"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDYwdjYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <div className="mb-3 inline-block px-4 py-1.5 rounded-full bg-ravan-accent/20 border border-ravan-accent/30">
                <span className="text-sm font-medium text-white">
                  Exclusive Access
                </span>
              </div>
              <h1 className="section-title mb-4 md:mb-6">
                Join the <span className="text-gradient">RavanOS</span> Family
              </h1>
              <p className="section-subtitle mx-auto">
                Be among the first to harness the power of the AI Operating
                System for your business. Early adopters receive priority
                access, dedicated support, and influence on our roadmap.
              </p>
            </div>

            <div className="p-5 sm:p-8 md:p-10 rounded-3xl glass-card border border-white/10 bg-gradient-to-b from-ravan-gray/30 to-transparent backdrop-blur-md">
              {isSubmitted ? (
                <div className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center bg-ravan-accent/20">
                    <Check className="w-8 h-8 text-ravan-accent" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    Thank you for your interest!
                  </h2>
                  <p className="max-w-md mx-auto mb-6 text-sm md:text-base text-white/80">
                    Your application to join the RavanOS Early Adopter Program
                    has been received. Our team will review your submission and
                    reach out to you shortly with next steps.
                  </p>
                  <a
                    href="/"
                    className="button-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
                  >
                    Return to Home
                    <ArrowRight size={16} />
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 md:space-y-6"
                >
                  {error && (
                    <div className="p-3 md:p-4 bg-red-900/30 border border-red-500/50 rounded-lg flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-200 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium block text-white/80"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all bg-white/5 text-white border border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium block text-white/80"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@company.com"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all bg-white/5 text-white border border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium block text-white/80"
                      >
                        Contact Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all bg-white/5 text-white border border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium block text-white/80"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all bg-white/5 text-white border border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="role"
                        className="text-sm font-medium block text-white/80"
                      >
                        Your Role
                      </label>
                      <input
                        id="role"
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. CTO, Director of Operations"
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all bg-white/5 text-white border border-white/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="employees"
                        className="text-sm font-medium block text-white/80"
                      >
                        Company Size
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all appearance-none bg-white/5 text-white border border-white/10"
                        style={{
                          backgroundImage:
                            'url(\'data:image/svg+xml;charset=US-ASCII,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/></svg>\')',
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1rem",
                        }}
                      >
                        <option value="" disabled className="bg-black">
                          Select company size
                        </option>
                        <option value="1-10 employees " className="bg-black">
                          1-10 employees
                        </option>
                        <option value="11-50 employees" className="bg-black">
                          11-50 employees
                        </option>
                        <option value="51-200 employees" className="bg-black">
                          51-200 employees
                        </option>
                        <option value="201-500 employees" className="bg-black">
                          201-500 employees
                        </option>
                        <option value="501+ employees" className="bg-black">
                          501+ employees
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label
                        htmlFor="useCase"
                        className="text-sm font-medium block text-white/80"
                      >
                        How do you plan to use RavanOS?
                      </label>
                      <textarea
                        id="useCase"
                        name="useCase"
                        value={formData.useCase}
                        onChange={handleChange}
                        placeholder="Tell us about your use case and what you hope to achieve with RavanOS"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-ravan-accent/50 transition-all resize-none bg-white/5 text-white border border-white/10"
                      />
                    </div>
                  </div>

                  <div className="pt-2 md:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full button-primary flex items-center justify-center gap-2 text-base md:text-lg px-6 py-3 md:px-8 md:py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Contact us
                          <ArrowRight size={18} className="hidden sm:inline" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              <div className="p-4 md:p-6 text-center rounded-xl glass-card">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-ravan-purple/20 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold text-ravan-purple">
                    1
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                  Priority Access
                </h3>
                <p className="text-xs md:text-sm text-white/70">
                  Be the first to access RavanOS features and updates before
                  general release.
                </p>
              </div>

              <div className="p-4 md:p-6 text-center rounded-xl glass-card">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-ravan-blue/20 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold text-ravan-blue">
                    2
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                  Dedicated Support
                </h3>
                <p className="text-xs md:text-sm text-white/70">
                  Receive personalized onboarding and direct access to our
                  engineering team.
                </p>
              </div>

              <div className="p-4 md:p-6 text-center rounded-xl sm:col-span-2 md:col-span-1 glass-card">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-full bg-ravan-accent/20 flex items-center justify-center">
                  <span className="text-lg md:text-xl font-bold text-ravan-accent">
                    3
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-medium mb-1 md:mb-2">
                  Shape Our Roadmap
                </h3>
                <p className="text-xs md:text-sm text-white/70">
                  Influence the development of features based on your business
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EarlyAdopters;
