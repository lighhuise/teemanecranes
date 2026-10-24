import { t as IMG_0190_copy_default } from "./IMG_0190-copy-BHJv3jgA.js";
import { Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Images } from "lucide-react";
//#region resources/js/components/project-card.tsx
function ProjectCard({ project }) {
	const imageUrl = project.featured_image_url || project.gallery_image_urls?.[0] || project.galleries_with_urls?.[0]?.image_urls?.[0] || IMG_0190_copy_default;
	const totalPhotos = project.total_images ?? (project.gallery_image_urls?.length ?? 0) + (project.galleries_with_urls?.reduce((acc, g) => acc + (g.image_urls?.length ?? 0), 0) ?? 0);
	return /* @__PURE__ */ jsxs(Link, {
		href: `/projects/${project.slug}`,
		className: "reveal-up group relative overflow-hidden bg-background border border-border flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 rounded-xl",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: imageUrl,
					alt: project.title,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" }),
				totalPhotos > 0 && /* @__PURE__ */ jsxs("span", {
					className: "absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-xs border border-white/20 text-xs font-bold text-white shadow-sm",
					children: [/* @__PURE__ */ jsx(Images, { className: "w-3.5 h-3.5 text-primary" }), /* @__PURE__ */ jsxs("span", { children: [
						totalPhotos,
						" ",
						totalPhotos === 1 ? "Photo" : "Photos"
					] })]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col justify-between p-6 sm:p-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase leading-snug",
					children: project.title
				}), project.description && /* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground line-clamp-3 leading-relaxed",
					children: project.description
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-6 flex items-center text-sm font-bold tracking-widest text-primary uppercase",
				children: ["View Project & Gallery ", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })]
			})]
		})]
	});
}
//#endregion
export { ProjectCard as t };

//# sourceMappingURL=project-card-BnHmvmVG.js.map