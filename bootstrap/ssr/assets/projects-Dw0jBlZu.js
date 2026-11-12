import { d as SectionOverline, f as Wrapper, i as EmergencyCta, m as toStorageUrl, t as AppLayout, u as useCompany } from "./app-layout-r7btKtxd.js";
import { t as SectionHeading } from "./section-heading-BMEXytHS.js";
import { t as BackgroundText } from "./background-text-8uaNHB-a.js";
import { n as ProjectCard, t as ProjectGalleryView } from "./project-J3U2zUcV.js";
import { t as DotPattern } from "./dot-pattern-6aJdHdqv.js";
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { ArrowRight, Camera, FolderGit2, Images, ShieldCheck } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { BalancedMasonryGrid, Frame } from "@masonry-grid/react";
// resources/js/pages/projects/index.tsx
function ProjectGridFrameItem({ project }) {
	const isPortrait = project.featured_image_orientation === "portrait";
	const isSquare = project.featured_image_orientation === "square";
	const initialRatio = project.featured_image_aspect_ratio ? project.featured_image_aspect_ratio : isPortrait ? .75 : isSquare ? 1 : 1.5;
	const [imgRatio, setImgRatio] = useState(initialRatio);
	const cardHeight = Math.round(1e3 / imgRatio) + 360;
	return /* @__PURE__ */ jsx(Frame, {
		width: 1e3,
		height: cardHeight,
		children: /* @__PURE__ */ jsx(ProjectCard, {
			project,
			variant: "grid",
			className: "h-full w-full",
			onAspectRatioChange: (ratio) => setImgRatio(ratio)
		})
	});
}
function Index({ projects = [] }) {
	const { stats } = useCompany();
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const sortedProjects = React.useMemo(() => {
		return [...projects].sort((a, b) => {
			const timeA = a.project_date_raw ? new Date(a.project_date_raw).getTime() : 0;
			const timeB = b.project_date_raw ? new Date(b.project_date_raw).getTime() : 0;
			if (timeB !== timeA) return timeB - timeA;
			return (b.id ?? 0) - (a.id ?? 0);
		});
	}, [projects]);
	const featuredProject = sortedProjects.length > 0 ? sortedProjects[0] : null;
	const allGalleryShots = sortedProjects.flatMap((p) => {
		const items = [...p.gallery_images || [], ...p.galleries_with_urls?.flatMap((g) => g.images_meta || []) || []];
		if (items.length > 0) return items.map((item) => ({
			src: toStorageUrl(item.url),
			orientation: item.orientation || "landscape",
			aspect_ratio: item.aspect_ratio,
			width: item.width,
			height: item.height,
			projectTitle: p.title,
			projectSlug: p.slug
		}));
		return [
			...p.gallery_image_urls || [],
			...p.gallery || [],
			...p.galleries_with_urls?.flatMap((g) => (g.image_urls && g.image_urls.length > 0 ? g.image_urls : g.images) || []) || []
		].map((url) => ({
			src: toStorageUrl(url),
			orientation: "landscape",
			aspect_ratio: 1.77,
			width: null,
			height: null,
			projectTitle: p.title,
			projectSlug: p.slug
		}));
	}).filter((item, index, self) => item.src && self.findIndex((other) => other.src === item.src) === index).slice(0, 16);
	const lightboxSlides = allGalleryShots.map((s) => ({ src: s.src }));
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Projects & Showcase - Teemane Cranes",
		description: "Explore our track record of heavy lifting, mobile crane operations, shipyard installations, and precision engineering across South Africa.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bg-background selection:bg-primary selection:text-white",
			children: [/* @__PURE__ */ jsxs("section", {
				className: "py-24 bg-muted/30 border-b border-border relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(BackgroundText, {
						position: "center",
						children: "PROJECTS"
					}),
					/* @__PURE__ */ jsx(DotPattern, { corner: `top-left` }),
					/* @__PURE__ */ jsx(DotPattern, { corner: `top-right` }),
					/* @__PURE__ */ jsxs(Wrapper, { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center text-center mb-16 relative py-2",
							children: [/* @__PURE__ */ jsx(SectionHeading, {
								label: "Portfolio",
								title: /* @__PURE__ */ jsxs(Fragment, { children: ["PROVEN RESULTS ON ", /* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "EVERY LIFT"
								})] }),
								align: "center",
								className: "mb-4",
								children: "Explore our track record of landmark mobile crane operations, heavy rigging, maritime shipyard tasks, and industrial installations across South Africa."
							}), /* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex flex-wrap items-center justify-center gap-2 pt-2",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground",
										children: [
											/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }),
											"Up to ",
											stats.max_capacity.display,
											" Heavy Lift"
										]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "Civil & Marine Rigging"]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "ISO-Compliant Precision"]
									})
								]
							})]
						}),
						featuredProject && /* @__PURE__ */ jsx("div", {
							className: "mb-20 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-9 shadow-xs overflow-hidden relative",
							children: /* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "lg:col-span-5 space-y-6",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary",
												children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }), "Featured Showcase"]
											}), featuredProject.total_images && featuredProject.total_images > 0 && /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground",
												children: [/* @__PURE__ */ jsx(Camera, { className: "size-3.5 text-primary" }), /* @__PURE__ */ jsxs("span", { children: [featuredProject.total_images, " High-Res Photos"] })]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-2.5",
											children: [/* @__PURE__ */ jsx("h3", {
												className: "text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground leading-tight",
												children: featuredProject.title
											}), featuredProject.description && /* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3",
												children: featuredProject.description
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-2 rounded-xl border border-border bg-muted/20 divide-x divide-border overflow-hidden",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "p-3.5 space-y-1",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
													children: "Fleet Deployment"
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-4 text-primary shrink-0" }), "Certified Riggers"]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "p-3.5 space-y-1",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground block",
													children: "Project Gallery"
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5",
													children: [/* @__PURE__ */ jsx(Images, { className: "size-4 text-primary shrink-0" }), "Full Photo Log"]
												})]
											})]
										}),
										/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link, {
											href: `/projects/${featuredProject.slug}`,
											className: "inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-colors",
											children: [/* @__PURE__ */ jsx("span", { children: "Explore Case Study & Gallery" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
										}) })
									]
								}), /* @__PURE__ */ jsx("div", {
									className: "lg:col-span-7 w-full h-full",
									children: (() => {
										const featuredShots = Array.from(/* @__PURE__ */ new Set([
											featuredProject.featured_image_url,
											...featuredProject.gallery_image_urls || [],
											...featuredProject.galleries_with_urls?.flatMap((g) => g.image_urls) || []
										])).filter(Boolean);
										const mainHeroShot = featuredShots[0];
										const subShots = featuredShots.slice(1, 4);
										if (featuredProject.featured_image_orientation === "portrait" && subShots.length > 0) return /* @__PURE__ */ jsxs("div", {
											className: "rounded-2xl border border-border bg-muted/30 p-2 grid grid-cols-3 gap-2.5 sm:gap-3 h-full min-h-[380px] sm:min-h-[460px]",
											children: [/* @__PURE__ */ jsx(Link, {
												href: `/projects/${featuredProject.slug}`,
												className: "col-span-2 h-full min-h-[340px] rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs",
												children: /* @__PURE__ */ jsx("img", {
													src: mainHeroShot,
													alt: featuredProject.title,
													className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
												})
											}), /* @__PURE__ */ jsx("div", {
												className: "col-span-1 flex flex-col gap-2.5 sm:gap-3 h-full justify-between",
												children: subShots.slice(0, 2).map((url, idx) => /* @__PURE__ */ jsx(Link, {
													href: `/projects/${featuredProject.slug}`,
													className: "flex-1 min-h-[160px] rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs",
													children: /* @__PURE__ */ jsx("img", {
														src: url,
														alt: "",
														className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
													})
												}, idx))
											})]
										});
										return /* @__PURE__ */ jsxs("div", {
											className: "rounded-2xl border border-border bg-muted/30 p-2 flex flex-col gap-2.5 sm:gap-3 h-full",
											children: [/* @__PURE__ */ jsx(Link, {
												href: `/projects/${featuredProject.slug}`,
												className: `w-full ${subShots.length > 0 ? "aspect-16/10 sm:aspect-16/9" : "aspect-16/10 lg:aspect-4/3 min-h-[360px]"} rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs`,
												children: /* @__PURE__ */ jsx("img", {
													src: mainHeroShot,
													alt: featuredProject.title,
													className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
												})
											}), subShots.length > 0 && /* @__PURE__ */ jsx("div", {
												className: "grid grid-cols-3 gap-2.5 sm:gap-3",
												children: subShots.map((url, idx) => /* @__PURE__ */ jsx(Link, {
													href: `/projects/${featuredProject.slug}`,
													className: "aspect-4/3 rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs",
													children: /* @__PURE__ */ jsx("img", {
														src: url,
														alt: "",
														className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
													})
												}, idx))
											})]
										});
									})()
								})]
							})
						}),
						sortedProjects.length > 0 && /* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between mb-8 pb-4 border-b border-border",
							children: [/* @__PURE__ */ jsx(SectionOverline, {
								label: `All Projects (${sortedProjects.length})`,
								align: "left"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-muted-foreground font-medium hidden sm:inline-block",
								children: "Hover preview tiles to browse project galleries"
							})]
						}),
						sortedProjects.length > 0 ? /* @__PURE__ */ jsx(BalancedMasonryGrid, {
							frameWidth: 320,
							gap: 24,
							children: sortedProjects.map((project) => /* @__PURE__ */ jsx(ProjectGridFrameItem, { project }, project.id))
						}) : /* @__PURE__ */ jsxs("div", {
							className: "max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary",
									children: /* @__PURE__ */ jsx(FolderGit2, { className: "size-8" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold uppercase text-foreground mb-2",
									children: "Showcase Underway"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: "Our latest project case studies and site photo galleries are currently being updated. Contact our team directly to discuss our extensive project capabilities."
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
						children: "A visual log of recent mobile crane lifts, shipyard rigging, and heavy transport operations captured live in the field."
					}),
					/* @__PURE__ */ jsx(ProjectGalleryView, {
						images: allGalleryShots.map((shot) => ({
							url: shot.src,
							orientation: shot.orientation,
							aspect_ratio: shot.aspect_ratio,
							width: shot.width,
							height: shot.height
						})),
						projectTitle: "Field Operations",
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
		}), /* @__PURE__ */ jsx(EmergencyCta, {})]
	});
}
export { Index as default };

//# sourceMappingURL=projects-Dw0jBlZu.js.map