import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { waLink, WHATSAPP_BOOKING_MESSAGE } from '../constants/contact';

const tutors = [
  {
    initials: 'HN',
    name: 'Haseeb Nazeer',
    position: 'Senior English Teacher',
    experience: '10 Years',
    email: 'info@mathedemic.com',
    contactNote: 'Contact via our contact page',
    avatarBg: '#4281FF',
    education: [
      'MA English Language Teaching and Linguistics (Sep 2014 – Jun 2016), University of the Punjab, Lahore, Pakistan',
    ],
    bio: "Does English feel like a challenge for your child? Concepts like Comprehension, Grammar, and Creative Writing don't have to be overwhelming. With ten years of dedicated tutoring experience, I turn complex topics into lessons students can connect with and enjoy. I have worked with students from the UK, USA, Canada, Australia, Gulf and many other countries, constantly adapting my teaching style to meet their specific needs.",
    achievements: [
      'Best English Teacher Award 2020',
      'Excellence in Teaching English 2021',
      'Top Educator Recognition 2022',
      'Innovative Teaching Award 2023',
    ],
  },
  {
    initials: 'SR',
    name: 'Saima R',
    position: 'English & Mathematics Teacher (Primary/Elementary)',
    experience: '6 Years',
    email: 'info@mathedemic.com',
    contactNote: 'Contact via our contact page',
    avatarBg: '#FF9682',
    education: [
      'BEd (Hons) Elementary Education (Sep 2016 – Jun 2020), University of the Punjab, Lahore, Pakistan',
    ],
    bio: 'A dedicated and enthusiastic teacher specialising in Primary and Elementary English and Mathematics. Saima brings a nurturing approach to young learners, building strong foundations that set students up for long-term academic success.',
    achievements: [],
  },
  {
    initials: 'MN',
    name: 'M Naveed',
    position: 'Senior Mathematics Tutor (GCSE, A-Level & AP)',
    experience: '10 Years',
    email: 'info@mathedemic.com',
    contactNote: 'Contact via our contact page',
    avatarBg: '#FFD562',
    avatarText: '#1A1A2E',
    education: [
      'MSc Mathematics (2014–2016), Quaid-e-Azam University, Islamabad, Pakistan',
    ],
    bio: "A highly experienced Mathematics tutor with a Master's degree from one of Pakistan's leading universities. M Naveed specialises in GCSE, A-Level, and AP Mathematics, helping students build deep conceptual understanding and exam confidence.",
    achievements: [],
  },
  {
    initials: 'AR',
    name: 'Abdul R',
    position: 'Mathematics Tutor',
    experience: '10 Years',
    email: 'info@mathedemic.com',
    contactNote: 'Contact via our contact page',
    avatarBg: '#10B981',
    education: [
      'BS Mathematics (2012–2016), COMSATS University, Islamabad, Pakistan',
    ],
    bio: 'Abdul brings a decade of tutoring experience to every session. His calm, methodical approach helps students who struggle with Mathematics build real confidence step by step, from foundational concepts to advanced problem-solving.',
    achievements: [],
  },
  {
    initials: 'MA',
    name: 'Mamoon Akhter',
    position: 'Science Teacher (General Science, Physics & Chemistry)',
    experience: '5 Years',
    email: 'info@mathedemic.com',
    contactNote: 'Contact via our contact page',
    avatarBg: '#8B5CF6',
    education: [
      'MSc Applied Physics (2016–2020), University of Engineering and Technology, Lahore, Pakistan',
    ],
    bio: "Mamoon holds a Master's in Applied Physics and brings that depth of knowledge into every Science lesson. He makes complex Physics and Chemistry concepts accessible and engaging for students at all levels, with a particular focus on exam technique.",
    achievements: [],
  },
];

const TutorCard = ({ tutor }) => (
  <div style={{
    background: '#FFFFFF',
    borderRadius: '20px',
    border: '0.5px solid #E5E7EB',
    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'; }}
  >
    {/* Avatar placeholder */}
    <div style={{
      background: '#F3F4F6',
      height: '260px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      position: 'relative',
    }}>
      <div style={{
        width: '100px', height: '100px', borderRadius: '50%',
        background: tutor.avatarBg, color: tutor.avatarText || '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '36px', fontWeight: 800, letterSpacing: '1px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
      }}>
        {tutor.initials}
      </div>
      <p style={{ color: '#9CA3AF', fontSize: '12px', margin: 0 }}>Photo coming soon</p>
      <div style={{
        position: 'absolute', bottom: '12px', right: '12px',
        background: '#FFD562', color: '#1A1A2E',
        padding: '4px 12px', borderRadius: '100px',
        fontSize: '12px', fontWeight: 700,
      }}>
        {tutor.experience} Experience
      </div>
    </div>

    {/* Card body */}
    <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div>
        <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A2E', margin: '0 0 4px' }}>{tutor.name}</h2>
        <p style={{ fontSize: '14px', fontWeight: 600, color: '#4281FF', margin: 0 }}>{tutor.position}</p>
      </div>

      <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.65, margin: 0 }}>{tutor.bio}</p>

      {/* Education */}
      <div>
        <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
          Education & Qualifications
        </h3>
        {tutor.education.map((edu, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px' }}>
            <span style={{ fontSize: '16px', flexShrink: 0 }}>🎓</span>
            <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5, margin: 0 }}>{edu}</p>
          </div>
        ))}
      </div>

      {/* Achievements if any */}
      {tutor.achievements.length > 0 && (
        <div>
          <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            Achievements
          </h3>
          {tutor.achievements.map((ach, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', flexShrink: 0 }}>🏆</span>
              <p style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5, margin: 0 }}>{ach}</p>
            </div>
          ))}
        </div>
      )}

      {/* Contact info */}
      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #F3F4F6' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
          <span style={{ fontSize: '14px' }}>✉️</span>
          <a href={`mailto:${tutor.email}`} style={{ fontSize: '13px', color: '#4281FF', fontWeight: 600, textDecoration: 'none' }}>{tutor.email}</a>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '14px' }}>📞</span>
          <span style={{ fontSize: '13px', color: '#6B7280' }}>{tutor.contactNote}</span>
        </div>
        <a
          href={waLink(WHATSAPP_BOOKING_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'flex', width: '100%', justifyContent: 'center', boxSizing: 'border-box' }}
        >
          Book a Session
        </a>
      </div>
    </div>
  </div>
);

const Teacher_Single = () => (
  <>
    <Helmet>
      <title>Meet Our Expert Tutors — Mathedemic</title>
      <meta name="description" content="Meet the Mathedemic team — qualified, experienced tutors specialising in Mathematics, Science, English, and more. Book a free trial with any of our tutors today." />
      <link rel="canonical" href="https://mathedemic.com/teacher-details" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
          {"@type": "ListItem", "position": 2, "name": "Our Tutors", "item": "https://www.mathedemic.com/teacher-details"}
        ]
      })}</script>
    </Helmet>
    <PageHeader title="Meet Our Expert Tutors" />

    <section style={{ background: '#FAFAFA', padding: '60px 24px 80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <small style={{ color: '#4281FF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '13px' }}>Our Team</small>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#1A1A2E', margin: '8px 0 12px' }}>
            Qualified, Experienced & Passionate
          </h1>
          <p style={{ color: '#6B7280', fontSize: '16px', maxWidth: '580px', margin: '0 auto' }}>
            Every Mathedemic tutor is carefully selected for subject expertise, teaching ability, and genuine passion for student success.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
        }}>
          {tutors.map((tutor, i) => (
            <TutorCard key={i} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Teacher_Single;
