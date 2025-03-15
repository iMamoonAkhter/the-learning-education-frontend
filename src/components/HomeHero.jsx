import slider1 from "/images/slider/1.png";
import client1 from "/images/slider/client1.png"
import client2 from "/images/slider/client2.png"
import client3 from "/images/slider/client3.png"
import client4 from "/images/slider/client4.png"
import client5 from "/images/slider/client5.png"
import shape_1 from "/images/slider/shape-1.svg"
import shape_2 from "/images/slider/shape-2.svg"
import shape_3 from "/images/slider/shape-3.svg"
import shape_4 from "/images/slider/shape-4.svg"
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style/Homehero.css"
import { Avatar, AvatarGroup } from "@mui/joy";
import { useSelector } from "react-redux";
const HomeHero = () => {
    const teacher = useSelector((state) => state.teacher.teacher);
  return (
    <div className="page-wrapper">
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div data-swiper-parallax="300" className="slide-title-sub">
                                <span>Find Your Perfect Tutor</span>
                            </div>
                            <div data-swiper-parallax="300" className="slide-title">
                                <h2>Personalized Online 
                                    <span>
                                        Tutoring 
                                        <i className="shape">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 80" fill="none">
                                                <path
                                                    d="M305.806 2.85331C216.778 0.253592 110.27 8.31273 42.6574 27.5873C28.675 31.8036 15.9543 36.9207 11.4579 42.9678C8.59028 46.8472 10.1101 51.0141 15.4553 54.6043C29.908 63.9669 64.2676 68.5878 94.0448 71.5208C157.356 77.2108 228.421 78.3203 292.357 73.0696C335.973 69.5087 403.235 59.67 400.689 42.7499C398.968 29.6872 362.584 21.2601 327.502 16.7234C277.749 10.3541 223.316 8.10768 169.95 7.89714C143.316 7.88066 116.733 9.41486 91.7679 12.3734C67.3417 15.343 42.7434 19.508 25.4403 25.8792C22.5555 26.963 17.3307 25.6851 20.0894 24.4969C41.6939 16.1577 76.4033 10.7623 108.423 7.73603C154.97 3.35495 204.465 4.65115 251.866 6.78402C317.832 10.0355 417.074 19.6343 411.798 46.0819C409.188 54.293 391.369 61.0724 371.112 65.7464C314.609 78.3624 239.358 81.3045 172.078 79.5268C130.957 78.3313 89.3878 75.933 52.2409 69.8822C22.934 65.0837 -2.0772 56.9641 0.136592 45.7213C4.30035 29.4437 63.2812 17.3111 105.739 11.1505C143.27 5.73315 183.543 2.3114 224.406 0.800998C251.642 -0.198613 279.24 -0.284661 306.517 0.66735C308.404 0.733259 309.769 1.27517 309.562 1.87933C309.362 2.478 307.681 2.9119 305.806 2.85331Z" />
                                            </svg>
                                        </i>
                                    </span> for Every Student
                                </h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>One-on-One tutoring to help students excel in their studies. Get the best learning experience with expert tutors from top universities.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-btns">
                            <a
                                href={`https://wa.me/${teacher.phone}?text=Hello%20I%20am%20interested%20in%20a%20free%20trial%20for%20your%20tutoring%20services.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-3 text-center mt-5"
                            >
                                Get Free Trial
                            </a>
                                 {/* <ul>
                                    <li className="video-holder">
                                        <a href="https://www.youtube.com/embed/r5sw-6lJmTA?autoplay=1" className="video-btn"
                                            data-type="iframe" tabindex="0"><i className="fi flaticon-play"></i></a>
                                    </li>
                                    <li className="video-text">
                                        <a href="https://www.youtube.com/embed/r5sw-6lJmTA?autoplay=1" className="video-btn"
                                            data-type="iframe" tabindex="0">
                                            Watch Our Video
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="student-pic">
                                <img src={slider1} alt="" />
                                <div className="student-shape">
                                    <div className="shape-1 wow zoomIn" data-wow-duration="2000ms"></div>
                                    <div className="shape-2 wow zoomIn" data-wow-duration="1500ms"></div>
                                    <div className="shape-3 wow zoomIn" data-wow-duration="1000ms"></div>
                                </div>
                                <div className="student">
                                    <div className="icon"><i className="fi flaticon-team"></i></div>
                                    <div className="content">
                                        <h3>500+</h3>
                                        <p>Satisfied Students</p>
                                    </div>
                                </div>
                                <div className="wpo-supporter">
                                    <div className="wpo-supporter-text">
                                        <div className="content">
                                            <h3>20+</h3>
                                            <p>Certified Tutors</p>
                                        </div>
                                    </div>
                                    <div className="wpo-supporter-img">
      
        {/* <div className="client">
                <div><img src={client1} alt="" /></div>
                <div><img src={client2} alt="" /></div>
                <div><img src={client3} alt="" /></div>
                <div><img src={client4} alt="" /></div>
                
        </div> */}

    <AvatarGroup>
      <Avatar alt="Remy Sharp" src={client1} title="Remy Sharp" />
      <Avatar alt="Travis Howard" src={client2} title="Travis Howard" />
      <Avatar alt="Cindy Baker" src={client3} title="Cindy Baker" />
      <Avatar alt="John Doe" src={client4} title="John Doe" />
      <Avatar alt="Jane Smith" src={client5} title="Jane Smith" />
    </AvatarGroup>
      
    </div>
                                </div>
                                <div className="wp-shape-1"><img src={shape_1} alt="" /></div>
                                <div className="wp-shape-2"><img src={shape_2} alt="" /></div>
                                <div className="wp-shape-3"><img src={shape_3} alt="" /></div>
                                <div className="wp-shape-4"><img src={shape_4} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomeHero