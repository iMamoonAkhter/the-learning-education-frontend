import logo from "../../public/images/logo-s2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-sm-12">
                <div className="widget about-widget">
                  <div className="logo widget-title">
                    <Link className="navbar-brand" to="/">
                      <img src={logo} alt="Eduko Logo" />
                    </Link>
                  </div>
                  <p>
                    Mattis inelit neque quis donec eleifend amet. Amet sed et
                    cursus eu euismod. Egestas in morbi tristique ornare
                    vulputate vitae enim.
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

              <div className="col col-lg-3 col-md-6 col-sm-12">
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

              <div className="col col-lg-3 col-md-6 col-sm-12">
                <div className="widget link-widget s2">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/testimonial">Testimonials</Link>
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

              <div className="col col-lg-3 col-md-6 col-sm-12">
                <div className="widget wpo-contact-widget">
                  <div className="widget-title">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="contact-ft">
                    <ul>
                      <li>
                        <i className="fi flaticon-email"></i> Eduko@gmail.com
                      </li>
                      <li>
                        <i className="fi flaticon-phone-call"></i>
                        <span>(208) 555-0112</span> <br />
                        <span>(704) 555-0127</span>
                      </li>
                      <li>
                        <i className="fi flaticon-placeholder"></i> 4517
                        Washington Ave. <br /> Manchter, Kentucky 495
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
              <div className="col col-lg-6 col-md-12">
                <ul>
                  <li>
                    &copy; 2023 <Link to="/">Eduko</Link>. All rights reserved.
                  </li>
                </ul>
              </div>
              <div className="col col-lg-6 col-md-12">
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
