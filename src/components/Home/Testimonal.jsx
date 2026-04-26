import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../style/testimonal.css";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Year 8 student, London",
    initials: "SM",
    bgColor: "#4281FF",
    textColor: "#FFFFFF",
    rating: 5,
    review:
      "My son struggled with algebra for two years. After just 6 weeks with Mathedemic, he scored an A on his school exam. The one-on-one sessions made all the difference — he actually looks forward to his math classes now.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "Parent of Grade 10 student, USA",
    initials: "AA",
    bgColor: "#FF9682",
    textColor: "#FFFFFF",
    rating: 5,
    review:
      "We were preparing for the SAT and couldn't find a tutor who truly understood the curriculum. Mathedemic matched us with a brilliant tutor and the flexible scheduling worked perfectly around our family routine.",
  },
  {
    name: "Priya Sharma",
    role: "Parent of GCSE student, Birmingham",
    initials: "PS",
    bgColor: "#FFD562",
    textColor: "#1A1A2E",
    rating: 5,
    review:
      "Affordable, reliable, and genuinely effective. My daughter went from a grade 4 to a grade 7 in GCSE maths in one term. I can't recommend Mathedemic enough to any parent worried about their child's progress.",
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="star-row">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FFD562">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <small>Testimonials</small>
          <h2>
            What Our Students <span>Say</span> About Us
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                {/* User Info */}
                <div className="user-info">
                  <div
                    className="user-avatar"
                    style={{ background: item.bgColor, color: item.textColor }}
                  >
                    {item.initials}
                  </div>
                  <div className="user-details">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="rating">
                  <Stars count={item.rating} />
                  <span className="rating-value">({item.rating}.0)</span>
                </div>

                {/* Review */}
                <p className="review">{item.review}</p>

                {/* Quotation Mark */}
                <div className="quote-mark">❝</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* Decorative Shapes */}
      <div className="shape-1">
        <img src="/images/testimonial/shape-1.png" alt="" aria-hidden="true" width="100" height="100" loading="lazy" />
      </div>
      <div className="shape-2">
        <img src="/images/testimonial/shape-2.png" alt="" aria-hidden="true" width="100" height="100" loading="lazy" />
      </div>
    </section>
  );
};

export default Testimonials;
