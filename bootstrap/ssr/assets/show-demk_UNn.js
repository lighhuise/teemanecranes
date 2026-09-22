import { s as Wrapper, t as AppLayout } from "./app-layout-BL6avkzR.js";
import { t as FloatingStatCard } from "./floating-stat-card-BlUiHvTR.js";
import { t as SectionHeading } from "./section-heading-feww2vX5.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation as Navigation$1, Pagination } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
//#region resources/js/pages/services/show.tsx
function getEmbedUrl(url) {
	try {
		const u = new URL(url);
		if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.searchParams.get("v") ?? u.pathname.split("/").pop()}`;
		if (u.hostname.includes("vimeo.com")) return `https://player.vimeo.com/video/${u.pathname.split("/").pop()}`;
	} catch {}
	return null;
}
function RichTextRenderer({ data }) {
	return /* @__PURE__ */ jsx("div", {
		className: "prose prose-neutral dark:prose-invert max-w-none\n                       prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]\n                       prose-h1:text-4xl lg:prose-h1:text-5xl\n                       prose-h2:text-4xl lg:prose-h2:text-5xl\n                       prose-h3:text-2xl lg:prose-h3:text-3xl\n                       prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed\n                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline\n                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground",
		dangerouslySetInnerHTML: { __html: data.content }
	});
}
function ImageRenderer({ data }) {
	return /* @__PURE__ */ jsxs("figure", {
		className: "overflow-hidden rounded-lg",
		children: [/* @__PURE__ */ jsx("img", {
			src: data.image_url,
			alt: data.alt ?? "",
			className: "w-full object-cover rounded-lg"
		}), data.caption && /* @__PURE__ */ jsx("figcaption", {
			className: "text-center text-sm text-muted-foreground mt-3 italic",
			children: data.caption
		})]
	});
}
function GalleryRenderer({ data }) {
	const [lightbox, setLightbox] = useState(null);
	const urls = data.image_urls ?? [];
	const slides = urls.map((url) => ({ src: url }));
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
		}), /* @__PURE__ */ jsxs("figure", { children: [
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 gap-3",
				children: urls.map((url, i) => /* @__PURE__ */ jsx("button", {
					onClick: () => setLightbox(i),
					className: "aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
					children: /* @__PURE__ */ jsx("img", {
						src: url,
						alt: "",
						className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					})
				}, i))
			}),
			data.caption && /* @__PURE__ */ jsx("figcaption", {
				className: "text-center text-sm text-muted-foreground mt-3 italic",
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
			children: [/* @__PURE__ */ jsx(Play, { className: "w-5 h-5" }), data.caption ?? data.url]
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
			children: [data.button_label, /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
		})]
	});
}
function MediaTextRenderer({ data }) {
	const isImageLeft = data.image_position === "left";
	const urls = data.image_urls ?? [];
	const hasMultiple = urls.length > 1;
	return /* @__PURE__ */ jsxs("div", {
		className: `flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isImageLeft ? "md:flex-row-reverse" : ""}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0 w-full space-y-6",
			children: [
				(data.heading || data.subheading) && /* @__PURE__ */ jsx(SectionHeading, {
					align: `left`,
					label: data.subheading,
					title: data.heading
				}),
				data.content && /* @__PURE__ */ jsx("div", {
					className: "prose prose-neutral dark:prose-invert max-w-none text-muted-foreground\n                                    prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]\n                                    prose-h1:text-4xl lg:prose-h1:text-5xl\n                                    prose-h2:text-4xl lg:prose-h2:text-5xl\n                                    prose-h3:text-2xl lg:prose-h3:text-3xl\n                                    prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed\n                                    prose-a:text-primary hover:prose-a:underline",
					dangerouslySetInnerHTML: { __html: data.content }
				}),
				data.button_label && data.button_url && /* @__PURE__ */ jsxs("a", {
					href: data.button_url,
					className: "inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-lg shadow-sm hover:from-primary/90 hover:to-primary transition-all group",
					children: [data.button_label, /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1 min-w-0 w-full h-100 md:h-125 relative group",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full h-full rounded-2xl overflow-hidden shadow-xl relative",
				children: hasMultiple ? /* @__PURE__ */ jsx(Swiper, {
					modules: [Navigation$1, Pagination],
					navigation: true,
					pagination: { clickable: true },
					loop: true,
					className: "w-full h-full",
					style: {
						"--swiper-theme-color": "var(--primary)",
						"--swiper-navigation-size": "24px",
						"--swiper-navigation-color": "white",
						"--swiper-pagination-color": "var(--primary)",
						"--swiper-pagination-bullet-inactive-color": "rgba(255, 255, 255, 0.7)",
						"--swiper-pagination-bullet-inactive-opacity": "1"
					},
					children: urls.map((url, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("img", {
						src: url,
						alt: "",
						className: "w-full h-full object-cover"
					}) }, i))
				}) : urls.length === 1 ? /* @__PURE__ */ jsx("img", {
					src: urls[0],
					alt: "",
					className: "w-full h-full object-cover"
				}) : /* @__PURE__ */ jsx("div", {
					className: "w-full h-full bg-muted flex items-center justify-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground text-sm uppercase tracking-widest",
						children: "No Image"
					})
				})
			}), data.stat_card_value && data.stat_card_label && /* @__PURE__ */ jsx(FloatingStatCard, {
				value: data.stat_card_value,
				label: data.stat_card_label,
				position: isImageLeft ? "bottom-right" : "bottom-left"
			})]
		})]
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
		default: return null;
	}
}
function Show({ service }) {
	const hasBlocks = service.content_blocks && service.content_blocks.length > 0;
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: service.title,
		description: service.short_description || service.description?.substring(0, 160),
		image: service.featured_image_url || void 0,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative border-b border-border bg-muted/20",
			children: [service.featured_image_url && /* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none select-none",
				children: /* @__PURE__ */ jsx("img", {
					src: service.featured_image_url,
					alt: "",
					className: "w-full h-full object-cover opacity-20  blur-xs"
				})
			}), /* @__PURE__ */ jsx(Wrapper, {
				className: "relative py-24 z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs(Link, {
						href: "/services",
						className: "inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary mb-8 transition-colors gap-2",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), "Back to Services"]
					}), /* @__PURE__ */ jsx(SectionHeading, {
						label: "Service Profile",
						title: service.title,
						align: "left",
						className: "mb-0",
						children: service.description && /* @__PURE__ */ jsx("div", {
							className: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert text-muted-foreground",
							dangerouslySetInnerHTML: { __html: service.description }
						})
					})] }), service.featured_image_url && /* @__PURE__ */ jsx("div", {
						className: "relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl",
						children: /* @__PURE__ */ jsx("img", {
							src: service.featured_image_url,
							alt: service.title,
							className: "w-full h-full object-cover"
						})
					})]
				})
			})]
		}), hasBlocks && /* @__PURE__ */ jsx("div", {
			className: "flex flex-col",
			children: service.content_blocks.map((block, i) => {
				const isDark = block.data.darker_background;
				return /* @__PURE__ */ jsx("div", {
					className: `w-full py-16 md:py-24 ${isDark ? "bg-muted border-y border-border" : ""}`,
					children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(ContentBlock, { block }) })
				}, i);
			})
		})]
	});
}
//#endregion
export { Show as default };

//# sourceMappingURL=show-demk_UNn.js.map