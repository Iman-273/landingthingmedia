import React from "react";

const googleReviews = [
  { src: "/assets/review1.png", alt: "Justin Cambra", size: "small" },
  { src: "/assets/review2.png", alt: "Carlos Valencia", size: "small" },
  { src: "/assets/review13.png", alt: "Vicky Chong", size: "small" },
  { src: "/assets/review4.png", alt: "Lois Tse", size: "small" },
  { src: "/assets/review3.png", alt: "KZ", size: "small" },
  { src: "/assets/review12.png", alt: "Jayr", size: "small" },
  { src: "/assets/review7.png", alt: "Google Review 7", size: "large" },
  { src: "/assets/review8.png", alt: "Google Review 8", size: "large" },
  { src: "/assets/review9.png", alt: "Google Review 9", size: "large" },
  { src: "/assets/review6.png", alt: "Google Review 10", size: "large" },
  { src: "/assets/review11.png", alt: "Google Review 11", size: "large" },
  { src: "/assets/review10.png", alt: "Google Review 12", size: "large" },
  { src: "/assets/review5.png", alt: "Google Review 13", size: "large" },
];

const GoogleReviews = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
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

 {/* --- Mobile layout (2 columns grid) --- */}
<div className="grid grid-cols-2 gap-4 sm:hidden">
  {googleReviews.map((review, i) => {
    // Vicky Chong + KZ stacked together
    if (review.alt === "Vicky Chong") {
      return (
        <div
          key={i}
          className="flex flex-col gap-4 bg-transparent"
        >
          {/* Vicky Chong card */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out">
            <img
              src={review.src}
              alt={review.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* KZ card inside same cell */}
          <div className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out">
            <img
              src="/assets/review3.png"
              alt="KZ"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      );
    }

    // Skip KZ in loop to avoid duplicate
    if (review.alt === "KZ") return null;

    // Other reviews normal
    return (
      <div
        key={i}
        className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out hover:-translate-y-2"
      >
        <img
          src={review.src}
          alt={review.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    );
  })}
</div>
{/* --- Desktop layout (columns masonry) --- */}
<div className="hidden sm:block">
  <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
    {googleReviews.map((review, i) => {
      // Siyin Li + Justin Cambra stacked
      if (review.alt === "Siyin Li") {
        return (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="mb-4 bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out">
              <img
                src={review.src}
                alt={review.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out">
              <img
                src="/assets/review6.png"
                alt="Justin Cambra"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        );
      }

      // Skip Justin Cambra duplicate
      if (review.alt === "Justin Cambra") return null;

      // Special cases with extra bottom height
      if (review.alt === "Phil Greely" || review.alt === "Vicky Chong" || review.alt === "Yu Liu") {
        return (
          <div
            key={i}
            className="mb-4 break-inside-avoid bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out"
            style={{ paddingBottom: "16px", minHeight: "120px" }}
          >
            <img
              src={review.src}
              alt={review.alt}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        );
      }

      // Default cards
      return (
        <div
          key={i}
          className="mb-4 break-inside-avoid bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden hover:shadow-medium transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <img
            src={review.src}
            alt={review.alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      );
    })}
  </div>
</div>


       
      </div>
    </section>
  );
};

export default GoogleReviews;
