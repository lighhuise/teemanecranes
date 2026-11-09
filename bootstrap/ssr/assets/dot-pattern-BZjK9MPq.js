import { p as cn } from "./app-layout-R-9tyUJ9.js";
import { jsx } from "react/jsx-runtime";
import "react";
// resources/images/dot-pattern.svg
var dot_pattern_default = "/build/assets/dot-pattern-sh3LOD2W.svg";
// resources/js/components/dot-pattern.tsx
var cornerClasses = {
	"top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
	"top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
	"bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
	"bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
	"center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
	"top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
	"bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
	"center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
	"center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
};
var sizeClasses = {
	sm: "size-48 lg:size-64",
	md: "size-64 lg:size-80",
	lg: "size-80 lg:size-110",
	xl: "size-96 lg:size-140",
	"2xl": "size-120 lg:size-180"
};
function DotPattern({ corner, position, size = "lg", className, style }) {
	const resolvedCorner = position ?? corner ?? "top-right";
	const isPresetSize = typeof size === "string" && size in sizeClasses;
	const isCustomTailwindSize = typeof size === "string" && !isPresetSize && (size.startsWith("size-") || size.startsWith("w-") || size.startsWith("h-"));
	const customSizeStyle = typeof size === "number" ? {
		width: `${size}px`,
		height: `${size}px`,
		...style
	} : !isPresetSize && !isCustomTailwindSize && typeof size === "string" ? {
		width: size,
		height: size,
		...style
	} : style;
	return /* @__PURE__ */ jsx("img", {
		src: dot_pattern_default,
		alt: "",
		"aria-hidden": true,
		style: customSizeStyle,
		className: cn("pointer-events-none select-none absolute z-0 scale-110 opacity-12 dark:opacity-18", isPresetSize && sizeClasses[size], isCustomTailwindSize && size, cornerClasses[resolvedCorner], className)
	});
}
export { DotPattern as t };

//# sourceMappingURL=dot-pattern-BZjK9MPq.js.map