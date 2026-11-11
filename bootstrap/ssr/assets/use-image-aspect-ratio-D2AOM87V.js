import { useCallback, useEffect, useRef, useState } from "react";
// resources/images/IMG_0190-copy.webp
var IMG_0190_copy_default = "/build/assets/IMG_0190-copy-870kN3in.webp";
// resources/js/hooks/use-image-aspect-ratio.ts
/**
* Hook to dynamically calculate image aspect ratio and orientation directly
* from the browser's rendered natural image dimensions, with fallback to initial props.
*/
function useImageAspectRatio(options = {}) {
	const { initialAspectRatio, initialOrientation, onDimensionsChange } = options;
	const [aspectRatio, setAspectRatio] = useState(initialAspectRatio ?? null);
	const [orientation, setOrientation] = useState(initialOrientation ?? "landscape");
	const [isLoaded, setIsLoaded] = useState(false);
	const imgRef = useRef(null);
	const updateFromImage = useCallback((img) => {
		if (!img.naturalWidth || !img.naturalHeight) return;
		const width = img.naturalWidth;
		const height = img.naturalHeight;
		const ratio = Number((width / height).toFixed(3));
		const newOrientation = ratio > 1.05 ? "landscape" : ratio < .95 ? "portrait" : "square";
		setAspectRatio(ratio);
		setOrientation(newOrientation);
		setIsLoaded(true);
		onDimensionsChange?.({
			width,
			height,
			aspectRatio: ratio,
			orientation: newOrientation
		});
	}, [onDimensionsChange]);
	const handleLoad = useCallback((event) => {
		updateFromImage(event.currentTarget);
	}, [updateFromImage]);
	useEffect(() => {
		if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) updateFromImage(imgRef.current);
	}, [updateFromImage]);
	return {
		aspectRatio,
		orientation,
		isLoaded,
		imgRef,
		handleLoad,
		containerStyle: aspectRatio ? { aspectRatio: `${aspectRatio}` } : void 0
	};
}
export { IMG_0190_copy_default as n, useImageAspectRatio as t };

//# sourceMappingURL=use-image-aspect-ratio-D2AOM87V.js.map