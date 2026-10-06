import { cn } from "@/lib/utils";
import React from "react";

export interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
    dotSize?: number;
    spacing?: number;
}

export function DotPattern({ 
    className, 
    dotSize = 2, 
    spacing = 24, 
    style,
    ...props 
}: DotPatternProps) {
    return (
        <div 
            className={cn(
                "absolute inset-0 opacity-20 -translate-x-32 -translate-y-32 pointer-events-none text-muted-foreground",
                className
            )}
            style={{
                backgroundImage: `radial-gradient(circle at ${dotSize}px ${dotSize}px, currentColor ${dotSize}px, transparent 0)`,
                backgroundSize: `${spacing}px ${spacing}px`,
                maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
                ...style
            }}
            {...props}
        />
    );
}
