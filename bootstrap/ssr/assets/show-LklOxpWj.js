import { c as SectionOverline, l as Wrapper, n as EmergencyCta, t as AppLayout } from "./app-layout-TDSNeb8q.js";
import { t as SectionHeading } from "./section-heading-DcSBCps5.js";
import { t as ProjectCard } from "./project-card-Bzfyue3E.js";
/* empty css                */
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Calendar, Clock, Expand, Images, ShieldCheck, Wrench } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
//#region resources/js/pages/projects/show.tsx
function Show({ project, relatedProjects = [] }) {
	const [mainLightboxIndex, setMainLightboxIndex] = useState(null);
	const [customLightbox, setCustomLightbox] = useState(null);
	const mainSlides = (project.gallery_image_urls ?? []).map((url) => ({ src: url }));
	const hasMainGallery = (project.gallery_image_urls ?? []).length > 0;
	const hasCustomGalleries = (project.galleries_with_urls ?? []).length > 0;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: `${project.title} - Projects - Teemane Cranes`,
		description: project.description || `${project.title} - heavy lifting and crane operations project by Teemane Cranes.`,
		image: project.featured_image_url || void 0,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden border-b border-border bg-muted/30 py-16 lg:py-24",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(oklch(0.469_0.113_242.6/0.14)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none opacity-80" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" }),
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
								className: "lg:col-span-7",
								children: project.featured_image_url && /* @__PURE__ */ jsxs("div", {
									className: "relative aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: project.featured_image_url,
											alt: project.title,
											className: "w-full h-full object-cover"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold uppercase text-white font-mono",
											children: [/* @__PURE__ */ jsxs("span", { children: ["REF: ", project.slug.toUpperCase()] }), /* @__PURE__ */ jsx("span", {
												className: "text-primary font-bold",
												children: "LIVE EXECUTION"
											})]
										})
									]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative isolate overflow-hidden h-52 sm:h-64 w-full border-y border-border bg-black",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: project.featured_image_url || void 0,
						alt: "",
						"aria-hidden": "true",
						className: "absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity filter contrast-125"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80" }),
					/* @__PURE__ */ jsxs(Wrapper, {
						className: "relative z-10 h-full flex items-center justify-between",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-white",
								children: "// FIELD LOG : SITE OPERATIONS"
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-xs",
							children: [/* @__PURE__ */ jsx("span", { children: "Project Documentation Below" }), /* @__PURE__ */ jsx("span", {
								className: "text-primary font-bold",
								children: "↓"
							})]
						})]
					})
				]
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
						className: "mb-12",
						children: "High-resolution photography from the site lift operations and rigging phases."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
						children: project.gallery_image_urls.map((url, idx) => {
							return /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setMainLightboxIndex(idx),
								className: `group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${idx === 0 ? "col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]" : idx === 3 ? "col-span-2 aspect-16/9" : "aspect-4/3"}`,
								children: [/* @__PURE__ */ jsx("img", {
									src: url,
									alt: `${project.title} - Site Photography`,
									className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106",
									loading: "lazy"
								}), /* @__PURE__ */ jsxs("div", {
									className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between items-start",
										children: [/* @__PURE__ */ jsxs("span", {
											className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs",
											children: ["Photo #", idx + 1]
										}), /* @__PURE__ */ jsx("div", {
											className: "size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform",
											children: /* @__PURE__ */ jsx(Expand, { className: "size-4" })
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-xs font-bold uppercase tracking-wider text-white/90",
										children: "Inspect High-Res"
									})]
								})]
							}, idx);
						})
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
					const slides = (gallery.image_urls ?? []).map((url) => ({ src: url }));
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
								/* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
									children: (gallery.image_urls ?? []).map((url, imgIdx) => {
										return /* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => setCustomLightbox({
												galleryIndex: gIdx,
												imageIndex: imgIdx
											}),
											className: `group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${imgIdx === 0 ? "col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]" : imgIdx === 3 ? "col-span-2 aspect-16/9" : "aspect-4/3"}`,
											children: [/* @__PURE__ */ jsx("img", {
												src: url,
												alt: `${gallery.title} - Project Photography`,
												className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106",
												loading: "lazy"
											}), /* @__PURE__ */ jsxs("div", {
												className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5",
												children: [/* @__PURE__ */ jsxs("div", {
													className: "flex justify-between items-start",
													children: [/* @__PURE__ */ jsxs("span", {
														className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs",
														children: ["#", imgIdx + 1]
													}), /* @__PURE__ */ jsx("div", {
														className: "size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform",
														children: /* @__PURE__ */ jsx(Expand, { className: "size-4" })
													})]
												}), /* @__PURE__ */ jsx("span", {
													className: "text-xs font-bold uppercase tracking-wider text-white/90",
													children: "Inspect High-Res"
												})]
											})]
										}, imgIdx);
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
					children: relatedProjects.map((p) => /* @__PURE__ */ jsx(ProjectCard, { project: p }, p.id))
				})] })
			}),
			/* @__PURE__ */ jsx(EmergencyCta, {})
		]
	});
}
//#endregion
export { Show as default };

//# sourceMappingURL=show-LklOxpWj.js.map