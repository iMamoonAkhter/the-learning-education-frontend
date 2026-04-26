import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";

const gradeLevels = [
  {
    icon: "🔢",
    title: "Foundations",
    range: "Grades 1–5 · KS1 & KS2",
    color: "#4281FF",
    bg: "#EEF4FF",
    topics: [
      "Number sense: counting, place value & whole numbers",
      "Arithmetic: addition, subtraction, multiplication, division",
      "Fractions, decimals & percentages",
      "Measurement: time, length, weight, volume",
      "Geometry: 2D shapes, angles & symmetry",
      "Patterns, sequences & early data handling",
    ],
  },
  {
    icon: "📐",
    title: "Pre-Algebra & Algebra",
    range: "Grades 6–9 · KS3 & GCSE Foundation",
    color: "#FF9682",
    bg: "#FFF0EE",
    topics: [
      "Integers, rational numbers & prime factorisation",
      "Ratios, proportions & percentage problems",
      "Linear equations & inequalities",
      "Introduction to coordinate geometry & graphs",
      "Polynomials: expansion, factorisation & quadratics",
      "Introduction to probability & data analysis",
    ],
  },
  {
    icon: "📊",
    title: "GCSE & Advanced Algebra",
    range: "Grades 9–11 · GCSE Higher & AS Level",
    color: "#10B981",
    bg: "#ECFDF5",
    topics: [
      "Circle theorems, Pythagoras & trigonometry (SOH CAH TOA)",
      "Statistical analysis, box plots & probability trees",
      "Vectors & transformation geometry",
      "Simultaneous equations & quadratic functions",
      "Functions, composite functions & inverse functions",
      "Sequences: arithmetic & geometric (nth term)",
    ],
  },
  {
    icon: "∫",
    title: "A-Level, AP & IB",
    range: "Grades 11–13 · A-Level · AP Calculus · IB HL",
    color: "#8B5CF6",
    bg: "#F3F0FF",
    topics: [
      "Differentiation: rules, chain rule, implicit & related rates",
      "Integration: definite, indefinite & by parts",
      "Advanced trigonometry, identities & radians",
      "Logarithms, exponentials & natural functions",
      "Mechanics: kinematics, forces & Newton's laws",
      "Statistics: distributions, hypothesis testing & correlation",
    ],
  },
];

const whyPoints = [
  "One-on-one sessions tailored to your child's exact curriculum and exam board",
  "Covers GCSE, A-Level, SAT, ACT, IB Mathematics, AP Calculus & NAPLAN",
  "Flexible weekday and weekend scheduling to fit your family routine",
  "Expert tutors holding degrees in Mathematics and STEM disciplines",
  "Regular progress reports so parents stay fully informed every step of the way",
  "Students average two grade bands improvement within a single term",
];

const GradeCard = ({ g, i }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className={`grade-card reveal reveal-delay-${(i % 4) + 1}`}>
      <div className="grade-card-header" style={{ background: g.bg, borderBottom: `3px solid ${g.color}` }}>
        <div className="grade-card-icon" style={{ background: g.color, color: "#fff" }}>{g.icon}</div>
        <div><h3>{g.title}</h3><span>{g.range}</span></div>
      </div>
      <div className={`grade-card-body${collapsed ? ' collapsed' : ''}`}>
        <ul className="grade-topics">
          {g.topics.map((t, j) => (
            <li key={j} style={{ "--check-color": g.color }}>{t}</li>
          ))}
        </ul>
        <button className="grade-expand-btn" onClick={() => setCollapsed(c => !c)}>
          {collapsed ? `▼ Show all ${g.topics.length} topics` : '▲ Show less'}
        </button>
      </div>
    </div>
  );
};

const Mathematics = () => {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Mathematics Tutoring — GCSE, A-Level, SAT & IB | Mathedemic</title>
        <meta
          name="description"
          content="Expert one-on-one Mathematics tutoring for all levels — GCSE, A-Level, SAT, ACT, IB, AP & NAPLAN. Personalised sessions covering every UK, US, and International curriculum."
        />
        <link rel="canonical" href="https://mathedemic.com/subjects/maths" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Subjects", "item": "https://www.mathedemic.com/services"},
            {"@type": "ListItem", "position": 3, "name": "Mathematics", "item": "https://www.mathedemic.com/subjects/maths"}
          ]
        })}</script>
      </Helmet>

      <PageHeader title="Mathematics Tutoring" />

      {/* Intro */}
      <div className="subj-page-intro">
        <div className="subj-page-intro-text reveal">
          <span className="section-eyebrow">Core Subject</span>
          <h1>Expert Mathematics Tutoring for Every Level</h1>
          <p>
            From counting and fractions in primary school to calculus and statistics at A-Level — our
            experienced Maths tutors deliver clear, structured, one-on-one sessions that build real
            understanding and lasting exam confidence.
          </p>
          <div className="curriculum-badges">
            <span className="curr-badge">🇬🇧 GCSE &amp; A-Level</span>
            <span className="curr-badge">🇺🇸 SAT / ACT / AP</span>
            <span className="curr-badge">🌐 IB Mathematics</span>
            <span className="curr-badge">🇦🇺 NAPLAN</span>
            <span className="curr-badge">🇮🇳 CBSE</span>
          </div>
          <a
            href={waLink(WHATSAPP_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Trial Lesson →
          </a>
        </div>
        <div className="subj-page-intro-img reveal reveal-delay-2">
          <img
            src="/images/Mthedemic_Math_Tutoring_Services.png"
            alt="Student working through mathematics problems with a Mathedemic tutor"
            width="560"
            height="420"
            loading="lazy"
          />
        </div>
      </div>

      {/* Grade Level Cards */}
      <section className="grade-cards-section">
        <div className="grade-cards-inner">
          <h2>What We Cover — By Grade Level</h2>
          <p className="section-sub">
            Structured content aligned to your curriculum, from Primary all the way through A-Level and beyond.
          </p>
          <div className="grade-cards-grid">
            {gradeLevels.map((g, i) => <GradeCard key={i} g={g} i={i} />)}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <div className="subj-why-section">
        <div className="subj-why-text reveal">
          <span className="section-eyebrow">Why Mathedemic</span>
          <h2>Why Our Maths Tutoring Works</h2>
          <p>
            We don&apos;t just help students pass exams — we help them genuinely understand Mathematics,
            building confidence that lasts far beyond the test.
          </p>
          <ul className="subj-why-list">
            {whyPoints.map((pt, i) => (
              <li key={i}>
                <span className="check-circle">✓</span>
                {pt}
              </li>
            ))}
          </ul>
          <div className="subj-cta-btns" style={{ justifyContent: "flex-start" }}>
            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Trial
            </a>
            <Link to="/fee-structure" className="btn-ghost">
              View Fees →
            </Link>
          </div>
        </div>
        <div className="subj-why-image reveal reveal-delay-2">
          <img
            src="/images/Mathedemic_why_choose_us_2.png"
            alt="Mathedemic personalised mathematics learning session"
            width="520"
            height="400"
            loading="lazy"
          />
        </div>
      </div>

      {/* CTA Strip */}
      <section className="subj-cta-strip">
        <h2>Ready to Excel in Mathematics?</h2>
        <p>
          Book a free 30-minute trial session. No commitment — just a chance to see the difference
          personalised tutoring makes.
        </p>
        <div className="subj-cta-btns">
          <a
            href={waLink(WHATSAPP_BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📅 Book Free Trial
          </a>
        </div>
      </section>
    </>
  );
};

export default Mathematics;
