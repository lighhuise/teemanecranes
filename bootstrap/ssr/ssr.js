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
		"./pages/about-us.tsx": () => import("./assets/about-us-XPOeEsS7.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-UNA7M0Ja.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-Bch3W7aH.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-tKYbTaup.js"),
		"./pages/error.tsx": () => import("./assets/error-DMKFKH0D.js"),
		"./pages/home.tsx": () => import("./assets/home-CFdNr0q7.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BfkFkMBH.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-C0nIIEQ8.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DZ3T581f.js"),
		"./pages/services/show.tsx": () => import("./assets/show-CBv1LhJz.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-P8ZKUznT.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map