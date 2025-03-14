import { Tab, Nav } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import teacher_img from "/images/teacher.png";
import { useSelector } from "react-redux";
import "../style/Service.css"
const Services = () => {
  const teacher = useSelector((state) => state.teacher);
  const tutoring = useSelector((state) => state.tutoring);
  return (
    <>
      <PageHeader title={"Services"} />
      <div className="wpo-course-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-course-details-wrap">
                <div className="wpo-course-details-img text-center d-flex justify-content-center align-items-center">
                  <img src={teacher.image} alt="Instructor" />
                </div>

                <Tab.Container defaultActiveKey="Overview">
                  <div className="wpo-course-details-tab">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="Overview">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Curriculum">Curriculum</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Instructor">Instructor</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <div className="wpo-course-details-text">
                    <Tab.Content>
                      {/* Overview Tab */}
                      <Tab.Pane eventKey="Overview">
                        <div className="wpo-course-content">
                          <h2>Empowering Students Through Personalized Education</h2>
                          <p>
                            At <b>{tutoring.service_name}</b>, we believe in unlocking every student's potential through tailored educational support.
                            Our goal is to provide the right guidance and resources to help students excel academically while fostering a passion for learning.
                          </p>

                          <div className="">
                          <h3>Comprehensive Subject Coverage</h3>
                          <ul>
                            <li><b>Mathematics:</b> From foundational arithmetic to advanced calculus.</li>
                            <li><b>Science:</b> Physics, Chemistry, and Biology for deeper understanding.</li>
                            <li><b>English Language & Literature:</b> Strengthening reading, writing, and critical thinking skills.</li>
                            <li><b>Additional Subjects:</b> History, Geography, and Foreign Languages.</li>
                          </ul>

                          <h3>Curriculum-Specific Tutoring</h3>
                          <ul>
                            <li><b>United Kingdom:</b> KS1 to KS5, GCSE, and A-Level preparation.</li>
                            <li><b>United States:</b> Elementary to high school, including SAT & ACT coaching.</li>
                            <li><b>Australia:</b> NAPLAN assessments and all-grade tutoring.</li>
                            <li><b>India (CBSE):</b> CBSE-aligned learning with a focus on foundational concepts.</li>
                            <li><b>International Baccalaureate (IB):</b> Specialized IB support for international students.</li>
                          </ul>
                          </div>
                        </div>
                      </Tab.Pane>

                      {/* Curriculum Tab */}
                      <Tab.Pane eventKey="Curriculum">
                        <div className="wpo-course-content">
                          <h2>Achieve Academic Success with Our Structured Learning Plans</h2>

                          <div className="details-list">
                          <h3>Test Preparation Services</h3>
                          <ul>
                            <li><b>Diagnostic Assessments:</b> Identifying strengths and areas for improvement.</li>
                            <li><b>Practice Tests:</b> Simulating real exam conditions for confidence building.</li>
                            <li><b>Time Management Strategies:</b> Optimizing performance under timed conditions.</li>
                            <li><b>Review Sessions:</b> Focusing on critical content areas.</li>
                          </ul>

                          <h3>Personalized Learning Plans</h3>
                          <ul>
                            <li><b>Set Achievable Goals:</b> Clear learning objectives for motivation.</li>
                            <li><b>Adapt to Learning Styles:</b> Incorporating visual, auditory, and kinesthetic methods.</li>
                            <li><b>Monitor Progress:</b> Regular assessments to track improvement.</li>
                            <li><b>Provide Continuous Feedback:</b> Keeping students and parents informed.</li>
                          </ul>
                          <h3>Flexible and Convenient Scheduling</h3>
                          <ul>
                            <li><b>Customizable Session Times:</b> Available during evenings, weekends, and holidays.</li>
                            <li><b>Online & In-Person Learning:</b> Flexible modes based on preference.</li>
                            <li><b>Rescheduling Flexibility:</b> Adapting to unforeseen availability changes.</li>
                          </ul>

                          <h3>Affordable, High-Quality Education</h3>
                          <ul>
                            <li><b>Competitive Pricing:</b> Transparent and reasonable rates.</li>
                            <li><b>Value Packages:</b> Discounts for bundled sessions or long-term commitments.</li>
                            <li><b>No Hidden Fees:</b> Clear cost communication with no surprises.</li>
                            <li><b>Scholarship Opportunities:</b> Financial assistance programs for eligible students.</li>
                          </ul>
                          </div>

                         
                        </div>
                      </Tab.Pane>

                      {/* Instructor Tab */}
                      <Tab.Pane eventKey="Instructor">
                        <div className="team-info-wrap">
                          <div className="row align-items-center">
                            <div className="col-lg-5">
                              <div className="team-info-img">
                                <img src={teacher_img} alt="Instructor" />
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="team-info-text">
                                <h2>{teacher.name}</h2>
                                <ul>
                                  <li><b>Position:</b> <span>{teacher.position}</span></li>
                                  <li><b>Experience:</b> <span>{teacher.experience}</span></li>
                                  <li><b>Phone:</b> <span>{teacher.phone}</span></li>
                                  <li><b>Email:</b> <span>{teacher.email}</span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
