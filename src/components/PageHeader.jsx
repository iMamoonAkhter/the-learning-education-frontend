import { Link } from "react-router-dom";

const BookIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="14" height="28" rx="2" fill="#4281FF" fillOpacity="0.18" stroke="#4281FF" strokeOpacity="0.35" strokeWidth="1.5"/>
    <rect x="24" y="8" width="14" height="28" rx="2" fill="#4281FF" fillOpacity="0.18" stroke="#4281FF" strokeOpacity="0.35" strokeWidth="1.5"/>
    <line x1="20" y1="8" x2="24" y2="8" stroke="#4281FF" strokeOpacity="0.35" strokeWidth="1.5"/>
    <line x1="20" y1="36" x2="24" y2="36" stroke="#4281FF" strokeOpacity="0.35" strokeWidth="1.5"/>
  </svg>
);

const PencilIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32l4-12L28 8l4 4L16 28 8 32z" fill="#FFD562" fillOpacity="0.28" stroke="#FFD562" strokeOpacity="0.5" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M28 8l4 4" stroke="#FFD562" strokeOpacity="0.5" strokeWidth="1.5"/>
    <path d="M8 32l4-2 -2-2z" fill="#FFD562" fillOpacity="0.4"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,10 40,18 22,26 4,18" fill="#FF9682" fillOpacity="0.22" stroke="#FF9682" strokeOpacity="0.45" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M32 22v9c0 3-5 5-10 5s-10-2-10-5v-9" fill="#FF9682" fillOpacity="0.15" stroke="#FF9682" strokeOpacity="0.45" strokeWidth="1.5"/>
    <line x1="40" y1="18" x2="40" y2="28" stroke="#FF9682" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4l3.5 10H32l-8.5 6.2 3.2 10L18 24.5l-8.7 5.7 3.2-10L4 14h10.5z"
      fill="#4281FF" fillOpacity="0.18" stroke="#4281FF" strokeOpacity="0.4" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);

const PageHeader = ({ title }) => {
  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{title}</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Education-themed decorative icons */}
      <div className="shape-1" style={{ position: 'absolute', top: '14px', left: '6%', transform: 'rotate(-15deg)', opacity: 0.9 }}>
        <BookIcon />
      </div>
      <div className="shape-2" style={{ position: 'absolute', top: '10px', left: '22%', transform: 'rotate(10deg)', opacity: 0.85 }}>
        <PencilIcon />
      </div>
      <div className="shape-3" style={{ position: 'absolute', top: '8px', right: '20%', transform: 'rotate(-10deg)', opacity: 0.9 }}>
        <GradCapIcon />
      </div>
      <div className="shape-4" style={{ position: 'absolute', top: '16px', right: '5%', transform: 'rotate(12deg)', opacity: 0.85 }}>
        <StarIcon />
      </div>
    </section>
  );
};

export default PageHeader;
