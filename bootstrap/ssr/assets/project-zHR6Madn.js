import { d as SectionOverline, l as buttonVariants, p as cn } from "./app-layout-CwY5PQ_N.js";
import { t as IMG_0190_copy_default } from "./IMG_0190-copy-DmrPCIeZ.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
// resources/js/components/project/project-archive-card.tsx
function ProjectArchiveCard({ href = "/projects", label = "Portfolio Archive", title = "Explore All Case Studies", description = "Detailed records of completed heavy lifts, rigging, and turnkey transport operations.", cta = "Browse Full Projects Gallery", className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("flex flex-col justify-between gap-4 rounded-2xl border border-border/80 bg-card p-6", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ jsx(SectionOverline, {
					label,
					align: "left",
					textClassName: "text-[11px]"
				}),
				/* @__PURE__ */ jsx("h4", {
					className: "text-lg font-black tracking-tight text-foreground uppercase",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: description
				})
			]
		}), /* @__PURE__ */ jsxs(Link, {
			href,
			className: buttonVariants({
				size: "default",
				className: "w-full text-xs font-bold tracking-wider uppercase"
			}),
			children: [/* @__PURE__ */ jsx("span", { children: cta }), /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 size-4" })]
		})]
	});
}
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
		card: "min-h-[520px] sm:min-h-[600px] h-full",
		media: "min-h-[380px] sm:min-h-[460px] flex-1",
		content: "gap-2.5 p-5 sm:p-6",
		title: "text-2xl sm:text-3xl",
		meta: "default"
	},
	stack: {
		card: "min-h-[320px] sm:min-h-[360px] flex-1",
		media: "min-h-[220px] sm:min-h-[260px] flex-1",
		content: "gap-1.5 px-5 py-4",
		title: "text-lg sm:text-xl",
		meta: "compact"
	},
	grid: {
		card: "min-h-[380px] sm:min-h-[420px] h-full",
		media: "min-h-[280px] sm:min-h-[320px] flex-1",
		content: "gap-2 p-5",
		title: "text-xl sm:text-2xl",
		meta: "default"
	}
};
function ProjectCard({ project, variant = "grid", className }) {
	const style = variantStyles[variant];
	const imageUrl = project.featured_image_url || project.gallery_image_urls?.[0] || project.galleries_with_urls?.[0]?.image_urls?.[0] || IMG_0190_copy_default;
	return /* @__PURE__ */ jsxs(Link, {
		href: `/projects/${project.slug}`,
		"aria-label": `${project.title}${project.location ? ` — ${project.location}` : ""}`,
		className: cn("group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-md hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:shadow-black/40", style.card, className),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: cn("relative w-full overflow-hidden bg-muted", style.media),
				children: /* @__PURE__ */ jsx("img", {
					src: imageUrl,
					alt: project.title,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: cn("flex flex-col border-t border-border/60 bg-card", style.content),
				children: [/* @__PURE__ */ jsx("h3", {
					className: cn("leading-tight font-black tracking-tight text-card-foreground uppercase transition-colors duration-300 group-hover:text-primary", style.title),
					children: project.title
				}), /* @__PURE__ */ jsx(ProjectMetaBadges, {
					project,
					size: style.meta
				})]
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 z-20 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" })
		]
	});
}
export { ProjectArchiveCard as n, ProjectCard as t };

//# sourceMappingURL=project-zHR6Madn.js.map