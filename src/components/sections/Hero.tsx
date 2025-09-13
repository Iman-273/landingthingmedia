import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import heroImage from "/assets/hero-services.jpg";

const Hero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation happens only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Background Image - static */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className="text-2xl sm:text-5xl lg:text-5xl font-heading mb-4 sm:mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="block">
            Scale Your{" "}
            <span className="text-blue-600 font-bold">
              Seattle Business Service Business
            </span>
          </span>
          <span className="block">
            With{" "}
            <span className="text-blue-600 font-bold">Predictable Growth</span>
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto font-body"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="block">
            More leads. Less stress. Let Thing Media bring you customers
          </span>
          <span className="block">
            while you focus on running your business.
          </span>
        </p>

        <div data-aos="fade-up" data-aos-delay="600">
          <Button
            variant="hero"
            size="lg"
            className="text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 h-auto bg-blue-600 text-white"
          >
            Get Your Free Lead Strategy Session
          </Button>
        </div>

        <p
          className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Local expertise • Proven process • Tailored to your business
        </p>
      </div>
    </section>
  );
};

export default Hero;
