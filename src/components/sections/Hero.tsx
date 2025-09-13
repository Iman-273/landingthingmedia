import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-services.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional business service contractors in Seattle"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 accent-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <h1
  className="text-2xl sm:text-5xl lg:text-5xl font-heading mb-4 sm:mb-6 leading-tight"
  data-aos="fade-up"
  data-aos-delay="100"
>
  {/* First line */}
  <span className="block">
    Scale Your <span className="text-gradient">Seattle Business Service Business</span>
  </span>

  {/* Second line */}
  <span className="block">
    With <span className="text-gradient">Predictable Growth</span>
  </span>
</h1>


        <p
          className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto font-body"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="block">
            More leads. Less stress. Let Thing Media bring you customers
          </span>
          <span className="block">
            while you focus on running your business.
          </span>
        </p>

        <Button
          variant="hero"
          size="lg"
          className="text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 h-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Get Your Free Lead Strategy Session
        </Button>

        <p
          className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Local expertise • Proven process • Tailored to your business
        </p>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary/10 blur-xl"
        data-aos="zoom-in"
        data-aos-delay="500"
      />
      <div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-primary/10 blur-xl"
        data-aos="zoom-in"
        data-aos-delay="600"
      />
    </section>
  );
};

export default Hero;
