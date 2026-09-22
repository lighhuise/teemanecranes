import { s as Wrapper, t as AppLayout } from "./app-layout-BL6avkzR.js";
import { t as SectionHeading } from "./section-heading-feww2vX5.js";
import { t as ServiceCard } from "./service-card-Clo69VCm.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/services/index.tsx
function Index({ services }) {
	return /* @__PURE__ */ jsx(AppLayout, {
		title: "Services",
		children: /* @__PURE__ */ jsx("div", {
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
					children: services.map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
						service,
						index: idx
					}, service.id))
				})] })
			})
		})
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=services-DbL63MBG.js.map