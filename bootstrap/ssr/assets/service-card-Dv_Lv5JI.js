import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region resources/js/components/service-card.tsx
function ServiceCard({ service, index }) {
	return /* @__PURE__ */ jsxs(Link, {
		href: `/services/${service.slug}`,
		className: "reveal-up group relative p-8 bg-background border border-border flex flex-col justify-between min-h-65 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-sm",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ jsxs("span", {
					className: "text-3xl font-bold tracking-wider text-muted-foreground/20 group-hover:text-primary transition-colors",
					children: ["0", index + 1]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase",
					children: service.title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground line-clamp-4 leading-relaxed",
					children: service.short_description
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-8 flex items-center text-sm font-bold tracking-widest text-primary uppercase",
			children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
		})]
	});
}
//#endregion
export { ServiceCard as t };

//# sourceMappingURL=service-card-Dv_Lv5JI.js.map