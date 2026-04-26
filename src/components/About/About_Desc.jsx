import React from 'react';
import "../../style/about-container.css";

const wsoCards = [
  {
    icon: "🌍",
    bg: "#EEF4FF",
    title: "Global Reach, Local Impact",
    desc: "Supporting students in the UK, USA, Australia, and beyond with curriculum-aligned lessons.",
  },
  {
    icon: "👨‍🏫",
    bg: "#FFF0EE",
    title: "Expert, Vetted Tutors",
    desc: "Every tutor is rigorously screened for subject knowledge, teaching ability, and communication skills.",
  },
  {
    icon: "📅",
    bg: "#FFF8D6",
    title: "Flexible & Convenient",
    desc: "Schedule sessions at times that suit your family — mornings, evenings, or weekends.",
  },
  {
    icon: "💰",
    bg: "#EEF4FF",
    title: "Affordable & High-Quality",
    desc: "Premium tutoring without the premium price. Transparent plans with no hidden charges.",
  },
  {
    icon: "🎯",
    bg: "#FFF0EE",
    title: "Personalized Learning Plans",
    desc: "Each student gets a custom roadmap built around their strengths, gaps, and academic goals.",
  },
  {
    icon: "📈",
    bg: "#FFF8D6",
    title: "Proven Results",
    desc: "Over 500 students improved their grades, with measurable progress tracked every session.",
  },
];

const About_Desc = () => {
  return (
    <div className="about-container">
      {/* Why We Stand Out */}
      <div style={{ paddingBottom: "48px" }}>
        <h3
          className="section-title border-bottom pb-2 mb-4"
          style={{ textAlign: "center", fontSize: "28px", fontWeight: 700, color: "#1A1A2E" }}
        >
          Why We Stand Out
        </h3>
        <div className="wso-grid">
          {wsoCards.map((card, i) => (
            <div className="wso-card reveal" key={i}>
              <div className="wso-icon" style={{ background: card.bg }}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission side-by-side */}
      <div className="vision-mission-grid">
        <div className="vm-card vm-vision reveal">
          <div className="vm-icon">🔭</div>
          <h2>Our Vision</h2>
          <p className="vm-lead">Shaping the Future of Learning</p>
          <ul>
            <li>Access to high-quality education for every student, regardless of background</li>
            <li>Learning that is engaging, flexible, and empowering — not just exam-focused</li>
            <li>Building confidence and curiosity that lasts beyond the classroom</li>
          </ul>
          <p style={{ marginTop: "16px", fontSize: "14px", color: "#374151" }}>
            Through our innovative platform, learning becomes a confidence-building journey
            where students deeply understand concepts instead of memorising them.
          </p>
        </div>

        <div className="vm-card vm-mission reveal reveal-delay-2">
          <div className="vm-icon">🎯</div>
          <h2>Our Mission</h2>
          <p className="vm-lead">Personalized, Affordable, and Effective Tutoring</p>
          <ul>
            <li>Customized learning roadmaps for each student's unique needs</li>
            <li>Flexible scheduling that fits around school and family life</li>
            <li>Interactive, engaging lessons that build deep understanding</li>
            <li>Nurturing both academic excellence and personal growth</li>
          </ul>
          <p style={{ marginTop: "16px", fontSize: "14px", color: "#374151", fontWeight: 600 }}>
            Join us on this journey of learning, growth, and success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_Desc;
