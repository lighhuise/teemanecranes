import { s as Wrapper, t as AppLayout } from "./app-layout-BYw3PRMv.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, ArrowLeft } from "lucide-react";
//#region resources/js/pages/error.tsx
function ErrorPage({ status }) {
	const { title, description } = {
		503: {
			title: "503: Service Unavailable",
			description: "Sorry, we are doing some maintenance. Please check back soon."
		},
		500: {
			title: "500: Server Error",
			description: "Whoops, something went wrong on our servers."
		},
		404: {
			title: "404: Page Not Found",
			description: "Sorry, the page you are looking for could not be found."
		},
		403: {
			title: "403: Forbidden",
			description: "Sorry, you are forbidden from accessing this page."
		}
	}[status] || {
		title: `${status}: Error`,
		description: "An unexpected error occurred."
	};
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title }), /* @__PURE__ */ jsx("div", {
		className: "bg-background selection:bg-primary selection:text-white pb-24 min-h-[70vh] flex flex-col justify-center",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "text-center flex flex-col items-center justify-center",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "bg-muted/30 p-8 rounded-full mb-8",
					children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-16 h-16 text-primary" })
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase mb-6",
					children: title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12",
					children: description
				}),
				/* @__PURE__ */ jsxs(Link, {
					href: "/",
					className: "inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-lg shadow-sm hover:shadow transition-all",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), "Back to Home"]
				})
			]
		})
	})] });
}
//#endregion
export { ErrorPage as default };

//# sourceMappingURL=error-Di_hKJ1P.js.map