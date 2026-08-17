import { s as Wrapper, t as AppLayout } from "./app-layout-DFrnS2vN.js";
import { t as SectionHeading } from "./section-heading-DAZjUTUH.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
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
		className: "prose prose-neutral dark:prose-invert max-w-none\n                       prose-headings:font-black prose-headings:tracking-tight\n                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline\n                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground",
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
	return /* @__PURE__ */ jsxs("figure", { children: [
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
		lightbox !== null && /* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
			onClick: () => setLightbox(null),
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative max-w-5xl w-full",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ jsx("img", {
						src: urls[lightbox],
						alt: "",
						className: "max-h-[80vh] w-full object-contain rounded-lg"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mt-4",
						children: [
							/* @__PURE__ */ jsx("button", {
								onClick: () => setLightbox((i) => i !== null && i > 0 ? i - 1 : urls.length - 1),
								className: "text-white/70 hover:text-white transition-colors px-4 py-2 text-sm font-bold tracking-widest uppercase",
								children: "← Prev"
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "text-white/50 text-sm",
								children: [
									lightbox + 1,
									" / ",
									urls.length
								]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setLightbox((i) => i !== null && i < urls.length - 1 ? i + 1 : 0),
								className: "text-white/70 hover:text-white transition-colors px-4 py-2 text-sm font-bold tracking-widest uppercase",
								children: "Next →"
							})
						]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setLightbox(null),
						className: "absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors",
						children: "Close ✕"
					})
				]
			})
		})
	] });
}
function VideoRenderer({ data }) {
	const embedUrl = getEmbedUrl(data.url);
	return /* @__PURE__ */ jsxs("figure", { children: [embedUrl ? /* @__PURE__ */ jsx("div", {
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
	})] });
}
function CtaRenderer({ data }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "text-2xl font-black tracking-tight text-foreground mb-2",
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
function ContentBlock({ block }) {
	switch (block.type) {
		case "rich_text": return /* @__PURE__ */ jsx(RichTextRenderer, { data: block.data });
		case "image": return /* @__PURE__ */ jsx(ImageRenderer, { data: block.data });
		case "gallery": return /* @__PURE__ */ jsx(GalleryRenderer, { data: block.data });
		case "video": return /* @__PURE__ */ jsx(VideoRenderer, { data: block.data });
		case "cta": return /* @__PURE__ */ jsx(CtaRenderer, { data: block.data });
		default: return null;
	}
}
function Show({ service }) {
	const hasBlocks = service.content_blocks && service.content_blocks.length > 0;
	return /* @__PURE__ */ jsxs(AppLayout, { children: [
		/* @__PURE__ */ jsx(Head, { title: service.title }),
		/* @__PURE__ */ jsxs("div", {
			className: "relative border-b border-border",
			children: [service.featured_image_url && /* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ jsx("img", {
					src: service.featured_image_url,
					alt: service.title,
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" })]
			}), /* @__PURE__ */ jsxs(Wrapper, {
				className: `relative py-24 ${service.featured_image_url ? "" : "bg-muted/30"}`,
				children: [/* @__PURE__ */ jsxs(Link, {
					href: "/services",
					className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors gap-2",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), "Back to Services"]
				}), /* @__PURE__ */ jsx(SectionHeading, {
					label: "Service Profile",
					title: service.title,
					align: "left",
					className: "mb-8",
					children: service.description && /* @__PURE__ */ jsx("div", {
						className: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert text-muted-foreground",
						dangerouslySetInnerHTML: { __html: service.description }
					})
				})]
			})]
		}),
		hasBlocks && /* @__PURE__ */ jsx(Wrapper, {
			className: "py-16 md:py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-16",
				children: service.content_blocks.map((block, i) => /* @__PURE__ */ jsx(ContentBlock, { block }, i))
			})
		})
	] });
}
//#endregion
export { Show as default };

//# sourceMappingURL=show-BmwkLmYL.js.map