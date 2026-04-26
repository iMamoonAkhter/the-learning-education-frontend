import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink } from "../constants/contact";

const GCSE_MSG = encodeURIComponent("Hi, I'm interested in GCSE test preparation tutoring with Mathedemic. Please let me know the available slots.");
const ALEVEL_MSG = encodeURIComponent("Hi, I'm interested in A-Level tutoring with Mathedemic. Please let me know the available slots.");
const IB_MSG = encodeURIComponent("Hi, I'm interested in IB tutoring with Mathedemic. Please let me know the available slots.");
const AP_MSG = encodeURIComponent("Hi, I'm interested in AP exam tutoring with Mathedemic. Please let me know the available slots.");
const CBSE_MSG = encodeURIComponent("Hi, I'm interested in CBSE tutoring with Mathedemic. Please let me know the available slots.");
const BOOK_MSG = encodeURIComponent("Hi, I'd like to book a free test preparation diagnostic session with Mathedemic. Please let me know the available slots.");

const examBadges = ['SAT', 'ACT', 'GCSE', 'A-Level', 'IB Diploma', 'AP Exams', 'NAPLAN', 'CBSE', 'Entrance Exams'];

const whyCards = [
  {
    icon: '📊',
    title: 'Proven Score Improvements',
    desc: 'Average SAT score increase of 150+ points and ACT improvement of 4+ composite points within 8 weeks of structured preparation.',
  },
  {
    icon: '🎯',
    title: 'Exam-Specific Strategies',
    desc: "Techniques built for each exam's unique format, timing, and marking criteria — not generic tutoring repackaged as test prep.",
  },
  {
    icon: '📋',
    title: 'Full-Length Practice Tests',
    desc: 'Timed mock exams under real conditions, with detailed score breakdowns to track progress and pinpoint weak areas each session.',
  },
  {
    icon: '👨‍🏫',
    title: 'Specialist Exam Tutors',
    desc: "Tutors who've scored in the top percentiles themselves and know precisely what examiners look for in every paper.",
  },
  {
    icon: '🗓️',
    title: 'Flexible Scheduling',
    desc: 'Weekend and evening sessions arranged around your school timetable, with session recordings available for self-review.',
  },
  {
    icon: '🌍',
    title: 'Global Curriculum Coverage',
    desc: 'SAT, ACT, GCSE, A-Level, IB, AP, NAPLAN, and CBSE — one expert team, one platform, every major exam worldwide.',
  },
];

