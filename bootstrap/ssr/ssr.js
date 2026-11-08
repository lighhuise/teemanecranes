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
		"./pages/about-us.tsx": () => import("./assets/about-us-DjwAqYx7.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-Doc-yVB4.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-Crwspahq.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-B7obEWRG.js"),
		"./pages/error.tsx": () => import("./assets/error-DqSqw7kS.js"),
		"./pages/faq.tsx": () => import("./assets/faq-DZZUe1rw.js"),
		"./pages/home.tsx": () => import("./assets/home-DuYRqvdJ.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-PMbH6_je.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-D3z9t5Rt.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-jvRdbUCA.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-r6dhwZRn.js"),
		"./pages/services/index.tsx": () => import("./assets/services-BBgHN8EY.js"),
		"./pages/services/show.tsx": () => import("./assets/show-CBZRsS3o.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CyeHxpqV.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map