import { c as cn } from "./app-layout-CKOqlWEW.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/misc/floating-stat-card.tsx
var positionClasses = {
	"top-left": "top-0 left-0 md:-left-8 md:-top-6",
	"top-right": "top-0 right-0 md:-right-8 md:-top-6",
	"bottom-left": "bottom-0 left-0 md:-left-8 md:-bottom-6",
	"bottom-right": "bottom-0 right-0 md:-right-8 md:-bottom-6"
};
function FloatingStatCard({ value, label, position = "bottom-left", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("absolute bg-background p-6 md:p-8 rounded-xl border border-border shadow-2xl pointer-events-none z-20", positionClasses[position], className),
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-4xl md:text-5xl font-black text-primary mb-1 leading-none",
			children: value
		}), /* @__PURE__ */ jsx("div", {
			className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { FloatingStatCard as t };

//# sourceMappingURL=floating-stat-card-DWmFEXbQ.js.map