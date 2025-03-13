import React from "react";
import "../style/TermsDetails.css"; // Import custom CSS
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const TermsDetails = () => {
  const tutoring = useSelector((state) => state.tutoring);

  return (
    <div className="terms-container">
        <div className="termscontainer">
      <h1 className="terms-title">Terms & Conditions</h1>
      <p className="terms-intro">
        Welcome to <strong>{tutoring.service_name}</strong>! We are committed to providing high-quality, flexible, and effective online tutoring. To ensure a smooth and beneficial learning experience, please review our <strong>Terms & Conditions</strong> carefully.
      </p>

      {/* 1. Attendance & Make-Up Classes */}
      <section className="terms-section">
        <h2>1. Attendance & Make-Up Classes</h2>
        <h3>1.1 Tutor Absence</h3>
        <ul>
          <li>If a tutor misses a scheduled class, we will reschedule at your convenience at no extra cost.</li>
          <li>If rescheduling is not possible, a full refund will be issued.</li>
        </ul>
        <h3>1.2 Student Absence</h3>
        <ul>
          <li>Students must provide at least 8 hours' notice to reschedule a missed class.</li>
          <li>Missed classes without notice will be considered completed and are non-refundable.</li>
          <li>Medical emergencies may be considered with proper documentation.</li>
        </ul>
      </section>

      {/* 2. Monthly Plan & Public Holidays */}
      <section className="terms-section">
        <h2>2. Monthly Plan & Public Holidays</h2>
        <ul>
          <li>No make-up classes for public holidays unless agreed in advance.</li>
          <li>Students may choose to attend the session on the holiday or have it counted as completed.</li>
        </ul>
      </section>

      {/* 3. Make-Up Classes for Hourly Sessions */}
      <section className="terms-section">
        <h2>3. Make-Up Classes for Hourly Sessions</h2>
        <ul>
          <li>Hourly classes are charged per hour, and students are only billed for attended sessions.</li>
          <li>Students must cancel at least 8 hours before the scheduled time.</li>
          <li>Public holidays do not affect hourly sessions.</li>
        </ul>
      </section>

      {/* 4. Payment Policy */}
      <section className="terms-section">
        <h2>4. Payment Policy</h2>
        <ul>
          <li>Payments for monthly plans must be made in advance.</li>
          <li>Hourly session payments can be made before each session or in bulk.</li>
          <li>Late payments may result in paused classes.</li>
          <li>No refunds for completed/missed classes unless due to tutor unavailability.</li>
        </ul>
      </section>

      {/* 5. Technical Issues & Rescheduling */}
      <section className="terms-section">
        <h2>5. Technical Issues & Rescheduling</h2>
        <ul>
          <li>If the tutor has technical issues, the class will be rescheduled at no cost.</li>
          <li>If the student faces technical issues, the session will be considered completed unless reported before it starts.</li>
        </ul>
      </section>

      {/* 6. Tutor Assignments & Subject-Specific Teaching */}
      <section className="terms-section">
        <h2>6. Tutor Assignments & Subject-Specific Teaching</h2>
        <ul>
          <li>Each student is assigned a subject-specific tutor.</li>
          <li>If a student is unsatisfied with a tutor, we can arrange a replacement.</li>
        </ul>
      </section>

      {/* 7. Cancellation & Termination Policy */}
      <section className="terms-section">
        <h2>7. Cancellation & Termination Policy</h2>
        <ul>
          <li>Students must provide a 7-day notice to discontinue tutoring.</li>
          <li>If a tutor resigns, we will attempt to arrange a replacement.</li>
          <li>Failure to attend classes for more than 2 weeks may result in automatic termination without refund.</li>
        </ul>
      </section>

      {/* 8. Code of Conduct & Learning Environment */}
      <section className="terms-section">
        <h2>8. Code of Conduct & Learning Environment</h2>
        <ul>
          <li>Students must attend classes on time and actively participate.</li>
          <li>Disruptive behavior may result in suspension.</li>
          <li>Parents should ensure a quiet, distraction-free learning space.</li>
        </ul>
      </section>

      {/* 9. Privacy & Data Protection */}
      <section className="terms-section">
        <h2>9. Privacy & Data Protection</h2>
        <ul>
          <li>Student data is kept confidential and not shared with third parties.</li>
          <li>Sessions may be recorded for quality improvement but will not be shared publicly.</li>
          <li>Parents may request access to recorded sessions for review.</li>
        </ul>
      </section>

      <p className="terms-footer">
        📌 By enrolling in our tutoring services, you agree to abide by these Terms & Conditions. If you have any questions, please contact our support team.  
        <br />
        📞 Need Assistance? Contact us at <strong><Link to={'/contact'}>Contact US!</Link></strong>.
        <br />
        🚀 Thank you for choosing <strong>{tutoring.service_name}</strong>! We look forward to helping your child succeed. 🎓
      </p>
      </div>
    </div>
  );
};

export default TermsDetails;
