import { s as Wrapper, t as AppLayout } from "./app-layout-BL6avkzR.js";
import { t as SectionHeading } from "./section-heading-feww2vX5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Accordion } from "@base-ui/react/accordion";
import { cn } from "cn";
//#region resources/js/components/ui/accordion.tsx
function Accordion$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Root, {
		"data-slot": "accordion",
		className: cn("flex w-full flex-col", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Item, {
		"data-slot": "accordion-item",
		className: cn("not-last:border-b", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
			...props,
			children: [
				children,
				/* @__PURE__ */ jsx(ChevronDownIcon, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ jsx(ChevronUpIcon, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Panel, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
			children
		})
	});
}
//#endregion
//#region resources/js/pages/faq.tsx
function FaqPage({ faqs }) {
	return /* @__PURE__ */ jsxs(AppLayout, {
		title: "Frequently Asked Questions - Teemane Cranes",
		children: [/* @__PURE__ */ jsx("div", {
			className: "bg-muted/30 py-24 border-b border-border",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(SectionHeading, {
				label: "FAQ",
				title: /* @__PURE__ */ jsxs(Fragment, { children: ["FREQUENTLY ASKED ", /* @__PURE__ */ jsx("span", {
					className: "text-primary",
					children: "QUESTIONS"
				})] }),
				align: "center",
				children: "Find answers to common questions about our services, equipment, and operations."
			}) })
		}), /* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto",
				children: faqs.length > 0 ? /* @__PURE__ */ jsx(Accordion$1, {
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

//# sourceMappingURL=faq-C9idvQVk.js.map