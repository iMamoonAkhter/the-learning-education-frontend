/**
 * Utility to monitor resource loading (images, scripts, etc.)
 * Shows the loading bar when resources are loading
 */
const setupResourceLoadMonitor = (startLoading, stopLoading) => {
  let resourcesLoading = 0;
  let debounceTimer = null;

  // Track when resources start loading
  const resourceLoadStarted = () => {
    if (resourcesLoading === 0) {
      // Only trigger loading if not already loading
      startLoading();
    }
    resourcesLoading++;
  };

  // Track when resources finish loading
  const resourceLoadEnded = () => {
    resourcesLoading = Math.max(0, resourcesLoading - 1);
    
    // Use debouncing to prevent the loading bar from flickering
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (resourcesLoading === 0) {
        stopLoading();
      }
    }, 200);
  };

  // Monitor image loading
  document.addEventListener('load', (event) => {
    if (event.target.tagName === 'IMG' || 
        event.target.tagName === 'SCRIPT' || 
        event.target.tagName === 'LINK') {
      resourceLoadEnded();
    }
  }, true);

  // Capture image loading start
  const originalImageSrc = Object.getOwnPropertyDescriptor(Image.prototype, 'src');
  if (originalImageSrc) {
    Object.defineProperty(Image.prototype, 'src', {
      set: function(value) {
        if (value) {
          resourceLoadStarted();
        }
        originalImageSrc.set.call(this, value);
      },
      get: function() {
        return originalImageSrc.get.call(this);
      }
    });
  }

  // Capture fetch/XHR requests
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    resourceLoadStarted();
    return originalFetch.apply(this, args)
      .then(response => {
        resourceLoadEnded();
        return response;
      })
      .catch(error => {
        resourceLoadEnded();
        throw error;
      });
  };

  // Monitor XHR requests
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(...args) {
    this.addEventListener('loadstart', resourceLoadStarted);
    this.addEventListener('loadend', resourceLoadEnded);
    originalOpen.apply(this, args);
  };
};

export default setupResourceLoadMonitor; 