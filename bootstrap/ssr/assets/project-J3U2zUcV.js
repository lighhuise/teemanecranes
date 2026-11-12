import { m as toStorageUrl, p as cn } from "./app-layout-r7btKtxd.js";
import { n as IMG_0190_copy_default, t as useImageAspectRatio } from "./use-image-aspect-ratio-D2AOM87V.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Calendar, Expand, MapPin } from "lucide-react";
import { BalancedMasonryGrid, Frame } from "@masonry-grid/react";
// resources/js/components/project/project-meta-badges.tsx
function ProjectMetaBadges({ project, size = "default", className }) {
	const isCompact = size === "compact";
	if (!project.location && !project.project_date) return null;
	const itemClassName = cn("inline-flex items-center font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase", isCompact ? "gap-1.5" : "gap-2");
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-wrap items-center gap-x-4 gap-y-1.5", className),
		children: [project.location && /* @__PURE__ */ jsxs("span", {
			className: itemClassName,
			children: [/* @__PURE__ */ jsx(MapPin, { className: "size-3.5 shrink-0 text-primary" }), /* @__PURE__ */ jsx("span", { children: project.location })]
		}), project.project_date && /* @__PURE__ */ jsxs("span", {
			className: itemClassName,
			children: [/* @__PURE__ */ jsx(Calendar, { className: "size-3.5 shrink-0 text-primary" }), /* @__PURE__ */ jsx("span", { children: project.project_date })]
		})]
	});
}
// resources/js/components/project/project-card.tsx
var variantStyles = {
	spotlight: {
		card: "flex flex-col",
		media: "aspect-16/10",
		content: "gap-3 p-5 sm:p-6",
		title: "text-xl sm:text-2xl lg:text-3xl",
		meta: "default"
	},
	stack: {
		card: "flex flex-col",
		media: "aspect-16/9",
		content: "gap-2 px-5 py-4",
		title: "text-lg sm:text-xl",
		meta: "compact"
	},
	grid: {
		card: "flex flex-col h-full",
		media: "aspect-16/10",
		content: "gap-2 p-5 flex-1 justify-between",
		title: "text-xl sm:text-2xl",
		meta: "default"
	}
};
function ProjectCard({ project, variant = "grid", label, className, onAspectRatioChange }) {
	const style = variantStyles[variant];
	const rawImageUrl = project.featured_image_url || project.gallery_image_urls?.[0] || project.gallery?.[0] || project.galleries_with_urls?.[0]?.image_urls?.[0] || (project.galleries_with_urls?.[0])?.images?.[0] || IMG_0190_copy_default;
	const imageUrl = rawImageUrl === IMG_0190_copy_default ? IMG_0190_copy_default : toStorageUrl(rawImageUrl);
	const { orientation: dynamicOrientation, imgRef, handleLoad, containerStyle } = useImageAspectRatio({
		initialAspectRatio: project.featured_image_aspect_ratio,
		initialOrientation: project.featured_image_orientation,
		onDimensionsChange: ({ aspectRatio }) => onAspectRatioChange?.(aspectRatio)
	});
	const orientation = dynamicOrientation || project.featured_image_orientation || "landscape";
	const mediaAspectClass = variant === "spotlight" ? "aspect-16/10 sm:aspect-16/9 max-h-[460px]" : orientation === "portrait" ? variant === "stack" ? "aspect-[4/5]" : "aspect-[4/5]" : orientation === "square" ? "aspect-square" : style.media;
	return /* @__PURE__ */ jsxs(Link, {
		href: `/projects/${project.slug}`,
		"aria-label": `${project.title}${project.location ? ` — ${project.location}` : ""}`,
		className: cn("group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-md hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:shadow-black/40", style.card, className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("relative w-full overflow-hidden bg-card flex items-center justify-center", !containerStyle && mediaAspectClass),
				style: containerStyle,
				children: /* @__PURE__ */ jsx("img", {
					ref: imgRef,
					src: imageUrl,
					alt: project.title,
					loading: "lazy",
					onLoad: handleLoad,
					className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col border-t border-border/60 bg-card", style.content),
				children: [
					label && /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", {
							className: "text-[11px] font-mono font-bold uppercase tracking-wider text-primary",
							children: label
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: cn("leading-tight font-black tracking-tight text-card-foreground uppercase transition-colors duration-300 group-hover:text-primary", style.title),
						children: project.title
					}),
					variant === "spotlight" && project.description && /* @__PURE__ */ jsx("p", {
						className: "text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed",
						children: project.description
					}),
					/* @__PURE__ */ jsx(ProjectMetaBadges, {
						project,
						size: style.meta
					})
				]
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 z-20 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" })
		]
	});
}
// resources/js/components/project/project-gallery-view.tsx
function GalleryGridFrameItem({ item, idx, projectTitle, onImageClick }) {
	const isPortrait = item.orientation === "portrait";
	const isSquare = item.orientation === "square";
	const fallbackWidth = item.width ?? (item.aspect_ratio ? Math.round(item.aspect_ratio * 1e3) : isPortrait ? 800 : isSquare ? 1e3 : 1400);
	const fallbackHeight = item.height ?? (item.aspect_ratio ? 1e3 : isPortrait ? 1200 : isSquare ? 1e3 : 900);
	const [dimensions, setDimensions] = React.useState({
		width: fallbackWidth,
		height: fallbackHeight
	});
	const imgRef = React.useRef(null);
	const imageUrl = toStorageUrl(item.url);
	const handleLoad = (e) => {
		const img = e.currentTarget;
		if (img.naturalWidth && img.naturalHeight) setDimensions({
			width: img.naturalWidth,
			height: img.naturalHeight
		});
	};
	React.useEffect(() => {
		if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setDimensions({
			width: imgRef.current.naturalWidth,
			height: imgRef.current.naturalHeight
		});
	}, [imageUrl]);
	return /* @__PURE__ */ jsx(Frame, {
		width: dimensions.width,
		height: dimensions.height,
		children: /* @__PURE__ */ jsxs("button", {
			type: "button",
			onClick: () => onImageClick(idx),
			className: "group relative h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-card cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-primary flex items-center justify-center block",
			children: [/* @__PURE__ */ jsx("img", {
				ref: imgRef,
				src: imageUrl,
				alt: `${projectTitle} - Photo #${idx + 1}`,
				onLoad: handleLoad,
				className: "h-full w-full object-cover block",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
				children: /* @__PURE__ */ jsx("div", {
					className: "size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg",
					children: /* @__PURE__ */ jsx(Expand, { className: "size-4" })
				})
			})]
		})
	});
}
function ProjectGalleryView({ images, projectTitle = "Project Capture", onImageClick, className, showControls = true }) {
	if (!images || images.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("space-y-6", className),
		children: [showControls && /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-between pb-3 border-b border-border/80",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary" }), /* @__PURE__ */ jsxs("span", {
					className: "text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground",
					children: [
						images.length,
						" High-Res ",
						images.length === 1 ? "Capture" : "Captures"
					]
				})]
			})
		}), /* @__PURE__ */ jsx(BalancedMasonryGrid, {
			frameWidth: 300,
			gap: 16,
			children: images.map((item, idx) => /* @__PURE__ */ jsx(GalleryGridFrameItem, {
				item,
				idx,
				projectTitle,
				onImageClick
			}, idx))
		})]
	});
}
export { ProjectCard as n, ProjectGalleryView as t };

//# sourceMappingURL=project-J3U2zUcV.js.map