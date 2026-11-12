import React from 'react';
// @ts-ignore
import { BalancedMasonryGrid, Frame } from '@masonry-grid/react';
import { Expand } from 'lucide-react';
import { cn, toStorageUrl } from '@/lib/utils';
import type { ProjectImageItem } from './types';
import DotPattern from "@/components/dot-pattern";

export type GalleryLayoutStyle = 'masonry';

interface ProjectGalleryViewProps {
    images: ProjectImageItem[];
    projectTitle?: string;
    onImageClick: (index: number) => void;
    defaultStyle?: string;
    className?: string;
    showControls?: boolean;
}

interface GalleryGridFrameItemProps {
    item: ProjectImageItem;
    idx: number;
    projectTitle: string;
    onImageClick: (index: number) => void;
}

function GalleryGridFrameItem({
    item,
    idx,
    projectTitle,
    onImageClick,
}: GalleryGridFrameItemProps) {
    const isPortrait = item.orientation === 'portrait';
    const isSquare = item.orientation === 'square';
    const fallbackWidth = item.width ?? (item.aspect_ratio ? Math.round(item.aspect_ratio * 1000) : (isPortrait ? 800 : isSquare ? 1000 : 1400));
    const fallbackHeight = item.height ?? (item.aspect_ratio ? 1000 : (isPortrait ? 1200 : isSquare ? 1000 : 900));

    const [dimensions, setDimensions] = React.useState({ width: fallbackWidth, height: fallbackHeight });
    const imgRef = React.useRef<HTMLImageElement | null>(null);
    const imageUrl = toStorageUrl(item.url);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const img = e.currentTarget;
        if (img.naturalWidth && img.naturalHeight) {
            setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
        }
    };

    React.useEffect(() => {
        if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
            setDimensions({ width: imgRef.current.naturalWidth, height: imgRef.current.naturalHeight });
        }
    }, [imageUrl]);

    return (
        <Frame width={dimensions.width} height={dimensions.height}>
            <button
                type="button"
                onClick={() => onImageClick(idx)}
                className="group relative h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-card cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-primary flex items-center justify-center block"
            >
                <img
                    ref={imgRef}
                    src={imageUrl}
                    alt={`${projectTitle} - Photo #${idx + 1}`}
                    onLoad={handleLoad}
                    className="h-full w-full object-cover block"
                    loading="lazy"
                />

                {/* Hover Expand Button */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                        <Expand className="size-4" />
                    </div>
                </div>
            </button>
        </Frame>
    );
}

export function ProjectGalleryView({
    images,
    projectTitle = 'Project Capture',
    onImageClick,
    className,
    showControls = true,
}: ProjectGalleryViewProps) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className={`relative overflow-clip`}>
            <div className={cn('space-y-6', className)}>
            {/* Header info badge */}
            {showControls && (
                <div className="flex items-center justify-between pb-3 border-b border-border/80">
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-primary" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                            {images.length} High-Res {images.length === 1 ? 'Capture' : 'Captures'}
                        </span>
                    </div>
                </div>
            )}

            {/* Pure Masonry Grid (Powered by @masonry-grid/react with exact intrinsic aspect ratios) */}
            <BalancedMasonryGrid frameWidth={300} gap={16}>
                {images.map((item, idx) => (
                    <GalleryGridFrameItem
                        key={idx}
                        item={item}
                        idx={idx}
                        projectTitle={projectTitle}
                        onImageClick={onImageClick}
                    />
                ))}
            </BalancedMasonryGrid>
        </div>
        </div>
    );
}