const examCards = [
  {
    icon: '📝',
    title: 'SAT',
    badge: 'Dedicated Page ✓',
    badgeType: 'ready',
    accent: '#4281FF',
    desc: 'US College Board exam — 1,600-point scoring across two sections (Math + Reading & Writing). Essential for US university admissions.',
    facts: ['Score range: 400–1600', 'Duration: 2 hours 14 minutes', 'Typically taken in Grade 11'],
    link: { type: 'to', target: '/test-prep/sat-act', label: 'View SAT Page →' },
  },
  {
    icon: '🎓',
    title: 'ACT',
    badge: 'Dedicated Page ✓',
    badgeType: 'ready',
    accent: '#FF9682',
    desc: 'Four-section exam (English, Math, Reading, Science) with an optional Writing component. Accepted at every US university.',
    facts: ['Composite score: 1–36', 'Duration: 2h 55m (+ optional 40m writing)', 'Accepted alongside SAT at all universities'],
    link: { type: 'to', target: '/test-prep/sat-act', label: 'View ACT Page →' },
  },
  {
    icon: '🇦🇺',
    title: 'NAPLAN',
    badge: 'Dedicated Section ✓',
    badgeType: 'ready',
    accent: '#10B981',
    desc: 'Australian national literacy and numeracy assessment. Taken in Years 3, 5, 7 and 9. Online adaptive format since 2023.',
    facts: ['Years 3, 5, 7 & 9', 'No pass/fail — skill-band reporting', 'Numeracy + Literacy (Reading, Writing, Conventions)'],
    link: { type: 'href', target: '/test-prep/sat-act#naplan', label: 'View NAPLAN Section →' },
  },
  {
    icon: '🇬🇧',
    title: 'GCSE',
    badge: 'Expert Tutors ✓',
    badgeType: 'ready',
    accent: '#4281FF',
    desc: 'UK Key Stage 4 qualifications — Maths, English, Sciences and all core subjects. AQA, Edexcel, OCR, and iGCSE preparation.',
    facts: ['Grades 1–9', 'Year 10–11 (ages 14–16)', 'All major UK exam boards covered'],
    link: { type: 'wa', target: GCSE_MSG, label: 'Book GCSE Prep →' },
  },
  {
    icon: '📐',
    title: 'A-Level',
    badge: 'Expert Tutors ✓',
    badgeType: 'ready',
    accent: '#8B5CF6',
    desc: 'UK sixth-form examinations — the gold standard for UK university entry. Mathematics, Sciences, English, and humanities.',
    facts: ['Grades A*–E', 'Year 12–13 (ages 16–18)', 'All major exam boards (AQA, Edexcel, OCR)'],
    link: { type: 'wa', target: ALEVEL_MSG, label: 'Book A-Level Prep →' },
  },
  {
    icon: '🌐',
    title: 'IB (International Baccalaureate)',
    badge: 'Expert Tutors ✓',
    badgeType: 'ready',
    accent: '#10B981',
    desc: 'Diploma Programme subjects at Standard Level (SL) and Higher Level (HL). Recognised globally by universities worldwide.',
    facts: ['Score range: 1–45 points', 'Maths, Sciences, Languages, Humanities', 'SL and HL for all IB DP subjects'],
    link: { type: 'wa', target: IB_MSG, label: 'Book IB Prep →' },
  },
  {
    icon: '🏆',
    title: 'AP Exams',
    badge: 'Expert Tutors ✓',
    badgeType: 'ready',
    accent: '#FF9682',
    desc: "College Board Advanced Placement — score 3–5 to earn university credit at most US and Canadian institutions.",
    facts: ['Score range: 1–5', 'AP Calculus, Physics, Chemistry, Biology & more', 'Widely accepted for US university credit'],
    link: { type: 'wa', target: AP_MSG, label: 'Book AP Prep →' },
  },
  {
    icon: '🇮🇳',
    title: 'CBSE',
    badge: 'Expert Tutors ✓',
    badgeType: 'ready',
    accent: '#6B7280',
    desc: 'Central Board of Secondary Education — Class 6–12 Maths, Science, English, and Social Science for Indian students worldwide.',
    facts: ['Class 6–12', 'Maths, Science, English & SST', 'Board exam & entrance coaching'],
    link: { type: 'wa', target: CBSE_MSG, label: 'Book CBSE Prep →' },
  },
];

const steps = [
  {
    num: '1',
    title: 'Free Diagnostic Session',
    desc: 'We assess your current performance across every exam section to identify precisely where to focus your preparation for maximum score improvement.',
  },
  {
    num: '2',
    title: 'Personalised Study Plan',
    desc: 'A structured week-by-week plan — covering content, timed practice tests, and proven strategies — built around your target score and exam date.',
  },
  {
    num: '3',
    title: 'Excel in Your Exam',
    desc: 'Consistent expert-led practice, refined strategy sessions, and detailed feedback ensure students arrive on exam day confident and fully prepared.',
  },
];

