import { a as Button, c as cn, i as toast, s as Wrapper, t as AppLayout } from "./app-layout-CKOqlWEW.js";
import { t as SectionHeading } from "./section-heading-zfhrRTsw.js";
import { t as Input } from "./input-ByZCMvUN.js";
import { Head, useForm } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import "react";
//#region resources/js/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region resources/js/pages/contact-us.tsx
function ContactUs({ flash, honeypot }) {
	const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
		name: "",
		email: "",
		phone: "",
		message: "",
		...honeypot?.enabled ? {
			[honeypot.nameFieldName]: "",
			[honeypot.validFromFieldName]: honeypot.encryptedValidFrom
		} : {}
	});
	const submit = (e) => {
		e.preventDefault();
		post("/contact-us", {
			preserveScroll: true,
			onSuccess: () => {
				reset();
				toast.add({
					title: "Success!",
					description: "Your message has been sent successfully.",
					type: "success"
				});
			},
			onError: () => {
				toast.add({
					title: "Error",
					description: "Please check the form for errors and try again.",
					type: "error"
				});
			}
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Contact Us" }),
		/* @__PURE__ */ jsx("div", {
			className: "bg-muted/30 py-24 border-b border-border",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(SectionHeading, {
				label: "Get In Touch",
				title: "LET'S GET TO WORK",
				align: "center",
				children: "Whether you need a quote, want to discuss a project, or require immediate emergency support. Our team is available 24 hours a day, 365 days a year."
			}) })
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-black tracking-tighter text-foreground uppercase mb-4",
							children: "Our Office"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-lg text-muted-foreground mb-8",
							children: "Headquartered in Bellville South, Cape Town, we serve clients across South Africa. Trusted by some of the country's most established companies as their sole provider for full turnkey lifting solutions."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20",
										children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-bold text-lg",
										children: "Address"
									}), /* @__PURE__ */ jsxs("p", {
										className: "text-muted-foreground",
										children: [
											"6 Van Eck St",
											/* @__PURE__ */ jsx("br", {}),
											"Bellville South, Cape Town, 7530"
										]
									})] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20",
										children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6" })
									}), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-bold text-lg",
											children: "Phone"
										}),
										/* @__PURE__ */ jsx("a", {
											href: "tel:0842637690",
											className: "text-muted-foreground hover:text-primary transition-colors",
											children: "084 263 7690"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-muted-foreground/70 mt-1 uppercase tracking-wider font-bold",
											children: "Available 24hrs, 365 Days"
										})
									] })]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20",
										children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
										className: "font-bold text-lg",
										children: "Email"
									}), /* @__PURE__ */ jsx("a", {
										href: "mailto:enquiries@teemanecranes.co.za",
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: "enquiries@teemanecranes.co.za"
									})] })]
								})
							]
						})
					] }), /* @__PURE__ */ jsxs("div", {
						className: "border-t border-border pt-8",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4",
							children: "Enquiry Types"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-3",
							children: [
								"New Project",
								"General Inquiry",
								"Emergency Support",
								"Careers"
							].map((type) => /* @__PURE__ */ jsx("span", {
								className: "px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground",
								children: type
							}, type))
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "bg-background border border-border p-8 md:p-12 rounded-lg shadow-xl relative",
					children: [
						flash?.success ? /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 z-10 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-lg border border-primary/50",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6",
									children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-3xl font-black uppercase mb-4 text-foreground",
									children: "Message Sent!"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg text-muted-foreground",
									children: flash.success
								})
							]
						}) : null,
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-black tracking-tighter text-foreground uppercase mb-6",
							children: "Send a Message"
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("label", {
											htmlFor: "name",
											className: "text-sm font-medium leading-none",
											children: "Full Name"
										}),
										/* @__PURE__ */ jsx(Input, {
											id: "name",
											name: "name",
											value: data.name,
											onChange: (e) => setData("name", e.target.value),
											className: errors.name ? "border-destructive" : ""
										}),
										errors.name && /* @__PURE__ */ jsx("p", {
											className: "text-sm text-destructive font-medium",
											children: errors.name
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-6",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "email",
												className: "text-sm font-medium leading-none",
												children: "Email Address"
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "email",
												name: "email",
												type: "email",
												value: data.email,
												onChange: (e) => setData("email", e.target.value),
												className: errors.email ? "border-destructive" : ""
											}),
											errors.email && /* @__PURE__ */ jsx("p", {
												className: "text-sm text-destructive font-medium",
												children: errors.email
											})
										]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ jsx("label", {
												htmlFor: "phone",
												className: "text-sm font-medium leading-none",
												children: "Phone Number (Optional)"
											}),
											/* @__PURE__ */ jsx(Input, {
												id: "phone",
												name: "phone",
												value: data.phone,
												onChange: (e) => setData("phone", e.target.value),
												className: errors.phone ? "border-destructive" : ""
											}),
											errors.phone && /* @__PURE__ */ jsx("p", {
												className: "text-sm text-destructive font-medium",
												children: errors.phone
											})
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ jsx("label", {
											htmlFor: "message",
											className: "text-sm font-medium leading-none",
											children: "Message"
										}),
										/* @__PURE__ */ jsx(Textarea, {
											id: "message",
											name: "message",
											rows: 10,
											value: data.message,
											onChange: (e) => setData("message", e.target.value),
											className: cn(errors.message ? "border-destructive" : "", "min-h-30")
										}),
										errors.message && /* @__PURE__ */ jsx("p", {
											className: "text-sm text-destructive font-medium",
											children: errors.message
										})
									]
								}),
								/* @__PURE__ */ jsx(Button, {
									type: "submit",
									size: "lg",
									className: "w-full text-base font-bold tracking-wide uppercase",
									disabled: processing,
									children: processing ? "Sending..." : "Send Message"
								})
							]
						})
					]
				})]
			}) })
		})
	] });
}
ContactUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
//#endregion
export { ContactUs as default };

//# sourceMappingURL=contact-us-CgKh_mCc.js.map