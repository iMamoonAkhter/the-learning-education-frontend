import React from "react";
import funfactShape1 from "../../../public/images/funfact-shape-1.png";
import funfactShape2 from "../../../public/images/funfact-shape-2.png";

const About_Badge = () => {
  return (
    <section className="wpo-fun-fact-section-s2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {/* Badge Items */}
              {[
                { count: 985, label: "Student Enrolled" },
                { count: 25, label: "Winning Award" },
                { count: 35, label: "Event Organized" },
                { count: 355, label: "Expert Mentor" },
              ].map((item, index) => (
                <div className="grid" key={index}>
                  <div className="info">
                    <h3>
                      <span className="odometer" data-count={item.count}>
                        {item.count}
                      </span>
                      +
                    </h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="shape">
        <img src={funfactShape1} alt="Background Shape 1" />
      </div>
      <div className="shape-2">
        <img src={funfactShape2} alt="Background Shape 2" />
      </div>
    </section>
  );
};

export default About_Badge;
