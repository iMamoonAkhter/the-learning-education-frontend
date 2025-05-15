// Helper to track network requests
const setupNetworkMonitoring = () => {
  // Monitor fetch requests
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('fetchstart'));
    
    return originalFetch.apply(this, args)
      .then(response => {
        window.dispatchEvent(new CustomEvent('fetchend'));
        return response;
      })
      .catch(error => {
        window.dispatchEvent(new CustomEvent('fetchend'));
        throw error;
      });
  };

  // Monitor XMLHttpRequest
  const originalXhrOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(...args) {
    this.addEventListener('loadstart', () => {
      window.dispatchEvent(new CustomEvent('fetchstart'));
    });
    
    this.addEventListener('loadend', () => {
      window.dispatchEvent(new CustomEvent('fetchend'));
    });
    
    originalXhrOpen.apply(this, args);
  };
};

export default setupNetworkMonitoring; 