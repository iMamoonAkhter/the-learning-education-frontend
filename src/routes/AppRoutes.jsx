import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
// Import Pages (Lazy Loading for Performance)
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Contact = lazy(() => import("../pages/Contact"));
const Testimonal = lazy(() => import("../pages/Testimonal"));
const Teacher_Single = lazy(() => import("../pages/Teacher_Single"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Services = lazy(() => import("../pages/Services"));
const TermsCondition = lazy(() => import("../pages/Terms_And_Condition"));
const Fee_Structure = lazy(()=> import("../pages/Fee_Structure"))
const WhyChoose = lazy(()=> import("../pages/Why_Choose_Us"))
const Mathematics = lazy(()=> import("../pages/Mathematics"))
const English = lazy(()=> import("../pages/English"))
const Science = lazy(()=> import("../pages/Science"))
const Test_Preparation = lazy(()=> import("../pages/Test_Preparation"))
const AppRoutes = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonal />} />
        <Route path="/teacher-details" element={<Teacher_Single />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/uk-fee-structure" element={<Fee_Structure />} />
        <Route path="/us-international-fee-structure" element={<Fee_Structure />} />
        <Route path="/why-choose-us" element={<WhyChoose />} />
        <Route path="/course/mathematics" element={<Mathematics />} />
        <Route path="/course/english" element={<English />} />
        <Route path="/course/science" element={<Science />} />
        <Route path="/course/test-preparation" element={<Test_Preparation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;