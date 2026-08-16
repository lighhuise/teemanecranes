import { cn } from "@/lib/utils";

interface StackedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

export function StackedImage({ src, alt, className, containerClassName, ...props }: StackedImageProps) {
  return (
    <div className={cn("relative inline-block group", containerClassName)}>
      {/* Background Layer (Back) */}
      <div className="absolute inset-0 rounded-sm bg-background translate-x-6 translate-y-6 shadow-xl transition-transform duration-300 group-hover:translate-x-9 group-hover:translate-y-9" />

      {/* Accent Background (Middle-Back) */}
      <div className="absolute inset-0 rounded-sm bg-accent translate-x-4 translate-y-4 shadow-xl transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
      
      {/* Primary Background (Middle-Front) */}
      <div className="absolute inset-0 rounded-sm bg-primary translate-x-2 translate-y-2 shadow-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />
      
      {/* Image (Front) */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "relative z-10 block w-full h-auto object-cover shadow-2xl transition-transform duration-300",
          className
        )}
        {...props}
      />
    </div>
  );
}
