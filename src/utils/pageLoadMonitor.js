/**
 * Utility to monitor page navigations and loading in a React SPA
 * 
 * This adds click listeners to all links to show loading indicators
 * during page transitions and navigation events.
 */
const setupPageLoadMonitor = (startLoading) => {
  // Add click event listeners to all anchor tags
  document.addEventListener('click', (event) => {
    // Find the closest anchor if click was on a child element
    const link = event.target.closest('a');
    
    if (link && 
        link.tagName === 'A' && 
        link.getAttribute('href') && 
        !link.getAttribute('href').startsWith('#') &&
        !link.getAttribute('target')) {
      // It's a navigation link (not an anchor or external link)
      startLoading();
    }
  });
  
  // Monitor page transitions
  window.addEventListener('beforeunload', () => {
    startLoading();
  });
};

export default setupPageLoadMonitor; 