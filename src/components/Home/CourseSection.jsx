import { Link } from "react-router-dom";
import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../../constants/contact";

const subjects = [
  { icon: '∑',   label: 'Mathematics',               color: '#4281FF', bg: '#EEF4FF', desc: 'GCSE · A-Level · SAT · IB · AP',        to: '/subjects/maths' },
  { icon: '📖',  label: 'English',                   color: '#F59E0B', bg: '#FFF8D6', desc: 'Language · Literature · Writing · SAT',  to: '/subjects/english' },
  { icon: '⚗️',  label: 'Science',                   color: '#FF9682', bg: '#FFF0EE', desc: 'General Science · Grades 1–8',           to: '/subjects/science' },
  { icon: '🔬',  label: 'Physics, Chemistry & Biology', color: '#8B5CF6', bg: '#F3F0FF', desc: 'Advanced Science · Grades 9–12',      to: '/subjects/science-subjects' },
  { icon: '📝',  label: 'SAT / ACT Prep',            color: '#8B5CF6', bg: '#F3F0FF', desc: 'US College Entrance Exams',    to: '/test-prep/sat-act' },
  { icon: '🎓',  label: 'GCSE & A-Level',            color: '#10B981', bg: '#ECFDF5', desc: 'UK Curriculum · All Subjects' },
  { icon: '🌐',  label: 'IB Programme',              color: '#4281FF', bg: '#EEF4FF', desc: 'International Baccalaureate' },
  { icon: '🇦🇺', label: 'NAPLAN',                    color: '#FF9682', bg: '#FFF0EE', desc: 'Australian Curriculum',         href: '/test-prep/sat-act#naplan' },
  { icon: '🌍',  label: 'History & Geography',       color: '#6B7280', bg: '#F3F4F6', desc: 'Humanities · All Year Groups' },
  { icon: '⚡',  label: 'Physics',                   color: '#4281FF', bg: '#EEF4FF', desc: 'Mechanics · Waves · Electricity',        href: '/subjects/science-subjects#physics' },
  { icon: '🧪',  label: 'Chemistry',                 color: '#FF9682', bg: '#FFF0EE', desc: 'GCSE · A-Level · IB · Organic',          href: '/subjects/science-subjects#chemistry' },
  { icon: '🌿',  label: 'Biology',                   color: '#10B981', bg: '#ECFDF5', desc: 'GCSE · A-Level · IB · Human Biology',    href: '/subjects/science-subjects#biology' },
];

const CourseSection = () => {
  return (
    <section className="subjects-explorer">
      <div className="subjects-explorer-header">
        <span className="section-eyebrow">We Offer</span>
        <h2>
          Explore Subjects <span style={{ color: '#4281FF' }}>By Category</span>
        </h2>
        <p>Expert tutors for every subject, every curriculum, every level.</p>
      </div>

      <div className="subjects-grid">
        {subjects.map((s, i) => {
          const inner = (
            <>
              <span className="subject-pill-icon">{s.icon}</span>
              <div className="subject-pill-text">
                <strong>{s.label}</strong>
                <small>{s.desc}</small>
              </div>
              <span className="subject-pill-arrow">→</span>
            </>
          );
          const pillStyle = { '--pill-color': s.color, '--pill-bg': s.bg };
          if (s.to) {
            return <Link key={i} to={s.to} className="subject-pill" style={pillStyle}>{inner}</Link>;
          }
          if (s.href) {
            return <a key={i} href={s.href} className="subject-pill" style={pillStyle}>{inner}</a>;
          }
          return (
            <a key={i} href={waLink(WHATSAPP_BOOKING_MESSAGE)} target="_blank" rel="noopener noreferrer" className="subject-pill" style={pillStyle}>
              {inner}
            </a>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a
          href={waLink(WHATSAPP_BOOKING_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          📅 Book a Free Trial Session
        </a>
      </div>
    </section>
  );
};

export default CourseSection;
