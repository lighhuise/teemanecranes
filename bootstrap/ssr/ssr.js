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
		"./pages/about-us.tsx": () => import("./assets/about-us-nMttLLQt.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BI5lV2xm.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-k8pUQvGl.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-CCfaRpHS.js"),
		"./pages/error.tsx": () => import("./assets/error-CQ-C7jIJ.js"),
		"./pages/faq.tsx": () => import("./assets/faq-BCguNThZ.js"),
		"./pages/home.tsx": () => import("./assets/home-q0Vv59-H.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-2_-LLk9-.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BPWGNoE-.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-Bfk0kJ88.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-CuGihi2E.js"),
		"./pages/services/index.tsx": () => import("./assets/services-D0ROXJ41.js"),
		"./pages/services/show.tsx": () => import("./assets/show-D5m8dEwS.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CYIsbh_E.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map