import { s as Wrapper, t as AppLayout } from "./app-layout-0hJMmrhr.js";
import { t as SectionHeading } from "./section-heading-CqXLshFi.js";
import { Head } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/legal/privacy-policy.tsx
function PrivacyPolicy() {
	return /* @__PURE__ */ jsxs(AppLayout, { children: [/* @__PURE__ */ jsx(Head, { title: "Privacy Policy" }), /* @__PURE__ */ jsx("div", {
		className: "bg-background selection:bg-primary selection:text-white pb-24",
		children: /* @__PURE__ */ jsx("section", {
			className: "py-24 bg-muted/30 border-b border-border",
			children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				label: "Legal",
				title: "Privacy Policy",
				align: "center",
				className: "mb-16",
				children: "Your privacy is critically important to us."
			}), /* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert mt-6",
				children: [
					/* @__PURE__ */ jsx("h2", { children: "1. Information We Collect" }),
					/* @__PURE__ */ jsx("p", { children: "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used." }),
					/* @__PURE__ */ jsx("h2", { children: "2. How We Use Your Information" }),
					/* @__PURE__ */ jsx("p", { children: "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification." }),
					/* @__PURE__ */ jsx("h2", { children: "3. Third-Party Sharing" }),
					/* @__PURE__ */ jsx("p", { children: "We don’t share any personally identifying information publicly or with third-parties, except when required to by law." }),
					/* @__PURE__ */ jsx("h2", { children: "4. External Links" }),
					/* @__PURE__ */ jsx("p", { children: "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies." }),
					/* @__PURE__ */ jsx("h2", { children: "5. Your Choices" }),
					/* @__PURE__ */ jsx("p", { children: "You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services." }),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-8 text-muted-foreground text-sm",
						children: [
							"This policy is effective as of ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							"."
						]
					})
				]
			})] })
		})
	})] });
}
//#endregion
export { PrivacyPolicy as default };

//# sourceMappingURL=privacy-policy-CNp3ksxF.js.map