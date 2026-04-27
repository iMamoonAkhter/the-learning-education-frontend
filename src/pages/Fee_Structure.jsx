import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import PricingSection from "../components/PricingSection";

const ukGroups = [
  {
    label: 'Year 1–4',
    plans: [
      { name: '2 Days / Week', oldPrice: '80', price: '65', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '115', price: '85', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '215', price: '130', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 5–8',
    plans: [
      { name: '2 Days / Week', oldPrice: '90', price: '70', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '135', price: '100', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '240', price: '145', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 9–10',
    plans: [
      { name: '2 Days / Week', oldPrice: '105', price: '85', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '145', price: '110', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '275', price: '165', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 11–12',
    plans: [
      { name: '2 Days / Week', oldPrice: '125', price: '100', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '165', price: '125', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '300', price: '180', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
];

const usGroups = [
  {
    label: 'Grades K–4',
    plans: [
      { name: '2 Days / Week', oldPrice: '100', price: '80', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '150', price: '110', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '275', price: '165', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Grades 5–8',
    plans: [
      { name: '2 Days / Week', oldPrice: '110', price: '90', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '170', price: '125', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '310', price: '185', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Grades 9–10',
    plans: [
      { name: '2 Days / Week', oldPrice: '130', price: '105', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '190', price: '140', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '350', price: '210', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Grades 11–12',
    plans: [
      { name: '2 Days / Week', oldPrice: '150', price: '130', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '215', price: '160', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '390', price: '230', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
];

const Fee_Structure = () => {
  const [region, setRegion] = useState('uk');
  const isUK = region === 'uk';

  return (
    <>
      <Helmet>
        <title>{isUK ? 'UK Fee Structure' : 'US Fee Structure'} — Affordable Online Tutoring | Mathedemic</title>
        <meta name="description" content="View Mathedemic's transparent tutoring fee plans. Flexible monthly plans from 2 to 5 days per week. First session free." />
        <link rel="canonical" href={`https://www.mathedemic.com/${isUK ? 'uk-fee-structure' : 'us-international-fee-structure'}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mathedemic.com/"},
            {"@type": "ListItem", "position": 2, "name": "Fee Structure", "item": `https://www.mathedemic.com/${isUK ? 'uk-fee-structure' : 'us-international-fee-structure'}`}
          ]
        })}</script>
      </Helmet>

      <PageHeader title="Fee Structure" />

      {/* UK / US Toggle */}
      <div style={{ background: '#FAFAFA', paddingTop: '48px', paddingBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
          <div style={{
            display: 'inline-flex',
            background: '#E5E7EB',
            borderRadius: '100px',
            padding: '5px',
            gap: '4px',
          }}>
            <button
              onClick={() => setRegion('uk')}
              style={{
                padding: '12px 32px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '16px',
                background: isUK ? '#4281FF' : 'transparent',
                color: isUK ? '#fff' : '#6B7280',
                transition: 'all 0.2s ease',
                boxShadow: isUK ? '0 4px 14px rgba(66,129,255,0.35)' : 'none',
              }}
            >
              🇬🇧 UK (£)
            </button>
            <button
              onClick={() => setRegion('us')}
              style={{
                padding: '12px 32px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '16px',
                background: !isUK ? '#4281FF' : 'transparent',
                color: !isUK ? '#fff' : '#6B7280',
                transition: 'all 0.2s ease',
                boxShadow: !isUK ? '0 4px 14px rgba(66,129,255,0.35)' : 'none',
              }}
            >
              🇺🇸 US ($)
            </button>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: '#6B7280', fontSize: '15px', marginBottom: 0, padding: '0 24px' }}>
          If you need a customized plan, contact us and we will find the right fit for you.
        </p>
      </div>

      <section style={{ background: '#FAFAFA', paddingBottom: '60px' }}>
        {isUK
          ? <PricingSection title="UK Fee Structure" currency="£" groups={ukGroups} />
          : <PricingSection title="US & International Fee Structure" currency="$" groups={usGroups} />
        }
      </section>
    </>
  );
};

export default Fee_Structure;
