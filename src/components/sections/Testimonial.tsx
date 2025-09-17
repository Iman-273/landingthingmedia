"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "Before Thing Media, I was struggling to keep steady clients. Within weeks, the campaigns started working, and now I have predictable business every month. They've been a game-changer for me.",
    author: "Seattle Home Service Business Owner",
  },
  {
    text: "Thing Media helped us scale our business faster than we thought possible. Their team truly cares about results, not just running ads.",
    author: "Local Contractor in Seattle",
  },
  {
    text: "The transparency and results blew us away. We get consistent leads every week and can finally plan our growth with confidence.",
    author: "Seattle Remodeling Company Owner",
  },
];

const Testimonial = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm sm:text-base tracking-wide uppercase">
            <Star className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold text-lg sm:text-xl text-gradient">
              Client Success
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-6 sm:mb-8">
            What Our <span className="text-gradient">Seattle Partners</span> Say
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="pb-14"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="!overflow-visible">
              <div
                className="relative bg-card p-6 sm:p-10 md:p-12 rounded-2xl shadow-medium border border-border/50 flex flex-col justify-between h-[350px] sm:h-[400px] overflow-visible"
                data-aos="fade-up"
                data-aos-delay={i * 200} // stagger animation for each slide
              >
                {/* Quote icon */}
             

                {/* Stars */}
                <div className="flex gap-1 mb-5 sm:mb-6 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote
                  className="flex-1 text-lg sm:text-xl md:text-2xl 
                             leading-loose text-center mb-6 sm:mb-8 
                             italic font-body px-2"
                  style={{ overflow: "visible" }}
                >
                  &ldquo;{item.text}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full mx-auto mb-3 sm:mb-4" />
                  <p className="font-heading text-base sm:text-lg">
                    {item.author}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Text */}
        <div
          className="text-center mt-10 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-sm sm:text-base text-muted-foreground">
            Join{" "}
            <span className="font-semibold text-foreground">
              200+ Seattle home service businesses
            </span>{" "}
            growing with Thing Media
          </p>
        </div>
      </div>

      {/* Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 0 !important;
          left: 0;
          right: 0;
          text-align: center;
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
          background: #2563eb; /* primary */
          width: 24px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
