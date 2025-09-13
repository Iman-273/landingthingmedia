import { CheckCircle, Zap, TrendingUp } from "lucide-react";

const Solution = () => {
  const benefits = [
    { text: "Deliver high-quality leads straight to your business" },
    { text: "Make your phone ring consistently" },
    { text: "Take the stress out of growth" },
  ];

  return (
  <section className="py-16 sm:py-20" data-aos="fade-up">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div
        className="text-center mb-12 sm:mb-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 sm:px-5 sm:py-2.5 rounded-full mb-6 sm:mb-8 text-base sm:text-lg">
          {/* Replace Zap with skeuomorphic icon */}
          <img
            src="/assets/icons/fix.png"
            alt="Simple Fix Icon"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
          />
          <span className="font-semibold">The Simple Fix</span>
        </div>
      

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight">
  At <span className="text-gradient">Thing Media</span>, we help Seattle&apos;s plumbers, cleaners,
  <br />
  landscapers, contractors — and other service-based
  <br />
  businesses — <span className="text-primary font-bold">scale with ease.</span>
</h2>

        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Side */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl font-heading mb-6 sm:mb-8">
              We build marketing systems that:
            </h3>

            <div className="space-y-5 sm:space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 200}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed font-body">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 sm:mt-10 p-5 sm:p-6 bg-accent rounded-xl border border-primary/20"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                So you can spend less time worrying about where the next customer
                will come from — and{" "}
                <span className="font-bold text-primary">
                  more time running a business you're proud of.
                </span>
              </p>
            </div>
          </div>

        {/* Right Side */}
<div className="relative" data-aos="fade-left" data-aos-delay="400">
  <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-medium border border-border/50">
    <div className="text-center mb-5 sm:mb-6">
      {/* Replace TrendingUp with skeuomorphic growth icon */}
      <img
        src="/assets/icons/growth.png"
        alt="Predictable Growth Icon"
        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 object-contain"
      />
      <h4 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
        Predictable Growth
      </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Consistent leads, every month
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div
                  className="flex justify-between items-center p-3 sm:p-4 bg-muted/50 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span>Lead Quality</span>
                  <span className="font-bold text-primary">95%+</span>
                </div>
                <div
                  className="flex justify-between items-center p-3 sm:p-4 bg-muted/50 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span>Response Time</span>
                  <span className="font-bold text-primary">&lt; 5 min</span>
                </div>
                <div
                  className="flex justify-between items-center p-3 sm:p-4 bg-muted/50 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <span>Growth Rate</span>
                  <span className="font-bold text-primary">200%+</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-xl"
              data-aos="zoom-in"
              data-aos-delay="800"
            />
            <div
              className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl"
              data-aos="zoom-in"
              data-aos-delay="900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
