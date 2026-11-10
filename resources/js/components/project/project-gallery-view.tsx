import React from 'react';
// @ts-ignore
import { BalancedMasonryGrid, Frame } from '@masonry-grid/react';
import { Expand } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectImageItem } from './types';

export type GalleryLayoutStyle = 'masonry';

interface ProjectGalleryViewProps {
    images: ProjectImageItem[];
    projectTitle?: string;
    onImageClick: (index: number) => void;
    defaultStyle?: string;
    className?: string;
    showControls?: boolean;
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
                {images.map((item, idx) => {
                    const isPortrait = item.orientation === 'portrait';
                    const isSquare = item.orientation === 'square';
                    const width = item.width ?? (item.aspect_ratio ? Math.round(item.aspect_ratio * 1000) : (isPortrait ? 800 : isSquare ? 1000 : 1400));
                    const height = item.height ?? (item.aspect_ratio ? 1000 : (isPortrait ? 1200 : isSquare ? 1000 : 900));

                    return (
                        <Frame key={idx} width={width} height={height}>
                            <button
                                type="button"
                                onClick={() => onImageClick(idx)}
                                className="group relative h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-card cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-primary flex items-center justify-center block"
                            >
                                <img
                                    src={item.url}
                                    alt={`${projectTitle} - Photo #${idx + 1}`}
                                    className="h-full w-full object-contain block "
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
                })}
            </BalancedMasonryGrid>
        </div>
    );
}
