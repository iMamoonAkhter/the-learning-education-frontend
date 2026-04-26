import { Helmet } from "react-helmet-async";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../style/Service.css";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";

const subjectCards = [
  {
    className: "subject-math",
    icon: "∑",
    title: "Mathematics",
    desc: "From foundational arithmetic to advanced calculus. We cover all levels including GCSE, A-Level, AP, and IB Maths.",
    to: "/subjects/maths",
  },
  {
    className: "subject-english",
    icon: "📖",
    title: "English Language & Literature",
    desc: "Strengthening reading, writing, comprehension, and critical thinking for all ages and exam boards.",
    to: "/subjects/english",
  },
  {
    className: "subject-science",
    icon: "⚗️",
    title: "Science",
    desc: "Physics, Chemistry, and Biology taught with depth and clarity for GCSE, A-Level, and international curricula.",
    to: "/subjects/science",
  },
];

const curriculumCards = [
  { flag: "🇬🇧", title: "United Kingdom", desc: "KS1 to KS5, GCSE, and A-Level preparation across all core subjects." },
  { flag: "🇺🇸", title: "United States", desc: "Elementary through high school, including SAT & ACT coaching.", link: "/test-prep/sat-act", linkLabel: "SAT & ACT Prep →" },
  { flag: "🇦🇺", title: "Australia", desc: "NAPLAN assessments and all-grade tutoring aligned to Australian curriculum.", link: "/test-prep/sat-act#naplan", linkLabel: "NAPLAN Prep →" },
  { flag: "🌐", title: "International Baccalaureate", desc: "Specialized IB support for international students at all IB levels." },
  { flag: "🇮🇳", title: "India (CBSE)", desc: "CBSE-aligned learning with a strong focus on foundational concepts." },
];

