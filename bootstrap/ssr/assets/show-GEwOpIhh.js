import { t as AppLayout } from "./app-layout-DFrnS2vN.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft } from "lucide-react";
//#region resources/js/pages/services/show.tsx
function Show({ service }) {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title: service.title }), /* @__PURE__ */ jsx("div", {
		className: "py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs(Link, {
				href: "/services",
				className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors",
				children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to Services"]
			}), /* @__PURE__ */ jsxs("div", {
				className: "bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden",
				children: [service.image && /* @__PURE__ */ jsx("div", {
					className: "w-full h-64 overflow-hidden bg-muted",
					children: /* @__PURE__ */ jsx("img", {
						src: service.image,
						alt: service.title,
						className: "w-full h-full object-cover"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-8",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-3xl font-bold mb-4",
						children: service.title
					}), /* @__PURE__ */ jsx("div", {
						className: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert mt-6",
						children: service.description
					})]
				})]
			})]
		})
	})] });
}
//#endregion
export { Show as default };

//# sourceMappingURL=show-GEwOpIhh.js.map