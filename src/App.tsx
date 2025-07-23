import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import { Suspense, lazy } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const EarlyAdopters = lazy(() => import("./pages/EarlyAdopters"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const Login = lazy(() => import("./pages/Login"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ITSupport = lazy(() => import("./pages/ITSupport"));
const Features = lazy(() => import("./pages/Features"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NewPricing = lazy(() => import("./pages/NewPricing"));
const Careers = lazy(() => import("./pages/Careers"));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-ravan-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/contact-us" element={<EarlyAdopters />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/it-support" element={<ITSupport />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<NewPricing />} />
              <Route path="/careers" element={<Careers />} />
              {/* <Route path="/new-pricing" element={
                <ErrorBoundary>
                  <NewPricing />
                </ErrorBoundary>
              } /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