const additionalSubjects = [
  {
    icon: '📝',
    title: 'Test Preparation',
    desc: 'SAT, ACT, GCSE, A-Level, IB, NAPLAN — comprehensive exam coaching with proven strategies and practice papers.',
    bg: '#EEF4FF',
    border: '#4281FF',
    to: '/test-prep',
  },
  {
    icon: '🌍',
    title: 'History & Geography',
    desc: 'Engaging, curriculum-aligned lessons covering key topics, map skills, and essay techniques for all year groups.',
    bg: '#FFF0EE',
    border: '#FF9682',
  },
  {
    icon: '⚡',
    title: 'Physics',
    desc: 'Mechanics, waves, electricity, and quantum — expert Physics tuition for GCSE, A-Level, and IB students.',
    bg: '#F3F0FF',
    border: '#8B5CF6',
    to: '/subjects/science-subjects',
  },
  {
    icon: '🧪',
    title: 'Chemistry',
    desc: 'Organic, inorganic, and physical chemistry — clear explanations and exam technique for all levels.',
    bg: '#FFF0EE',
    border: '#FF9682',
    to: '/subjects/science-subjects',
  },
  {
    icon: '🌿',
    title: 'Biology',
    desc: 'From cells to ecosystems — Biology tuition covering GCSE, A-Level, and IB Human Biology.',
    bg: '#ECFDF5',
    border: '#10B981',
    to: '/subjects/science-subjects',
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services — Maths, Science, English & Test Prep Tutoring</title>
        <meta name="description" content="Explore Mathedemic's tutoring services — Mathematics, Science, English, and Test Preparation (SAT, ACT, GCSE, A-Level, IB, NAPLAN). Tailored one-on-one sessions for every curriculum." />
        <link rel="canonical" href="https://mathedemic.com/services" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.mathedemic.com/services"}
          ]
        })}</script>
      </Helmet>
      <PageHeader title={"Services"} />
      <div className="wpo-course-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wpo-course-details-wrap">
                <Tab.Container defaultActiveKey="Overview">
                  <div className="wpo-course-details-tab">
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="Overview">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Curriculum">Curriculum</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <div className="wpo-course-details-text">
                    <Tab.Content>
                      {/* Overview Tab */}
                      <Tab.Pane eventKey="Overview">
                        <div className="wpo-course-content">
                          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>
                            Comprehensive Tutoring Across Every Curriculum
                          </h2>
                          <p style={{ textAlign: "center", color: "#6B7280", maxWidth: "660px", margin: "0 auto 8px" }}>
                            Expert, one-on-one sessions for Maths, Science, English, and Test Preparation —
                            aligned to UK, US, Australian, Indian (CBSE), and IB curricula.
                          </p>

                          {/* Subject Cards */}
                          <div className="subject-cards">
                            {subjectCards.map((card, i) => (
                              <div className={`subject-card ${card.className} reveal`} key={i}>
                                <span className="subject-card-icon">{card.icon}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                                <Link to={card.to} className="btn-ghost">
                                  Learn More →
                                </Link>
                              </div>
                            ))}
                          </div>

                          {/* Additional Subjects Cards */}
                          <section className="additional-subjects-section">
                            <h2 className="additional-subjects-title">Additional Subjects & Test Prep</h2>
                            <p className="additional-subjects-sub">Comprehensive support beyond core subjects — covering exams, languages, and humanities.</p>
                            <div className="additional-subjects-grid">
                              {additionalSubjects.map((subj, i) => (
                                <div
                                  key={i}
                                  className="additional-subject-card"
                                  style={{ '--card-bg': subj.bg, '--card-border': subj.border }}
                                >
                                  <div className="add-subj-icon">{subj.icon}</div>
                                  <h3>{subj.title}</h3>
                                  <p>{subj.desc}</p>
                                  {subj.to ? (
                                    <Link to={subj.to} className="btn-ghost">
                                      Learn More →
                                    </Link>
                                  ) : (
                                    <a
                                      href={waLink(WHATSAPP_BOOKING_MESSAGE)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn-ghost"
                                    >
                                      Book a Session →
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          </section>
                        </div>
                      </Tab.Pane>

                      {/* Curriculum Tab */}
                      <Tab.Pane eventKey="Curriculum">
                        <div className="wpo-course-content">
                          <h2 style={{ textAlign: "center", marginBottom: "8px" }}>
                            Curriculum-Specific Tutoring
                          </h2>
                          <p style={{ textAlign: "center", color: "#6B7280", maxWidth: "600px", margin: "0 auto 32px" }}>
                            We tailor every lesson to the specific curriculum your child follows, ensuring
                            every session is relevant, targeted, and effective.
                          </p>

                          <div className="curriculum-grid">
                            {curriculumCards.map((card, i) => (
                              <div className="curr-card reveal" key={i}>
                                <span className="curr-flag">{card.flag}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                                {card.link && (
                                  <Link to={card.link} style={{ color: '#4281FF', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                                    {card.linkLabel}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>

                          <div style={{ maxWidth: "1100px", margin: "56px auto 0", padding: "0 24px 48px" }}>
                            <h2 style={{ textAlign: "center", marginBottom: "8px" }}>Our Structured Learning Plans</h2>
                            <p style={{ textAlign: "center", color: "#6B7280", marginBottom: "40px", fontSize: "15px" }}>
                              A clear, proven framework that takes every student from assessment to achievement.
                            </p>
                            <div style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                              gap: "24px",
                            }}>
                              {[
                                { icon: '🔍', title: 'Diagnostic Assessments', desc: 'Identifying strengths and areas for improvement before lessons begin.', bg: '#EEF4FF', border: '#4281FF' },
                                { icon: '📋', title: 'Practice Tests', desc: 'Simulating real exam conditions for confidence and time management.', bg: '#FFF8D6', border: '#FFD562' },
                                { icon: '🗺️', title: 'Personalized Roadmaps', desc: 'Clear learning objectives tailored to each student\'s goals.', bg: '#FFF0EE', border: '#FF9682' },
                                { icon: '📊', title: 'Regular Progress Reports', desc: 'Keeping students and parents informed every step of the way.', bg: '#EEF4FF', border: '#4281FF' },
                              ].map((item, i) => (
                                <div
                                  key={i}
                                  className="reveal"
                                  style={{
                                    background: item.bg,
                                    borderTop: `4px solid ${item.border}`,
                                    borderRadius: '16px',
                                    padding: '28px 24px',
                                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                  }}
                                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.10)'; }}
                                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                                >
                                  <div style={{ fontSize: '36px', marginBottom: '14px' }}>{item.icon}</div>
                                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '10px' }}>{item.title}</h3>
                                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
