import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const teacher = useSelector((state) => state.teacher);
  const API = import.meta.env.VITE_API_URL;
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, "Invalid phone number")
      .required("Phone is required"),
    service: Yup.string().required("Please select a subject"),
    message: Yup.string().min(10, "Message too short").required("Message is required"),
  });

  // Handle Form Submission
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    
    // Show an info toast with a unique ID
    const toastId = toast.info("Sending message...", { autoClose: false });
  
    try {
      const response = await fetch(`${API}/v1/users/nodemailer`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        toast.update(toastId, {
          render: "Failed to send message. Please try again.",
          type: "error",
          autoClose: 3000,
        });
        throw new Error("Failed to send message");
      }
  
      toast.update(toastId, {
        render: "Message sent successfully!",
        type: "success",
        autoClose: 3000,
      });
  
      resetForm(); // Reset the form after success
    } catch (err) {
      toast.update(toastId, {
        render: "Failed to send message. Please try again.",
        type: "error",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Build the WhatsApp URL using the teacher's phone number.
  const whatsappUrl = `https://wa.me/${teacher.phone}`;

  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-maps-and-flags"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>{teacher.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>{teacher.email}</p>
                    </div>
                  </div>
                </div>
                {/* Updated WhatsApp Section */}
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-phone-call"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Whatsapp Now</h2>
                        <p>{teacher.phone}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>Have Any Questions?</h2>
              <p>Fill out the form below and we’ll get back to you.</p>
            </div>

            <div className="wpo-contact-form-area">
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
                  <Form className="contact-form">
                    {/* Name Field */}
                    <div>
                      <Field type="text" className="form-control" name="name" placeholder="Your Name*" />
                      <ErrorMessage name="name" component="div" className="error-message" />
                    </div>

                    {/* Email Field */}
                    <div>
                      <Field type="email" className="form-control" name="email" placeholder="Your Email*" />
                      <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <Field type="text" className="form-control" name="phone" placeholder="Your Phone*" />
                      <ErrorMessage name="phone" component="div" className="error-message" />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <Field as="select" name="service" className="form-control">
                        <option value="" disabled>Subject</option>
                        <option value="English">English</option>
                        <option value="Science">Science</option>
                        <option value="Math">Math</option>
                        <option value="Test Prep">Test Prep</option>
                      </Field>
                      <ErrorMessage name="service" component="div" className="error-message" />
                    </div>

                    {/* Message Field */}
                    <div className="fullwidth">
                      <Field as="textarea" className="form-control" name="message" placeholder="Message..." />
                      <ErrorMessage name="message" component="div" className="error-message" />
                    </div>

                    {/* Submit Button */}
                    <div className="submit-area">
                      <button type="submit" className="theme-btn" disabled={isSubmitting || loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
