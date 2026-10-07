import { o as buttonVariants, s as Wrapper, t as AppLayout } from "./app-layout-DjyJ2qIA.js";
import { t as BackgroundText } from "./background-text-DxXS2cqf.js";
import { t as FloatingStatCard } from "./floating-stat-card-B9mTpaTg.js";
import { t as SectionHeading } from "./section-heading-CKRAgxdD.js";
import { t as DotPattern } from "./dot-pattern-Dth4XF_L.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-D3uePtWl.js";
import { t as ServiceCard } from "./service-card-Dv_Lv5JI.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { BadgeCheck, CalendarDays, Clock, FileCheck, HardHat, ShieldPlus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//#region resources/images/hero-mask-2.svg
var hero_mask_2_default = "/build/assets/hero-mask-2-DJkSOBdI.svg";
//#endregion
//#region resources/images/hero-background.webp
var hero_background_default = "/build/assets/hero-background-DXnEaOUr.webp";
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
					src: hero_background_default,
					alt: "Hero Background",
					className: "hero-bg-parallax w-full h-full object-cover object-center top-0 relative"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/50 to-black/20" })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full px-5 flex flex-col justify-end lg:hidden min-h-[75vh] pb-10 pt-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-md",
					children: [
						/* @__PURE__ */ jsxs("h1", {
							className: "text-[3.25rem] sm:text-6xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-md",
							children: [
								"A CUT ABOVE ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "THE REST"
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-5 text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase border-l-4 border-primary pl-3",
							children: [
								"Crane Hire • Heavy Lifting",
								/* @__PURE__ */ jsx("br", {}),
								"Specialised Transport"
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg flex flex-col justify-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1",
										children: "Experience"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-3xl font-black text-white",
										children: "25+"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg flex flex-col justify-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1",
										children: "Projects"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-3xl font-black text-white",
										children: "500+"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-span-2 bg-primary/20 backdrop-blur-md border border-primary/30 p-3 rounded-lg flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] font-bold text-white uppercase tracking-widest",
										children: "Availability"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ jsx("p", {
											className: "text-2xl font-black text-white",
											children: "24/7"
										})]
									})]
								})
							]
						})
					]
				})
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
							children: [/* @__PURE__ */ jsx("img", {
								src: hero_background_default,
								alt: "Hero Background",
								className: "hero-bg-parallax w-full h-[110%] object-cover object-center -top-10 relative"
							}), /* @__PURE__ */ jsxs("div", {
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
												className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
												children: [
													"Years of",
													/* @__PURE__ */ jsx("br", {}),
													"Experience"
												]
											}), /* @__PURE__ */ jsx("p", {
												className: `text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`,
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
												className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
												children: [
													"Successful",
													/* @__PURE__ */ jsx("br", {}),
													"Projects"
												]
											}), /* @__PURE__ */ jsx("p", {
												className: `text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`,
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
												className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`,
												children: "Availability"
											}), /* @__PURE__ */ jsx("p", {
												className: `text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none mt-7`,
												children: "24/7"
											})]
										})]
									})
								]
							})]
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
//#region resources/js/components/sections/home-intro-section.tsx
function HomeIntroSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "left",
			children: "TRUSTED"
		}), /* @__PURE__ */ jsxs(Wrapper, {
			className: `relative`,
			children: [/* @__PURE__ */ jsx(DotPattern, { className: "opacity-10" }), /* @__PURE__ */ jsxs("div", {
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
			})]
		})]
	});
}
//#endregion
//#region resources/js/components/sections/home-services-section.tsx
function HomeServicesSection({ services }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted/30 border-y border-border relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "center",
			children: "SERVICES"
		}), /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				label: "Our Capabilities",
				title: "ENGINEERED FOR THE LIFT",
				align: "center",
				className: "mb-16",
				children: "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge from construction sites to the most demanding industrial operations."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: (services || []).map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
					service,
					index: idx
				}, service.id))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-16 text-center",
				children: /* @__PURE__ */ jsx(Link, {
					href: "/services",
					className: buttonVariants({
						variant: "secondary",
						size: "lg",
						className: "uppercase tracking-widest font-bold px-10 h-14 border-2"
					}),
					children: "View All Services"
				})
			})
		] })]
	});
}
//#endregion
//#region resources/images/media-24-building.webp
var media_24_building_default = "/build/assets/media-24-building-C-uGPsNs.webp";
//#endregion
//#region resources/js/components/sections/home-safety-section.tsx
function HomeSafetySection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "right",
			children: "Solutions"
		}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative pb-6 lg:pb-0 order-2 lg:order-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: media_24_building_default,
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
							children: "Turnkey Solutions"
						}), /* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]",
						children: [
							"PRECISION PLANNING ",
							/* @__PURE__ */ jsx("br", {}),
							"& EXECUTION"
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
		}) })]
	});
}
//#endregion
//#region resources/images/safety.png
var safety_default = "/build/assets/safety-77FjWXCW.png";
//#endregion
//#region resources/js/components/sections/home-safety-practices-section.tsx
var safetyItems = [
	{
		title: "Risk Assessment & Planning",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx("strong", { children: "Thorough risk assessment and planning" }),
			" form a critical part of how we prepare for every job. Each site is carefully assessed, ",
			/* @__PURE__ */ jsx("strong", { children: "potential hazards are identified" }),
			" and the required safety procedures and controls are put in place before our team commences work. We stand firmly behind these processes, ensuring the conditions, environment and scope of work have been properly considered. ",
			/* @__PURE__ */ jsx("strong", { children: "If the required safety standards are not met, work will not commence." })
		] })
	},
	{
		title: "Equipment & Certification",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"We place the same level of importance on the condition of our equipment as we do on the work itself. Our cranes, lifting equipment and rigging gear are ",
			/* @__PURE__ */ jsx("strong", { children: "inspected, certified and subject to the required checks" }),
			" to ensure they remain safe and fit for use."
		] })
	},
	{
		title: "Lift Planning & Setup",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Each lift is planned around the specific requirements of the job. ",
			/* @__PURE__ */ jsx("strong", { children: "Load weight, lifting points, rigging, crane capacity, ground conditions" }),
			" and crane setup are all carefully considered before lifting begins. ",
			/* @__PURE__ */ jsx("strong", { children: "If the required setup is not in place, the lift does not proceed." })
		] })
	},
	{
		title: "Controlled Working Areas",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"We take responsibility for maintaining a safe working area around our operations. ",
			/* @__PURE__ */ jsx("strong", { children: "Exclusion zones and access are carefully controlled" }),
			" to keep unauthorised persons clear of lifting, rigging and moving equipment, ",
			/* @__PURE__ */ jsx("strong", { children: "protecting everyone on site" }),
			" and in the surrounding area."
		] })
	},
	{
		title: "Weather & Working Conditions",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"We ",
			/* @__PURE__ */ jsx("strong", { children: "monitor weather conditions" }),
			" before and throughout the work. ",
			/* @__PURE__ */ jsx("strong", { children: "If conditions are deemed unsafe, work will not commence." }),
			" Should conditions change at any stage, work is stopped immediately and will only continue once it is safe to do so."
		] })
	},
	{
		title: "Safety Compliance",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"We stand firmly behind the safety standards that govern our work. Our operations are carried out in line with applicable ",
			/* @__PURE__ */ jsx("strong", { children: "OHS legislation, client requirements and Teemane procedures" }),
			", with ",
			/* @__PURE__ */ jsx("strong", { children: "accountability for safety" }),
			" maintained across every level of our business. These standards are continuously reviewed and upheld to ensure that the way we work remains responsible, compliant and reflective of the safety standards our clients have come to trust Teemane for."
		] })
	}
];
function HomeSafetyPracticesSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted/30 border-y border-border relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "left",
			children: "SAFETY"
		}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "block",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: safety_default,
					alt: "Teemane Safety Operations",
					className: "float-right w-[45%] sm:w-[35%] lg:w-[45%] rounded-xl drop-shadow-black object-contain ml-4 lg:ml-12 mb-4 lg:mb-0 mt-2 lg:mt-10",
					style: {
						shapeOutside: `url(${safety_default})`,
						shapeImageThreshold: .1,
						shapeMargin: "1.5rem"
					}
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "space-y-10",
					children: [
						/* @__PURE__ */ jsx(SectionHeading, {
							title: `SAFETY STARTS BEFORE THE LIFT`,
							label: "Our Priority",
							align: "left"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6",
							children: [
								/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "Safety is firmly embedded" }), " in the way Teemane operates and remains a leading factor in every decision we make. In the environments we work in, there is no separating safety from the job itself. It influences how we plan, how we prepare our team, how we inspect our equipment and how work is carried out on site."] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"Our approach begins with ",
									/* @__PURE__ */ jsx("strong", { children: "identifying hazards, assessing risk" }),
									" and making sure the ",
									/* @__PURE__ */ jsx("strong", { children: "correct controls are in place" }),
									" before any work commences. Just as importantly, we place strong emphasis on the team behind the work. ",
									/* @__PURE__ */ jsx("strong", { children: "Medical fitness, training, competency, PPE" }),
									" and day-to-day readiness all form part of making sure our team is able to perform safely and responsibly."
								] }),
								/* @__PURE__ */ jsxs("p", { children: [
									"For us, health and safety is not something reviewed only when required. It is ",
									/* @__PURE__ */ jsx("strong", { children: "continually monitored, measured and strengthened" }),
									" across the business, with the protection of our team, our clients, contractors, visitors, property and the surrounding environment remaining a ",
									/* @__PURE__ */ jsx("strong", { children: "constant priority" }),
									"."
								] })
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pt-2",
							children: /* @__PURE__ */ jsx(Accordion, { children: safetyItems.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, {
								value: `item-${index}`,
								className: "py-2",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors",
									children: item.title
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "pb-6",
									children: /* @__PURE__ */ jsx("div", {
										className: "text-muted-foreground leading-relaxed text-base max-w-none",
										children: item.content
									})
								})]
							}, index)) })
						})
					]
				}),
				/* @__PURE__ */ jsx("div", { className: "clear-both" })
			]
		}) })]
	});
}
//#endregion
//#region resources/js/components/sections/home-credentials-section.tsx
function HomeCredentialsSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [/* @__PURE__ */ jsx(DotPattern, { className: `text-primary-foreground/30 top-0` }), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-8 text-center",
			children: [
				{
					label: "B-BBEE Certified",
					icon: BadgeCheck
				},
				{
					label: "Red Seal Riggers",
					icon: HardHat
				},
				{
					label: "ISO 9001 & 14001",
					icon: FileCheck
				},
				{
					label: "OHSAS 45001",
					icon: ShieldPlus
				},
				{
					label: "Operational 24/7",
					icon: Clock
				}
			].map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ jsx(Icon, {
						className: "size-16 text-primary-foreground/70 mb-2",
						strokeWidth: 1.5
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold tracking-widest uppercase text-primary-foreground/90",
						children: item.label
					})]
				}, item.label);
			})
		})] })
	});
}
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
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services }),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(HomeSafetyPracticesSection, {}),
			/* @__PURE__ */ jsx(HomeCredentialsSection, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = AppLayout;
//#endregion
export { Home as default };

//# sourceMappingURL=home-CwHcUjg_.js.map