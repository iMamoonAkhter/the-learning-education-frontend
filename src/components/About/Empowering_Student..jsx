import img1 from "/images/about/img-1.jpg";
import img2 from "/images/about/img-2.jpg";

const EmpoweringStudent = () => {
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Side - Images */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img-wrap">
                <div className="wpo-about-img-left">
                  <div className="wpo-about-img">
                    <img src={img1} alt="About Us" />
                  </div>
                </div>
                <div className="wpo-about-img-right">
                  <div className="wpo-about-img-inner">
                    <img src={img2} alt="About Us" />
                  </div>
                  <div className="exprience-wrap">
                    <div className="exprience">
                      <div className="icon">
                        <i className="fi flaticon-award"></i>
                      </div>
                      <div className="content">
                        <h3>5+</h3>
                        <p>Years Of Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
              <div className="wpo-section-title">
                                    <small>About Us</small>
                                    <h2>Empowering Students Through Personalized Learning</h2>
                                </div>
                                <p>What started as a small initiative has evolved into a leading global tutoring platform. Over the past five years, we have worked with students across the <strong>UK, USA, Australia, and beyond</strong>, providing tailored academic support.</p>
        
                                <p>We believe that <strong>every student is unique</strong>, which is why we offer <strong>personalized lesson plans</strong>, expert mentorship, and interactive learning experiences. Our team of <strong>highly skilled tutors</strong> specializes in subjects ranging from Mathematics and Science to Test Preparation (SAT, ACT, GCSE, A-Level, IB, NAPLAN), and more.</p>
                
                {/* Features */}
                <div className="wpo-about-features-wrap">
                  {[
                    { icon: "fi flaticon-training-1", text: "20+ Subjects Covered" },
                    { icon: "fi flaticon-video-lesson", text: "300+ Free Trial Classes" },
                    { icon: "fi flaticon-team", text: "500+ Students Tutored" },
                    { icon: "fi flaticon-training", text: "20+ Qualified Tutors" },
                  ].map((feature, index) => (
                    <div className="wpo-about-features-item" key={index}>
                      <div className="wpo-about-features-icon">
                        <div className="icon">
                          <i className={feature.icon}></i>
                        </div>
                      </div>
                      <div className="wpo-about-features-text">
                        <h5>{feature.text}</h5>
                      </div>
                    </div>
                  ))}
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringStudent;
