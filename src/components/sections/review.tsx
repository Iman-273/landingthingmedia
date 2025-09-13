import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const googleReviews = [
  { src: "/images/reviews/review1.png", alt: "Google Review 1" },
  { src: "/images/reviews/review2.png", alt: "Google Review 2" },
  { src: "/images/reviews/review3.png", alt: "Google Review 3" },
];

const GoogleReviews = () => {
  return (
    <section className="py-16 sm:py-20 bg-background" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm sm:text-base tracking-wide uppercase">
            {/* Skeuomorphic Star Icon */}
            <img
              src="/src/icons/star.png"
              alt="Star Icon"
              className="w-5 h-5"
            />
            <span className="font-bold text-lg sm:text-xl text-gradient">
              Google Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-6 sm:mb-8">
            What Our Clients Say on{" "}
            <span className="text-gradient">Google</span>
          </h2>
        </div>

        {/* Carousel of screenshots */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          centeredSlides={true}
          loop
          className="pb-14"
        >
          {googleReviews.map((review, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="bg-card rounded-2xl shadow-medium border border-border/50 overflow-hidden max-w-3xl w-full">
                <img
                  src={review.src}
                  alt={review.alt}
                  className="w-full h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Styles */}
      <style>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 0 !important;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 30;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 6px !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 24px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;
