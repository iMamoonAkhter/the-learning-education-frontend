import React, { useEffect, useRef, useState } from "react";
import funfactShape1 from "/images/funfact-shape-1.png";
import funfactShape2 from "/images/funfact-shape-2.png";

const stats = [
  { target: 20, label: "Professional Tutors" },
  { target: 20, label: "Subjects Covered" },
  { target: 500, label: "Students Tutored" },
  { target: 5, label: "Years of Experience" },
];

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(easeOutQuart(progress) * target));
            if (progress < 1) requestAnimationFrame(update);
            else setCount(target);
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );
    if (elRef.current) observer.observe(elRef.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={elRef}>{count}</span>;
};

const About_Badge = () => {
  return (
    <section className="wpo-fun-fact-section-s2 section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-fun-fact-grids clearfix">
              {stats.map((item, index) => (
                <div className="grid" key={index}>
                  <div className="info">
                    <h3>
                      <AnimatedCounter target={item.target} />+
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
        <img src={funfactShape1} alt="" aria-hidden="true" width="120" height="120" loading="lazy" />
      </div>
      <div className="shape-2">
        <img src={funfactShape2} alt="" aria-hidden="true" width="120" height="120" loading="lazy" />
      </div>
    </section>
  );
};

export default About_Badge;
