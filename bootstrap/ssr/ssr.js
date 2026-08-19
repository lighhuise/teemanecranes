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
		"./pages/employees/index.tsx": () => import("./assets/employees-CKV-2GlC.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-CCcKuck_.js"),
		"./pages/error.tsx": () => import("./assets/error-CX_ZPUue.js"),
		"./pages/home.tsx": () => import("./assets/home-BVcdIkD7.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-DTcxByHr.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-CgLYfk4u.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DlMOvLca.js"),
		"./pages/services/show.tsx": () => import("./assets/show-CuwhkD6R.js"),
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