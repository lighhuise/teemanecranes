import { cn } from "@/lib/utils";

interface BackgroundTextProps {
    children: React.ReactNode;
    position?: "left" | "right" | "center";
    className?: string;
}

export function BackgroundText({ children, position = "left", className }: BackgroundTextProps) {
    const positionClasses = {
        left: "left-3",
        center: "left-1/2 -translate-x-1/2",
        right: "right-3"
    };

    return (
        <div 
            aria-hidden={true} 
            className={cn(
                "text-[20vh] pointer-events-none opacity-5 absolute top-2 xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground",
                positionClasses[position],
                className
            )}
        >
            {children}
        </div>
    );
}
