import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { jsx } from "react/jsx-runtime";
// node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
// resources/js/ssr.tsx
var appName = "Teemane Cranes";
var renderPage = (page) => createInertiaApp({
	page,
	render: ReactDOMServer.renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* #__PURE__ */ Object.assign({
		"./pages/about-us.tsx": () => import("./assets/about-us-DaxHLaoK.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-BnbzepSg.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-BIG-fKW8.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-CTBxltxJ.js"),
		"./pages/error.tsx": () => import("./assets/error-DgMUQOPa.js"),
		"./pages/faq.tsx": () => import("./assets/faq-C_RNgI4H.js"),
		"./pages/home.tsx": () => import("./assets/home-DQhJRcl4.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BN30_xpY.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BZYHElly.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-CYdI-rRY.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-BfwRdwkN.js"),
		"./pages/services/index.tsx": () => import("./assets/services-DQYlFFKl.js"),
		"./pages/services/show.tsx": () => import("./assets/show-D_4Qzgpq.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-BVLYpx40.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map