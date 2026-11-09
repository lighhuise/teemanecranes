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
		"./pages/about-us.tsx": () => import("./assets/about-us-BPZqsXw8.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-DBdT1o6i.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-CGqOcUvl.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-B74HWe2m.js"),
		"./pages/error.tsx": () => import("./assets/error-DbbHJL-c.js"),
		"./pages/faq.tsx": () => import("./assets/faq-Do1_k9-I.js"),
		"./pages/home.tsx": () => import("./assets/home-lH34UOYa.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-D-EfF24d.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-pCuk85zF.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-Hpp2QlG9.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-CadNUgTh.js"),
		"./pages/services/index.tsx": () => import("./assets/services-ByrbY_sU.js"),
		"./pages/services/show.tsx": () => import("./assets/show-K4z2w72k.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-v6asVxyB.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map