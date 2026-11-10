import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { jsx } from "react/jsx-runtime";
// node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
// resources/js/ssr.tsx
var appName = "Teemane Cranes";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/about-us.tsx": () => import("./assets/about-us-SSdCfIkk.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-Bn68VaES.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-Bl4fTNcr.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-iiRIVqb8.js"),
		"./pages/error.tsx": () => import("./assets/error-CqT03XLx.js"),
		"./pages/faq.tsx": () => import("./assets/faq-CG2z4ayU.js"),
		"./pages/home.tsx": () => import("./assets/home-C6jowkoV.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CeQ63H9k.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-QZa51RrI.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-D6Y-7dli.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-BeDd4olj.js"),
		"./pages/services/index.tsx": () => import("./assets/services-eICFoIu5.js"),
		"./pages/services/show.tsx": () => import("./assets/show-Bgc-cEWZ.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-Fl7lEAl7.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map