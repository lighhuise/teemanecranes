import { c as cn } from "./app-layout-DjyJ2qIA.js";
import { jsx } from "react/jsx-runtime";
import "react";
//#region resources/js/components/ui/misc/dot-pattern.tsx
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
//#endregion
export { DotPattern as t };

//# sourceMappingURL=dot-pattern-Dth4XF_L.js.map