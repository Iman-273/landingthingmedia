import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
         <div className="flex items-center">
  <img
    src="src/assets/logo.png"
    alt="Thing Media Logo"
    className="h-10 w-auto scale-150" // height fix = h-10 (40px), zoomed 1.5x
  />
</div>
          {/* Desktop Button */}
          <div className="hidden sm:block">
            <Button
              variant="default"
              size="lg"
              className="font-semibold"
            >
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
