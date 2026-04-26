const badges = [
  { icon: '🔒', label: 'HTTPS Secured' },
  { icon: '⭐', label: '500+ Happy Students' },
  { icon: '🎁', label: 'Free First Session' },
  { icon: '✅', label: 'Cancel Anytime' },
];

const TrustBadges = () => (
  <section style={{ padding: '40px 24px', background: '#FAFAFA' }}>
    <div style={{
      maxWidth: '900px', margin: '0 auto',
      display: 'flex', gap: '16px', flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {badges.map((b, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: '#fff', border: '0.5px solid #E5E7EB',
          borderRadius: '100px', padding: '10px 20px',
          fontSize: '14px', fontWeight: 600, color: '#374151',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          whiteSpace: 'nowrap',
        }}>
          <span style={{ fontSize: '16px' }}>{b.icon}</span>
          {b.label}
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadges;
