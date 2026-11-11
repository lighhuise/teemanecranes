import { d as SectionOverline, f as Wrapper, t as AppLayout } from "./app-layout-kkCo5A8C.js";
import { t as SectionHeading } from "./section-heading-Be8p51_z.js";
import { t as ServiceCard } from "./service-card-1drtKkfx.js";
import { t as BackgroundText } from "./background-text-DeaQxtm0.js";
import { t as DotPattern } from "./dot-pattern-B9RlEj8G.js";
import { t as ProjectGalleryView } from "./project-BWHL6P4P.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { Wrench } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { BalancedMasonryGrid, Frame } from "@masonry-grid/react";
// resources/js/pages/services/index.tsx
function ServiceGridFrameItem({ service, idx }) {
	const isPortrait = service.featured_image_orientation === "portrait";
	const isSquare = service.featured_image_orientation === "square";
	const initialRatio = service.featured_image_aspect_ratio ? service.featured_image_aspect_ratio : isPortrait ? .75 : isSquare ? 1 : 1.5;
	const [imgRatio, setImgRatio] = useState(initialRatio);
	const cardHeight = Math.round(1e3 / imgRatio) + 320;
	return /* @__PURE__ */ jsx(Frame, {
		width: 1e3,
		height: cardHeight,
		children: /* @__PURE__ */ jsx(ServiceCard, {
			service,
			index: idx,
			className: "h-full w-full",
			onAspectRatioChange: (ratio) => setImgRatio(ratio)
		})
	});
}
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
			children: [/* @__PURE__ */ jsxs("section", {
				className: "py-24 bg-muted/30 border-b border-border relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(BackgroundText, {
						position: "center",
						children: "SERVICES"
					}),
					/* @__PURE__ */ jsx(DotPattern, { corner: "top-left" }),
					/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }),
					/* @__PURE__ */ jsxs(Wrapper, { children: [
						/* @__PURE__ */ jsx(SectionHeading, {
							label: "Our Capabilities",
							title: /* @__PURE__ */ jsxs(Fragment, { children: ["ENGINEERED FOR ", /* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "THE LIFT"
							})] }),
							align: "center",
							className: "mb-8",
							children: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-2 mb-16",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "20T to 550T Fleet Capacity"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "Certified Rigging Engineers"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs",
									children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "24/7 Rapid Deployment"]
								})
							]
						}),
						services.length > 0 && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-8 pb-4 border-b border-border",
							children: [/* @__PURE__ */ jsx(SectionOverline, {
								label: `Core Capabilities (${services.length})`,
								align: "left"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted-foreground font-medium hidden sm:inline-block",
								children: "Full uncropped equipment views & specifications"
							})]
						}),
						services.length > 2 ? /* @__PURE__ */ jsx(BalancedMasonryGrid, {
							frameWidth: 320,
							gap: 24,
							children: services.map((service, idx) => /* @__PURE__ */ jsx(ServiceGridFrameItem, {
								service,
								idx
							}, service.id))
						}) : services.length > 0 ? /* @__PURE__ */ jsx("div", {
							className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
							children: services.map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
								service,
								index: idx
							}, service.id))
						}) : /* @__PURE__ */ jsxs("div", {
							className: "max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary",
									children: /* @__PURE__ */ jsx(Wrench, { className: "size-8" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold uppercase text-foreground mb-2",
									children: "Capabilities Underway"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: "Our service capability profiles are currently being updated. Contact our dispatch team directly for customized crane hire and engineering solutions."
								})
							]
						})
					] })
				]
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

//# sourceMappingURL=services-Cp2Hz27S.js.map