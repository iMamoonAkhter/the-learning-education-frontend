import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const teacher = useSelector((state) => state.teacher);
  const tutoring = useSelector((state) => state.tutoring);

  return (
    <>
      <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
          <div className="container">
            <div className="row">
              {/* About Section */}
              <div className="col-12 col-md-6 col-lg-3">
                <div className="widget about-widget">
                  <div className="logo widget-title">
                    <Link className="navbar-brand" to="/">
                      <img src="/images/logo-s2.svg" alt={tutoring.service_name} />
                    </Link>
                  </div>
                  <p>
                    Empowering students worldwide with personalized learning for over 5 years. At
                    Mathedemic, our expert tutors specialize in Mathematics, Science, and Test
                    Preparation (SAT, ACT, GCSE, A-Level, IB, NAPLAN). Join us for tailored academic
                    support and proven results.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <Link to="https://www.facebook.com/" target="_blank">
                          <i className="fi flaticon-facebook-app-symbol"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://twitter.com/" target="_blank">
                          <i className="fi flaticon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/" target="_blank">
                          <i className="fi flaticon-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/" target="_blank">
                          <i className="fi flaticon-instagram-1"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links Section */}
              <div className="col-12 col-md-6 col-lg-3">
                <div className="widget link-widget">
                  <div className="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Useful Links Section */}
              <div className="col-12 col-md-6 col-lg-3">
                <div className="widget link-widget s2">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/terms-and-condition">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/why-choose-us">Why Choose Us</Link>
                    </li>
                    <li>
                      <Link to="/teacher-details">Teacher</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="col-12 col-md-6 col-lg-3">
                <div className="widget wpo-contact-widget">
                  <div className="widget-title">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="contact-ft">
                    <ul>
                      <li>
                        <i className="fi flaticon-email"></i> {teacher.email}
                      </li>
                      <li>
                        <i className="fi flaticon-phone-call"></i>
                        <p>{teacher.phone}</p>
                      </li>
                      <li>
                        <i className="fi flaticon-placeholder"></i> {teacher.address}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="wpo-lower-footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <ul>
                  <li>
                    &copy; 2023 <Link to="/">{tutoring.service_name}</Link>. All rights reserved.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <div className="link">
                  <ul>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;