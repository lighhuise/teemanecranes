import { Head, Link, usePage } from "@inertiajs/react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Suspense, createContext, lazy, useContext, useEffect, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AlertTriangle, ArrowRight, CircleCheckIcon, Clock, InfoIcon, Loader2Icon, Mail, MapPin, Menu, Moon, OctagonXIcon, Phone, PhoneCall, Sun, TriangleAlertIcon, XIcon } from "lucide-react";
import { Toast } from "@base-ui/react/toast";
import { Button } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { Dialog } from "@base-ui/react/dialog";
import { Menu as Menu$1 } from "@base-ui/react/menu";
//#region resources/js/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region resources/js/components/ui/misc/wrapper.tsx
function Wrapper({ className, as, children, ...props }) {
	return /* @__PURE__ */ jsx(as || "div", {
		className: cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className),
		...props,
		children
	});
}
Wrapper.displayName = "Wrapper";
//#endregion
//#region resources/images/logo.svg
var logo_default = "/build/assets/logo--6nxw50_.svg";
//#endregion
//#region resources/js/components/footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-muted  z-5 text-muted-foreground relative overflow-hidden pt-24 pb-12 border-t-6 border-primary",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden",
			children: /* @__PURE__ */ jsx("h2", {
				className: "text-[20vh] xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground",
				children: "TEEMANE"
			})
		}), /* @__PURE__ */ jsxs(Wrapper, {
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
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground leading-relaxed max-w-sm",
								children: "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-4 mt-4",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4 text-sm font-bold tracking-widest text-foreground uppercase",
									children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), "A Cut Above The Rest"]
								})
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-3 lg:col-start-6",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-foreground text-lg font-bold mb-8 tracking-widest uppercase",
							children: "Navigation"
						}), /* @__PURE__ */ jsx("ul", {
							className: "flex flex-col gap-4",
							children: [
								{
									name: "Home",
									href: "/"
								},
								{
									name: "About Us",
									href: "/about-us"
								},
								{
									name: "Services",
									href: "/services"
								},
								{
									name: "Contact Us",
									href: "/contact-us"
								}
							].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
								href: item.href,
								className: "text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-fit font-medium",
								children: [/* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" }), /* @__PURE__ */ jsx("span", { children: item.name })]
							}) }, item.name))
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-foreground text-lg font-bold mb-8 tracking-widest uppercase",
							children: "Contact Us"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "flex flex-col gap-6",
							children: [
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-primary shrink-0 mt-1" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "block text-foreground font-bold mb-1",
										children: "Address"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "6 Van Eck St, Bellville South, Cape Town, 7530"
									})] })]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "084 263 7690"
									})]
								}),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-primary shrink-0" }), /* @__PURE__ */ jsx("span", {
										className: "text-muted-foreground",
										children: "enquiries@teemanecranes.co.za"
									})]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium",
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
		})]
	});
}
//#endregion
//#region resources/js/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-sm hover:shadow transition-all",
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
//#endregion
//#region resources/js/components/ui/toast.tsx
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
//#endregion
//#region resources/js/components/ui/sheet.tsx
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
//#endregion
//#region resources/js/components/ui/dropdown-menu.tsx
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
//#endregion
//#region resources/js/components/theme-provider.tsx
var ThemeProviderContext = createContext({
	theme: "system",
	setTheme: () => null
});
var useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
//#endregion
//#region resources/js/components/mode-toggle.tsx
function ModeToggle() {
	const { setTheme } = useTheme();
	return /* @__PURE__ */ jsxs(DropdownMenu, { children: [/* @__PURE__ */ jsxs(DropdownMenuTrigger, {
		render: /* @__PURE__ */ jsx(Button$1, {
			variant: "ghost",
			size: "icon"
		}),
		children: [
			/* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
			/* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
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
//#endregion
//#region resources/js/wayfinder/index.ts
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
//#endregion
//#region resources/js/routes/index.ts
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
//#endregion
//#region resources/js/components/navigation.tsx
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
		name: "About Us",
		href: "/about-us"
	}
];
function Navigation$1() {
	const { url } = usePage();
	const isActive = (href) => href === "/" ? url === "/" : url.startsWith(href);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "bg-foreground text-background text-[8px]  font-bold py-2.5 px-4 tracking-[0.2em] uppercase border-b border-border hidden sm:block",
		children: /* @__PURE__ */ jsxs(Wrapper, {
			className: "flex justify-between items-center w-full",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-6",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2 text-background/80",
					children: [/* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3 text-primary" }), "Operating across South Africa"]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex items-center gap-6",
				children: /* @__PURE__ */ jsxs("span", {
					className: "flex items-center gap-2 text-background/80",
					children: [/* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-primary" }), "Available 24/7"]
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
						alt: "Teemane Cranes Logo",
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
							className: "text-sm font-bold tracking-widest uppercase inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-5 py-2.5 rounded-lg",
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
						className: "inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground",
						children: [/* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("span", {
							className: "sr-only",
							children: "Toggle menu"
						})]
					}) }), /* @__PURE__ */ jsxs(SheetContent, {
						side: "right",
						className: "w-[80vw] sm:w-[350px] bg-background border-l border-border flex flex-col p-0",
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
									className: "mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow",
									children: "Contact Us"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-auto px-6 pb-8 space-y-2",
								children: [
									/* @__PURE__ */ jsx("div", { className: "h-px w-full bg-border mb-4" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold tracking-[0.2em] text-primary uppercase",
										children: "TEEMANE CRANES"
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
//#endregion
//#region resources/js/components/emergency-cta.tsx
function EmergencyCta() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground relative z-10 py-16 overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 opacity-20 pointer-events-none",
			style: {
				backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
				backgroundSize: "24px 24px",
				maskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)",
				WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 80%)"
			}
		}), /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex-1 space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-sm border border-background/20",
						children: [/* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-background" }), /* @__PURE__ */ jsx("span", {
							className: "font-bold tracking-widest uppercase text-sm",
							children: "24/7 Rapid Response"
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tight",
						children: "Emergencies Don't Wait For Business Hours."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-primary-foreground/90 md:text-lg max-w-2xl leading-relaxed",
						children: "Unexpected equipment failures and critical incidents demand immediate action. Our specialized rapid-response teams are on standby 24/7 to provide urgent crane lifting and transport solutions minimizing your downtime and mitigating potential losses."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "shrink-0 w-full lg:w-auto",
				children: /* @__PURE__ */ jsxs("a", {
					href: "tel:0842637690",
					className: "flex items-center justify-center gap-6 bg-background text-foreground hover:bg-background/95 transition-all hover:scale-105 duration-300 px-8 py-6 rounded-xl shadow-2xl group w-full lg:w-auto border border-border",
					children: [/* @__PURE__ */ jsx("div", {
						className: "bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-inner",
						children: /* @__PURE__ */ jsx(PhoneCall, { className: "w-8 h-8 text-primary group-hover:animate-pulse" })
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-left",
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1",
							children: "Emergency Hotline"
						}), /* @__PURE__ */ jsx("span", {
							className: "block text-2xl md:text-3xl font-black tracking-tight text-primary",
							children: "084 263 7690"
						})]
					})]
				})
			})]
		}) })]
	});
}
//#endregion
//#region resources/js/layouts/app-layout.tsx
var Map = lazy(() => import("./map-DLWBcy8B.js"));
function AppLayout({ children, title }) {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground transition-colors duration-300 ",
		children: [
			title && /* @__PURE__ */ jsx(Head, { title }),
			/* @__PURE__ */ jsx("a", {
				className: "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm",
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
//#endregion
export { Button$1 as a, cn as c, toast as i, applyUrlDefaults as n, buttonVariants as o, queryParams as r, Wrapper as s, AppLayout as t };

//# sourceMappingURL=app-layout-BR8Y0Ow7.js.map