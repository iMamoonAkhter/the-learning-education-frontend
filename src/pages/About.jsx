import { Helmet } from "react-helmet-async";
import About_Badge from '../components/About/About_Badge'
import About_Desc from '../components/About/About_Desc'
import EmpoweringStudent from '../components/About/Empowering_Student.'
import CourseSection from '../components/Home/CourseSection'
import PageHeader from '../components/PageHeader'
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Mathedemic — Our Mission, Tutors & Teaching Approach</title>
        <meta name="description" content="Learn about Mathedemic's mission to make personalized, affordable online tutoring accessible worldwide. Meet our qualified tutors and discover our teaching approach." />
        <link rel="canonical" href="https://www.mathedemic.com/about" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "About", "item": "https://www.mathedemic.com/about"}
          ]
        })}</script>
      </Helmet>
        <PageHeader title="About Us" />
        <EmpoweringStudent />
        <About_Desc />
        <CourseSection />
        <About_Badge />
    </div>
  )
}

export default About