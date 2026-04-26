import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Global from "./utils/global.jsx";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

const app = (
  <StrictMode>
    <HelmetProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Global />
      <App />
    </Provider>
    </MantineProvider>
    </HelmetProvider>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
