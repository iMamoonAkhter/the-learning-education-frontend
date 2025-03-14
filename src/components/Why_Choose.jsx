import React from "react";
import { FaCheckCircle, FaChalkboardTeacher, FaCalendarAlt, FaChartLine, FaBookOpen, FaGlobe, FaComments, FaLaptop } from "react-icons/fa"; // Icons for list items
import "../style/why-choose.css"; // Import the custom CSS
import { useSelector } from "react-redux";

const Why_Choose = () => {
  const tutoring = useSelector((state) => state.tutoring);

  return (
    <div>
      <section className="wpo-why-choose-us section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="wpo-section-title text-center">
                <h2>Why Choose Us</h2>
                <p>
                  At {tutoring.service_name}, we are committed to providing
                  exceptional educational support tailored to each student's
                  unique needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="why-choose-list">
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Affordable Fee Packages</h3>
                    <p>
                      Our competitive pricing ensures that every student can
                      receive expert support without financial strain.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaChalkboardTeacher />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Personalized Lesson Plans</h3>
                    <p>
                      Customized lessons to match each student’s learning pace
                      and academic goals.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaCalendarAlt />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Flexible Scheduling</h3>
                    <p>
                      Convenient tutoring sessions available in the evenings,
                      weekends, or holidays.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaChartLine />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Proven Results with Guaranteed Improvement</h3>
                    <p>
                      Our focused approach helps students improve grades and test
                      scores.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="why-choose-list">
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaBookOpen />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Expert Tutors with Proven Experience</h3>
                    <p>
                      Passionate educators with extensive teaching expertise.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaGlobe />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Support for Multiple Curricula</h3>
                    <p>
                      We offer tutoring for UK, USA, Australian, and
                      international curricula.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaComments />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Engaging, Interactive Learning Environment</h3>
                    <p>
                      Interactive lessons encourage critical thinking and active
                      participation.
                    </p>
                  </div>
                </li>
                <li className="why-choose-item">
                  <div className="why-choose-item-icon">
                    <FaLaptop />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Easy Online Access & Free Trial Class</h3>
                    <p>
                      Access tutoring from anywhere and try a free trial session
                      before committing.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Why_Choose;