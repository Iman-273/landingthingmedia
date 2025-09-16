"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Star, Quote, User } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative bg-card p-6 sm:p-8 rounded-2xl border border-border/40 
                         shadow-md hover:shadow-xl hover:border-primary/50 
                         transition-all duration-300 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              {/* Quote Icon background */}
              <Quote
                className="absolute top-6 left-6 w-10 h-10"
                style={{ fill: "#0f69ff", stroke: "#0f69ff" }}
              />

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
              <blockquote className="text-lg sm:text-xl leading-relaxed text-center italic font-body px-2 flex-1">
                &ldquo;{item.text}&rdquo;
              </blockquote>

              {/* Attribution always at bottom */}
              <div className="pt-6 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 
                                bg-gradient-to-r from-primary/30 to-primary/10 
                                ring-2 ring-primary/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <p className="font-heading text-base sm:text-lg text-foreground">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>

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
    </section>
  );
};

export default Testimonial;
