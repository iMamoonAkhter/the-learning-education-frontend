import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink } from "../constants/contact";

const SAT_MSG = encodeURIComponent("Hi, I'm interested in SAT preparation tutoring with Mathedemic. Please let me know the available slots.");
const ACT_MSG = encodeURIComponent("Hi, I'm interested in ACT preparation tutoring with Mathedemic. Please let me know the available slots.");
const NAPLAN_MSG = encodeURIComponent("Hi, I'm interested in NAPLAN preparation tutoring with Mathedemic. Please let me know the available slots.");

const satTopics = [
  {
    title: "Math",
    items: [
      "Heart of Algebra: linear equations, systems, and inequalities",
      "Problem Solving & Data: ratios, percentages, statistics, and data interpretation",
      "Passport to Advanced Math: quadratics, polynomials, and exponential functions",
      "Additional Topics: geometry, basic trigonometry, and complex numbers",
    ],
  },
  {
    title: "Reading & Writing",
    items: [
      "Information & Ideas: comprehension, central ideas, and evidence-based reading",
      "Craft & Structure: vocabulary in context, text structure, and author's purpose",
      "Expression of Ideas: revision, rhetoric, transitions, and effective language use",
      "Standard English Conventions: grammar, punctuation, and sentence structure",
    ],
  },
];

const satApproach = [
  {
    icon: '📋',
    title: 'Full Practice Tests',
    desc: 'Timed, full-length SAT mocks simulating real exam conditions with detailed section-by-section score analysis.',
  },
  {
    icon: '🔍',
    title: 'Diagnostic Review',
    desc: 'Section-level breakdown identifying your weakest question types for targeted, high-impact improvement.',
  },
  {
    icon: '⏱️',
    title: 'Exam Strategy',
    desc: 'Time management, question ordering, and process of elimination — mastering the test format is half the battle.',
  },
  {
    icon: '📚',
    title: 'Vocabulary & Grammar',
    desc: 'High-frequency SAT vocabulary and English grammar rule mastery for the Reading & Writing section.',
  },
];

const actSubjects = [
  {
    icon: '✏️',
    color: '#4281FF',
    bg: '#EEF4FF',
    title: 'English',
    info: '75 questions · 45 min',
    desc: 'Grammar, punctuation, rhetorical skills, sentence structure, and stylistic choices across 5 passages.',
  },
  {
    icon: '∑',
    color: '#8B5CF6',
    bg: '#F3F0FF',
    title: 'Mathematics',
    info: '60 questions · 60 min',
    desc: 'Pre-algebra, algebra, geometry, trigonometry, and statistics — all without a provided formula sheet.',
  },
  {
    icon: '📖',
    color: '#FF9682',
    bg: '#FFF0EE',
    title: 'Reading',
    info: '40 questions · 35 min',
    desc: 'Literary narrative, social science, humanities, and natural science passages. Focus on inference and detail retrieval.',
  },
  {
    icon: '🔬',
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Science',
    info: '40 questions · 35 min',
    desc: 'Data interpretation, research summaries, and conflicting viewpoints. Tests scientific reasoning, not memorised knowledge.',
  },
];

const comparisonRows = [
  { feature: 'Duration', sat: '2 hours 14 minutes', act: '2h 55m (3h 35m with writing)' },
  { feature: 'Sections', sat: '2 (Math + Reading & Writing)', act: '4 (English, Math, Reading, Science)' },
  { feature: 'Science Section', sat: 'No', act: 'Yes' },
  { feature: 'Score Range', sat: '400–1600', act: '1–36 (composite)' },
  { feature: 'Calculator Policy', sat: 'Always allowed', act: 'No-calculator section exists' },
  { feature: 'Essay / Writing', sat: 'Not included', act: 'Optional (30 minutes)' },
  { feature: 'Wrong Answer Penalty', sat: 'No penalty', act: 'No penalty' },
  { feature: 'Best Suited For', sat: 'Strong readers & writers', act: 'Science-minded, fast test-takers' },
];

