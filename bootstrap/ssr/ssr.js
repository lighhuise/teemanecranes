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
		"./pages/about-us.tsx": () => import("./assets/about-us-Dc2JMWVX.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-Bngaq1wF.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-I78twGSI.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-BuHTp6ZK.js"),
		"./pages/error.tsx": () => import("./assets/error-CsCmkwtJ.js"),
		"./pages/faq.tsx": () => import("./assets/faq-BraamTGF.js"),
		"./pages/home.tsx": () => import("./assets/home-P3y8MVHK.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-BXLsE9lq.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-CbhsXLHT.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-BOXbeDjP.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-CexxNflC.js"),
		"./pages/services/index.tsx": () => import("./assets/services-BpKPzFGP.js"),
		"./pages/services/show.tsx": () => import("./assets/show-DZRjCpDn.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-Df6iQjP4.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map