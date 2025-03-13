import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import Preloader from "./components/Preloader";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Preloader /> 
      ) : (
        <Suspense fallback={<Preloader />}>
          <AppRoutes />
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
