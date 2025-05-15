import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../context/LoadingContext';

/**
 * A component that tracks route changes and triggers loading indicator
 * This component doesn't render anything - it just adds route change effects
 */
const RouteChangeTracker = () => {
  const location = useLocation();
  const { startLoading, stopLoading } = useLoading();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Monitor actual content loading on route changes
  useEffect(() => {
    if (isFirstLoad) {
      // Skip first render to avoid showing loading bar on initial page load
      setIsFirstLoad(false);
      return;
    }

    // Start loading when navigation begins
    startLoading();

    // Create a mutation observer to detect when content is added to the DOM
    const observer = new MutationObserver((mutations) => {
      let contentAdded = false;

      // Check if significant content has been added
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          contentAdded = true;
        }
      });

      if (contentAdded) {
        // Wait a bit for the content to fully render
        setTimeout(() => {
          stopLoading();
          observer.disconnect();
        }, 300);
      }
    });

    // Start observing changes to the main content area
    const mainContent = document.getElementById('root') || document.body;
    observer.observe(mainContent, { 
      childList: true, 
      subtree: true 
    });

    // Set a fallback timeout in case content loading doesn't trigger mutations
    const fallbackTimer = setTimeout(() => {
      stopLoading();
      observer.disconnect();
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [location.pathname, startLoading, stopLoading, isFirstLoad]);

  return null; // This component doesn't render anything
};

export default RouteChangeTracker; 