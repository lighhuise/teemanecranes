import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Camera, Images, Video } from 'lucide-react';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';

export interface ProjectListItem {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    featured_image_url?: string | null;
    gallery_image_urls?: string[];
    galleries_with_urls?: Array<{
        title: string;
        description: string | null;
        images: string[];
        image_urls: string[];
    }>;
    video_url?: string | null;
    embed_video_url?: string | null;
    project_date?: string | null;
    project_date_raw?: string | null;
    total_images?: number;
}

interface ProjectCardProps {
    project: ProjectListItem;
    index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const mainImageUrl =
        project.featured_image_url ||
        project.gallery_image_urls?.[0] ||
        project.galleries_with_urls?.[0]?.image_urls?.[0] ||
        fallbackImage;

    const allImages = Array.from(
        new Set([
            mainImageUrl,
            ...(project.gallery_image_urls || []),
            ...(project.galleries_with_urls?.flatMap((g) => g.image_urls) || []),
        ])
    ).filter(Boolean);

    const [activeImage, setActiveImage] = useState<string>(mainImageUrl);

    const totalPhotos =
        project.total_images ?? (allImages.length > 0 ? allImages.length : 1);

    // Show up to 4 preview thumbnails from the project collection
    const previewTiles = allImages.slice(0, 4);

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border/80 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10 aspect-4/5 sm:aspect-3/4 min-h-[460px]"
        >
            {/* Background Image with Zoom Effect & Multi-Image Switcher */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-muted">
                <img
                    key={activeImage}
                    src={activeImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Layered Vignette & Gradients (Light Mode & Dark Mode) */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/85 via-45% to-transparent dark:from-black/95 dark:via-black/50 dark:via-50% dark:to-black/25 transition-all duration-500 group-hover:via-background/90 dark:group-hover:via-black/60" />
                <div className="absolute inset-0 bg-radial-[at_top_right] from-primary/10 dark:from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Top Floating Meta Bar */}
            <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
                {/* Category / Date Pill */}
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    <span>{project.project_date || 'Case Study'}</span>
                </span>

                <div className="flex items-center gap-2">
                    {/* Video indicator badge */}
                    {project.video_url && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white px-2.5 py-1.5 text-[11px] font-bold shadow-xs backdrop-blur-md" title="Video footage available">
                            <Video className="size-3.5 text-primary" />
                        </span>
                    )}

                    {/* Total Photos Badge */}
                    {totalPhotos > 0 && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50 px-3.5 py-1.5 text-[11px] font-bold">
                            <Camera className="size-3.5 text-primary" />
                            <span>
                                {totalPhotos} {totalPhotos === 1 ? 'Photo' : 'Photos'}
                            </span>
                        </span>
                    )}
                </div>
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7 space-y-3.5">
                {/* Interactive Tactile Gallery Preview Strip */}
                {allImages.length > 1 && (
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground dark:text-white/70">
                            <span className="flex items-center gap-1.5">
                                <Images className="size-3 text-primary" />
                                <span>Gallery Preview</span>
                            </span>
                            <span>{totalPhotos} {totalPhotos === 1 ? 'Shot' : 'Shots'}</span>
                        </div>

                        {/* Interactive Photo Thumbnail Tiles */}
                        <div className="flex items-center gap-1.5">
                            {previewTiles.map((thumbUrl, idx) => {
                                const isActive = activeImage === thumbUrl;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        aria-label={`Preview photo ${idx + 1}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setActiveImage(thumbUrl);
                                        }}
                                        onMouseEnter={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setActiveImage(thumbUrl);
                                        }}
                                        className={`relative h-10 w-13 sm:h-11 sm:w-15 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer ${
                                            isActive
                                                ? 'ring-2 ring-primary scale-105 shadow-md shadow-primary/20 z-10'
                                                : 'opacity-75 hover:opacity-100 hover:scale-102 ring-1 ring-border/80 dark:ring-white/20'
                                        }`}
                                    >
                                        <img
                                            src={thumbUrl}
                                            alt=""
                                            className="h-full w-full object-cover"
                                        />
                                        {isActive && (
                                            <div className="absolute inset-0 bg-primary/10 border-b-2 border-primary" />
                                        )}
                                    </button>
                                );
                            })}

                            {totalPhotos > 4 && (
                                <div className="h-10 px-2 sm:h-11 rounded-lg border border-border/80 bg-background/80 dark:border-white/20 dark:bg-black/40 text-[10px] font-bold uppercase tracking-wider text-foreground dark:text-white/90 backdrop-blur-md flex items-center justify-center">
                                    +{totalPhotos - 4}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Project Title */}
                <h3 className="text-2xl sm:text-[26px] font-bold uppercase tracking-tight text-foreground dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                </h3>

                {/* Description */}
                {project.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/75 line-clamp-2 leading-relaxed font-normal">
                        {project.description}
                    </p>
                )}

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-border/70 dark:border-white/15">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/80 dark:text-white/90 transition-colors duration-300 group-hover:text-primary">
                        View Project Showcase
                    </span>

                    {/* Circular Action Button */}
                    <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground dark:border-white/30 dark:bg-white/10 dark:text-white backdrop-blur-xs shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:rotate-45">
                        <ArrowUpRight className="size-4" strokeWidth={2.5} />
                    </div>
                </div>

                {/* Animated Primary Bottom Edge Accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent overflow-hidden">
                    <div className="h-full w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full" />
                </div>
            </div>
        </Link>
    );
}
