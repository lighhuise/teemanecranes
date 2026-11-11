import { d as SectionOverline, f as Wrapper, i as EmergencyCta, n as Line2Divider, p as cn, t as AppLayout } from "./app-layout-kkCo5A8C.js";
import { t as SectionHeading } from "./section-heading-Be8p51_z.js";
import { n as ProjectCard, t as ProjectGalleryView } from "./project-ZAT1g7cX.js";
import { t as DotPattern } from "./dot-pattern-B9RlEj8G.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { ArrowRight, Calendar, Clock, Images, ShieldCheck, Wrench } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
// resources/js/pages/projects/show.tsx
function Show({ project, relatedProjects = [] }) {
	const [mainLightboxIndex, setMainLightboxIndex] = useState(null);
	const [customLightbox, setCustomLightbox] = useState(null);
	const mainGalleryItems = React.useMemo(() => {
		if (project.gallery_images && project.gallery_images.length > 0) return project.gallery_images;
		return (project.gallery_image_urls ?? []).map((url) => ({
			url,
			orientation: "landscape",
			aspect_ratio: 1.77
		}));
	}, [project.gallery_images, project.gallery_image_urls]);
	const mainSlides = React.useMemo(() => {
		return mainGalleryItems.map((item) => ({ src: item.url }));
	}, [mainGalleryItems]);
	const hasMainGallery = mainGalleryItems.length > 0;
	const hasCustomGalleries = (project.galleries_with_urls ?? []).length > 0;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: `${project.title} - Projects - Teemane Cranes`,
		description: project.description || `${project.title} - heavy lifting and crane operations project by Teemane Cranes.`,
		image: project.featured_image_url || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden border-b border-border bg-muted/30 py-16 lg:py-24",
				children: [
					/* @__PURE__ */ jsx(DotPattern, { corner: `top-left` }),
					/* @__PURE__ */ jsx(DotPattern, { corner: `top-right` }),
					/* @__PURE__ */ jsx(Wrapper, {
						className: "relative z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-5 space-y-6",
								children: [
									/* @__PURE__ */ jsx(SectionOverline, {
										label: "Field Record // Crane Ops",
										align: "left"
									}),
									/* @__PURE__ */ jsx("h1", {
										className: "text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.05]",
										children: project.title
									}),
									project.description && /* @__PURE__ */ jsx("p", {
										className: "text-base text-muted-foreground leading-relaxed max-w-xl",
										children: project.description
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap gap-2.5 pt-2",
										children: [
											project.project_date && /* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs font-mono",
												children: [/* @__PURE__ */ jsx(Calendar, { className: "size-3.5 text-primary" }), project.project_date]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs",
												children: [/* @__PURE__ */ jsx(Wrench, { className: "size-3.5 text-primary" }), "Mobile Crane & Heavy Lift"]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs",
												children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "size-3.5 text-primary" }), "ISO-Compliant Precision"]
											}),
											/* @__PURE__ */ jsxs("span", {
												className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs",
												children: [/* @__PURE__ */ jsx(Clock, { className: "size-3.5 text-primary" }), "Turnkey Mobilisation"]
											})
										]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: cn("lg:col-span-7", project.featured_image_orientation === "portrait" ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-7"),
								children: project.featured_image_url && /* @__PURE__ */ jsx("div", {
									className: cn("rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card", project.featured_image_orientation === "portrait" && "max-w-md mx-auto lg:ml-auto"),
									children: /* @__PURE__ */ jsx("div", {
										className: "relative overflow-hidden bg-card flex items-center justify-center",
										style: { aspectRatio: project.featured_image_aspect_ratio ? `${project.featured_image_aspect_ratio}` : project.featured_image_orientation === "portrait" ? "3/4" : "16/9" },
										children: /* @__PURE__ */ jsx("img", {
											src: project.featured_image_url,
											alt: project.title,
											className: "w-full h-full object-fill"
										})
									})
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden py-5 w-full border-y border-border bg-card",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/5 pointer-events-none" }), /* @__PURE__ */ jsxs(Wrapper, {
					className: "relative z-10 flex items-center justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", {
							className: "text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-foreground",
							children: "// FIELD LOG : SITE OPERATIONS"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-muted/60 text-xs font-bold text-foreground uppercase tracking-wider",
						children: [/* @__PURE__ */ jsx("span", { children: "Project Documentation Below" }), /* @__PURE__ */ jsx("span", {
							className: "text-primary font-bold",
							children: "↓"
						})]
					})]
				})]
			}),
			project.embed_video_url && /* @__PURE__ */ jsx("section", {
				className: "py-20 bg-background border-b border-border",
				children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
					label: "On-Site Footage",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["PROJECT ", /* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "VIDEO"
					})] }),
					align: "left",
					className: "mb-10",
					children: "Live operational footage and site execution recorded during project mobilization."
				}), /* @__PURE__ */ jsx("div", {
					className: "relative aspect-16/9 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl bg-black",
					children: /* @__PURE__ */ jsx("iframe", {
						src: project.embed_video_url,
						title: `${project.title} Video Documentation`,
						className: "w-full h-full border-0",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
						allowFullScreen: true
					})
				})] })
			}),
			project.content && /* @__PURE__ */ jsx("section", {
				className: "py-16 bg-muted/20 border-b border-border",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl",
					children: [/* @__PURE__ */ jsx(SectionOverline, {
						label: "Case Study // Scope of Work",
						align: "left",
						className: "mb-6"
					}), /* @__PURE__ */ jsx("div", {
						className: "prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl",
						dangerouslySetInnerHTML: { __html: project.content }
					})]
				}) })
			}),
			project.content_blocks && project.content_blocks.length > 0 && /* @__PURE__ */ jsx("div", {
				className: "flex flex-col",
				children: project.content_blocks.map((block, i) => {
					if (block.type === "line2_divider") {
						const d = block.data || {};
						return /* @__PURE__ */ jsx(Line2Divider, {
							showDiamond: d.show_diamond ?? true,
							showSideTexts: d.show_side_texts ?? true,
							showDashedBorders: d.show_dashed_borders ?? true,
							showBeam: d.show_beam ?? true,
							showDots: d.show_dots ?? true,
							leftText: d.left_text,
							rightText: d.right_text,
							velocity: d.velocity ? Number(d.velocity) : 45,
							velocityTexts: d.velocity_texts && d.velocity_texts.length > 0 ? d.velocity_texts : void 0,
							minHeight: d.min_height,
							paddingY: d.padding_y,
							themeStyle: d.theme_style,
							watermarkOpacity: d.watermark_opacity
						}, i);
					}
					if (block.type === "rich_text") {
						const d = block.data || {};
						const maxWidthClass = d.max_width || "max-w-none";
						return /* @__PURE__ */ jsx("section", {
							className: `w-full py-20 ${d.darker_background ? "bg-muted border-y border-border" : "bg-background"}`,
							children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
								className: `prose prose-lg dark:prose-invert mx-auto ${maxWidthClass} prose-headings:font-black prose-headings:uppercase prose-a:text-primary`,
								dangerouslySetInnerHTML: { __html: d.content }
							}) })
						}, i);
					}
					if (block.type === "cta") {
						const d = block.data || {};
						return /* @__PURE__ */ jsx("section", {
							className: `w-full py-16 ${d.darker_background ? "bg-muted border-y border-border" : "bg-background"}`,
							children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
								className: "bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-2xl font-black tracking-tight text-foreground uppercase mb-2",
										children: d.heading
									}), d.text && /* @__PURE__ */ jsx("p", {
										className: "text-muted-foreground leading-relaxed",
										children: d.text
									})]
								}), /* @__PURE__ */ jsxs("a", {
									href: d.button_url,
									className: "shrink-0 inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all",
									children: [d.button_label, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
								})]
							}) })
						}, i);
					}
					return null;
				})
			}),
			hasMainGallery && /* @__PURE__ */ jsx("section", {
				className: "py-20 bg-muted/30 border-b border-border",
				children: /* @__PURE__ */ jsxs(Wrapper, { children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Photo Gallery",
						title: /* @__PURE__ */ jsxs(Fragment, { children: ["SITE ", /* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "GALLERY"
						})] }),
						align: "left",
						className: "mb-10",
						children: "High-resolution photography from the site lift operations and rigging phases."
					}),
					/* @__PURE__ */ jsx(ProjectGalleryView, {
						images: mainGalleryItems,
						projectTitle: project.title,
						onImageClick: (idx) => setMainLightboxIndex(idx)
					}),
					/* @__PURE__ */ jsx(Lightbox, {
						open: mainLightboxIndex !== null,
						close: () => setMainLightboxIndex(null),
						index: mainLightboxIndex ?? 0,
						slides: mainSlides
					})
				] })
			}),
			hasCustomGalleries && /* @__PURE__ */ jsx("div", {
				className: "flex flex-col",
				children: project.galleries_with_urls.map((gallery, gIdx) => {
					const galleryItems = gallery.images_meta && gallery.images_meta.length > 0 ? gallery.images_meta : (gallery.image_urls ?? []).map((url) => ({
						url,
						orientation: "landscape",
						aspect_ratio: 1.77
					}));
					const slides = galleryItems.map((item) => ({ src: item.url }));
					const isOpen = customLightbox?.galleryIndex === gIdx;
					return /* @__PURE__ */ jsx("section", {
						className: `w-full py-20 border-b border-border ${gIdx % 2 === 0 ? "bg-background" : "bg-muted/30"}`,
						children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-8",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-2",
										children: [/* @__PURE__ */ jsx(Images, { className: "size-3.5" }), /* @__PURE__ */ jsx("span", { children: "Photo Collection" })]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground",
										children: gallery.title
									}),
									gallery.description && /* @__PURE__ */ jsx("p", {
										className: "mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed",
										children: gallery.description
									})
								] }),
								/* @__PURE__ */ jsx(ProjectGalleryView, {
									images: galleryItems,
									projectTitle: gallery.title,
									onImageClick: (imgIdx) => setCustomLightbox({
										galleryIndex: gIdx,
										imageIndex: imgIdx
									})
								}),
								/* @__PURE__ */ jsx(Lightbox, {
									open: isOpen,
									close: () => setCustomLightbox(null),
									index: customLightbox?.imageIndex ?? 0,
									slides
								})
							]
						}) })
					}, gIdx);
				})
			}),
			relatedProjects.length > 0 && /* @__PURE__ */ jsx("section", {
				className: "py-20 bg-muted/20 border-b border-border",
				children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
					label: "More Case Studies",
					title: /* @__PURE__ */ jsxs(Fragment, { children: ["RELATED ", /* @__PURE__ */ jsx("span", {
						className: "text-primary",
						children: "PROJECTS"
					})] }),
					align: "left",
					className: "mb-12",
					children: "Explore other demanding lifting and rigging projects delivered by Teemane Cranes."
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
					children: relatedProjects.map((p) => /* @__PURE__ */ jsx(ProjectCard, {
						project: p,
						variant: "grid"
					}, p.id))
				})] })
			}),
			/* @__PURE__ */ jsx(EmergencyCta, {})
		]
	});
}
export { Show as default };

//# sourceMappingURL=show-DEYWObdm.js.map