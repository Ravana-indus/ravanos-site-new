import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element with a slight delay
    // to ensure the DOM has fully loaded
    if (hash) {
      // Remove the # character
      const elementId = hash.replace('#', '');
      
      // Wait a bit for the page to fully render before scrolling
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      // If no hash, scroll to top as before
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop; 