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
		"./pages/about-us.tsx": () => import("./assets/about-us-B7Y0ww4T.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-_ZNj6jQg.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-lcfOHDix.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BrRJ9V_u.js"),
		"./pages/error.tsx": () => import("./assets/error-K01LNbkr.js"),
		"./pages/faq.tsx": () => import("./assets/faq-C9idvQVk.js"),
		"./pages/home.tsx": () => import("./assets/home-CP895RUF.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BvEi7IDF.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-CsZHIwJ2.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DbL63MBG.js"),
		"./pages/services/show.tsx": () => import("./assets/show-D-svSsS3.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-Cw0CT_6r.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map