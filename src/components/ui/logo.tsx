import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* TM Icon - Blue square with white tm */}
      <div className={cn(
        "relative flex items-center justify-center bg-primary text-white font-bold",
        iconSizes[size]
      )}>
        <span className="text-xs font-black tracking-tight">tm</span>
      </div>
      
      {/* Text - Dark grey THING MEDIA */}
      <div className={cn("font-semibold text-gray-700 uppercase tracking-wide", sizeClasses[size])}>
        THING MEDIA
        <span className="text-xs ml-1">®</span>
      </div>
    </div>
  );
};

export default Logo;
