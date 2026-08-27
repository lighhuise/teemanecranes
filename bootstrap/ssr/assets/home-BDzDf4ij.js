import { o as buttonVariants, s as Wrapper, t as AppLayout } from "./app-layout-BYw3PRMv.js";
import { t as FloatingStatCard } from "./floating-stat-card-Nm_HcfGR.js";
import { t as SectionHeading } from "./section-heading-CTktXkNM.js";
import { Head, Link } from "@inertiajs/react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { ArrowRight, CalendarDays, Clock, HardHat } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/images/hero-mask-2.svg
var hero_mask_2_default = "/build/assets/hero-mask-2-DJkSOBdI.svg";
//#endregion
//#region resources/images/blue_crane_desert_storm.webp
var blue_crane_desert_storm_default = "/build/assets/blue_crane_desert_storm-ofVqrzFL.webp";
//#endregion
//#region resources/js/components/hero.tsx
gsap.registerPlugin(ScrollTrigger);
function Hero() {
	const heroRef = useRef(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to(".hero-bg-parallax", {
				yPercent: 25,
				ease: "none",
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
		}, heroRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ jsxs("section", {
		ref: heroRef,
		className: "relative w-full pt-24 pb-12 lg:pt-2 lg:pb-16 flex justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 block lg:hidden z-0",
				children: [/* @__PURE__ */ jsx("img", {
					src: blue_crane_desert_storm_default,
					alt: "Hero Background",
					className: "hero-bg-parallax w-full h-[130%] object-cover object-center -top-[15%] relative"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-background via-background/80 to-black/40" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 w-full px-4 sm:px-6 block lg:hidden pt-10 pb-16",
				children: [/* @__PURE__ */ jsxs("h1", {
					className: "text-5xl sm:text-6xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-lg",
					children: [
						"A CUT ABOVE ",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "THE REST"
						})
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-6 text-sm font-bold tracking-tight text-accent",
					children: "CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT"
				})]
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "hidden lg:flex relative w-full items-center justify-center",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full aspect-1337/540 max-h-175",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 w-full h-full drop-shadow-sm drop-shadow-black/25",
						children: /* @__PURE__ */ jsxs("div", {
							className: "absolute inset-0 w-full h-full",
							style: {
								maskImage: `url(${hero_mask_2_default})`,
								WebkitMaskImage: `url(${hero_mask_2_default})`,
								maskSize: "100% 100%",
								WebkitMaskSize: "100% 100%",
								maskRepeat: "no-repeat",
								WebkitMaskRepeat: "no-repeat"
							},
							children: [
								/* @__PURE__ */ jsx("img", {
									src: blue_crane_desert_storm_default,
									alt: "Hero Background",
									className: "hero-bg-parallax w-full h-[130%] object-cover object-center top-[-25%] relative"
								}),
								/* @__PURE__ */ jsxs("div", {
									id: `stats`,
									className: "absolute inset-x-4 bottom-4 z-10 flex space-x-2",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex justify-between items-start",
												children: /* @__PURE__ */ jsx(CalendarDays, { className: "w-8 h-8 text-white drop-shadow-md" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsxs("p", {
													className: `text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
													children: [
														"Years of",
														/* @__PURE__ */ jsx("br", {}),
														"Experience"
													]
												}), /* @__PURE__ */ jsx("p", {
													className: `text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none`,
													children: "25+"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex justify-between items-start",
												children: /* @__PURE__ */ jsx(HardHat, { className: "w-8 h-8 text-white drop-shadow-md" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsxs("p", {
													className: `text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
													children: [
														"Successful",
														/* @__PURE__ */ jsx("br", {}),
														"Projects"
													]
												}), /* @__PURE__ */ jsx("p", {
													className: `text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none`,
													children: "500+"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
											children: [/* @__PURE__ */ jsx("div", {
												className: "flex justify-between items-start",
												children: /* @__PURE__ */ jsx(Clock, { className: "w-8 h-8 text-white drop-shadow-md" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsx("p", {
													className: `text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
													children: "Availability"
												}), /* @__PURE__ */ jsx("p", {
													className: `text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none mt-7`,
													children: "24/7"
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none" })
							]
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "absolute top-[10%] left-[1%] max-w-[50%] z-20",
						children: [/* @__PURE__ */ jsxs("h1", {
							className: "text-[5vw] xl:text-[75px] font-black tracking-tighter leading-[0.9] text-foreground",
							children: [
								"A CUT ABOVE ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "THE REST"
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-[3%] xl:mt-3 text-[1.2vw] xl:text-[16px] font-bold tracking-tight text-muted-foreground whitespace-nowrap",
							children: "CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT"
						})]
					})]
				})
			})
		]
	});
}
//#endregion
//#region resources/images/IMG_0190-copy.webp
var IMG_0190_copy_default = "/build/assets/IMG_0190-copy-870kN3in.webp";
//#endregion
//#region resources/images/d58f37a7-3ec9-4491-9d4a-3ca9dd8dd979-copy-2.webp
var d58f37a7_3ec9_4491_9d4a_3ca9dd8dd979_copy_2_default = "/build/assets/d58f37a7-3ec9-4491-9d4a-3ca9dd8dd979-copy-2-W5YUsRxh.webp";
//#endregion
//#region resources/js/pages/home.tsx
function Home({ services }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background selection:bg-primary selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Teemane Cranes | A Cut Above The Rest" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: "Established in 2012, Teemane Cranes delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to 440T capacity."
			})] }),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-background",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold text-primary tracking-widest uppercase",
									children: "Who We Are"
								})]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1] ",
								children: [
									"THE ONLY NAME ",
									/* @__PURE__ */ jsx("br", {}),
									"TRUSTED TO PERFORM"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-muted-foreground leading-relaxed text-balance",
								children: "Established in 2012, Teemane Cranes prides itself on countless victories across South Africa's most demanding worksites. From high-stakes projects to complex operations that have redefined what's possible in mobile crane hire."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-muted-foreground leading-relaxed text-balance",
								children: "Backed by a fleet of hydraulic cranes with capacities of up to 440 tons and more than 100 years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pt-4",
								children: /* @__PURE__ */ jsx(Link, {
									href: "/about-us",
									className: buttonVariants({
										size: "lg",
										className: "uppercase tracking-widest font-bold px-8 h-14"
									}),
									children: "Our Story"
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative pb-6 lg:pb-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
							children: /* @__PURE__ */ jsx("img", {
								src: IMG_0190_copy_default,
								alt: "Teemane Cranes on site",
								className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
							})
						}), /* @__PURE__ */ jsx(FloatingStatCard, {
							value: "100+",
							label: "Years Combined Experience",
							position: "bottom-right"
						})]
					})]
				}) })
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-muted/30 border-y border-border",
				children: /* @__PURE__ */ jsxs(Wrapper, { children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Our Capabilities",
						title: "ENGINEERED FOR THE LIFT",
						align: "center",
						className: "mb-16",
						children: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge from construction sites to the most demanding industrial operations."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
						children: services.map((service, idx) => /* @__PURE__ */ jsxs(Link, {
							href: `/services/${service.slug}`,
							className: "group relative p-8 bg-background border border-border flex flex-col justify-between min-h-65 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-md",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "text-3xl font-black text-muted-foreground/20 group-hover:text-primary transition-colors",
										children: ["0", idx + 1]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold text-foreground group-hover:text-primary transition-colors",
										children: service.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: service.short_description
									})
								]
							}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-6 h-6 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-8" })]
						}, service.id))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-16 text-center",
						children: /* @__PURE__ */ jsx(Link, {
							href: "/services",
							className: buttonVariants({
								variant: "outline",
								size: "lg",
								className: "uppercase tracking-widest font-bold px-10 h-14 border-2"
							}),
							children: "View All Services"
						})
					})
				] })
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-24 bg-background",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
					className: "grid lg:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative pb-6 lg:pb-0 order-2 lg:order-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
							children: /* @__PURE__ */ jsx("img", {
								src: d58f37a7_3ec9_4491_9d4a_3ca9dd8dd979_copy_2_default,
								alt: "Teemane Cranes Safety Briefing",
								className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
							})
						}), /* @__PURE__ */ jsx(FloatingStatCard, {
							value: "500+",
							label: "Projects Completed",
							position: "bottom-left"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-8 order-1 lg:order-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-sm font-bold text-primary tracking-widest uppercase",
									children: "Where Excellence Begins"
								}), /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" })]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]",
								children: [
									"SAFETY STARTS ",
									/* @__PURE__ */ jsx("br", {}),
									"BEFORE THE LIFT"
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-muted-foreground leading-relaxed",
								children: "With services available for both short- and long-term hire and backed by prompt, professional support, Teemane oversees every stage from initial consultation and detailed site inspections to full project execution."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg text-muted-foreground leading-relaxed",
								children: "For specialised projects, we incorporate advanced lift studies and CAD drawings, allowing us to anticipate challenges and engineer safe, efficient solutions before operations begin. Combined with decades of experience, this defines how the most demanding projects are completed to unmatched standards."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-4 pt-4",
								children: [/* @__PURE__ */ jsx(Link, {
									prefetch: `hover`,
									href: "/contact-us",
									className: buttonVariants({
										size: "lg",
										className: "uppercase tracking-widest font-bold px-8 h-14"
									}),
									children: "Start a Project"
								}), /* @__PURE__ */ jsx(Link, {
									prefetch: `hover`,
									href: "/about-us",
									className: buttonVariants({
										variant: "outline",
										size: "lg",
										className: "uppercase tracking-widest font-bold px-8 h-14 border-2"
									}),
									children: "Our Approach"
								})]
							})
						]
					})]
				}) })
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-radial-[at_50%_85%] from-primary/70 to-primary py-10",
				children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 md:grid-cols-5 gap-8 text-center",
					children: [
						{ label: "B-BBEE Certified" },
						{ label: "Red Seal Riggers" },
						{ label: "ISO 9001 & 14001" },
						{ label: "OHSAS 45001" },
						{ label: "Operational 24/7" }
					].map((item) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-primary-foreground/60" }), /* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/90",
							children: item.label
						})]
					}, item.label))
				}) })
			})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };

//# sourceMappingURL=home-BDzDf4ij.js.map