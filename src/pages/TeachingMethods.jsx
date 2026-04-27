import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import useScrollReveal from "../utils/useScrollReveal";
import { waLink } from "../constants/contact";

const TRIAL_MSG = encodeURIComponent(
  "Hi, I'd like to book a free trial session with Mathedemic to experience the teaching approach first-hand."
);

const toolCards = [
  {
    icon: "🎥",
    title: "Video Conferencing",
    tools: "Google Meet · Zoom · Microsoft Teams",
    desc: "Every session takes place via stable, high-quality video call. Screen sharing lets students follow worked examples in real time. Tutors enable cameras for both parties to maintain engagement and read non-verbal cues — a student's expression often reveals confusion before they say a word. Sessions can be recorded (with parent permission) so students can revisit the lesson later.",
    accent: "#4281FF",
    bg: "#EEF4FF",
  },
  {
    icon: "✏️",
    title: "Interactive Digital Whiteboards",
    tools: "Bramble · BitPaper · Explain Everything · Zoom Whiteboard",
    desc: "Our interactive whiteboards are the closest digital equivalent to sitting side by side at a desk. Both tutor and student write, draw, and annotate on the same canvas simultaneously. The tutor demonstrates a worked example step by step while the student watches, then the student takes over the pen to attempt similar problems. Whiteboards are saved at the end of every session as a revision reference.",
    accent: "#FF9682",
    bg: "#FFF0EE",
  },
  {
    icon: "📄",
    title: "Worksheets & Printed Resources",
    tools: "PDF worksheets · Past papers · Scan-and-share",
    desc: "We use custom-created worksheets and official past papers tailored to each student's exam board and current ability level. Students can print worksheets, work through them on paper, and photograph their work to share with the tutor for marking and feedback. This bridges the gap between digital and physical learning — many students think better on paper, and we fully support that.",
    accent: "#FFD562",
    bg: "#FFF8D6",
  },
  {
    icon: "💬",
    title: "Messaging & Homework Support",
    tools: "WhatsApp · Email",
    desc: "Learning does not stop when the session ends. Students and parents can message their tutor between sessions to ask quick questions, share a photo of a problem they are stuck on, or clarify something from the last lesson. This ongoing support loop keeps momentum going and prevents small confusions from growing into bigger gaps.",
    accent: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: "📊",
    title: "Progress Tracking & Reports",
    tools: "Shared Google Docs · Session notes · Spreadsheet trackers",
    desc: "After every session, tutors complete a short report covering what was covered, how the student performed, what needs revisiting, and what is planned for next time. These are shared with parents so they are always informed and involved. Over time, the cumulative record shows clear evidence of progress — motivating for both student and parent.",
    accent: "#4281FF",
    bg: "#EEF4FF",
  },
  {
    icon: "🔗",
    title: "Shared Resources & Study Materials",
    tools: "Google Drive · Khan Academy · GCSEPod · YouTube links",
    desc: "Tutors curate a personalised resource folder for each student containing notes, worked examples, useful videos, and practice materials. Students access this between sessions for independent study. Tutors may also recommend specific Khan Academy videos, GCSEPod clips, or exam board resources to reinforce what was covered in the session.",
    accent: "#FF9682",
    bg: "#FFF0EE",
  },
];

