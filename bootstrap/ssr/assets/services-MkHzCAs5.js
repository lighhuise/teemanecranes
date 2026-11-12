import { f as Wrapper, m as toStorageUrl, t as AppLayout } from "./app-layout-BxPBmaj7.js";
import { t as SectionHeading } from "./section-heading-CZjJeoS_.js";
import { t as ServicesSection } from "./services-section-B3I9ol57.js";
import { t as ProjectGalleryView } from "./project-Cc60_y-9.js";
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
			for (const b of blocks) if (b.type === "gallery") {
				if (b.data?.images_meta && b.data.images_meta.length > 0) for (const meta of b.data.images_meta) shots.push({
					...meta,
					url: toStorageUrl(meta.url)
				});
				else {
					const rawUrls = b.data?.image_urls && b.data.image_urls.length > 0 ? b.data.image_urls : b.data?.images ?? [];
					for (const url of rawUrls) shots.push({
						url: toStorageUrl(url),
						orientation: "landscape",
						aspect_ratio: 1.778
					});
				}
			} else if (b.type === "image") {
				const rawUrl = b.data?.image_url || b.data?.image;
				if (b.data?.image_meta) shots.push({
					...b.data.image_meta,
					url: toStorageUrl(b.data.image_meta.url || rawUrl)
				});
				else if (rawUrl) shots.push({
					url: toStorageUrl(rawUrl),
					orientation: "landscape",
					aspect_ratio: 1.778
				});
			}
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

//# sourceMappingURL=services-MkHzCAs5.js.map