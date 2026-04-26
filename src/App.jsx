import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Preloader from "./components/Preloader";
import useScrollReveal from "./utils/useScrollReveal";
import WhatsAppButton from "./components/WhatsAppButton";
import AnnouncementBar from "./components/AnnouncementBar";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      className={visible ? "visible" : ""}
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
};

const ScrollRevealWrapper = ({ children }) => {
  useScrollReveal();
  return children;
};

function App() {
  const isPrerender = navigator.userAgent === 'ReactSnap';
  const [loading, setLoading] = useState(!isPrerender);

  useEffect(() => {
    if (!isPrerender) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, []);

  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {loading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<Preloader />}>
          <ScrollRevealWrapper>
            <main id="main-content">
              <AnnouncementBar />
              <AppRoutes />
            </main>
          </ScrollRevealWrapper>
          <BackToTop />
          <WhatsAppButton />
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
