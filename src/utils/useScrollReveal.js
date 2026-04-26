import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    // Small timeout to wait for lazy-loaded components to render
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};

export default useScrollReveal;
