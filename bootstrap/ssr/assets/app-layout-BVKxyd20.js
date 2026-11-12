import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import React, { Suspense, createContext, lazy, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AlertTriangle, CircleCheckIcon, Clock, InfoIcon, Loader2Icon, Mail, MapPin, Menu, Moon, OctagonXIcon, Phone, PhoneCall, Sun, TriangleAlertIcon, XIcon } from "lucide-react";
import { Toast } from "@base-ui/react/toast";
import { Button } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { Dialog } from "@base-ui/react/dialog";
import { Menu as Menu$1 } from "@base-ui/react/menu";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
// resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/**
* Normalizes any image path or URL into a valid public URL or root-relative storage URL.
* Handles:
* - Absolute URLs (https://... or http://...)
* - Data & Blob URLs (data:... or blob:...)
* - Direct storage paths saved by Filament (e.g. "projects/gallery/xyz.jpg" -> "/storage/projects/gallery/xyz.jpg")
* - Paths already starting with "/storage/" or "storage/"
*/
function toStorageUrl(path) {
	if (!path) return "";
	if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:") || path.startsWith("blob:")) return path;
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;
	if (cleanPath.startsWith("storage/")) return `/${cleanPath}`;
	return `/storage/${cleanPath}`;
}
// resources/js/components/ui/misc/wrapper.tsx
function Wrapper({ className, as, children, ...props }) {
	return /* @__PURE__ */ jsx(as || "div", {
		className: cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
		...props,
		children
	});
}
Wrapper.displayName = "Wrapper";
// resources/js/components/ui/misc/section-overline.tsx
var lineFlexClass = {
	left: "flex-row",
	center: "flex-row",
	right: "flex-row-reverse"
};
function SectionOverline({ label, children, align = "left", className, textClassName, lineClassName }) {
	const content = label ?? children;
	if (!content) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("inline-flex items-center gap-3.5", lineFlexClass[align], className),
		children: [
			align !== "right" && /* @__PURE__ */ jsx("div", { className: cn("h-px w-10 bg-linear-to-r from-transparent via-primary/50 to-primary shrink-0", lineClassName) }),
			/* @__PURE__ */ jsx("span", {
				className: cn("text-xs sm:text-sm font-black text-primary tracking-[0.22em] uppercase whitespace-nowrap", textClassName),
				children: content
			}),
			align !== "left" && /* @__PURE__ */ jsx("div", { className: cn("h-px w-10 bg-linear-to-l from-transparent via-primary/50 to-primary shrink-0", lineClassName) })
		]
	});
}
// resources/js/lib/site-stats.ts
var siteStats = {
	yearsInBusiness: "25+",
	combinedExperienceYears: 100,
	successfulProjects: "500+",
	maxCapacity: "440T",
	establishedYear: 2012,
	availability: "24/7",
	phone: "084 263 7690",
	phoneTel: "0842637690",
	email: "enquiries@teemanecranes.co.za",
	address: "6 Van Eck St, Bellville South, Cape Town, 7530"
};
// resources/js/types/company.ts
var defaultCompanyConfig = {
	name: "Teemane Cranes",
	legal_name: "Teemane Heavy Haulage",
	tagline: "A Cut Above The Rest",
	description: "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012.",
	stats: {
		years_experience: {
			value: parseInt(siteStats.yearsInBusiness) || 25,
			suffix: "+",
			display: siteStats.yearsInBusiness,
			label: "Years of Experience",
			title: "Years of\nExperience",
			short_label: "Experience"
		},
		projects_completed: {
			value: parseInt(siteStats.successfulProjects) || 500,
			suffix: "+",
			display: siteStats.successfulProjects,
			label: "Successful Projects",
			title: "Successful\nProjects",
			short_label: "Projects Completed"
		},
		combined_experience: {
			value: siteStats.combinedExperienceYears,
			suffix: "+",
			display: `${siteStats.combinedExperienceYears}+`,
			label: "Years Combined Experience",
			title: "Combined\nExperience",
			short_label: "100+ Years Experience"
		},
		max_capacity: {
			value: parseInt(siteStats.maxCapacity) || 440,
			suffix: "T",
			display: siteStats.maxCapacity,
			tons_label: `${parseInt(siteStats.maxCapacity) || 440} tons`,
			label: "Maximum Fleet Capacity",
			title: "Max Lift\nCapacity",
			short_label: "Max Lift Capacity"
		},
		established_year: {
			value: siteStats.establishedYear,
			display: String(siteStats.establishedYear),
			label: "Established",
			title: "Established"
		},
		availability: {
			value: 24,
			suffix: "/7",
			display: siteStats.availability,
			label: "Operational 24/7",
			title: "Availability",
			short_label: "Availability"
		}
	},
	contact: {
		phone: siteStats.phone,
		phone_tel: siteStats.phoneTel,
		email: siteStats.email,
		address: {
			street: "6 Van Eck St",
			suburb: "Bellville South",
			city: "Cape Town",
			line1: "6 Van Eck St, Bellville South",
			locality: "Cape Town",
			postal_code: "7530",
			country: "South Africa",
			formatted: "6 Van Eck St, Bellville South,\nCape Town, 7530",
			one_line: siteStats.address
		},
		coordinates: {
			lat: -33.926637890850294,
			lng: 18.645063943495657
		},
		maps_url: "https://maps.google.com/?q=-33.926637890850294,18.645063943495657",
		map_url: "https://maps.google.com/?q=-33.926637890850294,18.645063943495657"
	},
	credentials: [
		{ label: "B-BBEE Certified" },
		{ label: "Red Seal Riggers" },
		{ label: "ISO 9001 & 14001" },
		{ label: "OHSAS 45001" },
		{ label: "Operational 24/7" }
	]
};
// resources/js/hooks/use-company.ts
function normalizeStat(incoming, fallback) {
	if (incoming === void 0 || incoming === null) return fallback;
	if (typeof incoming === "number" || typeof incoming === "string") {
		const str = String(incoming);
		const suffix = fallback.suffix ?? "";
		const display = suffix && !str.endsWith(suffix) ? `${str}${suffix}` : str;
		return {
			...fallback,
			value: incoming,
			display
		};
	}
	if (typeof incoming === "object") {
		const raw = incoming;
		const value = raw.value !== void 0 ? raw.value : fallback.value;
		const suffix = raw.suffix !== void 0 ? raw.suffix : fallback.suffix ?? "";
		const display = raw.display !== void 0 ? raw.display : raw.value !== void 0 ? `${raw.value}${suffix}` : fallback.display;
		return {
			...fallback,
			...raw,
			value,
			suffix,
			display,
			label: raw.label ?? fallback.label,
			title: raw.title ?? raw.label ?? fallback.title ?? fallback.label,
			short_label: raw.short_label ?? fallback.short_label,
			tons_label: raw.tons_label ?? fallback.tons_label
		};
	}
	return fallback;
}
function useCompany() {
	const sharedCompany = usePage().props?.company;
	if (!sharedCompany) return defaultCompanyConfig;
	const rawStats = sharedCompany.stats || {};
	const mergedStats = {
		years_experience: normalizeStat(rawStats.years_experience, defaultCompanyConfig.stats.years_experience),
		projects_completed: normalizeStat(rawStats.projects_completed, defaultCompanyConfig.stats.projects_completed),
		combined_experience: normalizeStat(rawStats.combined_experience, defaultCompanyConfig.stats.combined_experience),
		max_capacity: normalizeStat(rawStats.max_capacity, defaultCompanyConfig.stats.max_capacity),
		established_year: normalizeStat(rawStats.established_year, defaultCompanyConfig.stats.established_year),
		availability: normalizeStat(rawStats.availability, defaultCompanyConfig.stats.availability)
	};
	const mergedAddress = {
		...defaultCompanyConfig.contact.address,
		...sharedCompany.contact?.address || {}
	};
	const streetAndSuburb = [mergedAddress.street, mergedAddress.suburb].filter(Boolean).join(", ");
	mergedAddress.line1 = mergedAddress.line1 || streetAndSuburb || defaultCompanyConfig.contact.address.line1;
	mergedAddress.locality = mergedAddress.locality || mergedAddress.city || defaultCompanyConfig.contact.address.locality;
	const mergedContact = {
		...defaultCompanyConfig.contact,
		...sharedCompany.contact || {},
		address: mergedAddress,
		coordinates: {
			...defaultCompanyConfig.contact.coordinates,
			...sharedCompany.contact?.coordinates || {}
		}
	};
	mergedContact.map_url = mergedContact.map_url || mergedContact.maps_url;
	return {
		...defaultCompanyConfig,
		...sharedCompany,
		stats: mergedStats,
		contact: mergedContact,
		credentials: sharedCompany.credentials ?? defaultCompanyConfig.credentials
	};
}
// resources/images/logo.svg
var logo_default = "/build/assets/logo--6nxw50_.svg";
// resources/js/components/footer.tsx
function Footer() {
	const { stats, contact } = useCompany();
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-muted  z-5 text-muted-foreground relative overflow-hidden pt-24 pb-12 border-t-6 border-primary",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-[1%] pointer-events-none select-none overflow-hidden",
				children: /* @__PURE__ */ jsx("h2", {
					className: "text-[20vh] xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground",
					children: "TEEMANE"
				})
			}),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: "relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4 flex flex-col gap-8",
							children: [
								/* @__PURE__ */ jsx(Link, {
									href: "/",
									className: "inline-block",
									children: /* @__PURE__ */ jsx("img", {
										src: logo_default,
										alt: "Teemane Cranes Logo",
										className: "h-16 w-auto"
									})
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "text-muted-foreground leading-relaxed max-w-sm",
									children: [
										"The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since ",
										stats.established_year.display,
										"."
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex flex-col gap-4 mt-4",
									children: /* @__PURE__ */ jsx(SectionOverline, {
										label: "A Cut Above The Rest",
										align: "left"
									})
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-3 lg:col-start-6",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-foreground text-lg font-black mb-8 tracking-tighter uppercase",
								children: "Navigation"
							}), /* @__PURE__ */ jsx("ul", {
								className: "flex flex-col gap-3.5",
								children: [
									{
										name: "Home",
										href: "/"
									},
									{
										name: "Services",
										href: "/services"
									},
									{
										name: "Projects",
										href: "/projects"
									},
									{
										name: "About Us",
										href: "/about-us"
									},
									{
										name: "FAQ",
										href: "/faq"
									},
									{
										name: "Contact Us",
										href: "/contact-us"
									}
								].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
									href: item.href,
									className: "group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium w-fit",
									children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-border group-hover:w-4 group-hover:h-0.5 group-hover:rounded-none group-hover:bg-primary transition-all duration-300" }), /* @__PURE__ */ jsx("span", {
										className: "tracking-wide",
										children: item.name
									})]
								}) }, item.name))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-4",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-foreground text-lg font-black mb-8 tracking-tighter uppercase",
								children: "Contact Us"
							}), /* @__PURE__ */ jsxs("ul", {
								className: "flex flex-col divide-y divide-border/80 border-y border-border/80",
								children: [
									/* @__PURE__ */ jsxs("li", {
										className: "py-3.5 flex items-start gap-3.5 group",
										children: [/* @__PURE__ */ jsx("span", {
											className: "size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 mt-0.5 text-primary group-hover:border-primary/40 transition-colors",
											children: /* @__PURE__ */ jsx(MapPin, { className: "size-4" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "space-y-0.5 min-w-0",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block",
													children: "Yard Location"
												}),
												/* @__PURE__ */ jsx("span", {
													className: "text-sm font-bold text-foreground block leading-tight",
													children: contact.address.line1
												}),
												/* @__PURE__ */ jsxs("span", {
													className: "text-xs text-muted-foreground block",
													children: [
														contact.address.locality,
														", ",
														contact.address.postal_code
													]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("li", {
										className: "py-3.5 flex items-center justify-between gap-3 group",
										children: [/* @__PURE__ */ jsxs("a", {
											href: `tel:${contact.phone_tel}`,
											className: "flex items-center gap-3.5 min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 text-primary group-hover:border-primary/40 transition-colors",
												children: /* @__PURE__ */ jsx(Phone, { className: "size-4" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "space-y-0.5",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block",
													children: "Phone"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-sm font-mono font-bold text-foreground group-hover:text-primary transition-colors",
													children: contact.phone
												})]
											})]
										}), /* @__PURE__ */ jsx("span", {
											className: "inline-flex items-center text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
											children: "Active"
										})]
									}),
									/* @__PURE__ */ jsx("li", {
										className: "py-3.5 flex items-center justify-between gap-3 group",
										children: /* @__PURE__ */ jsxs("a", {
											href: `mailto:${contact.email}`,
											className: "flex items-center gap-3.5 min-w-0 flex-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 text-primary group-hover:border-primary/40 transition-colors",
												children: /* @__PURE__ */ jsx(Mail, { className: "size-4" })
											}), /* @__PURE__ */ jsxs("div", {
												className: "space-y-0.5 min-w-0",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block",
													children: "Email"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-sm font-medium text-foreground truncate block group-hover:text-primary transition-colors",
													children: contact.email
												})]
											})]
										})
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium",
					children: [/* @__PURE__ */ jsxs("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Teemane Cranes. All rights reserved."
					] }), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ jsx(Link, {
							href: "/privacy-policy",
							className: "hover:text-foreground transition-colors",
							children: "Privacy Policy"
						}), /* @__PURE__ */ jsx(Link, {
							href: "/terms-of-service",
							className: "hover:text-foreground transition-colors",
							children: "Terms of Service"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs(Wrapper, {
				className: `pt-8 border-t border-border text-center`,
				children: ["Designed and developed by  ", /* @__PURE__ */ jsx("a", {
					target: `_blank`,
					className: `text-primary hover:underline inline`,
					href: "https://designbycode.co.za",
					children: "designbycode"
				})]
			})
		]
	});
}
// resources/js/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-linear-to-r from-primary to-primary/70 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-xs hover:shadow transition-all",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$1({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
// resources/js/components/ui/toast.tsx
var toast = Toast.createToastManager();
function ToastProvider({ ...props }) {
	return /* @__PURE__ */ jsx(Toast.Provider, { ...props });
}
function ToastPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Toast.Portal, {
		"data-slot": "toast-portal",
		...props
	});
}
function ToastViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Viewport, {
		"data-slot": "toast-viewport",
		className: cn("fixed right-4 bottom-4 z-[100] flex max-h-screen w-[calc(100%-2rem)] flex-col-reverse sm:right-8 sm:bottom-8 sm:top-auto sm:flex-col md:max-w-[420px]", className),
		...props
	});
}
function Toast$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Root, {
		"data-slot": "toast",
		className: cn("group/toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom rounded-2xl border bg-popover text-popover-foreground shadow-lg will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]", "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]", "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']", "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]", "data-limited:opacity-0 data-starting-style:[transform:translateY(150%)]", "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]", "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", className),
		...props
	});
}
function ToastContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Content, {
		"data-slot": "toast-content",
		className: cn("flex h-full items-center gap-3 overflow-hidden p-4 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100", className),
		...props
	});
}
function ToastTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Title, {
		"data-slot": "toast-title",
		className: cn("text-sm font-medium", className),
		...props
	});
}
function ToastDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast.Description, {
		"data-slot": "toast-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function ToastAction({ className, render = /* @__PURE__ */ jsx(Button$1, {
	variant: "outline",
	size: "sm"
}), ...props }) {
	return /* @__PURE__ */ jsx(Toast.Action, {
		"data-slot": "toast-action",
		render,
		className: cn("shrink-0", className),
		...props
	});
}
function ToastClose({ className, children, render = /* @__PURE__ */ jsx(Button$1, {
	variant: "ghost",
	size: "icon-sm"
}), ...props }) {
	return /* @__PURE__ */ jsx(Toast.Close, {
		"data-slot": "toast-close",
		"aria-label": "Close toast",
		render,
		className: cn("relative shrink-0 text-muted-foreground after:absolute after:-inset-2 after:content-[''] hover:text-foreground", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(XIcon, { "aria-hidden": "true" })
	});
}
function ToastIcon({ type }) {
	let icon = null;
	if (type === "success") icon = /* @__PURE__ */ jsx(CircleCheckIcon, { "aria-hidden": "true" });
	if (type === "info") icon = /* @__PURE__ */ jsx(InfoIcon, { "aria-hidden": "true" });
	if (type === "warning") icon = /* @__PURE__ */ jsx(TriangleAlertIcon, { "aria-hidden": "true" });
	if (type === "error") icon = /* @__PURE__ */ jsx(OctagonXIcon, {
		className: "text-destructive",
		"aria-hidden": "true"
	});
	if (type === "loading") icon = /* @__PURE__ */ jsx(Loader2Icon, {
		className: "animate-spin",
		"aria-hidden": "true"
	});
	if (!icon) return null;
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "toast-icon",
		className: "shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
		children: icon
	});
}
function ToastList() {
	const { toasts } = Toast.useToastManager();
	return toasts.map((toastItem) => /* @__PURE__ */ jsx(Toast$1, {
		toast: toastItem,
		children: /* @__PURE__ */ jsxs(ToastContent, { children: [
			/* @__PURE__ */ jsx(ToastIcon, { type: toastItem.type }),
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [/* @__PURE__ */ jsx(ToastTitle, {}), /* @__PURE__ */ jsx(ToastDescription, {})]
			}),
			/* @__PURE__ */ jsx(ToastAction, {}),
			/* @__PURE__ */ jsx(ToastClose, {})
		] })
	}, toastItem.id));
}
function Toaster({ children, toastManager = toast, ...props }) {
	return /* @__PURE__ */ jsxs(ToastProvider, {
		toastManager,
		...props,
		children: [children, /* @__PURE__ */ jsx(ToastPortal, { children: /* @__PURE__ */ jsx(ToastViewport, { children: /* @__PURE__ */ jsx(ToastList, {}) }) })]
	});
}
Toast.createToastManager;
Toast.useToastManager;
// resources/js/components/ui/sheet.tsx
function Sheet({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "sheet",
		...props
	});
}
function SheetTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "sheet-trigger",
		...props
	});
}
function SheetPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "sheet-portal",
		...props
	});
}
function SheetOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "sheet-overlay",
		className: cn("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
		...props
	});
}
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "sheet-content",
		"data-side": side,
		className: cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "sheet-close",
			render: /* @__PURE__ */ jsx(Button$1, {
				variant: "ghost",
				className: "absolute top-3 right-3",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(XIcon, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "sheet-title",
		className: cn("font-heading text-base font-medium text-foreground", className),
		...props
	});
}
// resources/js/components/ui/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(Menu$1.Positioner, {
		className: "isolate z-50 outline-none",
		align,
		alignOffset,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu$1.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu$1.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
