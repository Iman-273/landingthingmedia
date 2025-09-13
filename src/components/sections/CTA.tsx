import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Phone, Target } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <div
          className="mb-8 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-4 sm:mb-6 leading-tight">
            Your next customer is{" "}
            <span className="text-gradient">searching right now</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 font-body">
            Will they find you, or your competitor?
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-heading text-primary">
            Let&apos;s make sure it&apos;s{" "}
            <span className="text-gradient">you</span>.
          </p>
        </div>

        {/* Steps */}
        <div
          className="bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-medium border border-border/50 mb-8 sm:mb-12"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-heading mb-6">
            What happens next?
          </h3>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-8">
            {/* Step 1 */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h4 className="font-heading mb-2 text-sm sm:text-base md:text-lg">
                1. Free Call
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-body">
                Quick 15-minute call to understand your goals
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h4 className="font-heading mb-2 text-sm sm:text-base md:text-lg">
                2. Custom Plan
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-body">
                We’ll design a custom plan built for your business and market
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h4 className="font-heading mb-2 text-sm sm:text-base md:text-lg">
                3. Fast Results
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-body">
                Real results you can measure in weeks, not months
              </p>
            </div>
          </div>

          {/* Button */}
          <Button
            variant="cta"
            size="lg"
            className="text-sm sm:text-base md:text-lg px-6 sm:px-10 md:px-14 py-3 sm:py-5 md:py-6 h-auto group"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>

          {/* Guarantee badges */}
          <div
            className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <span>✓ No long-term contracts</span>
            <span>✓ Free consultation</span>
            <span>✓ Proven results</span>
          </div>
        </div>

        {/* Footer text */}
        <p
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Don&apos;t let another day pass watching competitors steal your
          customers.{" "}
          <span className="text-primary font-semibold">Take action now.</span>
        </p>
      </div>
    </section>
  );
};

export default CTA;
