import { useState, useCallback, useRef, useEffect } from 'react';
import type { ImageOrientation } from '@/components/project/types';

export interface UseImageAspectRatioOptions {
    initialAspectRatio?: number | null;
    initialOrientation?: ImageOrientation | null;
    onDimensionsChange?: (dimensions: {
        width: number;
        height: number;
        aspectRatio: number;
        orientation: ImageOrientation;
    }) => void;
}

/**
 * Hook to dynamically calculate image aspect ratio and orientation directly
 * from the browser's rendered natural image dimensions, with fallback to initial props.
 */
export function useImageAspectRatio(options: UseImageAspectRatioOptions = {}) {
    const { initialAspectRatio, initialOrientation, onDimensionsChange } = options;

    const [aspectRatio, setAspectRatio] = useState<number | null>(initialAspectRatio ?? null);
    const [orientation, setOrientation] = useState<ImageOrientation>(initialOrientation ?? 'landscape');
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const updateFromImage = useCallback((img: HTMLImageElement) => {
        if (!img.naturalWidth || !img.naturalHeight) {
            return;
        }

        const width = img.naturalWidth;
        const height = img.naturalHeight;
        const ratio = Number((width / height).toFixed(3));
        const newOrientation: ImageOrientation = ratio > 1.05 ? 'landscape' : (ratio < 0.95 ? 'portrait' : 'square');

        setAspectRatio(ratio);
        setOrientation(newOrientation);
        setIsLoaded(true);

        onDimensionsChange?.({
            width,
            height,
            aspectRatio: ratio,
            orientation: newOrientation,
        });
    }, [onDimensionsChange]);

    const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
        updateFromImage(event.currentTarget);
    }, [updateFromImage]);

    // Check if image is already loaded from cache on mount or when ref changes
    useEffect(() => {
        if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
            updateFromImage(imgRef.current);
        }
    }, [updateFromImage]);

    return {
        aspectRatio,
        orientation,
        isLoaded,
        imgRef,
        handleLoad,
        containerStyle: aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined,
    };
}
