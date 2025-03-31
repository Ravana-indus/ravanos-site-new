import React, { useEffect, useCallback, useRef, memo } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AssistSection from '../components/AssistSection';
import BusinessSection from '../components/BusinessSection';
import ControlSection from '../components/ControlSection';
import AdaptabilitySection from '../components/AdaptabilitySection';
import PrivacySection from '../components/PrivacySection';
import ITSupportSection from '../components/ITSupportSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import MetaTags from '../components/MetaTags';
import UIPresentationSection from '../components/UIPresentationSection';

// Memoize sections to prevent unnecessary re-renders
const MemoizedHeroSection = memo(HeroSection);
const MemoizedUIPresentationSection = memo(UIPresentationSection);
const MemoizedAssistSection = memo(AssistSection);
const MemoizedBusinessSection = memo(BusinessSection);
const MemoizedControlSection = memo(ControlSection);
const MemoizedAdaptabilitySection = memo(AdaptabilitySection);
const MemoizedPrivacySection = memo(PrivacySection);
const MemoizedITSupportSection = memo(ITSupportSection);
const MemoizedCTASection = memo(CTASection);
const MemoizedFooter = memo(Footer);

const Index = () => {
  const animationsInitialized = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleSmoothScroll = useCallback((e: Event) => {
    e.preventDefault();
    const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
    if (!targetId) return;
    
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  const initializeAnimations = useCallback(() => {
    if (animationsInitialized.current) return;
    
    // Create a single observer for better performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Skip if this is our specific element
            if (target.hasAttribute('data-lov-id')) return;
            
            // Use requestAnimationFrame for smoother animations
            requestAnimationFrame(() => {
              // Apply the appropriate animation class based on the element's existing classes
              if (target.classList.contains('animate-on-scroll')) {
                target.classList.add('animate-fade-in-up');
              } else if (target.classList.contains('animate-fade-in') ||
                         target.classList.contains('animate-slide-in-left') ||
                         target.classList.contains('animate-slide-in-right')) {
                target.classList.add('visible');
              }
            });
            
            // Unobserve after animating
            observerRef.current?.unobserve(target);
          }
        });
      },
      { 
        threshold: [0, 0.1, 0.2],
        rootMargin: '0px 0px -10% 0px'
      }
    );
    
    // Get all elements that need animations (excluding our specific element)
    const animationElements = document.querySelectorAll(
      '.animate-on-scroll:not([data-lov-id]), ' +
      '.animate-fade-in:not(.visible):not([data-lov-id]), ' +
      '.animate-slide-in-left:not(.visible):not([data-lov-id]), ' +
      '.animate-slide-in-right:not(.visible):not([data-lov-id])'
    );
    
    // Observe all animation elements
    animationElements.forEach((el) => observerRef.current?.observe(el));
    
    // Mark as initialized
    animationsInitialized.current = true;
  }, []);

  useEffect(() => {
    // Fix for specific element immediately on mount
    const specificElement = document.querySelector('[data-lov-id="src/components/BusinessSection.tsx:30:4"]');
    if (specificElement) {
      specificElement.classList.add('visible', 'animate-fade-in-up');
      (specificElement as HTMLElement).style.opacity = '1';
      (specificElement as HTMLElement).style.transform = 'none';
    }
    
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Initialize animations
    initializeAnimations();
    
    // Check for elements that might be added dynamically
    const resizeObserver = new ResizeObserver(() => {
      initializeAnimations();
    });
    
    resizeObserver.observe(document.body);
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      
      observerRef.current?.disconnect();
      resizeObserver.disconnect();
    };
  }, [handleSmoothScroll, initializeAnimations]);

  return (
    <div className="min-h-screen bg-ravan-black text-white overflow-x-hidden">
      <MetaTags
        title="Welcome to RavanOS"
        description="Experience the future of computing with RavanOS - an AI-powered operating system that adapts to your needs and enhances your productivity."
        keywords="RavanOS, AI Operating System, Future of Computing, Productivity, Innovation, Technology"
      />
      <Navbar />
      <main>
        <MemoizedHeroSection />
        <MemoizedUIPresentationSection />
        <MemoizedAssistSection />
        <MemoizedBusinessSection />
        <MemoizedControlSection />
        <MemoizedAdaptabilitySection />
        <MemoizedPrivacySection />
        <MemoizedITSupportSection />
        <MemoizedCTASection />
      </main>
      <MemoizedFooter />
    </div>
  );
};

export default memo(Index);
