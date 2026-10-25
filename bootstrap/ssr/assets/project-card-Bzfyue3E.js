import { t as IMG_0190_copy_default } from "./IMG_0190-copy-BHJv3jgA.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowUpRight, Camera, Images, Video } from "lucide-react";
//#region resources/js/components/project-card.tsx
function ProjectCard({ project }) {
	const mainImageUrl = project.featured_image_url || project.gallery_image_urls?.[0] || project.galleries_with_urls?.[0]?.image_urls?.[0] || IMG_0190_copy_default;
	const allImages = Array.from(/* @__PURE__ */ new Set([
		mainImageUrl,
		...project.gallery_image_urls || [],
		...project.galleries_with_urls?.flatMap((g) => g.image_urls) || []
	])).filter(Boolean);
	const [activeImage, setActiveImage] = useState(mainImageUrl);
	const totalPhotos = project.total_images ?? (allImages.length > 0 ? allImages.length : 1);
	const previewTiles = allImages.slice(0, 4);
	return /* @__PURE__ */ jsxs(Link, {
		href: `/projects/${project.slug}`,
		className: "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border/80 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10 aspect-4/5 sm:aspect-3/4 min-h-[460px]",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 z-0 overflow-hidden bg-muted",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: activeImage,
						alt: project.title,
						className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
					}, activeImage),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background via-background/85 via-45% to-transparent dark:from-black/95 dark:via-black/50 dark:via-50% dark:to-black/25 transition-all duration-500 group-hover:via-background/90 dark:group-hover:via-black/60" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-radial-[at_top_right] from-primary/10 dark:from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex items-center justify-between p-5 sm:p-6",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50",
					children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", { children: project.project_date || "Case Study" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [project.video_url && /* @__PURE__ */ jsx("span", {
						className: "inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white px-2.5 py-1.5 text-[11px] font-bold shadow-xs backdrop-blur-md",
						title: "Video footage available",
						children: /* @__PURE__ */ jsx(Video, { className: "size-3.5 text-primary" })
					}), totalPhotos > 0 && /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50 px-3.5 py-1.5 text-[11px] font-bold",
						children: [/* @__PURE__ */ jsx(Camera, { className: "size-3.5 text-primary" }), /* @__PURE__ */ jsxs("span", { children: [
							totalPhotos,
							" ",
							totalPhotos === 1 ? "Photo" : "Photos"
						] })]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex flex-col justify-end p-6 sm:p-7 space-y-3.5",
				children: [
					allImages.length > 1 && /* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground dark:text-white/70",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(Images, { className: "size-3 text-primary" }), /* @__PURE__ */ jsx("span", { children: "Gallery Preview" })]
							}), /* @__PURE__ */ jsxs("span", { children: [
								totalPhotos,
								" ",
								totalPhotos === 1 ? "Shot" : "Shots"
							] })]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1.5",
							children: [previewTiles.map((thumbUrl, idx) => {
								const isActive = activeImage === thumbUrl;
								return /* @__PURE__ */ jsxs("button", {
									type: "button",
									"aria-label": `Preview photo ${idx + 1}`,
									onClick: (e) => {
										e.preventDefault();
										e.stopPropagation();
										setActiveImage(thumbUrl);
									},
									onMouseEnter: (e) => {
										e.preventDefault();
										e.stopPropagation();
										setActiveImage(thumbUrl);
									},
									className: `relative h-10 w-13 sm:h-11 sm:w-15 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer ${isActive ? "ring-2 ring-primary scale-105 shadow-md shadow-primary/20 z-10" : "opacity-75 hover:opacity-100 hover:scale-102 ring-1 ring-border/80 dark:ring-white/20"}`,
									children: [/* @__PURE__ */ jsx("img", {
										src: thumbUrl,
										alt: "",
										className: "h-full w-full object-cover"
									}), isActive && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/10 border-b-2 border-primary" })]
								}, idx);
							}), totalPhotos > 4 && /* @__PURE__ */ jsxs("div", {
								className: "h-10 px-2 sm:h-11 rounded-lg border border-border/80 bg-background/80 dark:border-white/20 dark:bg-black/40 text-[10px] font-bold uppercase tracking-wider text-foreground dark:text-white/90 backdrop-blur-md flex items-center justify-center",
								children: ["+", totalPhotos - 4]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "text-2xl sm:text-[26px] font-bold uppercase tracking-tight text-foreground dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary",
						children: project.title
					}),
					project.description && /* @__PURE__ */ jsx("p", {
						className: "text-xs sm:text-sm text-muted-foreground dark:text-white/75 line-clamp-2 leading-relaxed font-normal",
						children: project.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between pt-3 border-t border-border/70 dark:border-white/15",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-widest text-foreground/80 dark:text-white/90 transition-colors duration-300 group-hover:text-primary",
							children: "View Project Showcase"
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
export { ProjectCard as t };

//# sourceMappingURL=project-card-Bzfyue3E.js.map