const stats = [
  { num: '10+', label: 'Subjects' },
  { num: '5', label: 'Curricula' },
  { num: 'UK, US, AU, IB & CBSE', label: 'Covered' },
  { num: 'Ages 5–18', label: 'Supported' },
];

const StatsStrip = () => (
  <section style={{
    background: '#1A1A2E',
    padding: '32px 24px',
  }}>
    <div style={{
      maxWidth: '1100px', margin: '0 auto',
      display: 'flex', gap: '24px', flexWrap: 'wrap',
      justifyContent: 'space-around', alignItems: 'center',
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center', flex: '1 1 180px' }}>
          <div style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, color: '#FFD562', lineHeight: 1.1 }}>
            {s.num}
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
