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
		"./pages/about-us.tsx": () => import("./assets/about-us-pfaMFkA9.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BJCu4gJ3.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-DG0xVLmk.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-DLx8nhtP.js"),
		"./pages/error.tsx": () => import("./assets/error-COmPWCg7.js"),
		"./pages/home.tsx": () => import("./assets/home-CYJPx9Ux.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BwA7SWHL.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BcfRyaVn.js"),
		"./pages/services/index.tsx": () => import("./assets/services-CILdh27D.js"),
		"./pages/services/show.tsx": () => import("./assets/show-CVIZh8xv.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-W9kHfLWe.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map