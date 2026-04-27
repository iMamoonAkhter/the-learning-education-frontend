import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../../style/make-us-different.css";

const features = [
  {
    icon: '👨‍🏫',
    iconBg: '#EEF4FF',
    title: 'Handpicked Expert Tutors',
    front: 'Certified professionals with years of teaching experience.',
    back: 'Every tutor passes a rigorous screening process — subject expertise, communication skills, and teaching methodology are all tested before they join our platform.',
  },
  {
    icon: '📋',
    iconBg: '#FFF8D6',
    title: 'Customized Learning Plans',
    front: "Tailored lessons to fit each student's learning style.",
    back: "We start with a free assessment to identify your child's strengths and gaps, then build a personalized roadmap with clear milestones and weekly progress reports.",
  },
  {
    icon: '💻',
    iconBg: '#FFF8D6',
    title: 'One-on-One Interactive Sessions',
    front: 'Focused tutoring for better concept clarity.',
    back: 'No distractions, no group dynamics — just your child and their dedicated tutor working through concepts at the right pace using interactive whiteboards and tools.',
  },
  {
    icon: '📅',
    iconBg: '#EEF4FF',
    title: 'Affordable & Flexible Schedules',
    front: 'Learn at your own pace, anytime, anywhere.',
    back: 'With plans starting from just £80/month and sessions bookable 7 days a week, we make quality education accessible for every family.',
  },
];

const Make_US_Different = () => {
  const mudTypedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(mudTypedRef.current, {
      strings: ["Different", "Exceptional", "Effective", "Trusted", "Impactful", "Special", "Unique"],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 2200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <section className="wpo-choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <div className="wpo-choose-wrap">
                <div className="wpo-section-title-s2">
                  <small>Why Students & Parents Trust Us?</small>
                  <h2>
                    What Makes Us{" "}
                    <span>
                      <span
                        ref={mudTypedRef}
                        style={{ color: "#FF9682", fontStyle: "italic" }}
                      >Different</span>
                      <i className="shape">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 53" fill="none">
                          <path d="M152.182 2.58319C107.878 0.889793 54.8748 6.13932 21.2281 18.6943C14.2699 21.4407 7.93951 24.7738 5.70192 28.7128C4.27488 31.2398 5.03121 33.954 7.69121 36.2925C14.8835 42.3911 31.9822 45.4011 46.8006 47.3115C78.3067 51.0179 113.672 51.7406 145.489 48.3204C167.194 46.0009 200.667 39.5923 199.399 28.5709C198.543 20.0621 180.437 14.5729 162.979 11.6178C138.219 7.469 111.131 6.00576 84.5743 5.86862C71.32 5.85789 58.0913 6.85723 45.6675 8.78436C33.512 10.7186 21.2709 13.4317 12.6602 17.5817C11.2246 18.2877 8.62449 17.4553 9.9973 16.6813C20.7486 11.2493 38.0215 7.73493 53.9558 5.76368C77.1194 2.90994 101.75 3.75426 125.339 5.14356C158.167 7.2615 207.554 13.5139 204.928 30.7413C203.629 36.0898 194.762 40.5057 184.681 43.5503C156.563 51.768 119.114 53.6844 85.6331 52.5265C65.1694 51.7477 44.4831 50.1855 25.9972 46.2442C11.4129 43.1186 -1.0337 37.8297 0.0679738 30.5063C2.14003 19.9035 31.4913 12.0006 52.6201 7.98775C71.2971 4.45904 91.3384 2.2302 111.674 1.24636C125.228 0.595237 138.962 0.539188 152.536 1.15931C153.475 1.20224 154.154 1.55523 154.051 1.94876C153.951 2.33872 153.115 2.62135 152.182 2.58319Z" />
                        </svg>
                      </i>
                    </span>
                  </h2>
                </div>

                <div className="mud-features-grid">
                  {features.map((f, i) => (
                    <div key={i} className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <div className="mud-icon-circle" style={{ background: f.iconBg }}>{f.icon}</div>
                          <h3>{f.title}</h3>
                          <p>{f.front}</p>
                          <span className="flip-hint">Hover to learn more →</span>
                        </div>
                        <div className="flip-card-back">
                          <div className="flip-back-icon">💬</div>
                          <h3>{f.title}</h3>
                          <p>{f.back}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex align-items-stretch">
              <div style={{
                width: '100%', borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(66,129,255,0.15)',
                background: '#EEF4FF', minHeight: '420px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src="/images/what-makes-us-different.jpg"
                  alt="Mathedemic tutoring session — student learning with expert tutor"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    display: 'block', minHeight: '420px',
                  }}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Make_US_Different;
