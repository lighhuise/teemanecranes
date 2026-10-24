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
		"./pages/about-us.tsx": () => import("./assets/about-us-p9Wp8eKB.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-NbVFcz39.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-k2Fov0GG.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-Bu9qyFHR.js"),
		"./pages/error.tsx": () => import("./assets/error-BOYXjud3.js"),
		"./pages/faq.tsx": () => import("./assets/faq-Au3E_1K7.js"),
		"./pages/home.tsx": () => import("./assets/home-B8kaxrWW.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CuidlD-y.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-Ca6D5dpJ.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-rA-QJeAM.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-DSDL5sV2.js"),
		"./pages/services/index.tsx": () => import("./assets/services-BADDGUTJ.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DrOG1Nze.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-xfiuyc1M.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map