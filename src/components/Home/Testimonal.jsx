import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import shape1 from "../../assets/images/testimonial/shape-1.png";
import shape2 from "../../assets/images/testimonial/shape-2.png";
import img1 from "../../assets/images/testimonial/thumb1.png";
import "../../style/testimonal.css";

const testimonials = [
  {
    name: "Leslie Alexander",
    course: "Student of UX/UI",
    rating: 5.0,
    review:
      "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner, they supported me as much as possible.",
  },
  {
    name: "Eleanor Pena",
    course: "Student of Graphic Design",
    rating: 4.0,
    review:
      "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner, they supported me as much as possible.",
  },
  {
    name: "Annette Black",
    course: "Student of PHP",
    rating: 5.0,
    review:
      "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner, they supported me as much as possible.",
  },
];

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
                  <div className="user-img">70X70</div>
                  <div className="user-details">
                    <h4>{item.name}</h4>
                    <p>{item.course}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">({item.rating})</span>
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
        <img src={shape1} alt="shape1" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="shape2" />
      </div>
    </section>
  );
};

export default Testimonials;
