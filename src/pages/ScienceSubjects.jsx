import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink } from "../constants/contact";

const WA_PHYSICS = "Hi, I'd like to book a free trial Physics tutoring session with Mathedemic.";
const WA_CHEMISTRY = "Hi, I'd like to book a free trial Chemistry tutoring session with Mathedemic.";
const WA_BIOLOGY = "Hi, I'd like to book a free trial Biology tutoring session with Mathedemic.";
const WA_GENERAL = "Hi, I'd like to discuss science tutoring options for my child at Mathedemic.";

const physicsCards = [
  {
    icon: "⚙️",
    title: "Mechanics",
    desc: "Forces, motion, Newton's Laws, energy, work, power, and momentum. Covers kinematics, dynamics, and circular motion.",
  },
  {
    icon: "🌊",
    title: "Waves & Sound",
    desc: "Properties of waves, the electromagnetic spectrum, reflection, refraction, diffraction, and sound. Includes GCSE and A-Level optics.",
  },
  {
    icon: "⚡",
    title: "Electricity & Magnetism",
    desc: "Electric circuits, Ohm's Law, series and parallel circuits, magnetic fields, electromagnetic induction, and AC/DC current.",
  },
  {
    icon: "🌡️",
    title: "Thermal Physics",
    desc: "Heat transfer (conduction, convection, radiation), specific heat capacity, thermodynamics, and gas laws.",
  },
  {
    icon: "☢️",
    title: "Nuclear & Modern Physics",
    desc: "Radioactivity, nuclear reactions, half-life, fission and fusion, and an introduction to quantum physics. Relevant for A-Level and IB.",
  },
  {
    icon: "📐",
    title: "Exam Technique",
    desc: "Structured answers, significant figures, unit conversions, graph skills, and past paper practice for GCSE, A-Level, and IB Physics.",
  },
];

const chemistryCards = [
  {
    icon: "⚛️",
    title: "Atomic Structure & Periodic Table",
    desc: "Atomic models, electron configuration, periodic trends, ionisation energy, and reactivity patterns.",
  },
  {
    icon: "🔗",
    title: "Chemical Bonding",
    desc: "Ionic, covalent, and metallic bonding. Intermolecular forces, shapes of molecules, and bond polarity.",
  },
  {
    icon: "⚖️",
    title: "Chemical Reactions & Stoichiometry",
    desc: "Balancing equations, mole calculations, reaction types (redox, precipitation, neutralisation), and yield calculations.",
  },
  {
    icon: "🧫",
    title: "Acids, Bases & Salts",
    desc: "pH scale, strong and weak acids, buffer solutions, neutralisation reactions, and titration calculations.",
  },
  {
    icon: "🧬",
    title: "Organic Chemistry",
    desc: "Carbon compounds, hydrocarbons, functional groups, isomerism, and reaction mechanisms. Core A-Level and IB topic.",
  },
  {
    icon: "📐",
    title: "Exam Technique",
    desc: "6-mark question strategies, equation recall, data interpretation, and past paper practice for GCSE, A-Level, and IB Chemistry.",
  },
];

const biologyCards = [
  {
    icon: "🧬",
    title: "Cell Biology & Genetics",
    desc: "Cell structure, DNA replication, transcription, translation, Mendelian genetics, inheritance patterns, and genetic disorders.",
  },
  {
    icon: "🫀",
    title: "Human Physiology",
    desc: "Detailed study of all major body systems — circulatory, respiratory, digestive, nervous, endocrine, and immune — with exam-focused depth.",
  },
  {
    icon: "🌿",
    title: "Plants & Ecosystems",
    desc: "Photosynthesis, plant structure, transpiration, nutrient cycles, food chains, biodiversity, and ecological interactions.",
  },
  {
    icon: "🧫",
    title: "Microbiology & Disease",
    desc: "Bacteria, viruses, and fungi — their structure, reproduction, and role in disease. Immune responses and vaccination.",
  },
  {
    icon: "🌍",
    title: "Evolution & Classification",
    desc: "Darwin's theory, natural selection, evidence for evolution, speciation, and the classification of organisms using taxonomy.",
  },
  {
    icon: "📐",
    title: "Exam Technique",
    desc: "Extended writing answers, data analysis from experiments, graph interpretation, and past paper practice for GCSE, A-Level, and IB Biology.",
  },
];

