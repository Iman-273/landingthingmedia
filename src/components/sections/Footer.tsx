import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50 py-8 sm:py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center md:items-end gap-1 sm:gap-2">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              © {new Date().getFullYear()} Thing Media. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xs sm:max-w-md md:max-w-lg">
              Smart, reliable marketing to help Seattle home service businesses grow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