const naplanSections = [
  {
    icon: '🔢',
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'Numeracy',
    desc: 'Number & algebra, measurement, geometry, statistics & probability — calculator and non-calculator components.',
  },
  {
    icon: '📖',
    color: '#4281FF',
    bg: '#EEF4FF',
    title: 'Reading',
    desc: 'Comprehension of narrative, informational, and persuasive texts. Inference, vocabulary, and structural analysis.',
  },
  {
    icon: '✏️',
    color: '#FF9682',
    bg: '#FFF0EE',
    title: 'Language Conventions',
    desc: 'Spelling, grammar, and punctuation assessed through multiple-choice and constructed response question types.',
  },
  {
    icon: '📝',
    color: '#8B5CF6',
    bg: '#F3F0FF',
    title: 'Writing',
    desc: 'Producing a narrative or persuasive text from a prompt, assessed for ideas, structure, language, and conventions.',
  },
];

const naplanYearData = {
  3: [
    'Counting and place value to 1,000 — addition, subtraction, and early multiplication',
    'Simple fractions (halves, quarters, eighths) and measurement (length, mass, time)',
    'Reading and interpreting simple graphs, tables, and pictographs',
    'Comprehension of familiar narrative and informational texts; identifying main ideas',
    'High-frequency spelling words and basic punctuation (full stops, capitals, question marks)',
    'Short narrative writing — simple sentences, clear ideas, beginning-middle-end structure',
  ],
  5: [
    'Multiplication, division facts, fractions, decimals, and percentages',
    'Area and perimeter, 2D and 3D shapes, angles, and coordinate grids',
    'Data analysis — reading and constructing graphs, interpreting statistics',
    'Reading a range of text types; inferencing and vocabulary in context',
    'Complex spelling patterns, grammar (clauses, conjunctions), punctuation (commas, apostrophes)',
    'Narrative and persuasive writing with planned structure, supporting detail, and varied language',
  ],
  7: [
    'Ratio, proportional reasoning, and percentages; introduction to algebraic thinking',
    'Linear equations, angles, geometric properties, surface area and volume',
    'Probability concepts, statistical analysis, and financial mathematics',
    'Reading complex informational texts; identifying author\'s purpose and language techniques',
    'Advanced spelling, grammar (clauses, modifiers, verb tenses), and sentence variety',
    'Persuasive essays with evidence and counterarguments; formal and informal register awareness',
  ],
  9: [
    'Advanced algebra: quadratic equations, functions, and algebraic manipulation',
    'Statistical analysis, probability calculations, and financial mathematics (interest, tax, budgets)',
    'Surface area and volume of complex 3D shapes; trigonometry in right-angled triangles',
    'Critical reading across genres; sophisticated vocabulary and figurative language analysis',
    'Analytical and expository writing; extended persuasive texts with nuanced argument structure',
    'Advanced conventions: punctuation for effect, syntax variety, and formal academic style',
  ],
};

