import About_Badge from '../components/About/About_Badge'
import About_Desc from '../components/About/About_Desc'
import EmpoweringStudent from '../components/About/Empowering_Student.'
import CourseSection from '../components/Home/CourseSection'
import PageHeader from '../components/PageHeader'
const About = () => {
  return (
    <div>
        <PageHeader title="About Us" />
        <EmpoweringStudent />
        <About_Desc />
        <CourseSection />
        <About_Badge />
    </div>
  )
}

export default About