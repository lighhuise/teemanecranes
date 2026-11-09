import { p as cn } from "./app-layout-EzspTEMG.js";
import { jsx, jsxs } from "react/jsx-runtime";
// resources/js/components/ui/misc/floating-stat-card.tsx
var positionClasses = {
	"top-left": "top-0 left-0 md:-left-8 -translate-y-1/2",
	"top-right": "top-0 right-0 md:-right-8 -translate-y-1/2",
	"bottom-left": "bottom-0 left-0 md:-left-8 translate-y-1/2",
	"bottom-right": "bottom-0 right-0 md:-right-8 translate-y-1/2"
};
function FloatingStatCard({ value, label, position = "bottom-left", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("absolute bg-background/50 backdrop-blur-xs p-6 md:p-8 rounded-xl border border-border shadow-2xl pointer-events-none z-20", positionClasses[position], className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-4xl md:text-5xl font-bold text-primary mb-1 leading-none",
			children: value
		}), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-bold uppercase tracking-widest text-foreground",
			children: label
		})]
	});
}
export { FloatingStatCard as t };

//# sourceMappingURL=floating-stat-card-BKltj2jr.js.map