const TestPrep = () => {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Test Preparation — SAT, ACT, GCSE, A-Level, IB & NAPLAN | Mathedemic</title>
        <meta
          name="description"
          content="Expert test preparation tutoring for SAT, ACT, GCSE, A-Level, IB, AP, NAPLAN, and CBSE. Personalised study plans, full-length practice tests, and specialist exam tutors at Mathedemic."
        />
        <link rel="canonical" href="https://mathedemic.com/test-prep" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Test Preparation", "item": "https://www.mathedemic.com/test-prep"}
          ]
        })}</script>
        <meta property="og:title" content="Test Preparation — SAT, ACT, GCSE, A-Level, IB & NAPLAN | Mathedemic" />
        <meta property="og:description" content="Expert test preparation tutoring for SAT, ACT, GCSE, A-Level, IB, AP, NAPLAN, and CBSE. Personalised study plans, full-length practice tests, and specialist exam tutors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mathedemic.com/test-prep" />
      </Helmet>

      <PageHeader title="Test Preparation" />

      {/* Intro */}
      <section className="tp-intro-section">
        <div className="tp-intro-inner reveal">
          <span className="section-eyebrow">Exam Specialists</span>
          <h2>Comprehensive Test Preparation for Every Major Exam</h2>
          <p>
            From SAT and ACT to GCSE, A-Level, IB, and NAPLAN — our specialist tutors prepare students
            for every major examination. Personalised study plans, full-length practice tests, and
            proven strategies that translate directly into higher scores.
          </p>
          <p>
            We don&apos;t offer generic tutoring repackaged as test prep. Every programme is built
            around the specific format, timing, and scoring of each exam — so students know exactly
            what to expect and how to perform under pressure.
          </p>
          <div className="exam-intro-badges">
            {examBadges.map((b, i) => (
              <span key={i} className="exam-intro-badge">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mathedemic */}
      <section className="tp-why-section">
        <div className="tp-section-inner">
          <h2 className="tp-section-title">Why Mathedemic for Test Prep?</h2>
          <p className="tp-section-sub">
            What sets our exam preparation apart from off-the-shelf courses and generic tutoring apps.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {whyCards.map((card, i) => (
              <div key={i} className="test-prep-step reveal" style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{card.icon}</div>
                <h3 style={{ textAlign: 'left' }}>{card.title}</h3>
                <p style={{ textAlign: 'left' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Hub Cards */}
      <section style={{ background: '#FFFFFF', padding: '80px 24px' }}>
        <div className="tp-section-inner">
          <h2 className="tp-section-title">Exams We Cover</h2>
          <p className="tp-section-sub">
            Expert preparation for every major examination — with dedicated in-depth resources for
            the most popular exams and specialist tutors for all others.
          </p>
          <div className="exam-hub-grid">
            {examCards.map((card, i) => (
              <div
                key={i}
                className="exam-hub-card reveal"
                style={{ '--card-accent': card.accent }}
              >
                <div className="exam-hub-icon">{card.icon}</div>
                <div>
                  <span className={`exam-badge-${card.badgeType}`}>{card.badge}</span>
                  <h3>{card.title}</h3>
                </div>
                <p className="exam-hub-desc">{card.desc}</p>
                <ul className="exam-fact-list" style={{ '--card-accent': card.accent }}>
                  {card.facts.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                {card.link.type === 'to' && (
                  <Link to={card.link.target} className="btn-ghost" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
                    {card.link.label}
                  </Link>
                )}
                {card.link.type === 'href' && (
                  <a href={card.link.target} className="btn-ghost" style={{ marginTop: '8px', alignSelf: 'flex-start' }}>
                    {card.link.label}
                  </a>
                )}
                {card.link.type === 'wa' && (
                  <a
                    href={waLink(card.link.target)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ marginTop: '8px', alignSelf: 'flex-start' }}
                  >
                    {card.link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="tp-steps-section">
        <div className="tp-section-inner">
          <h2 className="tp-section-title">How Our Test Prep Works</h2>
          <p className="tp-section-sub">
            A clear, proven framework from your first session to exam day.
          </p>
          <div className="test-prep-steps">
            {steps.map((step, i) => (
              <div key={i} className="test-prep-step reveal">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="subj-cta-strip">
        <h2>Ready to Start Your Test Preparation?</h2>
        <p>
          Book a free 30-minute diagnostic session. We&apos;ll assess your current level, explain
          our approach, and build a personalised plan — no commitment required.
        </p>
        <div className="subj-cta-btns">
          <a
            href={waLink(BOOK_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📅 Book Free Diagnostic Session
          </a>
        </div>
      </section>
    </>
  );
};

export default TestPrep;
