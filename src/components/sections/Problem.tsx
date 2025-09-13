import { AlertTriangle } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: "/assets/time.png", // your image file
      title: "Outdated Marketing",
      description:
        "Relying on word-of-mouth or old ads means fewer calls and less growth.",
    },
    {
      icon: "/assets/more.png",
      title: "Inconsistent Leads",
      description:
        "One month is busy, the next is quiet—your pipeline feels like a rollercoaster.",
    },
    {
      icon: "/assets/lead.png",
      title: "Chasing Customers",
      description:
        "Instead of focusing on jobs, you’re stuck chasing down customers.",
    },
  ];
 return (
    <section className="py-16 sm:py-20 bg-muted/30" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 text-base sm:text-lg md:text-xl">
            {/* Skeuomorphic Alert Icon */}
            <img
              src="/icons/alert.png"
              alt="Alert Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span className="font-semibold">The Hard Truth</span>
          </p>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-heading mb-4 sm:mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Seattle Home Service Pros Face{" "}
            <span className="text-gradient">These 3 Big Challenges</span>
          </h2>
        </div>

        {/* Pain Points */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 mb-10 sm:mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card p-6 sm:p-8 rounded-xl shadow-soft border border-border/50 text-center hover:shadow-medium transition-smooth"
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
            >
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <img
                  src={point.icon}
                  alt={point.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-heading mb-2 sm:mb-4">
                {point.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div
          className="text-center mt-12 sm:mt-16"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="text-lg sm:text-2xl text-muted-foreground font-medium">
            If this sounds familiar, you’re not the only one—most Seattle home
            service pros struggle with the same challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
