import Logo from "@/components/ui/logo"; 

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png" // public folder path
              alt="Thing Media Logo"
              className="h-14 w-auto" // logo size increased (56px)
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-right">
            <p className="text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">
              © {new Date().getFullYear()} Thing Media. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md md:max-w-none">
              Smart, reliable marketing to help Seattle home service businesses grow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
