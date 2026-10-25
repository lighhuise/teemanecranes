import { t as IMG_0190_copy_default } from "./IMG_0190-copy-BHJv3jgA.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
//#region resources/js/components/service-card.tsx
function ServiceCard({ service }) {
	const imageUrl = service.featured_image_url || service.image || IMG_0190_copy_default;
	return /* @__PURE__ */ jsxs(Link, {
		href: `/services/${service.slug}`,
		className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border/80 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10 aspect-4/5 sm:aspect-3/4 min-h-[440px]",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 z-0 overflow-hidden bg-muted",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: imageUrl,
						alt: service.title,
						className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background via-background/75 via-30% to-transparent dark:from-black/95 dark:via-black/50 dark:via-50% dark:to-black/25 transition-all duration-500 group-hover:via-background/95 dark:group-hover:via-black/60" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-[at_top_right] from-primary/10 dark:from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex items-center justify-between p-5 sm:p-6",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50",
					children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", { children: "Specialised Service" })]
				}), /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3 py-1.5 text-[11px] font-bold backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50",
					children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-3.5 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Certified" })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex flex-col justify-end p-6 sm:p-7 space-y-3.5",
				children: [
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl sm:text-[26px] font-bold uppercase tracking-tight text-foreground dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary",
						children: service.title
					}),
					service.short_description && /* @__PURE__ */ jsx("p", {
						className: "text-xs sm:text-sm text-muted-foreground dark:text-white/75 line-clamp-2 leading-relaxed font-normal",
						children: service.short_description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-3 border-t border-border/70 dark:border-white/15",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-widest text-foreground/80 dark:text-white/90 transition-colors duration-300 group-hover:text-primary",
							children: "Explore Capability"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground dark:border-white/30 dark:bg-white/10 dark:text-white backdrop-blur-xs shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:rotate-45",
							children: /* @__PURE__ */ jsx(ArrowUpRight, {
								className: "size-4",
								strokeWidth: 2.5
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute inset-x-0 bottom-0 h-1 bg-transparent overflow-hidden",
						children: /* @__PURE__ */ jsx("div", { className: "h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" })
					})
				]
			})
		]
	});
}
//#endregion
export { ServiceCard as t };

//# sourceMappingURL=service-card-DQQTBCbp.js.map