const principles = [
  {
    icon: "🧱",
    heading: "Scaffolding",
    bg: "#EEF4FF",
    paragraphs: [
      "Scaffolding is the educational practice of providing structured support that gradually decreases as a student becomes more competent. Think of it like scaffolding around a construction — it supports the structure until it can stand on its own, then it is removed.",
      "When introducing a new topic, tutors break it into the smallest possible steps. They model the complete process first, then work through examples jointly with the student, then let the student attempt problems with hints available, and finally ask the student to work independently. Support is reduced at each stage only when the student demonstrates readiness — preventing cognitive overload and building genuine competence rather than surface-level familiarity.",
      "Without the physical presence of a classroom, students can disengage or fake understanding more easily. Scaffolding keeps the interaction active at every step — the tutor is constantly checking for real comprehension rather than just moving forward.",
    ],
  },
  {
    icon: "🔄",
    heading: "Spaced Repetition",
    bg: "#FFF0EE",
    paragraphs: [
      "Spaced repetition is a memory technique based on reviewing material at increasing intervals — revisiting a topic shortly after first learning it, then again a week later, then a month later. This exploits the psychological spacing effect, dramatically improving long-term retention.",
      "At Mathedemic, tutors do not just teach a topic once and move on. They build a rolling review into every session plan — the first ten minutes of a session often revisits key concepts from two or three previous lessons. This is especially powerful for mathematics and science, where earlier concepts are prerequisites for everything that follows.",
      "Students who revise only the night before an exam rely on short-term memory. Students who learn through spaced repetition have genuine long-term recall. The difference in exam performance is significant.",
    ],
  },
  {
    icon: "❓",
    heading: "Socratic Questioning",
    bg: "#FFF8D6",
    paragraphs: [
      "The Socratic method involves guiding students to answers through carefully structured questions rather than simply telling them the answer. Instead of explaining why a formula works, the tutor asks questions that lead the student to figure it out themselves.",
      "When a student makes a mistake, rather than correcting it immediately, the tutor asks: \"What did you do in this step? Why did you choose that approach? What would happen if you tried it this way instead?\" This forces the student to think metacognitively — to think about their own thinking. Students who understand why they got something wrong are far less likely to repeat the mistake.",
      "This approach builds independent problem-solving ability. Students become less reliant on their tutor over time — which is exactly the goal.",
    ],
  },
  {
    icon: "🌱",
    heading: "Growth Mindset Coaching",
    bg: "#ECFDF5",
    paragraphs: [
      "Developed by psychologist Carol Dweck, growth mindset is the belief that intelligence and ability are not fixed — they can be developed through effort, the right strategies, and persistence. Students with a growth mindset approach challenges very differently from those with a fixed mindset.",
      "Mathedemic tutors praise effort and strategy rather than innate ability. \"You worked through that really carefully\" is more powerful than \"You are so clever.\" When a student says \"I am just not a maths person,\" the tutor addresses that belief directly, showing them through small wins that ability is always improvable with the right support.",
      "Many students who arrive at Mathedemic have already developed a negative story about themselves and a subject. Shifting that narrative is often the most important work the tutor does — and it precedes any academic progress.",
    ],
  },
  {
    icon: "💪",
    heading: "Retrieval Practice",
    bg: "#F3F0FF",
    paragraphs: [
      "Retrieval practice is the act of actively recalling information from memory rather than passively re-reading notes. Testing yourself on material, even when you get things wrong, is one of the most evidence-backed ways to strengthen memory and deepen understanding.",
      "Tutors regularly ask students to recall concepts, definitions, or processes from memory before any notes are open. This \"test-first\" approach initially feels uncomfortable for students used to looking everything up — but the evidence is clear. The struggle of trying to remember something, even unsuccessfully, dramatically improves subsequent retention.",
      "Mini quizzes at the start of sessions, flashcard-style rapid-fire questions, and \"explain this concept back to me\" exercises are tools we use in every session.",
    ],
  },
  {
    icon: "📣",
    heading: "Immediate Feedback Loops",
    bg: "#EEF4FF",
    paragraphs: [
      "Immediate corrective feedback is one of the most powerful accelerators of learning. When a student makes an error, the shorter the gap between the error and the correction, the more effective the learning.",
      "In a one-on-one online session, feedback is instantaneous. The tutor watches the student work in real time on the shared whiteboard. The moment a misconception appears, it is addressed. This is fundamentally different from classroom learning, where a teacher might mark homework two days later — by which time the student has often reinforced the error multiple times.",
      "At Mathedemic, every session is a continuous feedback loop from start to finish.",
    ],
  },
];

