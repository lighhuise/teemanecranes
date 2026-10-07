import { s as Wrapper, t as AppLayout } from "./app-layout-DjyJ2qIA.js";
import { t as BackgroundText } from "./background-text-DxXS2cqf.js";
import { t as SectionHeading } from "./section-heading-CKRAgxdD.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-D3uePtWl.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region resources/js/pages/faq.tsx
function FaqPage({ faqs }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Frequently Asked Questions - Teemane Cranes",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bg-muted/30 py-24 border-b border-border relative overflow-hidden",
			children: [/* @__PURE__ */ jsx(BackgroundText, {
				position: "center",
				children: "FAQ"
			}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(SectionHeading, {
				label: "FAQ",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["FREQUENTLY ASKED ", /* @__PURE__ */ jsx("span", {
					className: "text-primary",
					children: "QUESTIONS"
				})] }),
				align: "center",
				children: "Find answers to common questions about our services, equipment, and operations."
			}) })]
		}), /* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto",
				children: faqs.length > 0 ? /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${faq.id}`,
						className: "py-2",
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors",
							children: faq.question
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "pb-6",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-muted-foreground leading-relaxed text-base prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80",
								dangerouslySetInnerHTML: { __html: faq.answer }
							})
						})]
					}, faq.id))
				}) : /* @__PURE__ */ jsx("div", {
					className: "text-center text-muted-foreground py-12",
					children: "No FAQs have been added yet. Please check back later."
				})
			}) })
		})]
	});
}
//#endregion
export { FaqPage as default };

//# sourceMappingURL=faq-DuQ2rl0O.js.map