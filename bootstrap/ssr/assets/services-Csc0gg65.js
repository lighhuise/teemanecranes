import { s as Wrapper, t as AppLayout } from "./app-layout-SAU3NEm7.js";
import { t as SectionHeading } from "./section-heading-DzxHOQ8M.js";
import { Head } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/services/index.tsx
function Index({ services }) {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title: "Services" }), /* @__PURE__ */ jsx("div", {
		className: "bg-background selection:bg-primary selection:text-white pb-24",
		children: /* @__PURE__ */ jsx("section", {
			className: "py-24 bg-muted/30 border-b border-border",
			children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Capabilities",
				title: /* @__PURE__ */ jsxs(Fragment, { children: [
					"ENGINEERED FOR ",
					/* @__PURE__ */ jsx("span", {
						className: `text-primary`,
						children: "THE LIFT"
					}),
					" "
				] }),
				align: "center",
				className: "mb-16",
				children: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
				children: services.map((service, idx) => /* @__PURE__ */ jsx("div", {
					className: "reveal-up group relative p-8 bg-background border border-border flex flex-col justify-between min-h-[260px] transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-sm cursor-default",
					children: /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "text-3xl font-bold tracking-wider text-muted-foreground/20 group-hover:text-primary transition-colors",
								children: ["0", idx + 1]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase",
								children: service.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: service.short_description
							})
						]
					})
				}, service.id))
			})] })
		})
	})] });
}
//#endregion
export { Index as default };

//# sourceMappingURL=services-Csc0gg65.js.map