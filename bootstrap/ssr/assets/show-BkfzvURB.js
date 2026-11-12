import { f as Wrapper, m as toStorageUrl, n as Line2Divider, p as cn, t as AppLayout } from "./app-layout-r7btKtxd.js";
import { t as SectionHeading } from "./section-heading-BMEXytHS.js";
import { t as FloatingStatCard } from "./floating-stat-card-8b2_UTdt.js";
import { t as BackgroundText } from "./background-text-8uaNHB-a.js";
import { t as ProjectGalleryView } from "./project-J3U2zUcV.js";
import { t as DotPattern } from "./dot-pattern-6aJdHdqv.js";
import { t as useImageAspectRatio } from "./use-image-aspect-ratio-D2AOM87V.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as Navigation$1, Pagination } from "swiper/modules";
// resources/js/pages/services/show.tsx
function getEmbedUrl(url) {
	try {
		const u = new URL(url);
		if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.searchParams.get("v") ?? u.pathname.split("/").pop()}`;
		if (u.hostname.includes("vimeo.com")) return `https://player.vimeo.com/video/${u.pathname.split("/").pop()}`;
	} catch {}
	return null;
}
function RichTextRenderer({ data }) {
	const maxWidthClass = data.max_width || "max-w-none";
	return /* @__PURE__ */ jsx("div", {
		className: `prose prose-neutral dark:prose-invert mx-auto ${maxWidthClass}
                       prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`,
		dangerouslySetInnerHTML: { __html: data.content }
	});
}
function ImageRenderer({ data }) {
	const rawUrl = data.image_url || data.image;
	const imageUrl = toStorageUrl(rawUrl);
	const meta = data.image_meta;
	const { containerStyle, handleLoad, imgRef } = useImageAspectRatio({
		initialAspectRatio: meta?.aspect_ratio,
		initialOrientation: meta?.orientation
	});
	if (!imageUrl) return null;
	return /* @__PURE__ */ jsxs("figure", {
		className: "overflow-hidden rounded-2xl border border-border/80 bg-card p-2 sm:p-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "relative w-full overflow-hidden bg-card flex items-center justify-center rounded-xl",
			style: containerStyle ?? { aspectRatio: meta?.orientation === "portrait" ? "3/4" : "16/9" },
			children: /* @__PURE__ */ jsx("img", {
				ref: imgRef,
				src: imageUrl,
				alt: data.alt ?? "",
				onLoad: handleLoad,
				className: "w-full h-full object-cover rounded-xl",
				loading: "lazy"
			})
		}), data.caption && /* @__PURE__ */ jsx("figcaption", {
			className: "text-center text-sm text-muted-foreground mt-3 italic font-medium",
			children: data.caption
		})]
	});
}
function GalleryRenderer({ data }) {
	const [lightbox, setLightbox] = useState(null);
	const rawList = data.image_urls && data.image_urls.length > 0 ? data.image_urls : data.images ?? [];
	const items = data.images_meta && data.images_meta.length > 0 ? data.images_meta.map((item) => ({
		...item,
		url: toStorageUrl(item.url)
	})) : rawList.map((url) => ({
		url: toStorageUrl(url),
		orientation: "landscape",
		aspect_ratio: 1.778
	}));
	const slides = items.map((item) => ({ src: toStorageUrl(item.url) }));
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [(data.heading || data.subheading || data.description) && /* @__PURE__ */ jsx(SectionHeading, {
			align: "left",
			label: data.subheading,
			title: data.heading,
			children: data.description && /* @__PURE__ */ jsx("p", {
				className: "whitespace-pre-wrap",
				children: data.description
			})
		}), /* @__PURE__ */ jsxs("figure", { children: [
			/* @__PURE__ */ jsx(ProjectGalleryView, {
				images: items,
				projectTitle: data.heading || "Service Gallery",
				onImageClick: (idx) => setLightbox(idx)
			}),
			data.caption && /* @__PURE__ */ jsx("figcaption", {
				className: "text-center text-sm text-muted-foreground mt-4 italic font-medium",
				children: data.caption
			}),
			/* @__PURE__ */ jsx(Lightbox, {
				open: lightbox !== null,
				close: () => setLightbox(null),
				index: lightbox ?? 0,
				slides
			})
		] })]
	});
}
function VideoRenderer({ data }) {
	const embedUrl = getEmbedUrl(data.url);
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-12",
		children: [(data.heading || data.subheading || data.description) && /* @__PURE__ */ jsx(SectionHeading, {
			align: "left",
			label: data.subheading,
			title: data.heading,
			children: data.description && /* @__PURE__ */ jsx("p", {
				className: "whitespace-pre-wrap",
				children: data.description
			})
		}), /* @__PURE__ */ jsxs("figure", { children: [embedUrl ? /* @__PURE__ */ jsx("div", {
			className: "relative aspect-video rounded-lg overflow-hidden bg-black",
			children: /* @__PURE__ */ jsx("iframe", {
				src: embedUrl,
				title: data.caption ?? "Video",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
				allowFullScreen: true,
				className: "absolute inset-0 w-full h-full"
			})
		}) : /* @__PURE__ */ jsxs("a", {
			href: data.url,
			target: "_blank",
			rel: "noreferrer",
			className: "flex items-center gap-3 text-primary hover:underline",
			children: [/* @__PURE__ */ jsx(Play, { className: "size-5" }), data.caption ?? data.url]
		}), data.caption && embedUrl && /* @__PURE__ */ jsx("figcaption", {
			className: "text-center text-sm text-muted-foreground mt-3 italic",
			children: data.caption
		})] })]
	});
}
function CtaRenderer({ data }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-2xl font-black tracking-tighter text-foreground mb-2",
				children: data.heading
			}), data.text && /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground leading-relaxed",
				children: data.text
			})]
		}), /* @__PURE__ */ jsxs("a", {
			href: data.button_url,
			className: "shrink-0 inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all",
			children: [data.button_label, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
		})]
	});
}
function MediaSingleImage({ url, meta, alt }) {
	const normalizedUrl = toStorageUrl(url);
	const { containerStyle, handleLoad, imgRef } = useImageAspectRatio({
		initialAspectRatio: meta?.aspect_ratio,
		initialOrientation: meta?.orientation
	});
	return /* @__PURE__ */ jsx("div", {
		className: "w-full overflow-hidden flex items-center justify-center",
		style: containerStyle ?? { aspectRatio: "16/10" },
		children: /* @__PURE__ */ jsx("img", {
			ref: imgRef,
			src: normalizedUrl,
			alt: alt || "",
			onLoad: handleLoad,
			className: "w-full h-full object-cover block"
		})
	});
}
function MediaTextRenderer({ data }) {
	const isImageLeft = data.image_position === "left";
	const urls = (data.image_urls && data.image_urls.length > 0 ? data.image_urls : data.images ?? []).map(toStorageUrl).filter(Boolean);
	const hasMultiple = urls.length > 1;
	const hasStatCard = Boolean(data.stat_card_value && data.stat_card_label);
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isImageLeft ? "md:flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0 w-full space-y-6",
			children: [
				(data.heading || data.subheading) && /* @__PURE__ */ jsx(SectionHeading, {
					align: "left",
					label: data.subheading,
					title: data.heading
				}),
				data.content && /* @__PURE__ */ jsx("div", {
					className: "prose prose-neutral dark:prose-invert max-w-none text-muted-foreground\n                                    prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]\n                                    prose-h1:text-4xl lg:prose-h1:text-5xl\n                                    prose-h2:text-4xl lg:prose-h2:text-5xl\n                                    prose-h3:text-2xl lg:prose-h3:text-3xl\n                                    prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed\n                                    prose-a:text-primary hover:prose-a:underline",
					dangerouslySetInnerHTML: { __html: data.content }
				}),
				data.button_label && data.button_url && /* @__PURE__ */ jsxs("a", {
					href: data.button_url,
					className: "inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/70 text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-lg shadow-sm hover:from-primary/90 hover:to-primary transition-all group",
					children: [data.button_label, /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 group-hover:translate-x-1 transition-transform" })]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: cn("flex-1 min-w-0 w-full relative group", hasStatCard && "mb-8 md:mb-0 pb-8 sm:pb-10"),
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full rounded-2xl shadow-xl border border-border/80 bg-card overflow-hidden relative z-10",
				children: hasMultiple ? /* @__PURE__ */ jsx(Swiper, {
					modules: [Navigation$1, Pagination],
					navigation: true,
					pagination: { clickable: true },
					loop: true,
					className: "w-full aspect-4/3 sm:aspect-16/10",
					style: {
						"--swiper-theme-color": "var(--primary)",
						"--swiper-navigation-size": "24px",
						"--swiper-navigation-color": "white",
						"--swiper-pagination-color": "var(--primary)",
						"--swiper-pagination-bullet-inactive-color": "rgba(255, 255, 255, 0.7)",
						"--swiper-pagination-bullet-inactive-opacity": "1"
					},
					children: urls.map((url, i) => /* @__PURE__ */ jsx(SwiperSlide, {
						className: "flex items-center justify-center bg-card",
						children: /* @__PURE__ */ jsx("img", {
							src: url,
							alt: "",
							className: "w-full h-full object-cover"
						})
					}, i))
				}) : urls.length === 1 ? /* @__PURE__ */ jsx(MediaSingleImage, {
					url: urls[0],
					meta: data.images_meta?.[0],
					alt: data.heading
				}) : /* @__PURE__ */ jsx("div", {
					className: "w-full aspect-4/3 sm:aspect-16/10 bg-muted flex items-center justify-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground text-sm uppercase tracking-widest font-mono",
						children: "No Image"
					})
				})
			}), hasStatCard && /* @__PURE__ */ jsx(FloatingStatCard, {
				value: data.stat_card_value,
				label: data.stat_card_label,
				position: isImageLeft ? "bottom-right" : "bottom-left"
			})]
		})]
	});
}
function Line2DividerRenderer({ data }) {
	return /* @__PURE__ */ jsx(Line2Divider, {
		showDiamond: data.show_diamond ?? true,
		showSideTexts: data.show_side_texts ?? true,
		showDashedBorders: data.show_dashed_borders ?? true,
		showBeam: data.show_beam ?? true,
		showDots: data.show_dots ?? true,
		leftText: data.left_text,
		rightText: data.right_text,
		velocity: data.velocity ? Number(data.velocity) : 45,
		velocityTexts: data.velocity_texts && data.velocity_texts.length > 0 ? data.velocity_texts : void 0,
		minHeight: data.min_height,
		paddingY: data.padding_y,
		themeStyle: data.theme_style,
		watermarkOpacity: data.watermark_opacity
	});
}
function ContentBlock({ block }) {
	switch (block.type) {
		case "rich_text": return /* @__PURE__ */ jsx(RichTextRenderer, { data: block.data });
		case "image": return /* @__PURE__ */ jsx(ImageRenderer, { data: block.data });
		case "gallery": return /* @__PURE__ */ jsx(GalleryRenderer, { data: block.data });
		case "video": return /* @__PURE__ */ jsx(VideoRenderer, { data: block.data });
		case "cta": return /* @__PURE__ */ jsx(CtaRenderer, { data: block.data });
		case "media_text": return /* @__PURE__ */ jsx(MediaTextRenderer, { data: block.data });
		case "line2_divider": return /* @__PURE__ */ jsx(Line2DividerRenderer, { data: block.data });
		default: return null;
	}
}
function Show({ service }) {
	const hasBlocks = service.content_blocks && service.content_blocks.length > 0;
	const { orientation: heroOrientation, imgRef: heroImgRef, handleLoad: handleHeroLoad, containerStyle: heroContainerStyle } = useImageAspectRatio({
		initialAspectRatio: service.featured_image_aspect_ratio,
		initialOrientation: service.featured_image_orientation
	});
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: `${service.title} - Services - Teemane Cranes`,
		description: service.short_description || service.description?.substring(0, 160),
		image: service.featured_image_url || void 0,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative border-b border-border bg-muted/20 overflow-hidden py-16 lg:py-24",
			children: [
				/* @__PURE__ */ jsx(BackgroundText, {
					position: "center",
					children: "SERVICE"
				}),
				/* @__PURE__ */ jsx(DotPattern, { corner: "top-left" }),
				/* @__PURE__ */ jsx(DotPattern, { corner: "top-right" }),
				/* @__PURE__ */ jsx(Wrapper, {
					className: "relative z-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: cn("space-y-6", heroOrientation === "portrait" ? "lg:col-span-6" : "lg:col-span-5"),
							children: [/* @__PURE__ */ jsxs(Link, {
								href: "/services",
								className: "inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors gap-2",
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), "Back to Services"]
							}), /* @__PURE__ */ jsx(SectionHeading, {
								label: "Service Profile",
								title: service.title,
								align: "left",
								className: "mb-0",
								children: service.description && /* @__PURE__ */ jsx("div", {
									className: "prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert text-muted-foreground",
									dangerouslySetInnerHTML: { __html: service.description }
								})
							})]
						}), service.featured_image_url && /* @__PURE__ */ jsx("div", {
							className: cn("flex items-center justify-center", heroOrientation === "portrait" ? "lg:col-span-6" : "lg:col-span-7"),
							children: /* @__PURE__ */ jsx("div", {
								className: cn("relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card", heroOrientation === "portrait" ? "max-w-md mx-auto lg:ml-auto" : "w-full"),
								children: /* @__PURE__ */ jsx("div", {
									className: "relative w-full overflow-hidden bg-card flex items-center justify-center",
									style: heroContainerStyle ?? { aspectRatio: heroOrientation === "portrait" ? "3/4" : "16/9" },
									children: /* @__PURE__ */ jsx("img", {
										ref: heroImgRef,
										src: toStorageUrl(service.featured_image_url),
										alt: service.title,
										onLoad: handleHeroLoad,
										className: "w-full h-full object-cover"
									})
								})
							})
						})]
					})
				})
			]
		}), hasBlocks && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col",
			children: service.content_blocks.map((block, i) => {
				if (block.type === "line2_divider") return /* @__PURE__ */ jsx(Line2DividerRenderer, { data: block.data }, i);
				const isDark = block.data?.darker_background;
				return /* @__PURE__ */ jsx("section", {
					className: `w-full py-24 ${isDark ? "bg-muted border-y border-border" : ""}`,
					children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(ContentBlock, { block }) })
				}, i);
			})
		})]
	});
}
export { Show as default };

//# sourceMappingURL=show-BkfzvURB.js.map