const ageGroups = [
  {
    label: "Primary",
    sublabel: "Ages 5–11",
    intro:
      "At primary level, the most important thing is building a love of learning and strong foundational skills — not drilling for exams. A child who enjoys maths at age 8 is a very different student at age 16 from one who was pushed too hard too early.",
    items: [
      {
        emoji: "🎮",
        title: "Gamified Learning",
        desc: "We use games, puzzles, challenges, and rewards to make sessions feel fun rather than like extra school. Points, streaks, and achievement badges keep young learners motivated between sessions.",
      },
      {
        emoji: "🖍️",
        title: "Concrete → Pictorial → Abstract (CPA Approach)",
        desc: "Before a child understands the abstract symbol \"3 × 4 = 12\", they need to understand it with concrete objects, then pictures, and only then with numbers. Our tutors follow this well-established progression, especially in maths.",
      },
      {
        emoji: "🗣️",
        title: "Verbal Explanation Emphasis",
        desc: "Young learners develop understanding through talking. Tutors ask students to explain what they did and why in simple language. \"Tell me how you worked that out\" is a powerful learning tool at this age.",
      },
      {
        emoji: "⏱️",
        title: "Short, Varied Activities",
        desc: "Sessions are broken into 10–15 minute activity chunks that switch between whiteboard work, worksheets, verbal quizzes, and games. Variety maintains engagement throughout the hour.",
      },
    ],
  },
  {
    label: "Lower Secondary",
    sublabel: "Ages 11–14",
    intro:
      "This is a transition period where students move from concrete to abstract thinking, where subject-specific vocabulary becomes important, and where confidence gaps often open up. Students who struggle in a busy classroom can fall behind quickly.",
    items: [
      {
        emoji: "🔀",
        title: "Bridging Gaps Without Embarrassment",
        desc: "In a one-on-one environment, tutors can safely identify and address gaps from earlier years. Many Year 9 students have unresolved Year 6 maths gaps quietly blocking their progress. We address these privately and efficiently.",
      },
      {
        emoji: "📝",
        title: "Note-Taking and Organisation Skills",
        desc: "At secondary level, students need to develop their own structured notes. Tutors model good note-taking on the whiteboard and encourage students to keep organised digital or physical revision resources.",
      },
      {
        emoji: "🧩",
        title: "Connecting Topics",
        desc: "A key skill at this age is seeing how different topics connect. Fractions connect to algebra. Grammar connects to essay structure. Tutors make these connections explicit rather than teaching each topic in isolation.",
      },
      {
        emoji: "💬",
        title: "Increasing Metacognition",
        desc: "\"Which part felt unclear? What strategy would you try if stuck? How confident are you, 1–10?\" This builds self-awareness that pays off enormously at GCSE and beyond.",
      },
    ],
  },
  {
    label: "Upper Secondary",
    sublabel: "Ages 14–16",
    intro:
      "At GCSE level, the balance shifts towards exam preparation alongside curriculum understanding. Students are under real pressure and need both academic support and confidence management.",
    items: [
      {
        emoji: "📋",
        title: "Exam Board Alignment",
        desc: "Every session is directly aligned to the student's specific exam board (AQA, Edexcel, OCR, CIE). We use the exact mark schemes and assessment objectives examiners use — students learn both the content and the language examiners reward.",
      },
      {
        emoji: "⏱️",
        title: "Timed Practice Under Pressure",
        desc: "Regular timed questions and mini-tests build the mental stamina and time-management skills needed for the actual exam. Many students know the content but lose marks through poor time management — we train this specifically.",
      },
      {
        emoji: "🔍",
        title: "Mark Scheme Decoding",
        desc: "We teach students to read mark schemes as a skill. Understanding why certain answers get marks and others do not is one of the most underused exam preparation tools. We dedicate time to this in every exam-focused session.",
      },
      {
        emoji: "📈",
        title: "Grade Boundary Awareness",
        desc: "Knowing \"you need 12 more marks to move from a 6 to a 7\" is a powerful motivator. We make grade boundaries transparent and use them to focus preparation effort efficiently.",
      },
    ],
  },
  {
    label: "Sixth Form & Beyond",
    sublabel: "Ages 16–18",
    intro:
      "At A-Level, IB, and SAT/ACT level, students are preparing for university and need to develop independence, deep subject knowledge, and the ability to think critically. The tutor's role shifts from instructor to academic mentor.",
    items: [
      {
        emoji: "🧠",
        title: "Deep Conceptual Understanding",
        desc: "At A-Level and IB, surface memorisation is insufficient. Examiners reward genuine understanding. Tutors spend time on the \"why\" — derivations, proofs, analysis, evaluation — not just the \"how.\"",
      },
      {
        emoji: "📚",
        title: "Extended Writing and Essay Technique",
        desc: "For humanities and English subjects, a significant portion of session time is dedicated to planning, structuring, and writing extended responses. Tutors mark drafts and give detailed written feedback.",
      },
      {
        emoji: "🔬",
        title: "Independent Investigation Skills",
        desc: "IB Internal Assessments, A-Level coursework, and extended essays require research and independent thinking skills that are rarely taught explicitly. Our tutors guide students through the research process and academic writing conventions.",
      },
      {
        emoji: "🎯",
        title: "University Application Awareness",
        desc: "Tutors are aware of each student's target universities and programmes, aligning the level of challenge and areas of focus accordingly — a student aiming for Mathematics at a Russell Group university needs something different from one aiming for Business.",
      },
    ],
  },
];

