import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";

const gradeLevels = [
  {
    icon: "🔬",
    title: "General Science",
    range: "Grades 1–5 · KS1 & KS2",
    color: "#10B981",
    bg: "#ECFDF5",
    topics: [
      "Scientific method: observation, hypothesis & experiment",
      "Living & non-living things: plants, animals & habitats",
      "The human body: organs, senses & basic biology",
      "Earth & space: seasons, day/night, planets & weather",
      "States of matter: solids, liquids & gases",
      "Energy & forces: light, sound & simple machines",
    ],
  },
  {
    icon: "⚗️",
    title: "Integrated Science",
    range: "Grades 6–8 · KS3",
    color: "#FF9682",
    bg: "#FFF0EE",
    topics: [
      "Cell biology: cell structure, function & cell division",
      "Ecosystems: food webs, nutrient cycles & biodiversity",
      "Atomic structure: protons, neutrons, electrons & isotopes",
      "Chemical reactions: balancing equations & energy changes",
      "Forces & motion: speed, velocity, acceleration & Newton's Laws",
      "Electricity & magnetism: circuits, voltage & current",
    ],
  },
  {
    icon: "🧪",
    title: "GCSE Science",
    range: "Grades 9–11 · GCSE Biology, Chemistry & Physics",
    color: "#4281FF",
    bg: "#EEF4FF",
    topics: [
      "Biology: genetics, evolution, homeostasis & disease",
      "Chemistry: bonding, moles, organic chemistry & electrolysis",
      "Physics: waves, nuclear physics, space & electromagnetic spectrum",
      "Required practicals and scientific method exam questions",
      "Combined Science & Triple Award pathways",
      "AQA, Edexcel, OCR & iGCSE exam board preparation",
    ],
  },
  {
    icon: "🚀",
    title: "A-Level, AP & IB Science",
    range: "Grades 11–13 · A-Level · AP · IB",
    color: "#8B5CF6",
    bg: "#F3F0FF",
    topics: [
      "A-Level Biology: photosynthesis, respiration, genetics & immunology",
      "A-Level Chemistry: thermodynamics, organic mechanisms & spectroscopy",
      "A-Level Physics: quantum mechanics, fields & nuclear decay",
      "AP Biology, Chemistry & Physics (1, 2, C: Mechanics & E&M)",
      "IB Biology, Chemistry & Physics (SL and HL)",
      "Past paper technique, mark scheme analysis & exam strategy",
    ],
  },
];

const whyPoints = [
  "Separate Biology, Chemistry and Physics specialists — not a one-size-fits-all approach",
  "Covers GCSE, iGCSE, A-Level, AP, IB and NAPLAN Science curricula",
  "Practical experiment guidance alongside theory to build deep understanding",
  "Regular exam technique sessions using past papers and mark schemes",
  "Flexible online sessions available at weekends and evenings",
  "Students typically improve by one to two grade boundaries within a single term",
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

const Science = () => {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Science Tutoring — Biology, Chemistry & Physics | Mathedemic</title>
        <meta
          name="description"
          content="Expert one-on-one Science tutoring covering Biology, Chemistry and Physics — GCSE, A-Level, AP, IB & NAPLAN. Personalised sessions for every year group and curriculum."
        />
        <link rel="canonical" href="https://www.mathedemic.com/subjects/science" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Subjects", "item": "https://www.mathedemic.com/services"},
            {"@type": "ListItem", "position": 3, "name": "Science", "item": "https://www.mathedemic.com/subjects/science"}
          ]
        })}</script>
      </Helmet>

      <PageHeader title="Science Tutoring" />

      {/* Intro */}
      <div className="subj-page-intro">
        <div className="subj-page-intro-text reveal">
          <span className="section-eyebrow">Core Subject</span>
          <h1>Expert Science Tutoring — Biology, Chemistry &amp; Physics</h1>
          <p>
            From hands-on experiments in primary school to advanced A-Level theory — our specialist
            Science tutors make complex concepts clear and build the deep understanding students need
            to excel in every science exam.
          </p>
          <div className="curriculum-badges">
            <span className="curr-badge">🇬🇧 GCSE &amp; A-Level</span>
            <span className="curr-badge">🇺🇸 AP Sciences</span>
            <span className="curr-badge">🌐 IB Science</span>
            <span className="curr-badge">🇦🇺 NAPLAN</span>
            <span className="curr-badge">AQA · Edexcel · OCR</span>
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
            src="/images/Mthedemic_Science_Tutoring_Services.png"
            alt="Student exploring science concepts with a Mathedemic tutor"
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
            Structured Science content from Primary through to A-Level, AP and IB — aligned to your
            exact curriculum and exam board.
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
          <h2>Why Our Science Tutoring Gets Results</h2>
          <p>
            Science is built on understanding, not memorisation. Our tutors connect concepts to
            real-world applications, making lessons engaging and exam preparation genuinely effective.
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
            alt="Mathedemic one-on-one Science tutoring session"
            width="520"
            height="400"
            loading="lazy"
          />
        </div>
      </div>

      {/* Callout — advanced sciences page */}
      <div className="subj-callout">
        <div className="subj-callout-inner">
          <p>
            Looking for dedicated Physics, Chemistry or Biology tutoring? We have a separate page
            covering advanced science subjects in detail.
          </p>
          <Link to="/subjects/science-subjects" className="btn-ghost">
            View Physics, Chemistry &amp; Biology →
          </Link>
        </div>
      </div>

      {/* CTA Strip */}
      <section className="subj-cta-strip">
        <h2>Ready to Excel in Science?</h2>
        <p>
          Book a free 30-minute trial session. Whether it&apos;s Biology, Chemistry or Physics —
          we have a specialist tutor ready for your child.
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

export default Science;
