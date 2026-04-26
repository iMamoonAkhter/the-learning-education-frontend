import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import { waLink, WHATSAPP_DEFAULT_MESSAGE } from "../constants/contact";

const Resources = () => (
  <>
    <Helmet>
      <title>Free Learning Resources — Coming Soon | Mathedemic</title>
      <meta name="description" content="Mathedemic is preparing free worksheets, practice papers, and study guides for students. Check back soon for free educational resources." />
      <link rel="canonical" href="https://mathedemic.com/resources" />
    </Helmet>
    <PageHeader title="Free Resources" />
    <section style={{ background: '#FAFAFA', padding: '80px 24px', minHeight: '50vh' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>📚</div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#1A1A2E', marginBottom: '16px' }}>
          Free Learning Resources — Coming Soon!
        </h1>
        <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: 1.7, marginBottom: '32px' }}>
          We're preparing <strong>free worksheets, practice papers, and study guides</strong> for every subject and curriculum — UK GCSE, A-Level, US SAT, IB, and more.
          <br /><br />
          Check back soon. In the meantime, book a free trial session with one of our expert tutors.
        </p>
        <a
          href={waLink(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: 'inline-flex' }}
        >
          💬 Get Notified on WhatsApp
        </a>
      </div>
    </section>
  </>
);

export default Resources;