const commCards = [
  {
    icon: "📅",
    heading: "Before the Session",
    accent: "#4281FF",
    items: [
      "Review of previous session notes and student progress",
      "Check if the student has specific questions or homework to work through",
      "Parent can message in advance with concerns or updates",
      "Session plan confirmed with agreed focus areas",
    ],
  },
  {
    icon: "🖥️",
    heading: "During the Session",
    accent: "#FF9682",
    items: [
      "Real-time collaborative learning on the shared whiteboard",
      "Tutor monitors understanding at every step",
      "Immediate correction and reinforcement as work happens",
      "Session recordable (with parent permission) for later review",
    ],
  },
  {
    icon: "📤",
    heading: "After the Session",
    accent: "#FFD562",
    items: [
      "Short session summary sent to parents within 24 hours",
      "Topics covered, performance notes, and areas to revisit",
      "Homework or independent practice tasks assigned where appropriate",
      "Next session focus areas confirmed",
    ],
  },
];

const compareRows = [
  {
    classroom: "1 teacher to 25–30 students",
    mathedemic: "1 tutor dedicated entirely to your child",
  },
  {
    classroom: "Pace is fixed for the whole class",
    mathedemic: "Pace adapts to your child in real time",
  },
  {
    classroom: "Questions feel risky in front of peers",
    mathedemic: "No social pressure — every question is welcome",
  },
  {
    classroom: "Gaps accumulate silently over months",
    mathedemic: "Gaps are identified and addressed immediately",
  },
  {
    classroom: "Feedback comes days after the lesson",
    mathedemic: "Feedback is instant, during the session",
  },
  {
    classroom: "Limited time for struggling students",
    mathedemic: "The entire hour belongs to your child",
  },
  {
    classroom: "Teacher cannot see every student's work",
    mathedemic: "Tutor watches every step on the shared whiteboard",
  },
];

