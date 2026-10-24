import { l as cn } from "./app-layout-DgCw17Rw.js";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/ui/misc/background-text.tsx
function BackgroundText({ children, position = "left", className }) {
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": true,
		className: cn("text-[20vh] pointer-events-none opacity-5 absolute top-2 xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground", {
			left: "left-3",
			center: "left-1/2 -translate-x-1/2",
			right: "right-3"
		}[position], className),
		children
	});
}
//#endregion
export { BackgroundText as t };

//# sourceMappingURL=background-text-COfE04Lg.js.map