import { c as cn } from "./app-layout-ULHV9D_s.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/components/ui/misc/section-heading.tsx
var alignClass = {
	left: "items-start text-left",
	center: "items-center text-center",
	right: "items-end text-right"
};
var lineClass = {
	left: "flex-row",
	center: "flex-row",
	right: "flex-row-reverse"
};
function SectionHeading({ label, title, children, align = "center", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col space-y-6", alignClass[align], className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: cn("inline-flex items-center gap-4", lineClass[align]),
				children: [
					align !== "right" && /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary shrink-0" }),
					/* @__PURE__ */ jsx("span", {
						className: "text-sm font-bold text-primary tracking-widest uppercase whitespace-nowrap",
						children: label
					}),
					align !== "left" && /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary shrink-0" })
				]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]",
				children: title
			}),
			children && /* @__PURE__ */ jsx("div", {
				className: cn("text-lg text-muted-foreground leading-relaxed", align === "center" && "max-w-2xl mx-auto", align === "left" && "max-w-2xl", align === "right" && "max-w-2xl ml-auto"),
				children
			})
		]
	});
}
//#endregion
export { SectionHeading as t };

//# sourceMappingURL=section-heading-1zRi9Ek4.js.map