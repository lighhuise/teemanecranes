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
		"./pages/about-us.tsx": () => import("./assets/about-us-CzT5ziyx.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-6ybeEzeG.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-BcEXmN7Q.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-C6wjHFev.js"),
		"./pages/error.tsx": () => import("./assets/error-CGjsKFAM.js"),
		"./pages/faq.tsx": () => import("./assets/faq-xmGiigl6.js"),
		"./pages/home.tsx": () => import("./assets/home-Cr_lvPSx.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-Bb7hCsMc.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-D95UcHfP.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-BA3onm29.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-Bhjg3sgp.js"),
		"./pages/services/index.tsx": () => import("./assets/services-MkHzCAs5.js"),
		"./pages/services/show.tsx": () => import("./assets/show-2gA6jhWb.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-BBGN1Ywc.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map