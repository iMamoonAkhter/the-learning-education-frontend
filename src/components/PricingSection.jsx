import { useState } from 'react';
import { waLink, WHATSAPP_BOOKING_MESSAGE } from '../constants/contact';

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#EEF4FF"/>
    <path d="M6 10l3 3 5-5" stroke="#4281FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PricingSection({ title, currency, groups }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const group = groups[activeGroup];

  return (
    <div className="pricing-section">
      <h2 className="pricing-section-title">{title}</h2>

      <div className="pricing-tabs" role="tablist">
        {groups.map((g, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeGroup === i}
            className={`pricing-tab ${activeGroup === i ? 'active' : ''}`}
            onClick={() => setActiveGroup(i)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="pricing-cards-row" key={activeGroup}>
        {group.plans.map((plan, pi) => (
          <div
            key={pi}
            className={`pricing-card-new ${plan.featured ? 'featured' : ''}`}
          >
            {plan.featured && (
              <div className="pricing-popular-badge">⭐ Most Popular</div>
            )}
            <div className="pricing-plan-name">{plan.name}</div>

            <div className="pricing-price-block">
              <span className="pricing-old-price">{currency}{plan.oldPrice}</span>
              <div className="pricing-new-price">
                <span className="pricing-amount">{currency}{plan.price}</span>
                <span className="pricing-period">/Month</span>
              </div>
              <div className="pricing-save-badge">SAVE {plan.save}</div>
            </div>

            <ul className="pricing-features">
              {plan.features.map((f, fi) => (
                <li key={fi}>{checkIcon}<span>{f}</span></li>
              ))}
            </ul>

            <a
              href={waLink(WHATSAPP_BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pricing-cta"
            >
              Get Free Trial →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
