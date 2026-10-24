import { c as Wrapper, n as EmergencyCta, t as AppLayout } from "./app-layout-DgCw17Rw.js";
import { t as BackgroundText } from "./background-text-COfE04Lg.js";
import { t as SectionHeading } from "./section-heading-oIkusPXT.js";
import { t as ProjectCard } from "./project-card-BnHmvmVG.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { FolderGit2 } from "lucide-react";
//#region resources/js/pages/projects/index.tsx
function Index({ projects }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Projects & Showcase - Teemane Cranes",
		description: "Explore our track record of heavy lifting, mobile crane operations, shipyard installations, and precision engineering across South Africa.",
		children: [/* @__PURE__ */ jsx("div", {
			className: "bg-background selection:bg-primary selection:text-white pb-24",
			children: /* @__PURE__ */ jsxs("section", {
				className: "py-24 bg-muted/30 border-b border-border relative overflow-hidden",
				children: [/* @__PURE__ */ jsx(BackgroundText, {
					position: "center",
					children: "PROJECTS"
				}), /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
					label: "Our Portfolio",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"PROVEN RESULTS ON",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "EVERY LIFT"
						})
					] }),
					align: "center",
					className: "mb-16",
					children: "Explore our track record of landmark mobile crane operations, heavy rigging, maritime shipyard tasks, and industrial installations across South Africa."
				}), projects.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
					children: projects.map((project) => /* @__PURE__ */ jsx(ProjectCard, { project }, project.id))
				}) : /* @__PURE__ */ jsxs("div", {
					className: "max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary",
							children: /* @__PURE__ */ jsx(FolderGit2, { className: "size-8" })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-black uppercase text-foreground mb-2",
							children: "Showcase Underway"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: "Our latest project case studies and site photo galleries are currently being updated. Contact our team directly to discuss our extensive project capabilities."
						})
					]
				})] })]
			})
		}), /* @__PURE__ */ jsx(EmergencyCta, {})]
	});
}
//#endregion
export { Index as default };

//# sourceMappingURL=projects-rA-QJeAM.js.map