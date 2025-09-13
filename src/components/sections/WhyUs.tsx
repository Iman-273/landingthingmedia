
import { Button } from "@/components/ui/button"; // assuming you're using shadcn/ui

const WhyUs = () => {
  const differentiators = [
    {
      icon: "src/icons/mappin.png", // skeuomorphic map/location icon
      title: "Local Expertise",
      description:
        "We understand the Seattle homeowner market — because we live and work here too.",
      animation: "fade-up",
      delay: "100",
    },
    {
      icon: "src/icons/award.png", // skeuomorphic award/trophy icon
      title: "White-Glove Service",
      description:
        "No cookie-cutter campaigns — we tailor every system to your business so it grows with you.",
      animation: "fade-up",
      delay: "200",
    },
    {
      icon: "src/icons/target.png", // skeuomorphic target/goal icon
      title: "Results-Driven",
      description:
        "Our only focus is helping you win more jobs, month after month.",
      animation: "fade-up",
      delay: "300",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div
          className="text-center mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading mb-4 sm:mb-6">
            Why Choose <span className="text-gradient">Thing Media</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto font-body">
            We're not just another marketing agency. We're your growth partners,
            committed to your success.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative"
              data-aos={item.animation}
              data-aos-delay={item.delay}
              data-aos-duration="1000"
            >
              <div className="bg-card p-6 sm:p-8 rounded-xl shadow-soft border border-border/50 h-full transition-smooth group-hover:shadow-medium group-hover:-translate-y-2 group-hover:bg-primary">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white transition-smooth">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body group-hover:text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 sm:mt-16 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="bg-accent p-6 sm:p-8 rounded-xl border border-primary/20 max-w-2xl sm:max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-heading mb-3 sm:mb-4">
              Ready to see the difference?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground font-body mb-6">
              Book your free consultation and get a custom growth plan for your business.
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Let’s Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;