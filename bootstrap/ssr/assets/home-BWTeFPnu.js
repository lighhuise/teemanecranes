import { d as SectionOverline, f as Wrapper, l as buttonVariants, n as Line2Divider, r as DotPattern, t as AppLayout, u as useCompany } from "./app-layout-EzspTEMG.js";
import { t as FloatingStatCard } from "./floating-stat-card-BKltj2jr.js";
import { t as IMG_0190_copy_default } from "./IMG_0190-copy-DmrPCIeZ.js";
import { t as BackgroundText } from "./background-text-BwepyMBp.js";
import { t as SectionHeading } from "./section-heading-C4sV-UfE.js";
import { t as ServiceCard } from "./service-card-BYtspFcg.js";
import { n as ProjectArchiveCard, t as ProjectCard } from "./project-Cm_ZMhxs.js";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-C3-vzyoc.js";
import { Head, Link } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState } from "react";
import { AlertOctagon, ArrowRight, BadgeCheck, CalendarDays, Clock, Compass, Expand, FileCheck, FileCheck2, HardHat, Info, MapPin, Scale, ShieldCheck, ShieldPlus, X, ZoomIn } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createPortal } from "react-dom";
import Lightbox from "yet-another-react-lightbox";
// resources/images/hero-mask-2.svg
var hero_mask_2_default = "/build/assets/hero-mask-2-DJkSOBdI.svg";
// resources/images/hero-image.webp
var hero_image_default = "/build/assets/hero-image-K-gEb_1M.webp";
// resources/js/components/hero.tsx
gsap.registerPlugin(ScrollTrigger);
function Hero() {
	const heroRef = useRef(null);
	const { stats } = useCompany();
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
		className: "relative w-full pt-0 pb-0 lg:pt-2 lg:pb-16 flex justify-center overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative w-full aspect-4/5 sm:aspect-16/10 min-h-[60vh] block lg:hidden overflow-hidden",
			children: [/* @__PURE__ */ jsx("img", {
				src: hero_image_default,
				alt: "Hero Background",
				className: "hero-bg-parallax w-full h-[115%] object-cover object-[65%_center] -top-8 relative"
			}), /* @__PURE__ */ jsxs("div", {
				className: "absolute top-0 left-0 z-10 w-[68%] sm:w-[52%] aspect-[543.19/270.12]",
				children: [/* @__PURE__ */ jsx("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					"data-name": "Layer 2",
					viewBox: "0 0 543.19 270.12",
					className: "w-full h-full fill-background block",
					children: /* @__PURE__ */ jsx("path", { d: "M543.19 0v129.35c0 4.25-1.69 8.32-4.69 11.32L413.73 265.44c-3 3-7.06 4.68-11.31 4.68H0V0z" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 flex flex-col justify-center pl-4 sm:pl-6 pr-[20%] pb-[6%]",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "text-[6.8vw] sm:text-4xl font-black tracking-tighter leading-[0.9] text-foreground",
						children: [
							"A CUT ABOVE ",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "THE REST"
							})
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1.5 sm:mt-2 text-[1.8vw] sm:text-[10px] font-bold tracking-tight text-muted-foreground uppercase leading-tight",
						children: "CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT"
					})]
				})]
			})]
		}), /* @__PURE__ */ jsx(Wrapper, {
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
							src: hero_image_default,
							alt: "Hero Background",
							className: "hero-bg-parallax w-full h-[110%] object-cover object-center -top-10 relative"
						}), /* @__PURE__ */ jsxs("div", {
							id: `stats`,
							className: "absolute inset-x-4 bottom-4 z-10 flex gap-2",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex justify-between items-start",
										children: /* @__PURE__ */ jsx(CalendarDays, { className: "size-8 text-white drop-shadow-md" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ jsx("p", {
											className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1 whitespace-pre-line`,
											children: stats.years_experience.title || stats.years_experience.label
										}), /* @__PURE__ */ jsx("p", {
											className: `text-5xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`,
											children: stats.years_experience.display
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex justify-between items-start",
										children: /* @__PURE__ */ jsx(HardHat, { className: "size-8 text-white drop-shadow-md" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ jsx("p", {
											className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1 whitespace-pre-line`,
											children: stats.projects_completed.title || stats.projects_completed.label
										}), /* @__PURE__ */ jsx("p", {
											className: `text-5xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`,
											children: stats.projects_completed.display
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `,
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex justify-between items-start",
										children: /* @__PURE__ */ jsx(Clock, { className: "size-8 text-white drop-shadow-md" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-col",
										children: [/* @__PURE__ */ jsx("p", {
											className: `text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1 whitespace-pre-line`,
											children: stats.availability.title || stats.availability.short_label || stats.availability.label
										}), /* @__PURE__ */ jsx("p", {
											className: `text-5xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none mt-7`,
											children: stats.availability.display
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
		})]
	});
}
// resources/js/components/sections/home-intro-section.tsx
function HomeIntroSection() {
	const { stats } = useCompany();
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "left",
			children: "TRUSTED"
		}), /* @__PURE__ */ jsx(Wrapper, {
			className: `relative`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ jsx(SectionOverline, {
							label: "Who We Are",
							align: "left"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1] ",
							children: [
								"THE ONLY NAME ",
								/* @__PURE__ */ jsx("br", {}),
								"TRUSTED TO PERFORM"
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-lg text-muted-foreground leading-relaxed text-balance",
							children: [
								"Established in ",
								stats.established_year.display,
								", Teemane Cranes prides itself on countless victories across South Africa's most demanding worksites. From high-stakes projects to complex operations that have redefined what's possible in mobile crane hire."
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-lg text-muted-foreground leading-relaxed text-balance",
							children: [
								"Backed by a fleet of mobile cranes with capacities of up to ",
								stats.max_capacity.tons_label || `${stats.max_capacity.value} tons`,
								" and more than ",
								stats.combined_experience.value,
								" years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments."
							]
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
					className: "relative mb-6 lg:mb-0",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
						children: /* @__PURE__ */ jsx("img", {
							src: IMG_0190_copy_default,
							alt: "Teemane Cranes on site",
							className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
						})
					}), /* @__PURE__ */ jsx(FloatingStatCard, {
						value: stats.combined_experience.display,
						label: stats.combined_experience.label,
						position: "bottom-right"
					})]
				})]
			})
		})]
	});
}
// resources/js/components/sections/home-services-section.tsx
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
				children: (services || []).slice(0, 3).map((service, idx) => /* @__PURE__ */ jsx(ServiceCard, {
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
// resources/js/components/sections/home-latest-projects-section.tsx
function HomeLatestProjectsSection({ projects = [] }) {
	if (!projects || projects.length === 0) return null;
	const sortedProjects = React.useMemo(() => {
		return [...projects].sort((a, b) => {
			const timeA = a.project_date_raw ? new Date(a.project_date_raw).getTime() : 0;
			const timeB = b.project_date_raw ? new Date(b.project_date_raw).getTime() : 0;
			if (timeB !== timeA) return timeB - timeA;
			return (b.id ?? 0) - (a.id ?? 0);
		});
	}, [projects]);
	const featuredProject = sortedProjects[0];
	const secondaryProjects = sortedProjects.slice(1, 3);
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted/30 border-y border-border relative overflow-hidden",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "right",
			children: "PROJECTS"
		}), /* @__PURE__ */ jsxs(Wrapper, {
			className: "relative z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-3",
					children: [/* @__PURE__ */ jsx(SectionOverline, {
						label: "Field Operations",
						align: "left"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground",
						children: ["LATEST ", /* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "PROJECTS"
						})]
					})]
				}), /* @__PURE__ */ jsxs(Link, {
					href: "/projects",
					className: "inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors group",
					children: [/* @__PURE__ */ jsx("span", { children: "View All Projects" }), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch",
				children: [/* @__PURE__ */ jsx("div", {
					className: secondaryProjects.length > 0 ? "lg:col-span-7" : "lg:col-span-12",
					children: /* @__PURE__ */ jsx(ProjectCard, {
						project: featuredProject,
						variant: "spotlight",
						label: "Latest Operation",
						className: "h-full"
					})
				}), secondaryProjects.length > 0 && /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 flex flex-col gap-6",
					children: [secondaryProjects.map((project) => /* @__PURE__ */ jsx(ProjectCard, {
						project,
						variant: "stack"
					}, project.id)), /* @__PURE__ */ jsx(ProjectArchiveCard, {})]
				})]
			})]
		})]
	});
}
// resources/images/media-24-building.webp
var media_24_building_default = "/build/assets/media-24-building-C-uGPsNs.webp";
// resources/js/components/sections/home-safety-section.tsx
function HomeSafetySection() {
	const { stats } = useCompany();
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-background relative",
		children: [/* @__PURE__ */ jsx(BackgroundText, {
			position: "right",
			children: "Solutions"
		}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-2 gap-16 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative mb-6 lg:mb-0 order-2 lg:order-1",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg",
					children: /* @__PURE__ */ jsx("img", {
						src: media_24_building_default,
						alt: "Teemane Cranes Safety Briefing",
						className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700"
					})
				}), /* @__PURE__ */ jsx(FloatingStatCard, {
					value: stats.projects_completed.display,
					label: stats.projects_completed.short_label || stats.projects_completed.label,
					position: "bottom-left"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-8 order-1 lg:order-2",
				children: [
					/* @__PURE__ */ jsx(SectionOverline, {
						label: "Turnkey Solutions",
						align: "left"
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
// resources/images/safety.png
var safety_default = "/build/assets/safety-77FjWXCW.png";
// resources/js/components/sections/home-safety-practices-section.tsx
var safetyItems = [
	{
		step: "01",
		icon: Compass,
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
		step: "02",
		icon: ShieldCheck,
		title: "Equipment & Certification",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"We place the same level of importance on the condition of our equipment as we do on the work itself. Our cranes, lifting equipment and rigging gear are ",
			/* @__PURE__ */ jsx("strong", { children: "inspected, certified and subject to the required checks" }),
			" to ensure they remain safe and fit for use."
		] })
	},
	{
		step: "03",
		icon: HardHat,
		title: "Lift Planning & Setup",
		content: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Each lift is planned around the specific requirements of the job. ",
			/* @__PURE__ */ jsx("strong", { children: "Load weight, lifting points, rigging, crane capacity, ground conditions" }),
			" and crane setup are all carefully considered before lifting begins. ",
			/* @__PURE__ */ jsx("strong", { children: "If the required setup is not in place, the lift does not proceed." })
		] })
	},
	{
		step: "04",
		icon: FileCheck2,
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
		step: "05",
		icon: AlertOctagon,
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
		step: "06",
		icon: Scale,
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
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("section", {
		className: "relative bg-muted/30 border-y border-border overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(BackgroundText, {
				position: "left",
				children: "SAFETY"
			}),
			/* @__PURE__ */ jsx("img", {
				src: safety_default,
				alt: "Teemane Safety Operations",
				className: "pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-left translate-x-1/4 sm:translate-x-12 lg:translate-x-16 xl:translate-x-0 opacity-15 dark:opacity-20 lg:opacity-100 drop-shadow-black z-0"
			}),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "lg:w-2/3 xl:w-[70%] py-16 sm:py-20 lg:py-28 space-y-6 sm:space-y-8",
					children: [/* @__PURE__ */ jsx(SectionHeading, {
						title: "SAFETY STARTS BEFORE THE LIFT",
						label: "Our Priority",
						align: "left"
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-muted-foreground text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6 text-shadow-hard-muted",
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
					})]
				})
			})
		]
	}), /* @__PURE__ */ jsx("section", {
		className: "py-16 sm:py-20 lg:py-28 bg-background border-b border-border relative overflow-clip",
		children: /* @__PURE__ */ jsx(Wrapper, {
			className: "relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row gap-10 lg:gap-16 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:w-5/12 lg:sticky lg:top-32 space-y-4 sm:space-y-6",
					children: [
						/* @__PURE__ */ jsx(SectionOverline, {
							label: "Safety Protocols",
							align: "left"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-foreground text-balance leading-[1.1]",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block",
								children: "Disciplined"
							}), /* @__PURE__ */ jsx("span", {
								className: "bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent",
								children: "Field Standards"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-base sm:text-lg text-muted-foreground leading-relaxed",
							children: "Every mobile crane deployment follows six non-negotiable operational safeguards from thorough risk assessment and equipment certification to controlled working areas and strict OHS compliance."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full lg:w-7/12",
					children: /* @__PURE__ */ jsx(Accordion, {
						className: "divide-y-0 border-b-0 space-y-3 sm:space-y-4",
						children: safetyItems.map((item, index) => {
							const Icon = item.icon;
							return /* @__PURE__ */ jsxs(AccordionItem, {
								value: `item-${index}`,
								className: "rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-open:border-primary/50 data-open:shadow-md data-open:ring-1 data-open:ring-primary/15 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b",
								children: [/* @__PURE__ */ jsx(AccordionTrigger, {
									className: "group py-3.5 sm:py-4 hover:no-underline",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 sm:gap-4",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-open:bg-primary group-data-open:text-primary-foreground group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground",
											children: /* @__PURE__ */ jsx(Icon, {
												className: "size-4 sm:size-5",
												strokeWidth: 1.75
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex flex-col gap-0.5",
											children: [/* @__PURE__ */ jsxs("span", {
												className: "font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary",
												children: ["Protocol ", item.step]
											}), /* @__PURE__ */ jsx("span", {
												className: "font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug",
												children: item.title
											})]
										})]
									})
								}), /* @__PURE__ */ jsx(AccordionContent, {
									className: "pb-4 sm:pb-5 pt-1 sm:pt-2",
									children: /* @__PURE__ */ jsx("div", {
										className: "border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base",
										children: item.content
									})
								})]
							}, index);
						})
					})
				})]
			})
		})
	})] });
}
// resources/js/components/sections/home-field-operations-section.tsx
var FIELD_OPERATIONS = [
	{
		id: "southern-wind-2",
		title: "Southern Wind Shipyard Lift",
		location: "Cape Town Port",
		category: "Shipyard Rigging",
		description: "Tandem mobile crane maneuvering and high-boom stabilization for luxury ocean-going composite vessels.",
		src: "/build/assets/southern-wind-2-DKwuFbIr.webp",
		alt: "Mobile crane lifting Southern Wind yacht at Cape Town shipyard"
	},
	{
		id: "boat-launch",
		title: "Commercial Vessel Launch",
		location: "Harbour Slipway",
		category: "Marine Operations",
		description: "Multi-leg sling rigging and millimeter-accurate waterside descent into port basin waters.",
		src: "/build/assets/525e47f7-4f4c-44ff-9f7e-a37bf34516d9-u7cw2Fp1.webp",
		alt: "Teemane mobile crane lowering boat into harbour slipway"
	},
	{
		id: "southern-wind-1",
		title: "High-Tolerance Hull Positioning",
		location: "Southern Wind Basin",
		category: "Precision Rigging",
		description: "Synchronized dual-hook control ensuring zero hull deflection during specialized shipyard transport.",
		src: "/build/assets/southernwind-z-wZje8b.webp",
		alt: "Dual crane precision hull alignment at shipyard"
	},
	{
		id: "harbour-work",
		title: "Dockside Crane Rigging & Cargo",
		location: "Industrial Maritime Berth",
		category: "Port Logistics",
		description: "Certified rigging crews coordinating deep-reach crane positioning alongside deep-water berths.",
		src: "/build/assets/harbour-work-SOMykid5.webp",
		alt: "Heavy mobile crane rigging at commercial port dockside"
	},
	{
		id: "harbor-golden-hour",
		title: "Quayside Heavy Mobilization",
		location: "Commercial Harbour",
		category: "Heavy Infrastructure",
		description: "Outrigger ground spread and high-capacity boom extension ready for round-the-clock port operations.",
		src: "/build/assets/boat-launch-ByEniV5M.webp",
		alt: "Mobile crane stationed at harbour quayside during sunset"
	},
	{
		id: "teemane-boat",
		title: "Specialised Yacht Hoist & Transfer",
		location: "Marina Basin",
		category: "Specialised Transport",
		description: "Custom spreader beam configuration preventing compressive load stresses during vessel hoist and transport.",
		src: "/build/assets/teeman_final_sky_only-apn9Nx24.png",
		alt: "Teemane crane hoisting private yacht with custom spreader rigging"
	}
];
function HomeFieldOperationsSection() {
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const [activeInfo, setActiveInfo] = useState(null);
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	const lightboxSlides = FIELD_OPERATIONS.map((item) => ({
		src: item.src,
		alt: item.alt
	}));
	const renderCard = (index, containerClasses) => {
		const item = FIELD_OPERATIONS[index];
		return /* @__PURE__ */ jsxs("div", {
			role: "button",
			tabIndex: 0,
			onClick: () => setLightboxIndex(index),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setLightboxIndex(index);
				}
			},
			className: `group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${containerClasses}`,
			children: [
				/* @__PURE__ */ jsx("img", {
					src: item.src,
					alt: item.alt,
					className: "absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-3.5 right-3.5 z-10 size-9 rounded-xl bg-background/85 dark:bg-card/85 text-foreground backdrop-blur-md border border-border/70 shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100",
					children: /* @__PURE__ */ jsx(ZoomIn, { className: "size-4" })
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-3.5 right-3.5 z-10",
					children: /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							setActiveInfo({
								item,
								index
							});
						},
						"aria-label": `View information for ${item.title}`,
						title: "View photo information",
						className: "size-9 rounded-xl bg-background/90 dark:bg-card/90 text-foreground/80 hover:text-primary hover:bg-background backdrop-blur-md border border-border/80 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer",
						children: /* @__PURE__ */ jsx(Info, { className: "size-4" })
					})
				})
			]
		});
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 bg-muted/30 border-b border-border relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(BackgroundText, {
				position: "left",
				children: "OPERATIONS"
			}),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsx(SectionHeading, {
						label: "Field Operations",
						title: "CRANES IN ACTION: FIELD SHOWCASE",
						align: "center",
						className: "mb-14 sm:mb-16",
						children: "From high-stakes shipyard yacht rigging at Southern Wind to coastal slipway launches and heavy harbour infrastructure, explore authentic captures of Teemane mobile cranes delivering precision across South Africa's worksites."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-5 sm:space-y-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6",
							children: [
								renderCard(0, "md:col-span-1 lg:col-span-4 lg:row-span-2 min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]"),
								/* @__PURE__ */ jsxs("div", {
									className: "md:col-span-1 lg:col-span-4 flex flex-col gap-5 sm:gap-6 lg:row-span-2",
									children: [renderCard(1, "flex-1 min-h-[260px] sm:min-h-[295px]"), renderCard(2, "flex-1 min-h-[260px] sm:min-h-[295px]")]
								}),
								renderCard(3, "md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]")
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6",
							children: [renderCard(4, "lg:col-span-7 min-h-[300px] sm:min-h-[360px]"), renderCard(5, "lg:col-span-5 min-h-[300px] sm:min-h-[360px]")]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl border border-border bg-card",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "space-y-1 text-center sm:text-left",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "font-heading font-bold text-base sm:text-lg uppercase tracking-tight text-foreground",
								children: "Planning a Specialised or Maritime Lift?"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: "Our engineering team prepares in-depth CAD lift studies, rigging diagrams, and risk assessments for complex projects."
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-center gap-3 shrink-0",
							children: [/* @__PURE__ */ jsxs(Link, {
								prefetch: "hover",
								href: "/contact-us",
								className: buttonVariants({
									size: "lg",
									className: "uppercase tracking-widest font-bold px-7 h-12 text-xs sm:text-sm"
								}),
								children: ["Request Lift Feasibility", /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 size-4" })]
							}), /* @__PURE__ */ jsx(Link, {
								prefetch: "hover",
								href: "/projects",
								className: buttonVariants({
									variant: "outline",
									size: "lg",
									className: "uppercase tracking-widest font-bold px-7 h-12 text-xs sm:text-sm border-2"
								}),
								children: "View All Projects"
							})]
						})]
					})
				]
			}),
			activeInfo && isMounted && createPortal(/* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in-0 duration-200",
				onClick: () => setActiveInfo(null),
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-card text-card-foreground border border-border rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setActiveInfo(null),
							className: "absolute top-4 right-4 size-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 flex items-center justify-center transition-colors cursor-pointer",
							"aria-label": "Close information",
							children: /* @__PURE__ */ jsx(X, { className: "size-4" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "aspect-video rounded-xl overflow-hidden border border-border mb-4 bg-muted/40",
							children: /* @__PURE__ */ jsx("img", {
								src: activeInfo.item.src,
								alt: activeInfo.item.alt,
								className: "w-full h-full object-cover"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-2 mb-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20",
								children: activeInfo.item.category
							}), /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1 text-xs text-muted-foreground font-medium",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "size-3 text-primary" }), activeInfo.item.location]
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-foreground",
							children: activeInfo.item.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-sm leading-relaxed mt-2.5",
							children: activeInfo.item.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => {
									const idx = activeInfo.index;
									setActiveInfo(null);
									setLightboxIndex(idx);
								},
								className: buttonVariants({
									size: "default",
									className: "uppercase tracking-wider font-bold text-xs cursor-pointer"
								}),
								children: [/* @__PURE__ */ jsx(Expand, { className: "mr-2 size-3.5" }), "View In Lightbox"]
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setActiveInfo(null),
								className: buttonVariants({
									variant: "outline",
									size: "default",
									className: "uppercase tracking-wider font-bold text-xs cursor-pointer"
								}),
								children: "Close"
							})]
						})
					]
				})
			}), document.body),
			/* @__PURE__ */ jsx(Lightbox, {
				open: lightboxIndex !== null,
				close: () => setLightboxIndex(null),
				index: lightboxIndex ?? 0,
				slides: lightboxSlides
			})
		]
	});
}
// resources/js/components/sections/home-credentials-section.tsx
function HomeCredentialsSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-radial-[at_50%_85%] from-primary/70 border-3 border-primary to-primary py-16 relative overflow-clip",
		children: /* @__PURE__ */ jsxs(Wrapper, { children: [
			/* @__PURE__ */ jsx(DotPattern, { className: `text-primary-foreground/30 top-0` }),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-2 border-2 border-dashed border-primary-foreground/10"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-4 border-2 border-dashed border-primary-foreground/10"
			}),
			/* @__PURE__ */ jsx("div", {
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
			})
		] })
	});
}
// resources/js/pages/home.tsx
function Home({ services, projects = [] }) {
	const { stats } = useCompany();
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-background selection:bg-primary selection:text-white",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [/* @__PURE__ */ jsx("title", { children: "Teemane Cranes | A Cut Above The Rest" }), /* @__PURE__ */ jsx("meta", {
				name: "description",
				content: `Established in ${stats.established_year.display}, Teemane Cranes delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to ${stats.max_capacity.display} capacity.`
			})] }),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(HomeIntroSection, {}),
			/* @__PURE__ */ jsx(Line2Divider, {}),
			/* @__PURE__ */ jsx(HomeServicesSection, { services: (services || []).slice(0, 3) }),
			/* @__PURE__ */ jsx(Line2Divider, {}),
			/* @__PURE__ */ jsx(HomeLatestProjectsSection, { projects }),
			/* @__PURE__ */ jsx(HomeSafetySection, {}),
			/* @__PURE__ */ jsx(HomeFieldOperationsSection, {}),
			/* @__PURE__ */ jsx(Line2Divider, {}),
			/* @__PURE__ */ jsx(HomeSafetyPracticesSection, {}),
			/* @__PURE__ */ jsx(HomeCredentialsSection, {})
		]
	});
}
Home.displayName = "Home";
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export { Home as default };

//# sourceMappingURL=home-BWTeFPnu.js.map