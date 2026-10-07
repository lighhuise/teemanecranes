import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { jsx } from "react/jsx-runtime";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region resources/js/ssr.tsx
var appName = "Teemane Cranes";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/about-us.tsx": () => import("./assets/about-us-DfPEDkwA.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-X1srCS9H.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CBiifKxh.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-D7dp5SIU.js"),
		"./pages/error.tsx": () => import("./assets/error-sD1w8jVs.js"),
		"./pages/faq.tsx": () => import("./assets/faq-DuQ2rl0O.js"),
		"./pages/home.tsx": () => import("./assets/home-CwHcUjg_.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-C3FZOg_5.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BEyYWr5R.js"),
		"./pages/services/index.tsx": () => import("./assets/services-BVtBovuN.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BPPvr3FT.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DaADtfzi.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map