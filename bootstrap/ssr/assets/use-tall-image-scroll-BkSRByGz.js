import { useCallback, useEffect, useRef, useState } from "react";
// resources/images/IMG_0190-copy.webp
var IMG_0190_copy_default = "/build/assets/IMG_0190-copy-870kN3in.webp";
// resources/js/hooks/use-tall-image-scroll.ts
var TALL_RATIO_EPSILON = .05;
/**
* Detects when an image is taller than its fixed-aspect-ratio card container
* and returns CSS custom properties so hovering the parent `.group` card smoothly
* scrolls the image from top to bottom.
*/
function useTallImageScroll({ containerAspectRatio = 16 / 10, initialAspectRatio = null, enabled = true, src } = {}) {
	const [naturalRatio, setNaturalRatio] = useState(initialAspectRatio ?? null);
	const imgRef = useRef(null);
	const measureImage = useCallback((img) => {
		if (!img.naturalWidth || !img.naturalHeight) return;
		setNaturalRatio(img.naturalWidth / img.naturalHeight);
	}, []);
	const handleLoad = useCallback((event) => {
		measureImage(event.currentTarget);
	}, [measureImage]);
	useEffect(() => {
		if (!enabled) return;
		if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) measureImage(imgRef.current);
	}, [
		enabled,
		src,
		measureImage
	]);
	const isTall = enabled && naturalRatio !== null && naturalRatio > 0 && naturalRatio < containerAspectRatio - TALL_RATIO_EPSILON;
	let scrollStyle;
	if (isTall && naturalRatio !== null) {
		const scrollPercent = Math.max(0, (1 - naturalRatio / containerAspectRatio) * 100);
		const extraHeights = containerAspectRatio / naturalRatio - 1;
		const durationMs = Math.min(5500, Math.max(1200, Math.round(extraHeights * 2200)));
		scrollStyle = {
			"--card-image-scroll-y": `-${scrollPercent.toFixed(3)}%`,
			transitionDuration: `${durationMs}ms`
		};
	}
	return {
		imgRef,
		handleLoad,
		isTall,
		scrollStyle
	};
}
export { IMG_0190_copy_default as n, useTallImageScroll as t };

//# sourceMappingURL=use-tall-image-scroll-BkSRByGz.js.map