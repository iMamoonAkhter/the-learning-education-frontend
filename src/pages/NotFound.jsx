import React from "react";
import { Link } from "react-router-dom"; // Correct way to handle navigation
import shape1 from "../assets/images/shape/1.svg";
import shape2 from "../assets/images/shape/2.svg";
import shape3 from "../assets/images/shape/3.svg";
import shape4 from "../assets/images/shape/4.svg";
import error404 from "../assets/images/error-404.png";

const NotFound = () => {
  return (
    <div>
      <section className="wpo-page-title">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="wpo-breadcumb-wrap">
                <h2>404</h2>
                <ol>
                  <li><Link to="/">Home</Link></li>
                  <li>404</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-1"><img src={shape1} alt="Shape 1" /></div>
        <div className="shape-2"><img src={shape2} alt="Shape 2" /></div>
        <div className="shape-3"><img src={shape3} alt="Shape 3" /></div>
        <div className="shape-4"><img src={shape4} alt="Shape 4" /></div>
      </section>

      <section className="error-404-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="content clearfix">
                <div className="error d-flex justify-content-center align-content-center" >
                  <img src={error404} alt="404 Error" />
                </div>
                <div className="error-message">
                  <h3>Oops! Page Not Found!</h3>
                  <p>We’re sorry but we can’t seem to find the page you requested. This might be because
                    you have typed the web address incorrectly.</p>
                  <Link to="/" className="theme-btn">Back to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
