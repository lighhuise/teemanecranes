import { c as Wrapper, n as EmergencyCta, t as AppLayout } from "./app-layout-DgCw17Rw.js";
import { t as BackgroundText } from "./background-text-COfE04Lg.js";
import { t as SectionHeading } from "./section-heading-oIkusPXT.js";
import { t as ProjectCard } from "./project-card-BnHmvmVG.js";
/* empty css                */
import { Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowLeft, Calendar, Expand, Images, Phone } from "lucide-react";
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
				className: "relative border-b border-border bg-muted/20 overflow-hidden",
				children: [
					/* @__PURE__ */ jsx(BackgroundText, {
						position: "center",
						children: "PROJECT"
					}),
					project.featured_image_url && /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 overflow-hidden pointer-events-none select-none",
						children: /* @__PURE__ */ jsx("img", {
							src: project.featured_image_url,
							alt: "",
							className: "w-full h-full object-cover opacity-20 blur-xs"
						})
					}),
					/* @__PURE__ */ jsx(Wrapper, {
						className: "relative py-20 lg:py-24 z-10",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsxs(Link, {
									href: "/projects",
									className: "inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary mb-8 transition-colors gap-2",
									children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), "Back to All Projects"]
								}),
								project.created_at && /* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider",
									children: [/* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ jsx("span", { children: project.created_at })]
								}),
								/* @__PURE__ */ jsx(SectionHeading, {
									label: "Project Profile",
									title: project.title,
									align: "left",
									className: "mb-0",
									children: project.description && /* @__PURE__ */ jsx("p", {
										className: "text-lg text-muted-foreground leading-relaxed",
										children: project.description
									})
								})
							] }), project.featured_image_url && /* @__PURE__ */ jsx("div", {
								className: "relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted",
								children: /* @__PURE__ */ jsx("img", {
									src: project.featured_image_url,
									alt: project.title,
									className: "w-full h-full object-cover"
								})
							})]
						})
					})
				]
			}),
			project.content && /* @__PURE__ */ jsx("section", {
				className: "py-20 bg-background border-b border-border",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase mb-6",
						children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), "Project Overview & Scope"]
					}), /* @__PURE__ */ jsx("div", {
						className: "prose prose-neutral dark:prose-invert max-w-none\n                                           prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-foreground\n                                           prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-10\n                                           prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-8\n                                           prose-p:text-base sm:prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed\n                                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline\n                                           prose-blockquote:border-primary prose-blockquote:text-muted-foreground\n                                           prose-li:text-muted-foreground",
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
						className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
						children: project.gallery_image_urls.map((url, idx) => /* @__PURE__ */ jsxs("button", {
							type: "button",
							onClick: () => setMainLightboxIndex(idx),
							className: "group relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 hover:scale-[1.02]",
							children: [/* @__PURE__ */ jsx("img", {
								src: url,
								alt: `${project.title} - Site Photography`,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
								loading: "lazy"
							}), /* @__PURE__ */ jsx("div", {
								className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
								children: /* @__PURE__ */ jsx("div", {
									className: "size-11 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform",
									children: /* @__PURE__ */ jsx(Expand, { className: "size-5" })
								})
							})]
						}, idx))
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
									className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
									children: (gallery.image_urls ?? []).map((url, imgIdx) => /* @__PURE__ */ jsxs("button", {
										type: "button",
										onClick: () => setCustomLightbox({
											galleryIndex: gIdx,
											imageIndex: imgIdx
										}),
										className: "group relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 hover:scale-[1.02]",
										children: [/* @__PURE__ */ jsx("img", {
											src: url,
											alt: `${gallery.title} - Project Photography`,
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
											loading: "lazy"
										}), /* @__PURE__ */ jsx("div", {
											className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
											children: /* @__PURE__ */ jsx("div", {
												className: "size-11 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform",
												children: /* @__PURE__ */ jsx(Expand, { className: "size-5" })
											})
										})]
									}, imgIdx))
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
			/* @__PURE__ */ jsx("section", {
				className: "py-20 bg-background border-b border-border",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-muted/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 text-center md:text-left",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold uppercase tracking-widest text-primary",
								children: "Have A Similar Requirement?"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight",
								children: "Consult With Our Rigging & Lift Specialists"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground max-w-xl text-sm leading-relaxed",
								children: "From site inspections and CAD lift studies to end-to-end crane hire and turnkey project execution, we have the fleet and expertise ready."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto",
						children: [/* @__PURE__ */ jsx(Link, {
							href: "/contact-us",
							className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-lg shadow-sm hover:bg-primary/90 transition-all text-center",
							children: "Request a Quote"
						}), /* @__PURE__ */ jsxs("a", {
							href: "tel:0842637690",
							className: "inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground hover:border-primary font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-lg transition-all text-center",
							children: [/* @__PURE__ */ jsx(Phone, { className: "size-4 text-primary" }), "084 263 7690"]
						})]
					})]
				}) })
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

//# sourceMappingURL=show-DSDL5sV2.js.map