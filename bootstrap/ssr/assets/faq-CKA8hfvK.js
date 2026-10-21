import { s as Wrapper, t as AppLayout } from "./app-layout-DjyJ2qIA.js";
import { t as BackgroundText } from "./background-text-DxXS2cqf.js";
import { t as SectionHeading } from "./section-heading-CKRAgxdD.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-D3uePtWl.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { HelpCircle } from "lucide-react";
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
			className: "py-24 bg-background relative overflow-x-clip",
			children: /* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-3xl mx-auto",
					children: faqs.length > 0 ? /* @__PURE__ */ jsx(Accordion, {
						className: "divide-y-0 border-b-0 space-y-3 sm:space-y-4",
						children: faqs.map((faq, index) => {
							const step = String(index + 1).padStart(2, "0");
							return /* @__PURE__ */ jsxs(AccordionItem, {
								value: `item-${faq.id ?? index}`,
								className: "rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-open:border-primary/50 data-open:shadow-md data-open:ring-1 data-open:ring-primary/15 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "group py-3.5 sm:py-4 hover:no-underline",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 sm:gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-open:bg-primary group-data-open:text-primary-foreground group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground",
											children: /* @__PURE__ */ jsx(HelpCircle, {
												className: "size-4 sm:size-5",
												strokeWidth: 1.75
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-0.5",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary",
												children: ["Question ", step]
											}), /* @__PURE__ */ jsx("span", {
												className: "font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug",
												children: faq.question
											})]
										})]
									})
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "pb-4 sm:pb-5 pt-1 sm:pt-2",
									children: /* @__PURE__ */ jsx("div", {
										className: "border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80",
										dangerouslySetInnerHTML: { __html: faq.answer }
									})
								})]
							}, faq.id ?? index);
						})
					}) : /* @__PURE__ */ jsx("div", {
						className: "text-center text-muted-foreground py-12",
						children: "No FAQs have been added yet. Please check back later."
					})
				})
			})
		})]
	});
}
//#endregion
export { FaqPage as default };

//# sourceMappingURL=faq-CKA8hfvK.js.map