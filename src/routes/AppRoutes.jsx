import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Contact = lazy(() => import("../pages/Contact"));
const Testimonal = lazy(() => import("../pages/Testimonal"));
const Teacher_Single = lazy(() => import("../pages/Teacher_Single"));
const FAQ = lazy(() => import("../pages/FAQ"));
const Services = lazy(() => import("../pages/Services"));
const TermsCondition = lazy(() => import("../pages/Terms_And_Condition"));
const Fee_Structure = lazy(() => import("../pages/Fee_Structure"));
const WhyChoose = lazy(() => import("../pages/Why_Choose_Us"));
const Mathematics = lazy(() => import("../pages/Mathematics"));
const English = lazy(() => import("../pages/English"));
const Science = lazy(() => import("../pages/Science"));
const ScienceSubjects = lazy(() => import("../pages/ScienceSubjects"));
const Test_Preparation = lazy(() => import("../pages/Test_Preparation"));
const TestPrep = lazy(() => import("../pages/TestPrep"));
const SatActNaplan = lazy(() => import("../pages/SatActNaplan"));
const Resources = lazy(() => import("../pages/Resources"));
const TeachingMethods = lazy(() => import("../pages/TeachingMethods"));

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonal />} />
        <Route path="/tutors" element={<Teacher_Single />} />
        <Route path="/teacher-details" element={<Teacher_Single />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/fee-structure" element={<Fee_Structure />} />
        <Route path="/uk-fee-structure" element={<Fee_Structure />} />
        <Route path="/us-international-fee-structure" element={<Fee_Structure />} />
        <Route path="/why-choose-us" element={<WhyChoose />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/subjects/maths" element={<Mathematics />} />
        <Route path="/course/mathematics" element={<Mathematics />} />
        <Route path="/subjects/english" element={<English />} />
        <Route path="/course/english" element={<English />} />
        <Route path="/subjects/science" element={<Science />} />
        <Route path="/course/science" element={<Science />} />
        <Route path="/subjects/science-subjects" element={<ScienceSubjects />} />
        <Route path="/course/test-preparation" element={<Test_Preparation />} />
        <Route path="/test-prep" element={<TestPrep />} />
        <Route path="/test-prep/sat-act" element={<SatActNaplan />} />
        <Route path="/teaching-methods" element={<TeachingMethods />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
