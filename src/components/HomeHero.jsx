import { useEffect, useRef } from "react";
import Typed from "typed.js";
import slider1 from "/images/slider/1.png";
import shape_1 from "/images/slider/shape-1.svg";
import shape_2 from "/images/slider/shape-2.svg";
import shape_3 from "/images/slider/shape-3.svg";
import shape_4 from "/images/slider/shape-4.svg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style/Homehero.css";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";

const tutorAvatars = [
  { initials: 'HN', bg: '#4281FF' },
  { initials: 'SR', bg: '#FF9682' },
  { initials: 'MN', bg: '#FFD562', color: '#1A1A2E' },
  { initials: 'AR', bg: '#4281FF' },
  { initials: 'MA', bg: '#FF9682' },
];

const HomeHero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Online Tutoring",
        "Maths Tutoring",
        "Science Support",
        "English Tutoring",
        "Homework Help",
        "GCSE Prep",
        "A-Level Coaching",
        "SAT & ACT Prep",
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      cursorChar: '|',
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="page-wrapper">
      <section className="static-hero">
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container-fluid">
              <div className="hero-content">
                <div data-swiper-parallax="300" className="slide-title-sub">
                  <span>Find Your Perfect Tutor</span>
                </div>
                <div data-swiper-parallax="300" className="slide-title hero-anim-title">
                  <h2>
                    Personalized{" "}
                    <span style={{ color: "#4281FF", fontStyle: "italic" }}>
                      <span ref={typedRef}>Online Tutoring</span>
                    </span>
                    {" "}For Every Student
                  </h2>
                </div>
                <div data-swiper-parallax="400" className="slide-text hero-anim-text">
                  <p>
                    One-on-One tutoring to help students excel in their studies. Get the best
                    learning experience with expert tutors from top universities.
                  </p>
                </div>
                <div className="clearfix"></div>
                <div data-swiper-parallax="500" className="slide-btns hero-anim-btns">
                  <a
                    href={waLink(WHATSAPP_BOOKING_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-mat"
                  >
                    Get Free Trial
                  </a>
                </div>
                <div className="hero-trust-strip">
                  <span>✅ No registration needed</span>
                  <span>✅ First session free</span>
                  <span>✅ Cancel anytime</span>
                  <span>✅ Certified tutors</span>
                </div>
                <div className="student-pic">
                  <img
                    src={slider1}
                    alt="Student studying online with a Mathedemic tutor"
                  />
                  <div className="student-shape">
                    <div className="shape-1 wow zoomIn" data-wow-duration="2000ms"></div>
                    <div className="shape-2 wow zoomIn" data-wow-duration="1500ms"></div>
                    <div className="shape-3 wow zoomIn" data-wow-duration="1000ms"></div>
                  </div>
                  <div className="student hero-anim-badge-1">
                    <div className="icon">
                      <i className="fi flaticon-team"></i>
                    </div>
                    <div className="content">
                      <h3>500+</h3>
                      <p>Satisfied Students</p>
                    </div>
                  </div>
                  <div className="wpo-supporter hero-anim-badge-2">
                    <div className="wpo-supporter-text">
                      <div className="content">
                        <h3>20+</h3>
                        <p>Professional Tutors</p>
                      </div>
                    </div>
                    <div className="wpo-supporter-img">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {tutorAvatars.map((t, idx) => (
                          <div key={idx} style={{
                            width: 34, height: 34, borderRadius: '50%',
                            background: t.bg, color: t.color || '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '11px', fontWeight: 700,
                            marginLeft: idx > 0 ? '-8px' : 0,
                            border: '2px solid #fff',
                            flexShrink: 0,
                          }}>
                            {t.initials}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="wp-shape-1"><img src={shape_1} alt="" aria-hidden="true" width="80" height="80" /></div>
                  <div className="wp-shape-2"><img src={shape_2} alt="" aria-hidden="true" width="80" height="80" /></div>
                  <div className="wp-shape-3"><img src={shape_3} alt="" aria-hidden="true" width="60" height="60" /></div>
                  <div className="wp-shape-4"><img src={shape_4} alt="" aria-hidden="true" width="60" height="60" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
