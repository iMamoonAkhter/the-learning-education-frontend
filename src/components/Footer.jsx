import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "/images/LOGO/PNG/White Logo PNG@2x.png"

// Custom styles
const footerLinkStyle = {
  textDecoration: "none"
};

const Footer = () => {
  const teacher = useSelector((state) => state.teacher);
  const tutoring = useSelector((state) => state.tutoring);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  };

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
                    <Link style={footerLinkStyle} className="navbar-brand" to="/" onClick={scrollToTop}>
                      <img src={logo} alt={tutoring.service_name} />
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
                        <Link style={footerLinkStyle} to="https://www.facebook.com/" target="_blank">
                          <i className="fi flaticon-facebook-app-symbol"></i>
                        </Link>
                      </li>
                      <li>
                        <Link style={footerLinkStyle} to="https://twitter.com/" target="_blank">
                          <i className="fi flaticon-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link style={footerLinkStyle} to="https://www.linkedin.com/" target="_blank">
                          <i className="fi flaticon-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link style={footerLinkStyle} to="https://www.instagram.com/" target="_blank">
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
                      <Link style={footerLinkStyle} to="/" onClick={scrollToTop}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/about" onClick={scrollToTop}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/contact" onClick={scrollToTop}>
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/services" onClick={scrollToTop}>
                        Services
                      </Link>
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
                      <Link style={footerLinkStyle} to="/terms-and-condition" onClick={scrollToTop}>
                        Terms & Condition
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/why-choose-us" onClick={scrollToTop}>
                        Why Choose Us
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/teacher-details" onClick={scrollToTop}>
                        Teacher
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/faq" onClick={scrollToTop}>
                        FAQ
                      </Link>
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
                      <li className="text-lowercase">
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
                    &copy; 2023 <Link style={footerLinkStyle} to="/" onClick={scrollToTop}>{tutoring.service_name}</Link>. All rights reserved.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <div className="link">
                  <ul>
                    <li>
                      <Link style={footerLinkStyle} to="/about" onClick={scrollToTop}>
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link style={footerLinkStyle} to="/faq" onClick={scrollToTop}>
                        FAQ
                      </Link>
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