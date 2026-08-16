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
		"./pages/about-us.tsx": () => import("./assets/about-us-YKHdjF79.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-DXRHCpci.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CZsyV24z.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-Bb_zvWw4.js"),
		"./pages/home.tsx": () => import("./assets/home-BVcdIkD7.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DlMOvLca.js"),
		"./pages/services/show.tsx": () => import("./assets/show-GEwOpIhh.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CkUBshqo.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map