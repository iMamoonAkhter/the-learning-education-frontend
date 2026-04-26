import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/sass/style.css";
import teacher_pic from "/images/teacher.png";
import { useSelector } from "react-redux";

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Too short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, "Invalid phone number")
    .required("Phone is required"),
  service: Yup.string().required("Please select a subject"),
  message: Yup.string()
    .min(10, "Message too short")
    .required("Message is required"),
});

const Teacher_Detail = () => {
  const API = import.meta.env.VITE_API_URL;
  const teacher = useSelector((state) => state.teacher);
  const skillsRef = useRef(null);

  // Animate skill bars on scroll into view
  useEffect(() => {
    const bars = document.querySelectorAll(".progress-bar[data-width]");
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute("data-width") + "%";
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, [teacher.skills]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const toastId = toast.info("Sending message...", { autoClose: false });
    try {
      const response = await axios.post(`${API}/v1/users/nodemailer`, values);
      if (response.status === 200) {
        toast.update(toastId, {
          render: "Appointment booked successfully.",
          type: "success",
          autoClose: 3000,
        });
        resetForm();
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to send message. Please try again.",
        type: "error",
        autoClose: 3000,
      });
    }
    setSubmitting(false);
  };

  return (
    <div className="team-pg-area section-padding">
      <div className="container">
        <div className="team-single-wrap">
          <div className="team-info-wrap">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="team-info-img">
                  <img src={teacher_pic} alt="Haseeb Nazeer, Senior Tutor at Mathedemic" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="team-info-text">
                  <h2>{teacher.name}</h2>
                  <ul>
                    <li>
                      Position: <span>{teacher.position}</span>
                    </li>
                    <li>
                      Experience: <span>{teacher.experience}</span>
                    </li>
                    <li>
                      Phone:{" "}
                      <span>
                        <Link to="/contact" style={{ color: "#4281FF" }}>
                          Contact via our contact page
                        </Link>
                      </span>
                    </li>
                    <li>
                      Email: <span>{teacher.email}</span>
                    </li>
                  </ul>

                  {/* Education Certificate Placeholders */}
                  <div className="certificates-wrap" style={{ marginTop: "24px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>
                      Education & Qualifications
                    </h3>
                    <div className="certificates-items" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {teacher.education?.map((edu, index) => (
                        <div
                          className="cert-placeholder"
                          key={index}
                          style={{
                            background: "#F0F4FF",
                            border: "1.5px dashed #4281FF",
                            borderRadius: "10px",
                            padding: "16px 12px",
                            textAlign: "center",
                            minWidth: "160px",
                            maxWidth: "220px",
                            flex: "1 1 160px",
                          }}
                        >
                          <div style={{ fontSize: "24px", marginBottom: "6px" }}>🎓</div>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#1A1A2E",
                              margin: 0,
                              lineHeight: 1.4,
                            }}
                          >
                            {edu}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Experience & Education */}
          <div className="team-exprience-area team-widget">
            <div className="row">
              <div className="col-lg-6">
                <div className="exprience-wrap">
                  <h2>Personal Experience</h2>
                  <p>{teacher.experience_detail}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="education-area">
                  <h2>Education</h2>
                  <ul>
                    {teacher.education?.map((e, index) => (
                      <li key={index}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills & Achievements */}
            <div className="skills-area" ref={skillsRef}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="exprience-wrap">
                    <h2>Skills</h2>
                    <div className="wpo-skill-section">
                      <div className="wpo-skill-progress">
                        {teacher.skills?.map((e, index) => (
                          <div className="wpo-progress-single" key={index}>
                            <h5 className="progress-title">{e.name}</h5>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                data-width={e.percentage}
                                style={{
                                  width: "0%",
                                  background: "linear-gradient(90deg, #4281FF, #FF9682)",
                                  transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                                aria-valuenow={e.percentage}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="progress-number">{e.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="wpo-contact-area ex-wiget">
            <div className="wpo-contact-title">
              <h2>Make an Appointment</h2>
              <p>
                Book a session with {teacher.name} to enhance your skills and excel in your studies.
              </p>
            </div>
            <div className="quote-form">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  service: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="form-group half-col">
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                      />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="form-group half-col">
                      <Field
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="form-group half-col">
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                      />
                      <ErrorMessage name="phone" component="div" className="text-danger" />
                    </div>

                    <div className="form-group half-col">
                      <Field as="select" name="service" className="form-control">
                        <option value="" disabled>
                          Subject
                        </option>
                        <option value="English">English</option>
                        <option value="Science">Science</option>
                        <option value="Math">Math</option>
                        <option value="Test Prep">Test Prep</option>
                      </Field>
                      <ErrorMessage name="service" component="div" className="text-danger" />
                    </div>

                    <div className="form-group full-col">
                      <Field
                        as="textarea"
                        className="form-control"
                        name="message"
                        placeholder="Your Message"
                      />
                      <ErrorMessage name="message" component="div" className="text-danger" />
                    </div>

                    <div className="form-group full-col text-center">
                      <button className="btn theme-btn" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Booking..." : "Book Appointment"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher_Detail;