const TeachingMethods = () => {
  useScrollReveal();
  const [activeAge, setActiveAge] = useState(0);

  return (
    <>
      <Helmet>
        <title>Our Teaching Methods — How Mathedemic Tutors Teach Online</title>
        <meta
          name="description"
          content="Discover how Mathedemic delivers world-class online tutoring. We use interactive whiteboards, video calling, worksheets, feedback loops, scaffolding, and proven educational psychology to help every student succeed."
        />
        <link rel="canonical" href="https://www.mathedemic.com/teaching-methods" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Teaching Methods", "item": "https://www.mathedemic.com/teaching-methods"}
          ]
        })}</script>
        <meta property="og:title" content="Our Teaching Methods — How Mathedemic Tutors Teach Online" />
        <meta
          property="og:description"
          content="Discover how Mathedemic delivers world-class online tutoring. Interactive whiteboards, video calling, worksheets, and proven educational psychology to help every student succeed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mathedemic.com/teaching-methods" />
      </Helmet>

      <PageHeader title="Our Teaching Methods" />

      {/* Section 1 — Intro */}
      <section className="tm-intro-section">
        <div className="tm-intro-inner reveal">
          <span className="section-eyebrow">Our Approach</span>
          <h2>Learning That Actually Works</h2>
          <p>
            At Mathedemic, we believe that great teaching is more than just knowing a subject deeply
            — it is understanding how each individual student learns, what holds them back, and what
            unlocks their potential. Every session we deliver combines the right technology, the right
            teaching psychology, and the right level of challenge to help students make real, measurable
            progress.
          </p>
          <p>
            Online tutoring, when done well, can be more effective than traditional in-person teaching.
            The one-on-one format eliminates the distractions of a classroom, the pace adapts entirely
            to the student, and the tools available in a digital environment — interactive whiteboards,
            real-time annotation, instant resource sharing — give tutors capabilities that a physical
            classroom rarely offers.
          </p>
        </div>

        <div className="tm-stats-row reveal">
          {[
            { num: "100%", label: "One-on-one sessions" },
            { num: "5+", label: "Years of online teaching experience" },
            { num: "500+", label: "Students taught worldwide" },
            { num: "20+", label: "Qualified tutors" },
          ].map((s, i) => (
            <div key={i} className="tm-stat-item">
              <span className="tm-stat-num">{s.num}</span>
              <span className="tm-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 — Tools */}
      <section style={{ background: "#F9FAFB", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            Technology
          </span>
          <h2 className="tp-section-title">The Tools Behind Every Session</h2>
          <p className="tp-section-sub">
            Professional-grade technology that makes remote learning seamless and genuinely engaging.
          </p>
          <div className="tm-tool-grid">
            {toolCards.map((card, i) => (
              <div
                key={i}
                className="tm-tool-card reveal"
                style={{ "--tc-accent": card.accent, "--tc-bg": card.bg }}
              >
                <div className="tm-tool-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="tm-tool-names">{card.tools}</p>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Teaching Principles */}
      <section className="tm-principles-section">
        <div className="tm-principles-inner">
          <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            The Science Behind Our Approach
          </span>
          <h2 className="tp-section-title">Teaching Principles That Drive Real Results</h2>
          <p className="tp-section-sub">
            Every technique we use is grounded in educational psychology and decades of research into
            how learning actually works.
          </p>
          <div className="tm-principles">
            {principles.map((p, i) => (
              <div
                key={i}
                className={`tm-principle-row reveal${i % 2 === 1 ? " reverse" : ""}`}
              >
                <div className="tm-principle-text">
                  <h3>{p.heading}</h3>
                  {p.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <div
                  className="tm-principle-icon-block"
                  style={{ "--p-bg": p.bg }}
                >
                  <span className="tm-principle-icon">{p.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Age Groups */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            Every Age Group
          </span>
          <h2 className="tp-section-title">Tailored Approaches for Every Stage of Learning</h2>
          <p className="tp-section-sub">
            How we adapt our methods for different ages, abilities, and learning needs.
          </p>
          <div className="age-tabs-wrap">
            <div className="age-tabs">
              {ageGroups.map((g, i) => (
                <button
                  key={i}
                  className={`age-tab${activeAge === i ? " active" : ""}`}
                  onClick={() => setActiveAge(i)}
                >
                  {g.label}{" "}
                  <span style={{ opacity: 0.75, fontSize: "12px" }}>({g.sublabel})</span>
                </button>
              ))}
            </div>
            <div className="age-tab-content" key={activeAge}>
              <p>{ageGroups[activeAge].intro}</p>
              <ul className="age-tab-list">
                {ageGroups[activeAge].items.map((item, i) => (
                  <li key={i}>
                    <span className="age-tab-emoji">{item.emoji}</span>
                    <span>
                      <strong>{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Communication Model */}
      <section style={{ background: "#F9FAFB", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            Transparency
          </span>
          <h2 className="tp-section-title">How We Keep Parents and Students Informed</h2>
          <p className="tp-section-sub">
            Three touchpoints every session — before, during, and after — so parents are always in the loop.
          </p>
          <div className="tm-comm-grid">
            {commCards.map((card, i) => (
              <div
                key={i}
                className="tm-comm-card reveal"
                style={{ "--comm-accent": card.accent }}
              >
                <div className="tm-comm-icon">{card.icon}</div>
                <h3>{card.heading}</h3>
                <ul className="tm-comm-list">
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Comparison Table */}
      <section style={{ background: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span className="section-eyebrow" style={{ display: "block", textAlign: "center" }}>
            The Difference
          </span>
          <h2 className="tp-section-title">
            Why One-on-One Online Tutoring Outperforms the Classroom
          </h2>
          <p className="tp-section-sub">
            A direct comparison of what your child experiences in each environment.
          </p>
          <div className="tm-compare-wrap">
            <table className="tm-compare-table">
              <thead>
                <tr>
                  <th>In a typical classroom</th>
                  <th>In a Mathedemic session</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.classroom}</td>
                    <td>{row.mathedemic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="subj-cta-strip">
        <h2>Experience the Mathedemic Method Yourself</h2>
        <p>
          Book a free trial session and see first-hand how our approach helps your child make real
          progress. No commitment, no pressure.
        </p>
        <div className="subj-cta-btns">
          <a
            href={waLink(TRIAL_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            📅 Book a Free Trial on WhatsApp
          </a>
          <Link to="/services" className="btn-ghost-inv">
            View Our Subjects →
          </Link>
        </div>
      </section>
    </>
  );
};

export default TeachingMethods;
