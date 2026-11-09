import React from "react";
import { cn } from "@/lib/utils";
// @ts-ignore
import dotPatternSvg from "@/../images/dot-pattern.svg";

export type DotPatternCorner =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center"
    | "top-center"
    | "bottom-center"
    | "center-left"
    | "center-right";

export type DotPatternSize = "sm" | "md" | "lg" | "xl" | "2xl";

const cornerClasses: Record<DotPatternCorner, string> = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    "center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
};

const sizeClasses: Record<DotPatternSize, string> = {
    sm: "size-48 lg:size-64",
    md: "size-64 lg:size-80",
    lg: "size-80 lg:size-110",
    xl: "size-96 lg:size-140",
    "2xl": "size-120 lg:size-180",
};

export interface DotPatternProps {
    corner?: DotPatternCorner;
    position?: DotPatternCorner;
    size?: DotPatternSize | number | string;
    className?: string;
    style?: React.CSSProperties;
}

export function DotPattern({
    corner,
    position,
    size = "lg",
    className,
    style,
}: DotPatternProps) {
    const resolvedCorner = position ?? corner ?? "top-right";
    const isPresetSize = typeof size === "string" && size in sizeClasses;
    const isCustomTailwindSize =
        typeof size === "string" && !isPresetSize && (size.startsWith("size-") || size.startsWith("w-") || size.startsWith("h-"));

    const customSizeStyle: React.CSSProperties | undefined =
        typeof size === "number"
            ? { width: `${size}px`, height: `${size}px`, ...style }
            : !isPresetSize && !isCustomTailwindSize && typeof size === "string"
              ? { width: size, height: size, ...style }
              : style;

    return (
        <img
            src={dotPatternSvg}
            alt=""
            aria-hidden={true}
            style={customSizeStyle}
            className={cn(
                "pointer-events-none select-none absolute z-0 scale-110 opacity-12 dark:opacity-18",
                isPresetSize && sizeClasses[size as DotPatternSize],
                isCustomTailwindSize && size,
                cornerClasses[resolvedCorner],
                className,
            )}
        />
    );
}

export default DotPattern;
