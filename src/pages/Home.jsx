import CourseSection from "../components/Home/CourseSection"
import Make_US_Different from "../components/Home/Make_US_Different"
import SmarterWay from "../components/Home/SmarterWay"
import Carousel from "../components/Home/SubjectSlider"
import Testimonials from "../components/Home/Testimonal"
import HomeHero from "../components/HomeHero"

const Home = () => {
  return (
    <>
        <HomeHero />
        <SmarterWay />
        <CourseSection />
        <Testimonials />
        <Make_US_Different />
    </>
  )
}

export default Home