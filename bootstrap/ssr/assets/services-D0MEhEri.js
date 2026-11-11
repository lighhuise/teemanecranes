import { f as Wrapper, t as AppLayout } from "./app-layout-kkCo5A8C.js";
import { t as SectionHeading } from "./section-heading-Be8p51_z.js";
import { t as ServicesSection } from "./services-section-CLWgxADf.js";
import { t as ProjectGalleryView } from "./project-BWHL6P4P.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// resources/js/pages/services/index.tsx
function Index({ services = [] }) {
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const allGalleryShots = React.useMemo(() => {
		const shots = [];
		for (const s of services) {
			const blocks = s.content_blocks || [];
			for (const b of blocks) if (b.type === "gallery" && b.data?.images_meta) shots.push(...b.data.images_meta);
			else if (b.type === "gallery" && b.data?.image_urls) for (const url of b.data.image_urls) shots.push({
				url,
				orientation: "landscape",
				aspect_ratio: 1.778
			});
			else if (b.type === "image" && b.data?.image_meta) shots.push(b.data.image_meta);
			else if (b.type === "image" && b.data?.image_url) shots.push({
				url: b.data.image_url,
				orientation: "landscape",
				aspect_ratio: 1.778
			});
		}
		return shots.filter((item, index, self) => item.url && self.findIndex((other) => other.url === item.url) === index);
	}, [services]);
	const lightboxSlides = allGalleryShots.map((s) => ({ src: s.url }));
	return /* @__PURE__ */ jsx(AppLayout, {
		title: "Specialized Crane & Lifting Services - Teemane Cranes",
		description: "Explore our specialized mobile crane hire, rigging, industrial engineering, and precision heavy lifting capabilities across South Africa.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "bg-background selection:bg-primary selection:text-white pb-24",
			children: [/* @__PURE__ */ jsx(ServicesSection, {
				services,
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["ENGINEERED FOR ", /* @__PURE__ */ jsx("span", {
					className: "text-primary",
					children: "THE LIFT"
				})] }),
				label: "Our Capabilities",
				description: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge.",
				showPills: true,
				showViewAllButton: false
			}), allGalleryShots.length > 0 && /* @__PURE__ */ jsx("section", {
				className: "py-24 bg-background border-b border-border",
				children: /* @__PURE__ */ jsxs(Wrapper, { children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Field Captures",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["ON-SITE ", /* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "OPERATIONS"
						})] }),
						align: "center",
						className: "mb-14",
						children: "A visual log of recent mobile crane lifts, shipyard rigging, and heavy engineering tasks delivered with precision and safety."
					}),
					/* @__PURE__ */ jsx(ProjectGalleryView, {
						images: allGalleryShots,
						projectTitle: "Service Operations",
						onImageClick: (idx) => setLightboxIndex(idx)
					}),
					/* @__PURE__ */ jsx(Lightbox, {
						open: lightboxIndex !== null,
						close: () => setLightboxIndex(null),
						index: lightboxIndex ?? 0,
						slides: lightboxSlides
					})
				] })
			})]
		})
	});
}
export { Index as default };

//# sourceMappingURL=services-D0MEhEri.js.map