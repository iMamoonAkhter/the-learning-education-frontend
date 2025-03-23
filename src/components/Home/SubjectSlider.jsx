import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/carousel.css"; // Custom styles
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Mathematics Tutoring",
    link: "/course/mathematics",
    icon: "fi flaticon-math",
    description:
      "From basic arithmetic to advanced calculus, our tutors cover all levels, including GCSE, A-Level, AP, and IB Math.",
  },
  {
    title: "English Tutoring",
    link: "/course/english",
    icon: "fi flaticon-book",
    description:
      "Improve reading, writing, and critical thinking skills with our tailored English tutoring for GCSE, A-Level, AP, and IB students.",
  },
  {
    title: "Science Tutoring",
    link: "/course/science",
    icon: "fi flaticon-science",
    description:
      "Our tutors cover general science, biology, chemistry, and physics for students in Grades 1-12, aligned with UK, US, and international curricula.",
  },
];

const CoursesCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={10} // Adjust spacing
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 slide on small screens
          640: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on large screens
        }}
        navigation={false} // Enable navigation arrows
        pagination={{ clickable: false }} // Show pagination dots
        loop={false} // Infinite loop
        autoplay={{
          delay: 5000, // Move to next slide every 5 seconds
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="custom-swiper"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <div className="wpo-courses-itemm">
              <div className="wpo-courses-text">
                <div className="courses-icon">
                  <i className={course.icon}></i>
                </div>
                <h2>
                  <Link to={course.link}>{course.title}</Link>
                </h2>
                <p>{course.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoursesCarousel;
