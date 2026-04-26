import { waLink, WHATSAPP_BOOKING_MESSAGE } from "../../constants/contact";

const steps = [
  {
    num: '1',
    icon: '📅',
    title: 'Book a Free Trial',
    desc: 'Choose a subject and pick a time that works for you. No commitment required.',
    color: '#4281FF',
    bg: '#EEF4FF',
  },
  {
    num: '2',
    icon: '🧑‍🏫',
    title: 'Meet Your Tutor',
    desc: 'Get matched with a qualified tutor who specialises in your subject and curriculum.',
    color: '#FF9682',
    bg: '#FFF0EE',
  },
  {
    num: '3',
    icon: '🎓',
    title: 'Start Learning',
    desc: 'Attend your first live session and see the difference personalised tutoring makes.',
    color: '#FFD562',
    bg: '#FFF8D6',
  },
];

const HowItWorks = () => (
  <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <small style={{ color: '#4281FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' }}>Simple Process</small>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#1A1A2E', margin: '8px 0 12px' }}>
          How It Works
        </h2>
        <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '480px', margin: '0 auto' }}>
          Getting started takes less than 5 minutes.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'stretch', flex: '1 1 260px', maxWidth: '320px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '0.5px solid #E5E7EB',
              borderRadius: '20px',
              padding: '36px 28px',
              textAlign: 'center',
              position: 'relative',
              flex: 1,
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-10px', right: '16px',
                fontSize: '80px', fontWeight: 900, color: step.color,
                opacity: 0.07, lineHeight: 1, userSelect: 'none',
              }}>{step.num}</div>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: step.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px',
              }}>
                {step.icon}
              </div>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: step.color, color: '#fff', fontWeight: 800,
                fontSize: '13px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', margin: '0 auto 16px',
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A2E', marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                display: 'flex', alignItems: 'center', padding: '0 4px',
                color: '#D1D5DB', fontSize: '24px', flexShrink: 0,
              }}>
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a
          href={waLink(WHATSAPP_BOOKING_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ fontSize: '16px', padding: '16px 40px' }}
        >
          📅 Book Your Free Trial Now
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorks;
