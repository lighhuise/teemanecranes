import { s as Wrapper, t as AppLayout } from "./app-layout-BR8Y0Ow7.js";
import { t as team } from "./team-hPihwSev.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Building2, Calendar, MapPin, User } from "lucide-react";
//#region resources/js/pages/employees/show.tsx
function Show({ employee }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Head, { title: `${employee.first_name} ${employee.last_name}` }), /* @__PURE__ */ jsx("section", {
		className: "py-12 bg-muted/30 border-b border-border",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsxs(Link, {
			href: team.index.url(),
			className: "inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-12",
			children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), "Back to Team"]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col md:flex-row gap-12 items-start",
			children: [/* @__PURE__ */ jsx("div", {
				className: "w-full md:w-1/3 shrink-0",
				children: /* @__PURE__ */ jsx("div", {
					className: "relative aspect-square rounded-sm overflow-hidden bg-muted border border-border shadow-xl",
					children: employee.image_url ? /* @__PURE__ */ jsx("img", {
						src: employee.image_url,
						alt: `${employee.first_name} ${employee.last_name}`,
						className: "w-full h-full object-cover"
					}) : /* @__PURE__ */ jsxs("div", {
						className: "w-full h-full flex flex-col items-center justify-center text-muted-foreground/30",
						children: [/* @__PURE__ */ jsx(User, { className: "w-32 h-32 mb-4" }), /* @__PURE__ */ jsxs("span", {
							className: "text-6xl font-black",
							children: [employee.first_name.charAt(0), employee.last_name.charAt(0)]
						})]
					})
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "w-full md:w-2/3 flex flex-col",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-2 inline-flex items-center gap-4",
						children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-bold text-primary tracking-widest uppercase",
							children: employee.department
						})]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl lg:text-6xl font-black tracking-tighter text-foreground uppercase mb-2",
						children: [
							employee.first_name,
							" ",
							employee.last_name
						]
					}),
					employee.nickname && /* @__PURE__ */ jsxs("p", {
						className: "text-xl text-muted-foreground font-medium mb-4",
						children: [
							"\"",
							employee.nickname,
							"\""
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-2xl font-bold text-primary mb-8",
						children: employee.role
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 py-8 border-y border-border",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary",
									children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
									children: "Branch"
								}), /* @__PURE__ */ jsx("p", {
									className: "font-semibold",
									children: employee.branch_location
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary",
									children: /* @__PURE__ */ jsx(Building2, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
									children: "Department"
								}), /* @__PURE__ */ jsx("p", {
									className: "font-semibold",
									children: employee.department
								})] })]
							}),
							employee.birthday && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary",
									children: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
									children: "Birthday"
								}), /* @__PURE__ */ jsx("p", {
									className: "font-semibold",
									children: employee.birthday
								})] })]
							}),
							employee.superior && /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary",
									children: /* @__PURE__ */ jsx(User, { className: "w-6 h-6" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-xs font-bold text-muted-foreground uppercase tracking-wider",
									children: "Reports To"
								}), /* @__PURE__ */ jsxs(Link, {
									href: team.show.url(employee.superior.slug),
									className: "font-semibold text-primary hover:underline",
									children: [
										employee.superior.first_name,
										" ",
										employee.superior.last_name
									]
								})] })]
							})
						]
					}),
					employee.bio && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
						className: "text-xl font-bold uppercase tracking-widest mb-6",
						children: ["About ", employee.first_name]
					}), /* @__PURE__ */ jsx("div", {
						className: "prose prose-lg dark:prose-invert text-muted-foreground",
						children: employee.bio.split("\n\n").map((paragraph, idx) => /* @__PURE__ */ jsx("p", {
							className: "mb-4 leading-relaxed",
							children: paragraph
						}, idx))
					})] })
				]
			})]
		})] })
	})] });
}
Show.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
//#endregion
export { Show as default };

//# sourceMappingURL=show-tKYbTaup.js.map