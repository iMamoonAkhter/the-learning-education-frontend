import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../components/PageHeader';
import { waLink, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_BOOKING_MESSAGE } from '../constants/contact';

// ⚠️  Replace the ID below with your real Formspree form ID.
// 1. Go to https://formspree.io and sign up.
// 2. Create a new form, set the email to info@mathedemic.com.
// 3. Copy the form ID (looks like "xabc1234") and paste it below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const gradeOptions = [
  'Year 1–2', 'Year 3–4', 'Year 5–6', 'Year 7–8',
  'Year 9–10', 'Year 11–12 / A-Level', 'University Level', 'Other',
];

const subjectOptions = [
  'Mathematics', 'English', 'Science', 'Physics', 'Chemistry', 'Biology',
  'SAT/ACT Prep', 'GCSE Preparation', 'A-Level Preparation', 'NAPLAN', 'IB Programme', 'Other',
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  border: '1.5px solid #E5E7EB',
  fontSize: '15px',
  color: '#374151',
  background: '#FAFAFA',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

const labelStyle = {
  display: 'block',
  fontWeight: 600,
  fontSize: '14px',
  color: '#374151',
  marginBottom: '6px',
};

const fieldWrap = { marginBottom: '20px' };

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', country: '',
    grade: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div style={{
        background: '#ECFDF5', borderRadius: '16px', padding: '48px 32px',
        textAlign: 'center', border: '1.5px solid #6EE7B7',
      }}>
        <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ color: '#065F46', fontWeight: 700, marginBottom: '12px' }}>Enquiry received!</h3>
        <p style={{ color: '#374151', maxWidth: '480px', margin: '0 auto 24px', lineHeight: 1.6 }}>
          Thank you! We have received your enquiry and will be in touch within 24 hours. You can also
          reach us directly on WhatsApp for a faster response.
        </p>
        <a
          href={waLink(WHATSAPP_BOOKING_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#25D366', color: '#fff', borderRadius: '10px',
            padding: '12px 28px', fontWeight: 700, textDecoration: 'none',
          }}
        >
          💬 Continue on WhatsApp
        </a>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div style={{
        background: '#FFF0EE', borderRadius: '16px', padding: '36px 32px',
        textAlign: 'center', border: '1.5px solid #FF9682',
      }}>
        <p style={{ color: '#374151', marginBottom: '16px' }}>
          Something went wrong sending your enquiry. Please contact us directly on WhatsApp instead.
        </p>
        <a
          href={waLink(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#25D366', color: '#fff', borderRadius: '10px',
            padding: '12px 28px', fontWeight: 700, textDecoration: 'none',
          }}
        >
          💬 Message us on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0 24px' }}>
        <div style={fieldWrap}>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text" required value={form.name} onChange={set('name')}
            placeholder="e.g. Sarah Mitchell"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email" required value={form.email} onChange={set('email')}
            placeholder="your@email.com"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>
            Phone / WhatsApp <span style={{ color: '#6B7280', fontWeight: 400 }}>(Optional — for WhatsApp replies)</span>
          </label>
          <input
            type="text" value={form.phone} onChange={set('phone')}
            placeholder="+44 7700 900000"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>City *</label>
          <input
            type="text" required value={form.city} onChange={set('city')}
            placeholder="e.g. London"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>Country *</label>
          <input
            type="text" required value={form.country} onChange={set('country')}
            placeholder="e.g. United Kingdom"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>Child&apos;s Current Grade / Year Level *</label>
          <select
            required value={form.grade} onChange={set('grade')}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">Select year group…</option>
            {gradeOptions.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle}>Subject of Interest *</label>
          <select
            required value={form.subject} onChange={set('subject')}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={e => e.target.style.borderColor = '#4281FF'}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">Select subject…</option>
            {subjectOptions.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle}>
          Message / Additional Details <span style={{ color: '#6B7280', fontWeight: 400 }}>(Optional)</span>
        </label>
        <textarea
          rows={4} value={form.message} onChange={set('message')}
          placeholder="Tell us more about your child's needs, current level, or any specific topics they need help with."
          style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
          onFocus={e => e.target.style.borderColor = '#4281FF'}
          onBlur={e => e.target.style.borderColor = '#E5E7EB'}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary"
        style={{ minWidth: '180px', opacity: submitting ? 0.75 : 1, cursor: submitting ? 'wait' : 'pointer' }}
      >
        {submitting ? 'Sending…' : 'Send Enquiry →'}
      </button>
    </form>
  );
};

const ContactInfoPanel = () => (
  <section style={{ background: '#FAFAFA', padding: '60px 24px 48px' }}>
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
      }}>
        <div style={{
          background: '#fff', borderRadius: '16px', padding: '32px 28px',
          border: '0.5px solid #E5E7EB', textAlign: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>💬</div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>WhatsApp</h3>
          <a
            href={waLink(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4281FF', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}
          >
            Chat with us
          </a>
          <p style={{ color: '#6B7280', fontSize: '13px', marginTop: '8px', marginBottom: 0 }}>
            We typically respond within 2 hours
          </p>
        </div>

        <div style={{
          background: '#fff', borderRadius: '16px', padding: '32px 28px',
          border: '0.5px solid #E5E7EB', textAlign: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>✉️</div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>Email</h3>
          <a
            href="mailto:info@mathedemic.com"
            style={{ color: '#4281FF', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}
          >
            info@mathedemic.com
          </a>
          <p style={{ color: '#6B7280', fontSize: '13px', marginTop: '8px', marginBottom: 0 }}>
            We&apos;ll get back to you within 24 hours
          </p>
        </div>

        <div style={{
          background: '#fff', borderRadius: '16px', padding: '32px 28px',
          border: '0.5px solid #E5E7EB', textAlign: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: '36px', marginBottom: '12px' }}>🌍</div>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A2E', marginBottom: '8px' }}>Location</h3>
          <p style={{ color: '#374151', fontWeight: 600, fontSize: '15px', marginBottom: '8px' }}>
            Serving students Worldwide
          </p>
          <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: 0 }}>
            UK, USA, Australia &amp; Beyond
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us — Mathedemic Online Tutoring</title>
        <meta name="description" content="Get in touch with Mathedemic. Chat on WhatsApp, email us, or fill in the contact form. We respond within 2 hours." />
        <link rel="canonical" href="https://mathedemic.com/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.mathedemic.com/contact"}
          ]
        })}</script>
      </Helmet>
      <PageHeader title="Contact Us" />
      <ContactInfoPanel />

      {/* Enquiry Form */}
      <section style={{ background: '#fff', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
            background: '#fff', borderRadius: '20px', border: '1.5px solid #E5E7EB',
            padding: '48px 40px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#1A1A2E', marginBottom: '6px' }}>
              Send Us an Enquiry
            </h2>
            <p style={{ color: '#6B7280', fontSize: '15px', marginBottom: '36px' }}>
              We&apos;ll get back to you within 24 hours.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
