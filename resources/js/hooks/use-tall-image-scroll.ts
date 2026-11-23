import { useState, useCallback, useRef, useEffect, type CSSProperties, type SyntheticEvent } from 'react';

export interface UseTallImageScrollOptions {
    /** Fixed container aspect ratio (width / height). Defaults to 16 / 10 (1.6). */
    containerAspectRatio?: number;
    /** Optional server-provided aspect ratio (width / height) for immediate SSR/initial state. */
    initialAspectRatio?: number | null;
    /** Enable/disable tall image scroll behavior (e.g. only for uniform grid cards). */
    enabled?: boolean;
    /** Image source URL so cached images are re-measured when src changes. */
    src?: string;
}

const TALL_RATIO_EPSILON = 0.05;

/**
 * Detects when an image is taller than its fixed-aspect-ratio card container
 * and returns CSS custom properties so hovering the parent `.group` card smoothly
 * scrolls the image from top to bottom.
 */
export function useTallImageScroll({
    containerAspectRatio = 16 / 10,
    initialAspectRatio = null,
    enabled = true,
    src,
}: UseTallImageScrollOptions = {}) {
    const [naturalRatio, setNaturalRatio] = useState<number | null>(initialAspectRatio ?? null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const measureImage = useCallback((img: HTMLImageElement) => {
        if (!img.naturalWidth || !img.naturalHeight) {
            return;
        }

        setNaturalRatio(img.naturalWidth / img.naturalHeight);
    }, []);

    const handleLoad = useCallback(
        (event: SyntheticEvent<HTMLImageElement>) => {
            measureImage(event.currentTarget);
        },
        [measureImage],
    );

    useEffect(() => {
        if (!enabled) {
            return;
        }

        if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
            measureImage(imgRef.current);
        }
    }, [enabled, src, measureImage]);

    const isTall =
        enabled &&
        naturalRatio !== null &&
        naturalRatio > 0 &&
        naturalRatio < containerAspectRatio - TALL_RATIO_EPSILON;

    let scrollStyle: CSSProperties | undefined;

    if (isTall && naturalRatio !== null) {
        const scrollPercent = Math.max(0, (1 - naturalRatio / containerAspectRatio) * 100);
        const extraHeights = containerAspectRatio / naturalRatio - 1;
        const durationMs = Math.min(5500, Math.max(1200, Math.round(extraHeights * 2200)));

        scrollStyle = {
            '--card-image-scroll-y': `-${scrollPercent.toFixed(3)}%`,
            transitionDuration: `${durationMs}ms`,
        } as CSSProperties;
    }

    return {
        imgRef,
        handleLoad,
        isTall,
        scrollStyle,
    };
}
