import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Company Name */}
          <div className="flex items-center space-x-3">
            {/* Left Logo Icon */}
            <img
              src="/assets/logo.png" // red symbol (your existing logo)
              alt="Thing Media Logo"
              className="h-12 w-auto"
            />

            {/* Company Name Text with ® */}
            <span className="text-2xl font-bold tracking-tight flex items-center">
              THING MEDIA
              <sup className="ml-1 text-sm">®</sup>
            </span>
          </div>

          {/* Desktop Button */}
          <div className="hidden sm:block">
            <Button variant="default" size="lg" className="font-semibold">
              Book Your Free Strategy Call
            </Button>
          </div>

          {/* Mobile Button */}
          <div className="sm:hidden">
            <Button
              variant="default"
              size="sm"
              className="font-medium px-3 py-1.5"
            >
              Free Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