const physicsBoards = ["AQA", "OCR", "Edexcel", "CIE", "IB", "AP Physics", "CBSE"];
const chemBoards = ["AQA", "OCR", "Edexcel", "CIE", "IB", "AP Chemistry", "CBSE"];
const bioBoards = ["AQA", "OCR", "Edexcel", "CIE", "IB", "AP Biology", "CBSE"];

const ScienceSubjects = () => {
  useScrollReveal();
  const [activeSection, setActiveSection] = useState("physics");

  useEffect(() => {
    const sections = ["physics", "chemistry", "biology"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Helmet>
        <title>Physics, Chemistry &amp; Biology Tutoring — GCSE, A-Level &amp; IB | Mathedemic</title>
        <meta
          name="description"
          content="Expert tutoring in Physics, Chemistry, and Biology for students aged 13–18. Mathedemic covers GCSE, A-Level, IB, SAT, and international curricula. One-on-one sessions. Book free trial."
        />
        <link rel="canonical" href="https://www.mathedemic.com/subjects/science-subjects" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Subjects", "item": "https://www.mathedemic.com/services"},
            {"@type": "ListItem", "position": 3, "name": "Science", "item": "https://www.mathedemic.com/subjects/science"},
            {"@type": "ListItem", "position": 4, "name": "Physics, Chemistry & Biology", "item": "https://www.mathedemic.com/subjects/science-subjects"}
          ]
        })}</script>
      </Helmet>

      <PageHeader title="Physics, Chemistry & Biology" />

      {/* Page intro */}
      <div className="sci-intro-block">
        <nav className="breadcrumb-sm" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/services">Subjects</Link>
          <span>&rsaquo;</span>
          <span>Physics, Chemistry &amp; Biology</span>
        </nav>
        <h2>Advanced Sciences — Tailored for Every Exam Board</h2>
        <p>
          Physics, Chemistry, and Biology are among the most demanding — and most rewarding — subjects a
          student can take. At Mathedemic, our specialist science tutors help students at GCSE, A-Level, IB,
          and equivalent international levels build genuine understanding of each subject, not just exam
          technique. Whether your child is struggling with a specific topic or aiming for the top grades, we
          have an expert tutor ready to help.
        </p>
        <div className="jump-chips">
          <a href="#physics" onClick={scrollTo("physics")} className="jump-chip jump-chip-physics">
            ⚡ Jump to Physics
          </a>
          <a href="#chemistry" onClick={scrollTo("chemistry")} className="jump-chip jump-chip-chemistry">
            🧪 Jump to Chemistry
          </a>
          <a href="#biology" onClick={scrollTo("biology")} className="jump-chip jump-chip-biology">
            🌿 Jump to Biology
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="stats-strip-sm">
        <div className="stat-sm">
          <span className="stat-sm-icon">🎓</span> Grades 9–12 focus
        </div>
        <div className="stat-sm">
          <span className="stat-sm-icon">📚</span> GCSE · A-Level · IB · SAT
        </div>
        <div className="stat-sm">
          <span className="stat-sm-icon">👨‍🏫</span> Specialist tutors per subject
        </div>
        <div className="stat-sm">
          <span className="stat-sm-icon">✅</span> First session free
        </div>
      </div>

      {/* Sticky subject nav */}
      <nav className="subject-sticky-nav" aria-label="Jump to science subject">
        <a
          href="#physics"
          onClick={scrollTo("physics")}
          className={activeSection === "physics" ? "active-physics" : ""}
        >
          ⚡ Physics
        </a>
        <a
          href="#chemistry"
          onClick={scrollTo("chemistry")}
          className={activeSection === "chemistry" ? "active-chemistry" : ""}
        >
          🧪 Chemistry
        </a>
        <a
          href="#biology"
          onClick={scrollTo("biology")}
          className={activeSection === "biology" ? "active-biology" : ""}
        >
          🌿 Biology
        </a>
      </nav>

      {/* ─── PHYSICS ─── */}
      <section id="physics" className="subj-section">
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow">Advanced Science</span>
            <h2>Physics Tutoring</h2>
            <p className="intro-line">
              From classical mechanics to modern physics, our tutors help students build a thorough
              understanding of physical principles and develop strong problem-solving skills for GCSE,
              A-Level, AP, and IB examinations.
            </p>
          </div>

          <div className="topic-cards-grid">
            {physicsCards.map((card, i) => (
              <div
                key={i}
                className="topic-card reveal"
                style={{ "--card-accent": "#4281FF", "--card-bg": "#EEF4FF" }}
              >
                <span className="topic-card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="exam-boards-row">
            <span className="exam-boards-label">Exam boards:</span>
            {physicsBoards.map((b) => (
              <span key={b} className="exam-board-pill" style={{ "--board-color": "#4281FF" }}>
                {b}
              </span>
            ))}
          </div>

          <a
            href={waLink(WA_PHYSICS)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Physics Trial
          </a>
        </div>
      </section>

      <div className="section-hr" />

      {/* ─── CHEMISTRY ─── */}
      <section id="chemistry" className="subj-section" style={{ background: "#FFFBF5" }}>
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow" style={{ color: "#FF9682" }}>
              Advanced Science
            </span>
            <h2>Chemistry Tutoring</h2>
            <p className="intro-line">
              Chemistry sits at the heart of science — explaining the world at a molecular level. Our
              tutors make complex topics like organic chemistry, chemical bonding, and thermodynamics clear
              and manageable, helping students excel in GCSE, A-Level, IB, and beyond.
            </p>
          </div>

          <div className="topic-cards-grid">
            {chemistryCards.map((card, i) => (
              <div
                key={i}
                className="topic-card reveal"
                style={{ "--card-accent": "#FF9682", "--card-bg": "#FFF0EE" }}
              >
                <span className="topic-card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="exam-boards-row">
            <span className="exam-boards-label">Exam boards:</span>
            {chemBoards.map((b) => (
              <span key={b} className="exam-board-pill" style={{ "--board-color": "#FF9682" }}>
                {b}
              </span>
            ))}
          </div>

          <a
            href={waLink(WA_CHEMISTRY)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-subj-coral"
          >
            Book a Chemistry Trial
          </a>
        </div>
      </section>

      <div className="section-hr" />

      {/* ─── BIOLOGY ─── */}
      <section id="biology" className="subj-section" style={{ background: "#F5FDF8" }}>
        <div className="subj-section-inner">
          <div className="subj-section-header reveal">
            <span className="section-eyebrow" style={{ color: "#10B981" }}>
              Advanced Science
            </span>
            <h2>Biology Tutoring</h2>
            <p className="intro-line">
              Biology is the study of life — from the smallest cell to entire ecosystems. At Mathedemic,
              our Biology tutors help students understand complex processes with clarity, supporting them
              through GCSE, A-Level, IB, and equivalent exams with confidence.
            </p>
          </div>

          <div className="topic-cards-grid">
            {biologyCards.map((card, i) => (
              <div
                key={i}
                className="topic-card reveal"
                style={{ "--card-accent": "#10B981", "--card-bg": "#ECFDF5" }}
              >
                <span className="topic-card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="exam-boards-row">
            <span className="exam-boards-label">Exam boards:</span>
            {bioBoards.map((b) => (
              <span key={b} className="exam-board-pill" style={{ "--board-color": "#10B981" }}>
                {b}
              </span>
            ))}
          </div>

          <a
            href={waLink(WA_BIOLOGY)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-subj-green"
          >
            Book a Biology Trial
          </a>
        </div>
      </section>

      {/* ─── Bottom CTA strip ─── */}
      <section className="subj-cta-strip">
        <h2>Not Sure Which Science to Start With?</h2>
        <p>
          Our tutors can assess your child&apos;s current level and recommend the right focus. First session
          is always free.
        </p>
        <div className="subj-cta-btns">
          <a
            href={waLink(WA_GENERAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Chat on WhatsApp
          </a>
          <Link to="/services" className="btn-ghost-inv">
            View All Subjects
          </Link>
        </div>
      </section>
    </>
  );
};

export default ScienceSubjects;
