import { Helmet } from "react-helmet-async";
import CourseSection from "../components/Home/CourseSection";
import Make_US_Different from "../components/Home/Make_US_Different";
import SmarterWay from "../components/Home/SmarterWay";
import Testimonials from "../components/Home/Testimonal";
import HomeHero from "../components/HomeHero";
import HowItWorks from "../components/Home/HowItWorks";
import StatsStrip from "../components/Home/StatsStrip";
import TrustBadges from "../components/Home/TrustBadges";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Mathedemic — Personalized Online Tutoring for Every Student</title>
        <meta name="description" content="Mathedemic offers personalized one-on-one online tutoring for students in the UK, USA, Australia, and beyond. Expert tutors for Maths, Science, and English — GCSE, A-Level, SAT, IB, and more. Book your free trial today." />
        <meta name="keywords" content="online tutoring, math tutor, online maths tutor UK, GCSE tutor, SAT prep, one-on-one tutoring, online tutor for kids" />
        <meta property="og:title" content="Mathedemic — Personalized Online Tutoring for Every Student" />
        <meta property="og:description" content="Expert one-on-one tutors for Maths, Science & English. Serving UK, USA, Australia. Book a free trial session today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mathedemic.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mathedemic — Personalized Online Tutoring" />
        <meta name="twitter:description" content="Expert one-on-one tutors for Maths, Science & English. Book a free trial today." />
        <link rel="canonical" href="https://www.mathedemic.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"}
          ]
        })}</script>
      </Helmet>
      <HomeHero />
      <SmarterWay />
      <Make_US_Different />
      <HowItWorks />
      <CourseSection />
      <Testimonials />
      <TrustBadges />
      <StatsStrip />
    </>
  );
};

export default Home;