const SatActNaplan = () => {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState("sat");
  const [naplanYear, setNaplanYear] = useState(3);

  useEffect(() => {
    const ids = ["sat", "act", "naplan"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>SAT, ACT & NAPLAN Tutoring — Expert Test Prep | Mathedemic</title>
        <meta
          name="description"
          content="Specialist SAT, ACT, and NAPLAN test preparation tutoring. Full-length practice tests, personalised study plans, and expert strategies for every year level and target score."
        />
        <link rel="canonical" href="https://www.mathedemic.com/test-prep/sat-act" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Test Preparation", "item": "https://www.mathedemic.com/test-prep"},
            {"@type": "ListItem", "position": 3, "name": "SAT, ACT & NAPLAN", "item": "https://www.mathedemic.com/test-prep/sat-act"}
          ]
        })}</script>
      </Helmet>

      {/* Intro with breadcrumb */}
      <div className="sci-intro-block">
        <nav className="breadcrumb-sm" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/test-prep">Test Preparation</Link>
          <span>&rsaquo;</span>
          <span>SAT, ACT &amp; NAPLAN</span>
        </nav>
        <span className="section-eyebrow">Dedicated Exam Prep</span>
        <h2>SAT, ACT &amp; NAPLAN Tutoring</h2>
        <p>
          Expert one-on-one preparation for three of the most important standardised exams worldwide.
          Specialist tutors, proven strategies, and full-length practice tests — tailored to your
          target score and exam date.
        </p>
        <div className="jump-chips">
          <a href="#sat" className="jump-chip jump-chip-sat" onClick={scrollTo("sat")}>📝 SAT</a>
          <a href="#act" className="jump-chip jump-chip-act" onClick={scrollTo("act")}>🎓 ACT</a>
          <a href="#naplan" className="jump-chip jump-chip-naplan" onClick={scrollTo("naplan")}>🇦🇺 NAPLAN</a>
        </div>
      </div>

      {/* Sticky Section Nav */}
      <nav className="subject-sticky-nav" aria-label="Jump to exam section">
        <a
          href="#sat"
          className={activeSection === "sat" ? "active-sat" : ""}
          onClick={scrollTo("sat")}
        >
          📝 SAT
        </a>
        <a
          href="#act"
          className={activeSection === "act" ? "active-act" : ""}
          onClick={scrollTo("act")}
        >
          🎓 ACT
        </a>
        <a
          href="#naplan"
          className={activeSection === "naplan" ? "active-naplan" : ""}
          onClick={scrollTo("naplan")}
        >
          🇦🇺 NAPLAN
        </a>
      </nav>

      {/* ─── SAT ─── */}
      <section id="sat" className="subj-section">
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow">US College Board</span>
            <h2>SAT Preparation</h2>
            <p className="intro-line">
              The SAT (Scholastic Assessment Test) is the College Board&apos;s flagship US university admissions
              exam. Scoring 1400+ opens doors to the most selective universities — and the right preparation
              strategy makes all the difference between a good score and a great one.
            </p>
          </div>

          <div className="quick-facts-row">
            {[
              { label: '⏱ Duration: 2h 14m' },
              { label: '📊 Score: 400–1600' },
              { label: '📄 2 Sections' },
              { label: '🎯 Grade 10–12' },
            ].map((chip, i) => (
              <span
                key={i}
                className="quick-fact-chip"
                style={{ '--chip-bg': '#EEF4FF', '--chip-color': '#4281FF' }}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>
            What We Cover
          </h3>
          <div className="sat-topic-cols">
            {satTopics.map((topic, i) => (
              <div key={i} className="sat-topic-card reveal">
                <h3>{topic.title}</h3>
                <ul className="sat-topic-list">
                  {topic.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', margin: '40px 0 8px' }}>
            Our SAT Approach
          </h3>
          <div className="sat-approach-grid">
            {satApproach.map((item, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: '#EEF4FF',
                  borderTop: '4px solid #4281FF',
                  borderRadius: '14px',
                  padding: '24px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(66,129,255,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <a href={waLink(SAT_MSG)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              📅 Book SAT Preparation →
            </a>
          </div>
        </div>
      </section>

      <hr className="section-hr" />

      {/* ─── ACT ─── */}
      <section id="act" className="subj-section" style={{ background: '#FFFBF5' }}>
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow">ACT Inc.</span>
            <h2>ACT Preparation</h2>
            <p className="intro-line">
              The ACT tests English, Mathematics, Reading, and Science — with an optional Writing section.
              Its unique Science reasoning section and different timing requirements mean students benefit
              enormously from ACT-specific strategies tailored to maximise their composite score.
            </p>
          </div>

          <div className="quick-facts-row">
            {[
              { label: '⏱ Duration: 2h 55m' },
              { label: '📊 Score: 1–36 composite' },
              { label: '📄 4 Sections' },
              { label: '✍️ Optional Writing' },
            ].map((chip, i) => (
              <span
                key={i}
                className="quick-fact-chip"
                style={{ '--chip-bg': '#FFF0EE', '--chip-color': '#FF9682' }}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>
            ACT Sections
          </h3>
          <div className="act-subject-grid">
            {actSubjects.map((subj, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: subj.bg,
                  borderTop: `4px solid ${subj.color}`,
                  borderRadius: '14px',
                  padding: '24px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{subj.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '4px' }}>
                  {subj.title}
                </h4>
                <p style={{ fontSize: '12px', color: subj.color, fontWeight: 600, marginBottom: '10px' }}>
                  {subj.info}
                </p>
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.65, margin: 0 }}>
                  {subj.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', margin: '48px 0 12px' }}>
            SAT vs ACT — Which Is Right for You?
          </h3>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '0' }}>
            Both exams are accepted equally at every US university. The best choice depends on your
            strengths — book a free session and we&apos;ll help you decide.
          </p>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>SAT</th>
                  <th>ACT</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: '#1A1A2E' }}>{row.feature}</td>
                    <td>{row.sat}</td>
                    <td>{row.act}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '32px' }}>
            <a href={waLink(ACT_MSG)} target="_blank" rel="noopener noreferrer" className="btn-subj-coral">
              📅 Book ACT Preparation →
            </a>
          </div>
        </div>
      </section>

      <hr className="section-hr" />

      {/* ─── NAPLAN ─── */}
      <section id="naplan" className="subj-section" style={{ background: '#F5FDF8' }}>
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow">Australian Curriculum</span>
            <h2>NAPLAN Preparation</h2>
            <p className="intro-line">
              NAPLAN (National Assessment Program — Literacy and Numeracy) is Australia&apos;s national
              assessment taken by students in Years 3, 5, 7 and 9. Results are reported in skill bands —
              not pass/fail — but strong performance builds confidence and supports smooth school transitions.
            </p>
          </div>

          <div className="quick-facts-row">
            {[
              { label: '📅 Years 3, 5, 7 & 9' },
              { label: '🖥️ Online adaptive format' },
              { label: '📊 Skill-band reporting' },
              { label: '🇦🇺 Australian curriculum' },
            ].map((chip, i) => (
              <span
                key={i}
                className="quick-fact-chip"
                style={{ '--chip-bg': '#ECFDF5', '--chip-color': '#10B981' }}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>
            NAPLAN Assessment Areas
          </h3>
          <div className="act-subject-grid">
            {naplanSections.map((sec, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: sec.bg,
                  borderTop: `4px solid ${sec.color}`,
                  borderRadius: '14px',
                  padding: '24px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{sec.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>
                  {sec.title}
                </h4>
                <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.65, margin: 0 }}>
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E', margin: '48px 0 16px' }}>
            Year-by-Year Focus Areas
          </h3>
          <div className="naplan-year-tabs">
            {[3, 5, 7, 9].map((yr) => (
              <button
                key={yr}
                className={`naplan-year-tab${naplanYear === yr ? ' active' : ''}`}
                onClick={() => setNaplanYear(yr)}
              >
                Year {yr}
              </button>
            ))}
          </div>
          <div className="naplan-tab-content" key={naplanYear}>
            <p style={{ fontWeight: 700, color: '#1A1A2E', marginBottom: '14px' }}>
              Year {naplanYear} — Key Focus Areas
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {naplanYearData[naplanYear].map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#10B981', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '40px' }}>
            <a href={waLink(NAPLAN_MSG)} target="_blank" rel="noopener noreferrer" className="btn-subj-green">
              📅 Book NAPLAN Preparation →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="subj-cta-strip">
        <h2>Explore All Test Prep Options</h2>
        <p>
          Not sure which exam page you need? Our full test preparation hub covers every major
          examination — from GCSE and A-Level to IB, AP, and CBSE.
        </p>
        <div className="subj-cta-btns">
          <Link to="/test-prep" className="btn-secondary">
            View All Exam Prep →
          </Link>
          <a
            href={waLink(encodeURIComponent("Hi, I'd like to book a free test preparation session with Mathedemic."))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-inv"
          >
            💬 Chat with Us
          </a>
        </div>
      </section>
    </>
  );
};

export default SatActNaplan;
