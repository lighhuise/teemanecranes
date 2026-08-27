import { s as Wrapper } from "./app-layout-0hJMmrhr.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { MapPin, Navigation } from "lucide-react";
//#region resources/js/components/map.tsx
function Map() {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	const position = [-33.9317, 18.6473];
	if (!mounted) return /* @__PURE__ */ jsx("section", {
		className: "bg-background relative z-10 w-full mb-24 mt-12",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx("div", {
			className: "w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center",
			children: /* @__PURE__ */ jsx("span", {
				className: "text-muted-foreground animate-pulse font-medium tracking-widest uppercase",
				children: "Loading Map..."
			})
		}) })
	});
	const customMarkerIcon = L.divIcon({
		className: "custom-marker",
		html: `<div style="background-color: var(--primary); width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--background); box-shadow: 0 0 20px var(--primary); display: flex; align-items: center; justify-content: center; position: relative; top: -14px; left: -14px;"><div style="background-color: var(--background); width: 8px; height: 8px; border-radius: 50%;"></div></div>`,
		iconSize: [0, 0]
	});
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background relative z-10 w-full pb-24 pt-12",
		children: /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col gap-10",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-4 max-w-2xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-4",
							children: [/* @__PURE__ */ jsx("div", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-bold text-primary tracking-widest uppercase",
								children: "Headquarters"
							})]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-5xl font-black uppercase text-foreground leading-[1.1]",
							children: "Find Us On The Map"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground md:text-lg leading-relaxed pt-2",
							children: "Centrally located to rapidly deploy cranes, rigging teams, and heavy transport equipment anywhere across the Western Cape."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row gap-6 sm:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 border-l-4 border-primary/20 pl-4 py-1",
						children: [/* @__PURE__ */ jsx("div", {
							className: "shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full",
							children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "block text-foreground font-bold mb-1",
							children: "Address"
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-muted-foreground text-sm",
							children: [
								"6 Van Eck St, Bellville South,",
								/* @__PURE__ */ jsx("br", {}),
								"Cape Town, 7530"
							]
						})] })]
					}), /* @__PURE__ */ jsxs("a", {
						href: "https://maps.google.com/?q=-33.9317,18.6473",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-6 py-4 rounded-lg group shrink-0",
						children: [/* @__PURE__ */ jsx(Navigation, { className: "w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" }), "Get Directions"]
					})]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative w-full h-[400px] lg:h-[550px] rounded-xl overflow-hidden border-2 border-border shadow-[0_0_40px_-15px_var(--primary)] group grayscale-[0.2] hover:grayscale-0 transition-all duration-700",
				children: [/* @__PURE__ */ jsxs(MapContainer, {
					center: position,
					zoom: 16,
					scrollWheelZoom: false,
					className: "w-full h-full relative z-0",
					style: { zIndex: 0 },
					children: [/* @__PURE__ */ jsx(TileLayer, {
						attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>",
						url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					}), /* @__PURE__ */ jsx(Marker, {
						position,
						icon: customMarkerIcon,
						children: /* @__PURE__ */ jsx(Popup, { children: /* @__PURE__ */ jsxs("div", {
							className: "font-sans leading-relaxed text-center",
							children: [/* @__PURE__ */ jsx("strong", {
								className: "text-base text-primary font-bold tracking-tight block mb-1",
								children: "Teemane Cranes"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm text-foreground",
								children: "6 Van Eck St, Bellville South"
							})]
						}) })
					})]
				}), /* @__PURE__ */ jsx("style", { children: `
                            html.dark .leaflet-tile-pane {
                                filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
                            }
                        ` })]
			})]
		}) })
	});
}
//#endregion
export { Map as default };

//# sourceMappingURL=map-B2VGWyLI.js.map