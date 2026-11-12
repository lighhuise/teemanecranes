import { d as SectionOverline, f as Wrapper, r as DotPattern, t as AppLayout, u as useCompany } from "./app-layout-r7btKtxd.js";
import { t as FloatingStatCard } from "./floating-stat-card-8b2_UTdt.js";
import { t as SectionHeading } from "./section-heading-BMEXytHS.js";
import { t as BackgroundText } from "./background-text-8uaNHB-a.js";
import { t as DotPattern$1 } from "./dot-pattern-6aJdHdqv.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Award, Building2, Dumbbell, HardHat, Target, Trophy, Users, Zap } from "lucide-react";
import CountUpPkg from "react-countup";
// resources/js/components/stats-bar.tsx
var CountUp = CountUpPkg.default || CountUpPkg;
function StatsBar() {
	const [mounted, setMounted] = useState(false);
	const { stats } = useCompany();
	useEffect(() => setMounted(true), []);
	return /* @__PURE__ */ jsx("div", {
		className: "bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip text-primary-foreground ",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(DotPattern, { className: `text-primary-foreground/0 top-0` }),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "line2-divider-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-2 border-2 border-dashed border-primary-foreground/10"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-4 border-2 border-dashed border-primary-foreground/10"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-shadow-sm text-shadow-black/50",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-4xl md:text-5xl font-bold tracking-wider",
						children: mounted ? /* @__PURE__ */ jsx(CountUp, {
							end: Number(stats.established_year.value),
							duration: 1.2,
							separator: "",
							enableScrollSpy: true,
							scrollSpyOnce: true
						}) : stats.established_year.display
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1",
						children: stats.established_year.label
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-4xl md:text-5xl font-bold tracking-wider",
						children: mounted ? /* @__PURE__ */ jsx(CountUp, {
							end: Number(stats.max_capacity.value),
							duration: 1.2,
							enableScrollSpy: true,
							scrollSpyOnce: true,
							suffix: stats.max_capacity.suffix || ""
						}) : stats.max_capacity.display
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1",
						children: stats.max_capacity.short_label || stats.max_capacity.label
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-4xl md:text-5xl font-bold tracking-wider",
						children: mounted ? /* @__PURE__ */ jsx(CountUp, {
							end: Number(stats.combined_experience.value),
							duration: 1.2,
							enableScrollSpy: true,
							scrollSpyOnce: true,
							suffix: stats.combined_experience.suffix || ""
						}) : stats.combined_experience.display
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1",
						children: stats.combined_experience.label
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-4xl md:text-5xl font-bold tracking-wider",
						children: mounted ? /* @__PURE__ */ jsx(CountUp, {
							end: Number(stats.availability.value),
							duration: 1.2,
							enableScrollSpy: true,
							scrollSpyOnce: true,
							suffix: stats.availability.suffix || ""
						}) : stats.availability.display
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1",
						children: "Emergency Response"
					})] })
				]
			})
		] })
	});
}
// resources/images/Teemane-Boat.webp
var Teemane_Boat_default = "/build/assets/Teemane-Boat-DihsRzVb.webp";
// resources/js/pages/about-us.tsx
function AboutUs() {
	const { stats } = useCompany();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "bg-muted/30 py-24 border-b border-border relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx(BackgroundText, {
					position: "center",
					children: "ABOUT US"
				}),
				/* @__PURE__ */ jsx(DotPattern$1, { corner: `top-left` }),
				/* @__PURE__ */ jsx(DotPattern$1, { corner: `top-right` }),
				/* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs(SectionHeading, {
					label: "Our Story",
					title: /* @__PURE__ */ jsxs(Fragment, { children: [
						"Redefining What's Possible In ",
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "Mobile Crane"
						}),
						" Hire."
					] }),
					align: "center",
					className: "mb-16",
					children: [
						"Established in ",
						stats.established_year.display,
						", Teemane Cranes prides itself on countless victories across South Africa’s most demanding worksites, from high-stakes projects to complex operations that have redefined what’s possible in mobile crane hire. Backed by a fleet of mobile cranes with capacities of up to ",
						stats.max_capacity.tons_label || `${stats.max_capacity.value} tons`,
						" and a team driven to deliver unmatched results, we stand at the forefront of the sector, leading the projects that continue to shape industries today."
					]
				}) })
			]
		}),
		/* @__PURE__ */ jsx(StatsBar, {}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-24 bg-background relative overflow-clip",
			children: [
				/* @__PURE__ */ jsx(DotPattern$1, { corner: `top-left` }),
				/* @__PURE__ */ jsx(DotPattern$1, { corner: `top-right` }),
				/* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsx(SectionOverline, {
								label: "Operational Excellence",
								align: "left"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground leading-[1.2]",
								children: "Leading the projects that shape industries today."
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-lg text-muted-foreground leading-relaxed",
								children: [
									"Backed by a fleet of mobile cranes with capacities of up to ",
									stats.max_capacity.tons_label || `${stats.max_capacity.value} tons`,
									" and a team driven to deliver unmatched results, we stand at the forefront of the sector. Every lift, transport, and rigging operation is executed with precision, safety, and efficiency at its core."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-8 pt-8",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "size-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20",
												children: /* @__PURE__ */ jsx(Trophy, { className: "size-6" })
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-xl font-black uppercase",
												children: "Proven Track Record"
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-muted-foreground text-sm",
												children: [
													"Countless victories across South Africa's most demanding worksites since ",
													stats.established_year.display,
													"."
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "size-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20",
												children: /* @__PURE__ */ jsx(Dumbbell, { className: "size-6" })
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-xl font-black uppercase",
												children: "Massive Capacity"
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-muted-foreground text-sm",
												children: [
													"A modern fleet of mobile cranes with staggering capacities of up to ",
													stats.max_capacity.tons_label || `${stats.max_capacity.value} tons`,
													"."
												]
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "size-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20",
												children: /* @__PURE__ */ jsx(HardHat, { className: "size-6" })
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-xl font-black uppercase",
												children: "Unmatched Safety"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground text-sm",
												children: "Stringent safety protocols ensuring zero-incident operations on high-stakes projects."
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsx("div", {
												className: "size-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20",
												children: /* @__PURE__ */ jsx(Target, { className: "size-6" })
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "text-xl font-black uppercase",
												children: "Precision Execution"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "text-muted-foreground text-sm",
												children: "A highly skilled team driven to deliver unmatched results in complex operations."
											})
										]
									})
								]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative mb-6 lg:mb-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
							children: /* @__PURE__ */ jsx("img", {
								src: Teemane_Boat_default,
								alt: "Teemane Cranes maritime operations",
								className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
							})
						}), /* @__PURE__ */ jsx(FloatingStatCard, {
							value: stats.max_capacity.display,
							label: stats.max_capacity.label,
							position: "bottom-left"
						})]
					})]
				}) })
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-muted/30 border-y border-border",
			children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300",
									children: /* @__PURE__ */ jsx(Building2, { className: "size-7" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-black uppercase tracking-tighter mb-3",
									children: "Sole Provider"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "Trusted as the exclusive full turnkey solutions partner by South Africa's most established companies."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300",
									children: /* @__PURE__ */ jsx(Users, { className: "size-7" })
								}),
								/* @__PURE__ */ jsxs("h3", {
									className: "text-lg font-black uppercase tracking-tighter mb-3",
									children: [stats.combined_experience.display, " Experience"]
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: [
										"Our management team brings over ",
										stats.combined_experience.value,
										" years of combined industry experience to every project."
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300",
									children: /* @__PURE__ */ jsx(Zap, { className: "size-7" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-black uppercase tracking-tighter mb-3",
									children: "High-Risk Certainty"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "The depth of knowledge, control, and capability required to deliver certainty in high-risk environments."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "size-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300",
									children: /* @__PURE__ */ jsx(Award, { className: "size-7" })
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-black uppercase tracking-tighter mb-3",
									children: "Complex Success"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "A track record of success on projects of the highest complexity, delivered on time and to specification."
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-8 order-1 lg:order-2",
					children: [/* @__PURE__ */ jsx(SectionHeading, {
						label: "Why Choose Us",
						title: "Entrusted by South Africa's Most Established Companies.",
						align: "left",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx("p", { children: "Operating across some of the most advanced and complex sites, we are entrusted by South Africa's most established companies as their sole provider for full turnkey solutions." }), /* @__PURE__ */ jsxs("p", { children: [
								"Backed by more than ",
								stats.combined_experience.value,
								" years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments and success on projects of the highest complexity."
							] })]
						})
					}), /* @__PURE__ */ jsx("a", {
						href: "/contact-us",
						className: "inline-flex items-center gap-3 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-8 py-4 rounded-lg font-bold tracking-widest uppercase text-sm",
						children: "Work With Us"
					})]
				})]
			}) })
		})
	] });
}
AboutUs.layout = (page) => /* @__PURE__ */ jsx(AppLayout, {
	title: "About Us - Teemane Cranes",
	children: page
});
export { AboutUs as default };

//# sourceMappingURL=about-us-3ZnPHEpM.js.map