// resources/js/components/theme-provider.tsx
var ThemeProviderContext = createContext({
	theme: "system",
	setTheme: () => null
});
var useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
// resources/js/components/mode-toggle.tsx
function ModeToggle() {
	const { setTheme } = useTheme();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button$1, {
			variant: "ghost",
			size: "icon"
		}),
		children: [
			/* @__PURE__ */ jsx(Sun, { className: "size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
			/* @__PURE__ */ jsx(Moon, { className: "absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
			/* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Toggle theme"
			})
		]
	}), /* @__PURE__ */ jsxs(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setTheme("light"),
				children: "Light"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setTheme("dark"),
				children: "Dark"
			}),
			/* @__PURE__ */ jsx(DropdownMenuItem, {
				onClick: () => setTheme("system"),
				children: "System"
			})
		]
	})] });
}
// resources/js/wayfinder/index.ts
var urlDefaults = () => ({});
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var clearParamFamily = (params, key) => {
	const toDelete = /* @__PURE__ */ new Set();
	params.forEach((_, paramKey) => {
		if (paramKey === key || paramKey.startsWith(`${key}[`)) toDelete.add(paramKey);
	});
	toDelete.forEach((paramKey) => params.delete(paramKey));
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (includeExisting) clearParamFamily(params, key);
		if (queryValue === void 0 || queryValue === null) continue;
		if (Array.isArray(queryValue)) queryValue.forEach((value) => {
			params.append(`${key}[]`, value.toString());
		});
		else if (typeof queryValue === "object") addNestedParams(queryValue, key, params);
		else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
var applyUrlDefaults = (existing) => {
	const existingParams = { ...existing ?? {} };
	const defaultParams = urlDefaults();
	for (const key in defaultParams) if (existingParams[key] === void 0 && defaultParams[key] !== void 0) existingParams[key] = defaultParams[key];
	return existingParams;
};
// resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
var home = (options) => ({
	url: home.url(options),
	method: "get"
});
home.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.url = (options) => {
	return home.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.get = (options) => ({
	url: home.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\HomePageIndexController::__invoke
* @see app/Http/Controllers/HomePageIndexController.php:13
* @route '/'
*/
home.head = (options) => ({
	url: home.url(options),
	method: "head"
});
// resources/js/components/navigation.tsx
var navLinks = [
	{
		name: "Home",
		href: home.url()
	},
	{
		name: "Services",
		href: "/services"
	},
	{
		name: "Projects",
		href: "/projects"
	},
	{
		name: "About Us",
		href: "/about-us"
	},
	{
		name: "FAQ",
		href: "/faq"
	}
];
function Navigation$1() {
	const { url } = usePage();
	const { stats } = useCompany();
	const isActive = (href) => href === "/" ? url === "/" : url.startsWith(href);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "bg-black/75 dark:bg-white/75 text-white/75 dark:text-black/75 text-[8px]  font-bold py-2.5 px-4 tracking-[0.2em] uppercase border-b border-border hidden sm:block",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "flex justify-between items-center w-full",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-6",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2 ",
					children: [/* @__PURE__ */ jsx(MapPin, { className: "size-3 text-primary" }), "Operating across South Africa"]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-6",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2 ",
					children: [
						/* @__PURE__ */ jsx(Clock, { className: "size-3 text-primary" }),
						"Available ",
						stats.availability.display
					]
				})
			})]
		})
	}), /* @__PURE__ */ jsx("nav", {
		className: "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/90 transition-all duration-300 shadow-sm",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "flex h-20 items-center justify-between",
			children: [
				/* @__PURE__ */ jsx(Link, {
					href: "/",
					prefetch: "hover",
					className: "flex items-center gap-2 group",
					children: /* @__PURE__ */ jsx("img", {
						src: logo_default,
						alt: "Teemane Heavy Haulage Logo",
						className: "h-11 w-auto transition-transform duration-300 group-hover:scale-105"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex md:items-center md:gap-8",
					children: [
						navLinks.map((link) => {
							const active = isActive(link.href);
							return /* @__PURE__ */ jsx(Link, {
								href: link.href,
								prefetch: "hover",
								className: `text-sm font-bold tracking-widest uppercase transition-colors px-2 py-1 rounded-md ${active ? "text-primary bg-primary/10" : "hover:text-primary"}`,
								children: link.name
							}, link.name);
						}),
						/* @__PURE__ */ jsx(Link, {
							href: "/contact-us",
							prefetch: "hover",
							className: "text-sm font-bold tracking-widest uppercase inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-5 py-2.5 rounded-lg",
							children: "Contact Us"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "pl-4 border-l border-border",
							children: /* @__PURE__ */ jsx(ModeToggle, {})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ jsx(ModeToggle, {}), /* @__PURE__ */ jsxs(Sheet, { children: [/* @__PURE__ */ jsx(SheetTrigger, { children: /* @__PURE__ */ jsxs("button", {
						className: "inline-flex size-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground",
						children: [/* @__PURE__ */ jsx(Menu, { className: "size-6" }), /* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: "Toggle menu"
						})]
					}) }), /* @__PURE__ */ jsxs(SheetContent, {
						side: "right",
						className: "w-[80vw] sm:w-87.5 bg-background border-l border-border flex flex-col p-0",
						children: [
							/* @__PURE__ */ jsx(SheetTitle, {
								className: "sr-only",
								children: "Navigation Menu"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex items-center gap-3 px-6 py-5 border-b border-border",
								children: /* @__PURE__ */ jsx("img", {
									src: logo_default,
									alt: "Teemane Cranes Logo",
									className: "h-9 w-auto"
								})
							}),
							/* @__PURE__ */ jsxs("nav", {
								className: "flex flex-col px-4 py-6 gap-1",
								children: [navLinks.map((link) => {
									const active = isActive(link.href);
									return /* @__PURE__ */ jsxs(Link, {
										href: link.href,
										prefetch: "hover",
										className: `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-200 ${active ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-accent"}`,
										children: [active && /* @__PURE__ */ jsx("span", { className: "w-1 h-4 rounded-full bg-primary shrink-0" }), link.name]
									}, link.name);
								}), /* @__PURE__ */ jsx(Link, {
									href: "/contact-us",
									prefetch: "hover",
									className: "mt-3 flex items-center justify-start gap-2 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow",
									children: "Contact Us"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-auto px-6 pb-8 space-y-2",
								children: [
									/* @__PURE__ */ jsx("div", { className: "h-px w-full bg-border mb-4" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold tracking-[0.2em] text-primary uppercase",
										children: "TEEMANE HEAVY HAULAGE"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-muted-foreground",
										children: "A Cut Above The Rest"
									})
								]
							})
						]
					})] })]
				})
			]
		})
	})] });
}
// resources/js/components/emergency-cta.tsx
function EmergencyCta() {
	const { stats, contact } = useCompany();
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground relative z-10 py-16 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-2 border-2 border-dashed border-primary-foreground/5"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-4 border-2 border-dashed border-primary-foreground/5"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-20 pointer-events-none",
				style: {
					backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
					backgroundSize: "24px 24px",
					maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
				}
			}),
			/* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-1 flex flex-col gap-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-xs border border-background/20 w-fit",
							children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "size-5 text-background" }), /* @__PURE__ */ jsxs("span", {
								className: "font-bold tracking-widest uppercase text-sm",
								children: [stats.availability.display, " Rapid Response"]
							})]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1.1]",
							children: "Emergencies Don't Wait For Business Hours."
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-primary-foreground/90 md:text-lg max-w-2xl leading-relaxed",
							children: [
								"Unexpected equipment failures and critical incidents demand immediate action. Our specialised rapid-response teams are on standby ",
								stats.availability.display,
								" to provide urgent crane lifting and transport solutions minimizing your downtime and mitigating potential losses."
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "shrink-0 w-full lg:w-auto",
					children: /* @__PURE__ */ jsxs("a", {
						href: `tel:${contact.phone_tel}`,
						className: "flex items-center justify-center gap-6 bg-background text-foreground hover:bg-background/95 transition-all hover:scale-105 duration-300 px-8 py-6 rounded-xl shadow-2xl group w-full lg:w-auto border border-border",
						children: [/* @__PURE__ */ jsx("div", {
							className: "bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-inner",
							children: /* @__PURE__ */ jsx(PhoneCall, { className: "size-8 text-primary group-hover:animate-pulse" })
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-left",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1",
								children: "Emergency Hotline"
							}), /* @__PURE__ */ jsx("span", {
								className: "block text-2xl md:text-3xl font-bold tracking-wider text-primary",
								children: contact.phone
							})]
						})]
					})
				})]
			}) })
		]
	});
}
// resources/js/components/diamond-component.tsx
function DiamondComponent(props) {
	return /* @__PURE__ */ jsx("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		"data-name": "Layer 1",
		viewBox: "0 0 111.2 95",
		fill: "currentColor",
		...props,
		children: /* @__PURE__ */ jsx("path", { d: "M111.2 25.2 96.4 1.9l-39.6 21zM0 25.2 15.1 1.9l39.3 21zM55.6 28.1 29.4 62l26.2 33 26.2-33zM83.6 59.4l26.9-31.3-53.7-2.9zM17.2 0l38.4 20.5L94.3 0zM27.6 59.4.9 28.1l53.5-2.9z" })
	});
}
// resources/js/components/ui/misc/dot-pattern.tsx
function DotPattern({ className, dotSize = 2, spacing = 24, style, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute inset-0 opacity-20 -translate-x-32 -translate-y-32 pointer-events-none text-muted-foreground", className),
		style: {
			backgroundImage: `radial-gradient(circle at ${dotSize}px ${dotSize}px, currentColor ${dotSize}px, transparent 0)`,
			backgroundSize: `${spacing}px ${spacing}px`,
			maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
			WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
			...style
		},
		...props
	});
}
// resources/js/components/ScrollVelocity.tsx
var smootherstep = (t) => t * t * t * (t * (t * 6 - 15) + 10);
var FADE_STEPS = Array.from({ length: 9 }, (_, i) => i / 8);
var FADE_MASK = `linear-gradient(to right, ${[...FADE_STEPS.map((t) => `rgba(0, 0, 0, ${smootherstep(t).toFixed(3)}) ${(t * 12).toFixed(1)}%`), ...FADE_STEPS.map((t) => `rgba(0, 0, 0, ${smootherstep(1 - t).toFixed(3)}) ${(88 + t * 12).toFixed(1)}%`)].join(", ")})`;
var OUTLINE_STYLE = {
	WebkitTextFillColor: "transparent",
	WebkitTextStroke: "max(1px, 0.028em) currentColor"
};
function wrap(min, max, v) {
	const range = max - min;
	return ((v - min) % range + range) % range + min;
}
function useElementWidth(ref) {
	const [width, setWidth] = useState(0);
	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;
		if (typeof ResizeObserver === "undefined") {
			const updateWidth = () => setWidth(element.offsetWidth);
			updateWidth();
			window.addEventListener("resize", updateWidth);
			return () => window.removeEventListener("resize", updateWidth);
		}
		const observer = new ResizeObserver(([entry]) => {
			setWidth(entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width);
		});
		observer.observe(element);
		return () => observer.disconnect();
	}, [ref]);
	return width;
}
function VelocityText({ children, baseVelocity, scrollContainerRef, className = "", damping, stiffness, numCopies, velocityMapping, parallaxClassName, scrollerClassName, parallaxStyle, scrollerStyle, separator, pauseOnHover, hoveredRef, skewWithVelocity, scaleWithVelocity, outline, gap, fontSize, fontWeight, color, draggable }) {
	const baseX = useMotionValue(0);
	const skewX = useMotionValue(0);
	const scaleY = useMotionValue(1);
	const { scrollY } = useScroll(scrollContainerRef ? { container: scrollContainerRef } : {});
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping,
		stiffness
	});
	const velocityFactor = useTransform(smoothVelocity, velocityMapping?.input || [0, 1e3], velocityMapping?.output || [0, 5], { clamp: false });
	const reduceMotion = useReducedMotion();
	const copyRef = useRef(null);
	const copyWidth = useElementWidth(copyRef);
	const x = useTransform(baseX, (v) => {
		if (copyWidth === 0) return "0px";
		return `${wrap(-copyWidth, 0, v)}px`;
	});
	const directionFactor = useRef(1);
	const pace = useRef(1);
	const fling = useRef(0);
	const drag = useRef({
		active: false,
		pointerId: -1,
		lastX: 0,
		lastTime: 0,
		velocity: 0,
		travel: 0
	});
	useAnimationFrame((t, delta) => {
		if (reduceMotion) return;
		const grab = drag.current;
		const seconds = Math.min(delta, 64) / 1e3;
		const targetPace = grab.active || pauseOnHover && hoveredRef.current ? 0 : 1;
		pace.current += (targetPace - pace.current) * (1 - Math.exp(-delta / 150));
		let moveBy = directionFactor.current * baseVelocity * (delta / 1e3);
		if (velocityFactor.get() < 0) directionFactor.current = -1;
		else if (velocityFactor.get() > 0) directionFactor.current = 1;
		moveBy += directionFactor.current * moveBy * velocityFactor.get();
		let travel = moveBy * pace.current;
		if (!grab.active && fling.current !== 0) {
			travel += fling.current * seconds;
			fling.current *= Math.exp(-delta / 420);
			if (Math.abs(fling.current) < 4) fling.current = 0;
		}
		baseX.set(baseX.get() + travel);
		if (!skewWithVelocity && !scaleWithVelocity && skewX.get() === 0 && scaleY.get() === 1) return;
		const thrown = grab.active ? grab.velocity : fling.current;
		const scrollSurge = Math.tanh(Math.abs(smoothVelocity.get()) / 1600) * pace.current;
		const throwSurge = Math.tanh(Math.abs(thrown) / 2e3);
		const surge = Math.max(scrollSurge, throwSurge);
		const heading = throwSurge > scrollSurge ? Math.sign(thrown) : Math.sign(travel) || directionFactor.current * Math.sign(baseVelocity);
		const ease = 1 - Math.exp(-delta / 110);
		const nextSkew = skewX.get() + (-heading * skewWithVelocity * surge - skewX.get()) * ease;
		const nextScale = scaleY.get() + (1 + scaleWithVelocity * surge - scaleY.get()) * ease;
		skewX.set(Math.abs(nextSkew) < .01 && !skewWithVelocity ? 0 : nextSkew);
		scaleY.set(Math.abs(nextScale - 1) < 5e-4 && !scaleWithVelocity ? 1 : nextScale);
	});
	const handlePointerDown = (event) => {
		if (!draggable || event.pointerType === "mouse" && event.button !== 0) return;
		const grab = drag.current;
		grab.active = true;
		grab.pointerId = event.pointerId;
		grab.lastX = event.clientX;
		grab.lastTime = event.timeStamp;
		grab.velocity = 0;
		grab.travel = 0;
		fling.current = 0;
		event.currentTarget.setPointerCapture?.(event.pointerId);
		event.currentTarget.style.cursor = "grabbing";
	};
	const handlePointerMove = (event) => {
		const grab = drag.current;
		if (!grab.active || event.pointerId !== grab.pointerId) return;
		const dx = event.clientX - grab.lastX;
		const dt = Math.max(event.timeStamp - grab.lastTime, 1);
		grab.lastX = event.clientX;
		grab.lastTime = event.timeStamp;
		grab.travel += Math.abs(dx);
		baseX.set(baseX.get() + dx);
		grab.velocity += (dx / dt * 1e3 - grab.velocity) * (1 - Math.exp(-dt / 50));
	};
	const handlePointerUp = (event) => {
		const grab = drag.current;
		if (!grab.active || event.pointerId !== grab.pointerId) return;
		grab.active = false;
		const resting = event.timeStamp - grab.lastTime > 90;
		fling.current = resting ? 0 : Math.max(-5e3, Math.min(5e3, grab.velocity));
		grab.velocity = 0;
		if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
		event.currentTarget.style.cursor = "grab";
	};
	const handleClickCapture = (event) => {
		if (drag.current.travel > 6) {
			event.preventDefault();
			event.stopPropagation();
		}
	};
	const spans = [];
	for (let i = 0; i < numCopies; i++) spans.push(/* @__PURE__ */ jsxs("span", {
		className: `flex-shrink-0 ${className}`,
		ref: i === 0 ? copyRef : null,
		"aria-hidden": i > 0 ? true : void 0,
		style: !separator && gap > 0 ? { paddingRight: gap } : void 0,
		children: [
			children,
			"\xA0",
			separator ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
				style: gap > 0 ? { margin: `0 ${gap / 2}px` } : void 0,
				children: separator
			}), "\xA0"] }) : null
		]
	}, i));
	const typeStyle = {
		...fontSize !== void 0 ? {
			fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
			lineHeight: 1
		} : {},
		...fontWeight !== void 0 ? { fontWeight } : {},
		...color ? { color } : {},
		...outline ? OUTLINE_STYLE : {}
	};
	return /* @__PURE__ */ jsx("div", {
		className: `${parallaxClassName} relative overflow-hidden`,
		style: {
			...draggable ? {
				cursor: "grab",
				userSelect: "none",
				WebkitUserSelect: "none",
				touchAction: "pan-y"
			} : {},
			...parallaxStyle
		},
		onPointerDown: draggable ? handlePointerDown : void 0,
		onPointerMove: draggable ? handlePointerMove : void 0,
		onPointerUp: draggable ? handlePointerUp : void 0,
		onPointerCancel: draggable ? handlePointerUp : void 0,
		onClickCapture: draggable ? handleClickCapture : void 0,
		children: /* @__PURE__ */ jsx(motion.div, {
			className: `${scrollerClassName} flex whitespace-nowrap text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]`,
			style: {
				x,
				skewX,
				scaleY,
				...typeStyle,
				...scrollerStyle
			},
			children: spans
		})
	});
}
var ScrollVelocity = ({ scrollContainerRef, texts = [], velocity = 100, className = "", damping = 50, stiffness = 400, numCopies = 6, velocityMapping = {
	input: [0, 1e3],
	output: [0, 5]
}, parallaxClassName = "parallax", scrollerClassName = "scroller", parallaxStyle, scrollerStyle, separator = "", pauseOnHover = false, fadeEdges = false, skewWithVelocity = 0, scaleWithVelocity = 0, outlineAlternate = false, gap = 0, fontSize, fontWeight, color, draggable = false }) => {
	const hoveredRef = useRef(false);
	return /* @__PURE__ */ jsx("section", {
		className: "w-full",
		style: fadeEdges ? {
			WebkitMaskImage: FADE_MASK,
			maskImage: FADE_MASK
		} : void 0,
		onPointerEnter: () => {
			hoveredRef.current = true;
		},
		onPointerLeave: () => {
			hoveredRef.current = false;
		},
		children: texts.map((text, index) => /* @__PURE__ */ jsx(VelocityText, {
			className,
			baseVelocity: index % 2 !== 0 ? -velocity : velocity,
			scrollContainerRef,
			damping,
			stiffness,
			numCopies,
			velocityMapping,
			parallaxClassName,
			scrollerClassName,
			parallaxStyle,
			scrollerStyle,
			separator,
			pauseOnHover,
			hoveredRef,
			skewWithVelocity,
			scaleWithVelocity,
			outline: outlineAlternate && index % 2 !== 0,
			gap,
			fontSize,
			fontWeight,
			color,
			draggable,
			children: text
		}, index))
	});
};
// resources/js/components/line2-divider.tsx
var paddingClasses = {
	compact: "py-8",
	normal: "py-16",
	spacious: "py-24",
	huge: "py-32"
};
var themeClasses = {
	primary: "bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground",
	dark: "bg-radial-[at_50%_85%] from-card/90 to-background text-foreground border-y border-border",
	muted: "bg-radial-[at_50%_85%] from-muted to-muted/80 text-foreground border-y border-border"
};
function Line2Divider({ className = "", containerClassName = "", iconClassName = "", showDiamond = true, showSideTexts = true, showDashedBorders = true, showBeam = true, showDots = true, leftText, rightText, velocity = 45, velocityTexts = ["TEEMANE CRANES", "A CUT ABOVE THE REST"], watermarkOpacity = .1, minHeight, paddingY = "normal", themeStyle = "primary", children, style, ...props }) {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => {
		setIsMounted(true);
	}, []);
	const minHeightStyle = minHeight ? typeof minHeight === "number" ? `${minHeight}px` : /^\d+$/.test(String(minHeight).trim()) ? `${minHeight}px` : String(minHeight) : void 0;
	const opacityNum = watermarkOpacity !== void 0 && watermarkOpacity !== null ? Number(watermarkOpacity) : .1;
	const leftDisplay = leftText !== void 0 ? leftText : "A CUT ABOVE";
	const rightDisplay = rightText !== void 0 ? rightText : "THE REST";
	const activePadding = paddingClasses[paddingY] || paddingClasses.normal;
	const activeTheme = themeClasses[themeStyle] || themeClasses.primary;
	return /* @__PURE__ */ jsxs("div", {
		className: cn("relative flex flex-col justify-center overflow-clip", activeTheme, activePadding, containerClassName, className),
		style: {
			minHeight: minHeightStyle,
			...style
		},
		...props,
		children: [
			showDots && /* @__PURE__ */ jsx(DotPattern, { className: cn("line2-divider-dots top-0", themeStyle === "primary" ? "text-primary-foreground/50" : "text-muted-foreground/30") }),
			showBeam && /* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: "line2-divider-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
			}),
			/* @__PURE__ */ jsx("div", {
				"aria-hidden": "true",
				className: cn("pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2", themeStyle === "primary" ? "text-primary-foreground" : "text-foreground"),
				style: { opacity: isNaN(opacityNum) ? .1 : opacityNum },
				children: isMounted ? /* @__PURE__ */ jsx(ScrollVelocity, {
					texts: velocityTexts,
					velocity,
					damping: 50,
					stiffness: 400,
					numCopies: 6,
					skewWithVelocity: 4,
					outlineAlternate: true,
					fadeEdges: true,
					gap: 48,
					separator: "◆",
					scrollerClassName: "font-heading !text-[7.5vw] sm:!text-[6vw] xl:!text-[84px] !leading-[1.05] !font-black uppercase !tracking-tighter !drop-shadow-none"
				}) : /* @__PURE__ */ jsx("div", {
					className: "text-center font-heading text-[11vw] xl:text-[140px] font-black uppercase tracking-tighter leading-none whitespace-nowrap",
					children: "TEEMANE CRANES"
				})
			}),
			showDashedBorders && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: cn("pointer-events-none absolute inset-2 border-2 border-dashed", themeStyle === "primary" ? "border-primary-foreground/10" : "border-border/60")
			}), /* @__PURE__ */ jsx("div", {
				"aria-hidden": true,
				className: cn("pointer-events-none absolute inset-4 border-2 border-dashed", themeStyle === "primary" ? "border-primary-foreground/10" : "border-border/60")
			})] }),
			/* @__PURE__ */ jsx(Wrapper, {
				className: "relative z-10 flex items-center justify-center",
				children: children ?? /* @__PURE__ */ jsxs("div", {
					className: "flex w-full items-center justify-center gap-4 sm:gap-6",
					children: [
						showSideTexts && leftDisplay && /* @__PURE__ */ jsx("div", {
							className: "relative flex flex-1 items-center justify-end gap-4",
							children: /* @__PURE__ */ jsx("span", {
								className: cn("hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap", themeStyle === "primary" ? "text-primary-foreground" : "text-foreground"),
								children: leftDisplay
							})
						}),
						showDiamond && /* @__PURE__ */ jsxs("div", {
							className: cn("line2-divider-box relative flex items-center justify-center px-7 py-5 border-2 shadow-sm shrink-0", themeStyle === "primary" ? "border-primary-foreground/55" : "border-primary/60 bg-background/50"),
							children: [
								/* @__PURE__ */ jsx("span", { className: cn("absolute -top-1 -left-1 size-2.5 border-t-2 border-l-2", themeStyle === "primary" ? "border-primary-foreground/90" : "border-primary") }),
								/* @__PURE__ */ jsx("span", { className: cn("absolute -top-1 -right-1 size-2.5 border-t-2 border-r-2", themeStyle === "primary" ? "border-primary-foreground/90" : "border-primary") }),
								/* @__PURE__ */ jsx("span", { className: cn("absolute -bottom-1 -left-1 size-2.5 border-b-2 border-l-2", themeStyle === "primary" ? "border-primary-foreground/90" : "border-primary") }),
								/* @__PURE__ */ jsx("span", { className: cn("absolute -bottom-1 -right-1 size-2.5 border-b-2 border-r-2", themeStyle === "primary" ? "border-primary-foreground/90" : "border-primary") }),
								/* @__PURE__ */ jsx("span", { className: cn("line2-divider-ring pointer-events-none absolute size-16 sm:size-18 rounded-full border border-dashed", themeStyle === "primary" ? "border-primary-foreground/35" : "border-primary/40") }),
								/* @__PURE__ */ jsx(DiamondComponent, { className: cn("relative z-10 w-9 sm:w-11 h-auto", themeStyle === "primary" ? "text-primary-foreground" : "text-primary", iconClassName) })
							]
						}),
						showSideTexts && rightDisplay && /* @__PURE__ */ jsx("div", {
							className: "relative flex flex-1 items-center justify-start gap-4",
							children: /* @__PURE__ */ jsx("span", {
								className: cn("hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap", themeStyle === "primary" ? "text-primary-foreground" : "text-foreground"),
								children: rightDisplay
							})
						})
					]
				})
			})
		]
	});
}
Line2Divider.displayName = "Line2Divider";
// resources/js/layouts/app-layout.tsx
var Map = lazy(() => import("./map-wy_hk-6l.js"));
function AppLayout({ children, title, description, image }) {
	const [mounted, setMounted] = useState(false);
	const { url } = usePage();
	const { stats } = useCompany();
	useEffect(() => setMounted(true), []);
	const defaultTitle = "Teemane Cranes";
	const siteTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
	const siteDescription = description || `The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since ${stats.established_year.display}.`;
	const siteImage = image || "/images/logo.svg";
	const fullUrl = typeof window !== "undefined" ? window.location.href : url;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground transition-colors duration-300 max-w-full overflow-x-clip",
		children: [
			/* @__PURE__ */ jsxs(Head, { children: [
				title ? /* @__PURE__ */ jsx("title", { children: title }) : /* @__PURE__ */ jsx("title", { children: defaultTitle }),
				/* @__PURE__ */ jsx("meta", {
					name: "description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:type",
					content: "website"
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:url",
					content: fullUrl
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:title",
					content: siteTitle
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					property: "og:image",
					content: siteImage
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:card",
					content: "summary_large_image"
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:url",
					content: fullUrl
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:title",
					content: siteTitle
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:description",
					content: siteDescription
				}),
				/* @__PURE__ */ jsx("meta", {
					name: "twitter:image",
					content: siteImage
				})
			] }),
			/* @__PURE__ */ jsx("a", {
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm",
				href: "#main",
				children: "Go to main content"
			}),
			/* @__PURE__ */ jsx("div", {
				id: "background-gradient",
				className: ` w-full min-h-180 absolute opacity-50 z-0 top-0 inset-x-0 bg-[radial-gradient(ellipse_at_bottom,transparent_70%,var(--color-primary))]  pointer-events-none `,
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx(Navigation$1, {}),
			/* @__PURE__ */ jsx("main", {
				id: `main`,
				className: "w-full flex-1 flex flex-col",
				children
			}),
			/* @__PURE__ */ jsx(Line2Divider, {}),
			mounted && /* @__PURE__ */ jsx(Suspense, {
				fallback: null,
				children: /* @__PURE__ */ jsx(Map, {})
			}),
			/* @__PURE__ */ jsx(EmergencyCta, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(Toaster, {})
		]
	});
}
export { applyUrlDefaults as a, Button$1 as c, SectionOverline as d, Wrapper as f, EmergencyCta as i, buttonVariants as l, toStorageUrl as m, Line2Divider as n, queryParams as o, cn as p, DotPattern as r, toast as s, AppLayout as t, useCompany as u };

//# sourceMappingURL=app-layout-BVKxyd20.js.map