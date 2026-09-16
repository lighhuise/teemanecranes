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
		"./pages/about-us.tsx": () => import("./assets/about-us-NQAY6fdq.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-T50xG3RJ.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-BncM87hg.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BpZdz0v3.js"),
		"./pages/error.tsx": () => import("./assets/error-DQqjDU9L.js"),
		"./pages/faq.tsx": () => import("./assets/faq-D7Ry5Whr.js"),
		"./pages/home.tsx": () => import("./assets/home-bzMWhB5u.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BK2oCDVv.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-6lmdJpGY.js"),
		"./pages/services/index.tsx": () => import("./assets/services-8Ya5nKk8.js"),
		"./pages/services/show.tsx": () => import("./assets/show-VHwWn3qW.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-DAsNClmg.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map