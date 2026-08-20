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
		"./pages/about-us.tsx": () => import("./assets/about-us-ktGwZ-wO.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-CgKh_mCc.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-By2YifMy.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BtFnqaEa.js"),
		"./pages/error.tsx": () => import("./assets/error-B8HcbNC5.js"),
		"./pages/home.tsx": () => import("./assets/home-CNJluzp2.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BpGrniF_.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-C8wm5y2E.js"),
		"./pages/services/index.tsx": () => import("./assets/services-CXrcFvw7.js"),
		"./pages/services/show.tsx": () => import("./assets/show-Byl9szO0.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-Bul0wuzv.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map