import { c as SectionOverline, l as Wrapper, n as EmergencyCta, t as AppLayout } from "./app-layout-TDSNeb8q.js";
import { t as BackgroundText } from "./background-text-BI8qWw-p.js";
import { t as SectionHeading } from "./section-heading-DcSBCps5.js";
import { t as ProjectCard } from "./project-card-Bzfyue3E.js";
/* empty css                */
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { ArrowRight, Camera, Expand, FolderGit2, Images, ShieldCheck } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
//#region resources/js/pages/projects/index.tsx
function Index({ projects = [] }) {
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
		return [...p.gallery_image_urls || [], ...p.galleries_with_urls?.flatMap((g) => g.image_urls) || []].map((url) => ({
			src: url,
			projectTitle: p.title,
			projectSlug: p.slug
		}));
	}).filter((item, index, self) => item.src && self.findIndex((other) => other.src === item.src) === index).slice(0, 8);
	const lightboxSlides = allGalleryShots.map((s) => ({ src: s.src }));
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Projects & Showcase - Teemane Cranes",
		description: "Explore our track record of heavy lifting, mobile crane operations, shipyard installations, and precision engineering across South Africa.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bg-background selection:bg-primary selection:text-white",
			children: [/* @__PURE__ */ jsxs("section", {
				className: "py-24 bg-muted/30 border-b border-border relative overflow-hidden",
				children: [/* @__PURE__ */ jsx(BackgroundText, {
					position: "center",
					children: "PROJECTS"
				}), /* @__PURE__ */ jsxs(Wrapper, { children: [
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
									children: [/* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }), "Up to 440T Heavy Lift"]
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
						className: "mb-20 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden relative",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5 space-y-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center gap-2.5",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md",
											children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), "Featured Showcase"]
										}), featuredProject.total_images && featuredProject.total_images > 0 && /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/60 px-3 py-1.5 text-xs font-bold text-foreground",
											children: [/* @__PURE__ */ jsx(Camera, { className: "size-3.5 text-primary" }), /* @__PURE__ */ jsxs("span", { children: [featuredProject.total_images, " High-Res Photos"] })]
										})]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight",
										children: featuredProject.title
									}), featuredProject.description && /* @__PURE__ */ jsx("p", {
										className: "mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3",
										children: featuredProject.description
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-2 gap-4 pt-2 border-t border-border/60",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
												children: "Fleet Deployment"
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-4 text-primary shrink-0" }), "Certified Riggers"]
											})]
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
												children: "Project Gallery"
											}), /* @__PURE__ */ jsxs("p", {
												className: "text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5",
												children: [/* @__PURE__ */ jsx(Images, { className: "size-4 text-primary shrink-0" }), "Full Photographic Log"]
											})]
										})]
									}),
									/* @__PURE__ */ jsx("div", {
										className: "pt-2",
										children: /* @__PURE__ */ jsxs(Link, {
											href: `/projects/${featuredProject.slug}`,
											className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs px-7 py-3.5 shadow-md shadow-primary/20 transition-all hover:scale-105",
											children: [/* @__PURE__ */ jsx("span", { children: "Explore Case Study & Gallery" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
										})
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "lg:col-span-7",
								children: (() => {
									const featuredShots = Array.from(/* @__PURE__ */ new Set([
										featuredProject.featured_image_url,
										...featuredProject.gallery_image_urls || [],
										...featuredProject.galleries_with_urls?.flatMap((g) => g.image_urls) || []
									])).filter(Boolean);
									const mainHeroShot = featuredShots[0];
									const subShots = featuredShots.slice(1, 4);
									return /* @__PURE__ */ jsxs("div", {
										className: "grid grid-cols-3 gap-3 sm:gap-4",
										children: [/* @__PURE__ */ jsxs(Link, {
											href: `/projects/${featuredProject.slug}`,
											className: "col-span-3 aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden relative group border border-border/80 shadow-md block",
											children: [/* @__PURE__ */ jsx("img", {
												src: mainHeroShot,
												alt: featuredProject.title,
												className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											}), /* @__PURE__ */ jsx("div", {
												className: "absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6",
												children: /* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between w-full",
													children: [/* @__PURE__ */ jsx("span", {
														className: "text-xs sm:text-sm font-bold uppercase tracking-wider text-white",
														children: "View Primary Lift Showcase"
													}), /* @__PURE__ */ jsx("div", {
														className: "size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform",
														children: /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
													})]
												})
											})]
										}), subShots.map((url, idx) => /* @__PURE__ */ jsxs(Link, {
											href: `/projects/${featuredProject.slug}`,
											className: "aspect-4/3 rounded-xl overflow-hidden relative group border border-border/80 shadow-xs block",
											children: [/* @__PURE__ */ jsx("img", {
												src: url,
												alt: "",
												className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
											}), /* @__PURE__ */ jsx("div", {
												className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
												children: /* @__PURE__ */ jsx(Expand, { className: "size-5 text-white" })
											})]
										}, idx))]
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
					sortedProjects.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
						children: sortedProjects.map((project) => /* @__PURE__ */ jsx(ProjectCard, { project }, project.id))
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
				] })]
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
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
						children: allGalleryShots.map((shot, idx) => {
							const isHeroTile = allGalleryShots.length >= 4 && idx === 0;
							const isWideTile = allGalleryShots.length >= 4 && idx === 3;
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setLightboxIndex(idx),
								className: `group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary ${isHeroTile ? "col-span-2 row-span-2 min-h-[280px] sm:min-h-[360px]" : isWideTile ? "col-span-2 aspect-16/9" : "aspect-4/3"}`,
								children: [
									/* @__PURE__ */ jsx("img", {
										src: shot.src,
										alt: `${shot.projectTitle} - Photo #${idx + 1}`,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108",
										loading: "lazy"
									}),
									/* @__PURE__ */ jsx("div", {
										className: "absolute top-3 left-3 z-10 pointer-events-none",
										children: /* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-xs shadow-xs",
											children: ["Photo #", String(idx + 1).padStart(2, "0")]
										})
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 text-left",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex justify-end",
											children: /* @__PURE__ */ jsx("div", {
												className: "size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform",
												children: /* @__PURE__ */ jsx(Expand, { className: "size-4" })
											})
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
											className: "text-[10px] font-bold uppercase tracking-widest text-primary",
											children: "Site Capture"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xs sm:text-sm font-bold text-white uppercase tracking-tight line-clamp-1",
											children: shot.projectTitle
										})] })]
									})
								]
							}, idx);
						})
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
//#endregion
export { Index as default };

//# sourceMappingURL=projects-Bfk0kJ88.js.map