import { useState } from "react";
import Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import PageHeader from "../components/PageHeader";
import "../style/Faq.css"
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

const FAQ_Question = [
  {
    id: 1,
    question: "How do tutors teach children online?",
    answer:
      "Our tutors use reliable platforms such as Zoom, Google Meet, and Microsoft Teams to conduct live, interactive sessions. These platforms enable real-time audio and visual communication, allowing tutors to share screens, use digital whiteboards, and provide a dynamic learning experience similar to in-person tutoring.",
  },
  {
    id: 2,
    question: "How is payment handled? Do I need to pay in advance?",
    answer:
      "We offer flexible payment options to accommodate our clients' preferences. While many parents choose to pay in advance to secure their tutoring slots, we also provide the option to pay at the end of the month or after a specified period.",
  },
  {
    id: 3,
    question: "Do you use any additional software or tools during the sessions?",
    answer:
      "Yes, our tutors incorporate a variety of interactive tools to enhance the learning experience. These may include digital whiteboards, educational software, and subject-specific applications that facilitate interactive problem-solving and concept visualization.",
  },
  {
    id: 4,
    question:
      "I've heard that in-person tutoring is more effective than online tutoring. Is this true?",
    answer:
      "Not necessarily. Online tutoring offers unique advantages, such as access to a broader range of resources and the ability to tailor sessions to individual learning styles. With the use of interactive tools and multimedia, online tutoring can be as effective, if not more so, than traditional in-person sessions.",
  },
  {
    id: 5,
    question: "Is one-on-one online tutoring expensive?",
    answer:
      "We strive to make our tutoring services affordable and accessible to families from various economic backgrounds. Our pricing structures are competitive, and we offer various packages to suit different needs and budgets.",
  },
  {
    id: 6,
    question: "How can one tutor effectively teach all subjects to my child?",
    answer:
      "We employ subject-specialist tutors who focus on specific areas of expertise. This means your child will have different tutors for subjects like Math, Science, and English, ensuring they receive specialized instruction.",
  },
  {
    id: 7,
    question: "Are there any hidden fees associated with your services?",
    answer:
      "No, we maintain a transparent pricing policy with no hidden charges. The fees you agree upon cover all aspects of the tutoring sessions, including any materials or resources used.",
  },
  {
    id: 8,
    question: "How do you assess my child's tutoring needs?",
    answer:
      "We begin with a comprehensive assessment to identify your child's strengths and areas for improvement. This allows us to create a personalized learning plan tailored to their specific needs and goals.",
  },
  {
    id: 9,
    question: "How do you ensure the quality and qualifications of your tutors?",
    answer:
      "All our tutors undergo a rigorous selection process, including verification of qualifications, background checks, and training in effective online teaching strategies. This ensures they are well-equipped to provide high-quality educational support.",
  },
  {
    id: 10,
    question: "What if my child doesn't feel comfortable learning online?",
    answer:
      "Our tutors are trained to create engaging and supportive online learning environments. We also offer trial sessions to help your child acclimate to the online format and ensure it meets their learning preferences.",
  },
  {
    id: 11,
    question: "How do you handle scheduling and flexibility?",
    answer:
      "We offer flexible scheduling options to accommodate your family's timetable. Sessions can be rescheduled with adequate notice, and we strive to match you with tutors whose availability aligns with your needs.",
  },
  {
    id: 12,
    question: "How do you track and report on my child's progress?",
    answer:
      "We provide regular updates and progress reports to keep you informed about your child's development. These reports highlight achievements, areas for improvement, and recommendations for further learning.",
  },
  {
    id: 13,
    question: "What if we need to discontinue the tutoring services?",
    answer:
      "We understand that circumstances can change. Our cancellation policy is straightforward, and we request that you provide notice as outlined in our terms of service. Any unused prepaid sessions will be refunded as per our refund policy.",
  },
  {
    id: 14,
    question: "How do you handle technical issues during a session?",
    answer:
      "Our tutors are trained to troubleshoot common technical issues. In the event of a significant disruption, we will reschedule the session at no additional cost to ensure your child receives their full tutoring time.",
  },
  {
    id: 15,
    question: "Can online tutoring accommodate children with special educational needs?",
    answer:
      "Yes, our tutors are experienced in adapting their teaching methods to support children with diverse learning needs. We work closely with parents to ensure that our approach aligns with any specific requirements or accommodations.",
  },
];



const FAQ = () => {

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const toastId = toast.info("Sending message...", { autoClose: false });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/nodemailer",
        values
      );
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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const [activeId, setActiveId] = useState(null);
  const handleTextToggle = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <PageHeader title="FAQ" />
      <section className="wpo-faq-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="wpo-section-title">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <div className="wpo-faq-section">
                <div className="accordion" id="accordionExample">
                  {FAQ_Question.map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <h3 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className="accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#collapseOne"
                          aria-expanded="true" aria-controls="collapseOne"
                          onClick={() => handleTextToggle(item.id)}
                        >
                          {item.question}
                          
                        </button>
                      </h3>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          activeId === item.id ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Add more FAQ items as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className="question-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <h2>Do You Have Any Questions?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="question-touch">
                <h2>Get In Touch</h2>
                <form
                  onSubmit={formik.handleSubmit}
                  className="contact-validation-active"
                >
                  <div className="half-col">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.name && (
                      <small className="text-danger">
                        {formik.errors.name}
                      </small>
                    )}
                  </div>
                  <div className="half-col">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.email && (
                      <small className="text-danger">
                        {formik.errors.email}
                      </small>
                    )}
                  </div>
                  <div className="half-col">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.phone && (
                      <small className="text-danger">
                        {formik.errors.phone}
                      </small>
                    )}
                  </div>
                  <div className="half-col">
                    <input
                      type="text"
                      name="service"
                      className="form-control"
                      placeholder="Subject"
                      value={formik.values.service}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.service && (
                      <small className="text-danger">
                        {formik.errors.service}
                      </small>
                    )}
                  </div>
                  <div className="half-col">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Your Question"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.message && (
                      <small className="text-danger">
                        {formik.errors.message}
                      </small>
                    )}
                  </div>
                  <div className="submit-btn-wrapper">
                    <button
                      type="submit"
                      className="theme-btn"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Submitting..." : "Submit Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
