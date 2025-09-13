import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Testimonial from "@/components/sections/Testimonial";
import GoogleReviews from "@/components/sections/review";  // ✅ new section
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <GoogleReviews />   {/* ✅ added here */}
      <Problem />
      <Solution />
      <Testimonial />
      
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
