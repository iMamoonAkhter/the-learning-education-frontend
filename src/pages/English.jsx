import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../constants/contact";

const gradeLevels = [
  {
    icon: "📚",
    title: "Early English",
    range: "Grades 1–5 · KS1 & KS2",
    color: "#F59E0B",
    bg: "#FFF8D6",
    topics: [
      "Phonics, blending & early reading strategies",
      "Spelling rules, vocabulary building & word families",
      "Grammar fundamentals: nouns, verbs, adjectives & punctuation",
      "Reading comprehension: main idea, inference & sequencing",
      "Creative writing: stories, descriptions & recounts",
      "Speaking & listening skills for classroom confidence",
    ],
  },
  {
    icon: "✍️",
    title: "Intermediate English",
    range: "Grades 6–8 · KS3",
    color: "#4281FF",
    bg: "#EEF4FF",
    topics: [
      "Advanced grammar: clauses, tenses & complex sentences",
      "Essay writing: structure, argument & supporting evidence",
      "Reading & literary analysis: themes, characters & language",
      "Vocabulary expansion: connotation, denotation & context",
      "Non-fiction writing: reports, letters & persuasive texts",
      "Critical thinking and interpretation of diverse texts",
    ],
  },
  {
    icon: "🎓",
    title: "GCSE English",
    range: "Grades 9–11 · GCSE Language & Literature",
    color: "#FF9682",
    bg: "#FFF0EE",
    topics: [
      "GCSE English Language: Paper 1 & Paper 2 technique",
      "GCSE English Literature: set texts, poetry & unseen comparison",
      "Analytical writing: PEE / PEEL / PEEA paragraph structure",
      "Transactional writing: speeches, articles & open letters",
      "AQA, Edexcel & OCR exam board preparation",
      "Controlled assessment & coursework support",
    ],
  },
  {
    icon: "🏆",
    title: "A-Level, SAT & International",
    range: "Grades 11–13 · A-Level · SAT / ACT · IB",
    color: "#10B981",
    bg: "#ECFDF5",
    topics: [
      "A-Level Language & Literature: stylistics, discourse & context",
      "Independent critical essay and comparative analysis writing",
      "SAT Reading & Writing: evidence-based comprehension",
      "ACT English: grammar, punctuation & rhetorical skills",
      "IB Language A: individual oral & written tasks",
      "University application personal statement writing",
    ],
  },
];

const whyPoints = [
  "One-on-one sessions aligned to your child's exact exam board (AQA, Edexcel, OCR, IB, SAT)",
  "Qualified tutors with degrees in English Literature, Linguistics and Education",
  "Structured lesson plans combining comprehension, writing craft and exam technique",
  "Weekly vocabulary and grammar exercises between sessions to accelerate progress",
  "Flexible scheduling — weekday and weekend sessions available online",
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

const English = () => {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>English Tutoring — GCSE, A-Level, SAT & IB Language | Mathedemic</title>
        <meta
          name="description"
          content="Expert one-on-one English Language and Literature tutoring — GCSE, A-Level, SAT, ACT & IB. Reading comprehension, essay writing, grammar and critical analysis for all year groups."
        />
        <link rel="canonical" href="https://www.mathedemic.com/subjects/english" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Subjects", "item": "https://www.mathedemic.com/services"},
            {"@type": "ListItem", "position": 3, "name": "English", "item": "https://www.mathedemic.com/subjects/english"}
          ]
        })}</script>
      </Helmet>

      <PageHeader title="English Tutoring" />

      {/* Intro */}
      <div className="subj-page-intro">
        <div className="subj-page-intro-text reveal">
          <span className="section-eyebrow">Core Subject</span>
          <h1>Comprehensive English Tutoring for Every Age &amp; Level</h1>
          <p>
            From early phonics to A-Level literary analysis — our expert English tutors build genuine
            reading, writing and communication skills through personalised one-on-one sessions that
            translate directly into higher grades.
          </p>
          <div className="curriculum-badges">
            <span className="curr-badge">🇬🇧 GCSE &amp; A-Level</span>
            <span className="curr-badge">🇺🇸 SAT / ACT</span>
            <span className="curr-badge">🌐 IB Language A</span>
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
            src="/images/Mthedemic_English_Tutoring_Services.png"
            alt="Student improving English reading and writing skills with a Mathedemic tutor"
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
            Every lesson is tailored to the student&apos;s year group, exam board and individual learning needs.
          </p>
          <div className="grade-cards-grid">
            {gradeLevels.map((g, i) => <GradeCard key={i} g={g} i={i} />)}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <div className="subj-why-section">
        <div className="subj-why-image reveal">
          <img
            src="/images/Mathedemic_why_choose_us_2.png"
            alt="Mathedemic one-on-one English tutoring session online"
            width="520"
            height="400"
            loading="lazy"
          />
        </div>
        <div className="subj-why-text reveal reveal-delay-2">
          <span className="section-eyebrow">Why Mathedemic</span>
          <h2>Why Our English Tutoring Gets Results</h2>
          <p>
            Strong English skills are the foundation of academic success across every subject. Our tutors
            combine explicit teaching with meaningful practice to build skills that stick.
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
      </div>

      {/* CTA Strip */}
      <section className="subj-cta-strip">
        <h2>Ready to Excel in English?</h2>
        <p>
          Book a free 30-minute trial session and discover how personalised English tutoring
          transforms grades and confidence.
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

export default English;
