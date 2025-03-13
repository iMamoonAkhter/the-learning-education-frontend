import React from 'react';
import "../../style/about-container.css"
const About_Desc = () => {
  return (
    <div className="about-container">
      <div className="row about-details">
        <div className="col-12">
          <h3 className="section-title border-bottom pb-2 mb-4">Why We Stand Out</h3>
          <ul className="about-list">
            <li><strong> Global Reach, Local Impact:</strong> Supporting students worldwide with tailored lessons.</li>
            <li><strong> Expert Tutors, Personalized Learning:</strong> Adaptive teaching methods for every student.</li>
            <li><strong> Flexible & Convenient:</strong> Learn from home with easy scheduling.</li>
            <li><strong> Affordable & High-Quality:</strong> Bridging the gap between tutoring and accessibility.</li>
            <li><strong> Lifelong Learning Approach:</strong> Fostering critical thinking and curiosity.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="section-title border-bottom pb-2 mb-4">Our Vision: Shaping the Future of Learning</h3>
          <p className="">
            We envision a world where <strong>every student</strong>, regardless of background, has access to  
            <strong> high-quality, personalized education</strong>. Our goal is to make learning  
            <strong> engaging, flexible, and empowering</strong>, ensuring academic excellence while developing life skills.
          </p>
          <p className="">
            Through our innovative platform, learning becomes a <strong>confidence-building journey</strong>,  
            where students <strong>deeply understand concepts</strong> instead of memorizing them.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="section-title border-bottom pb-2 mb-4">Our Mission: Personalized, Affordable, and Effective Tutoring</h3>
          <p className="">
            We strive to make <strong>one-on-one tutoring accessible</strong> through <strong>affordable, flexible, and high-quality education</strong>.  
            Our mission focuses on:
          </p>
          <ul className="about-list">
            <li><strong>Personalized Learning Plans:</strong> Customized roadmaps for each student.</li>
            <li><strong>Flexible Scheduling:</strong> Adaptable lesson timings for convenience.</li>
            <li><strong>Interactive, Engaging Lessons:</strong> Making learning fun and effective.</li>
            <li><strong>Academic & Personal Growth:</strong> Beyond grades, we nurture problem-solving and critical thinking.</li>
          </ul>
          <p className="">
            Education should be a <strong>right, not a privilege</strong>. With our commitment to excellence, we are  
            transforming student learning—one lesson at a time.
          </p>
          <p className="fw-bold">Join us on this journey of learning, growth, and success! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default About_Desc;
