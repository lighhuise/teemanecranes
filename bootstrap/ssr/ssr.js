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
		"./pages/about-us.tsx": () => import("./assets/about-us-DieYo-FW.js"),
		"./pages/contact-us.tsx": () => import("./assets/contact-us-KCVPPMwx.js"),
		"./pages/employees/index.tsx": () => import("./assets/employees-C2RM4Lyg.js"),
		"./pages/employees/show.tsx": () => import("./assets/show-LWMeYMKI.js"),
		"./pages/error.tsx": () => import("./assets/error-Di_hKJ1P.js"),
		"./pages/home.tsx": () => import("./assets/home-BDzDf4ij.js"),
		"./pages/legal/privacy-policy.tsx": () => import("./assets/privacy-policy--fptj_yA.js"),
		"./pages/legal/terms-of-service.tsx": () => import("./assets/terms-of-service-BYfixTyJ.js"),
		"./pages/services/index.tsx": () => import("./assets/services-CA41HaUt.js"),
		"./pages/services/show.tsx": () => import("./assets/show-Bc01HgMb.js"),
		"./pages/welcome.tsx": () => import("./assets/welcome-B10SWtcw.js")
	})),
	setup({ App, props }) {
		return /* @__PURE__ */ jsx(App, { ...props });
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map