import { useState, useEffect } from 'react';
import { waLink, WHATSAPP_BOOKING_MESSAGE } from '../constants/contact';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('announcementDismissed')) {
      setDismissed(true);
    }
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    localStorage.setItem('announcementDismissed', '1');
    setDismissed(true);
  };

  return (
    <div className="announcement-bar" style={{ position: 'relative' }}>
      🎉 <strong>Limited Offer:</strong> First session is completely free — No fees required!
      <a
        href={waLink(WHATSAPP_BOOKING_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="announce-cta"
      >
        Claim Your Free Trial →
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="announce-dismiss"
      >
        ✕
      </button>
    </div>
  );
}
