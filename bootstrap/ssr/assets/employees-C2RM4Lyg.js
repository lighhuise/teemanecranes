import { s as Wrapper, t as AppLayout } from "./app-layout-BYw3PRMv.js";
import { t as SectionHeading } from "./section-heading-CTktXkNM.js";
import { t as Input } from "./input-BVkNcT6R.js";
import { t as team } from "./team-Dwr2ZsG3.js";
import { Head, InfiniteScroll, Link, router } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Building2, MapPin, Search } from "lucide-react";
//#region resources/js/pages/employees/index.tsx
function EmployeeCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background border border-border rounded-md flex flex-col items-center text-center p-8 animate-pulse",
		children: [
			/* @__PURE__ */ jsx("div", { className: "w-32 h-32 rounded-full bg-muted mb-6 shrink-0" }),
			/* @__PURE__ */ jsx("div", { className: "h-5 w-36 rounded bg-muted mb-3" }),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-24 rounded bg-muted mb-6" }),
			/* @__PURE__ */ jsx("div", { className: "w-full h-px bg-border mb-6" }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-3 w-full items-center",
				children: [/* @__PURE__ */ jsx("div", { className: "h-3 w-32 rounded bg-muted" }), /* @__PURE__ */ jsx("div", { className: "h-3 w-28 rounded bg-muted" })]
			})
		]
	});
}
function EmployeeGrid({ employees }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
		children: employees.map((employee) => /* @__PURE__ */ jsxs(Link, {
			href: team.show.url(employee.slug),
			className: "group relative bg-background border border-border rounded-md flex flex-col items-center text-center p-8 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-muted group-hover:border-primary transition-colors duration-300",
					children: employee.image_url ? /* @__PURE__ */ jsx("img", {
						src: employee.image_url,
						alt: `${employee.first_name} ${employee.last_name}`,
						className: "w-full h-full object-cover"
					}) : /* @__PURE__ */ jsx("div", {
						className: "w-full h-full bg-muted flex items-center justify-center",
						children: /* @__PURE__ */ jsxs("span", {
							className: "text-3xl font-black text-muted-foreground/50",
							children: [employee.first_name.charAt(0), employee.last_name.charAt(0)]
						})
					})
				}),
				/* @__PURE__ */ jsxs("h3", {
					className: "text-xl font-bold text-foreground group-hover:text-primary transition-colors",
					children: [
						employee.first_name,
						" ",
						employee.last_name
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-bold text-primary tracking-wider uppercase mt-2 mb-6",
					children: employee.role
				}),
				/* @__PURE__ */ jsx("div", { className: "w-full h-px bg-border mb-6 group-hover:bg-primary/20 transition-colors" }),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col gap-3 w-full text-sm text-muted-foreground",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ jsx(Building2, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: employee.department })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", { children: employee.branch_location })]
					})]
				})
			]
		}, employee.id))
	});
}
function Index({ employees, filters }) {
	const [search, setSearch] = useState(filters?.search || "");
	const [isMounted, setIsMounted] = useState(false);
	const initialRender = useRef(true);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		const timeoutId = setTimeout(() => {
			router.get(team.index.url(), { search }, {
				preserveState: true,
				preserveScroll: true,
				replace: true
			});
		}, 300);
		return () => clearTimeout(timeoutId);
	}, [search]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Head, { title: "Our Team" }),
		/* @__PURE__ */ jsx("div", {
			className: "bg-muted/30 py-24 border-b border-border",
			children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(SectionHeading, {
				label: "The Teemane Family",
				title: "OUR TEAM",
				align: "center",
				children: "Meet the skilled professionals behind Teemane Cranes. From our operators to our engineers, our people are our greatest asset and the foundation of our success."
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative w-full max-w-md mx-auto mt-10",
				children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ jsx(Input, {
					type: "text",
					placeholder: "Search by name, role, or department...",
					value: search,
					onChange: (e) => setSearch(e.target.value),
					className: "pl-12 h-14 text-base rounded-full shadow-sm bg-background border-border"
				})]
			})] })
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsx(Wrapper, { children: isMounted ? /* @__PURE__ */ jsx(InfiniteScroll, {
				data: "employees",
				children: ({ loading, hasMore }) => {
					return /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx(EmployeeGrid, { employees: employees.data }),
						loading && /* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8",
							children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsx(EmployeeCardSkeleton, {}, i))
						}),
						!loading && !hasMore && employees.data.length > 0 && /* @__PURE__ */ jsx("p", {
							className: "text-center text-sm text-muted-foreground mt-16 font-medium tracking-widest uppercase",
							children: "— All team members loaded —"
						})
					] });
				}
			}) : /* @__PURE__ */ jsx(EmployeeGrid, { employees: employees.data }) })
		})
	] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
//#endregion
export { Index as default };

//# sourceMappingURL=employees-C2RM4Lyg.js.map