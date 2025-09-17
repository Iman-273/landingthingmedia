import React from "react";

const googleReviews = [
  { src: "/assets/review1.png", alt: "Google Review 1", delay: "100" },
  { src: "/assets/review2.png", alt: "Google Review 2", delay: "200" },
  { src: "/assets/review13.png", alt: "Google Review 3", delay: "300" },
  { src: "/assets/review4.png", alt: "Google Review 4", delay: "400" },
  { src: "/assets/review5.png", alt: "Google Review 5", delay: "500" },
  { src: "/assets/review12.png", alt: "Google Review 6", delay: "600" },
  { src: "/assets/review7.png", alt: "Google Review 7", delay: "700" },
  { src: "/assets/review8.png", alt: "Google Review 8", delay: "800" },
  { src: "/assets/review9.png", alt: "Google Review 9", delay: "900" },
  { src: "/assets/review6.png", alt: "Google Review 10", delay: "1000" },
  { src: "/assets/review11.png", alt: "Google Review 11", delay: "1100" },
  { src: "/assets/review10.png", alt: "Google Review 12", delay: "1200" },
  { src: "/assets/review3.png", alt: "Google Review 13", delay: "1300" },
];

const GoogleReviews = () => {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="text-center mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm sm:text-base tracking-wide uppercase">
            <img src="/icons/star.png" alt="Star Icon" className="w-5 h-5" />
            <span className="font-bold text-lg sm:text-xl text-gradient">
              Google Reviews
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-6 sm:mb-8">
            What Our Clients Say on{" "}
            <span className="text-gradient">Google</span>
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {googleReviews.map((review, i) => (
            <div
              key={i}
              className="mb-4 break-inside-avoid bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-smooth hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={review.delay}
              data-aos-duration="1000"
            >
              <img
                src={review.src}
                alt={review.alt}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
