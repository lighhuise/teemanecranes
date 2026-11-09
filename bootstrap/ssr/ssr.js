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
		"./pages/about-us.tsx": () => import("./assets/about-us-B6rIbdQM.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-UBd_sQki.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-BfnYqto4.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-DW3PKmkm.js"),
		"./pages/error.tsx": () => import("./assets/error-BKeJPMgS.js"),
		"./pages/faq.tsx": () => import("./assets/faq-BOy672eT.js"),
		"./pages/home.tsx": () => import("./assets/home-BWTeFPnu.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy-CHobSUe2.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-Cek-go4r.js"),
		"./pages/projects/index.tsx": () => import("./assets/projects-Dyl-n-HN.js"),
		"./pages/projects/show.tsx": () => import("./assets/show-DOhQkY3a.js"),
		"./pages/services/index.tsx": () => import("./assets/services-IWP55FH5.js"),
		"./pages/services/show.tsx": () => import("./assets/show-BBLA8iwf.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-CUPyvB8L.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
export { renderPage as default };

//# sourceMappingURL=ssr.js.map