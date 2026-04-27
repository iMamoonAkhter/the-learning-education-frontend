import { Helmet } from "react-helmet-async";
import PricingSection from "./PricingSection";

const ukGroups = [
  {
    label: 'Year 1–4',
    plans: [
      { name: '2 Days / Week', oldPrice: '100', price: '80', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '150', price: '110', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '275', price: '165', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 5–8',
    plans: [
      { name: '2 Days / Week', oldPrice: '110', price: '90', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '170', price: '125', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '310', price: '185', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 9–10',
    plans: [
      { name: '2 Days / Week', oldPrice: '130', price: '105', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '190', price: '140', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '350', price: '210', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
  {
    label: 'Year 11–12',
    plans: [
      { name: '2 Days / Week', oldPrice: '150', price: '130', save: '20%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 2 Weekdays', '8 Classes per month'], featured: false },
      { name: '3 Days / Week', oldPrice: '215', price: '160', save: '25%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Any 3 Weekdays', '12 Classes per month'], featured: true },
      { name: '5 Days / Week', oldPrice: '390', price: '230', save: '40%', features: ['One-to-One Live Session', '1 Hour Class Each Day', 'Monday–Friday', '22 Classes per month'], featured: false },
    ]
  },
];

const UK_Details = () => {
  return (
    <>
      <Helmet>
        <title>UK Fee Structure — Affordable Online Tutoring Plans | Mathedemic</title>
        <meta name="description" content="View Mathedemic's transparent UK tutoring fee plans. Affordable one-to-one online tutoring for Year 1–12 students. First session free." />
        <link rel="canonical" href="https://www.mathedemic.com/uk-fee-structure" />
      </Helmet>
      <section style={{ paddingTop: "60px", background: "#FAFAFA", minHeight: "60vh" }}>
        <div style={{ textAlign: "center", padding: "0 24px 40px" }}>
          <p style={{ color: "#6B7280", maxWidth: "640px", margin: "0 auto", fontSize: "16px" }}>
            If you need a customized plan for one or multiple students, contact us and we will provide you with the plan you need.
          </p>
        </div>
        <PricingSection title="UK Fee Structure" currency="£" groups={ukGroups} />
      </section>
    </>
  );
};

export default UK_Details;
