import { t as IMG_0190_copy_default } from "./IMG_0190-copy-BHJv3jgA.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region resources/js/components/service-card.tsx
function ServiceCard({ service }) {
	const imageUrl = service.featured_image_url || service.image || IMG_0190_copy_default;
	return /* @__PURE__ */ jsxs(Link, {
		href: `/services/${service.slug}`,
		className: "reveal-up group relative overflow-hidden bg-background border border-border flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 rounded-xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border",
			children: [/* @__PURE__ */ jsx("img", {
				src: imageUrl,
				alt: service.title,
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col justify-between p-6 sm:p-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase",
					children: service.title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground line-clamp-3 leading-relaxed",
					children: service.short_description
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex items-center text-sm font-bold tracking-widest text-primary uppercase",
				children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
			})]
		})]
	});
}
//#endregion
export { ServiceCard as t };

//# sourceMappingURL=service-card-Cop-Jusq.js.map