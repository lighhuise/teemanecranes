import { Link } from '@inertiajs/react';
import { cn, toStorageUrl } from '@/lib/utils';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';
import { ProjectMetaBadges } from './project-meta-badges';
import type { ProjectListItem } from './types';
import { useImageAspectRatio } from '@/hooks/use-image-aspect-ratio';

export type ProjectCardVariant = 'spotlight' | 'stack' | 'grid';

interface ProjectCardProps {
    project: ProjectListItem;
    variant?: ProjectCardVariant;
    /** Optional badge label kept for API compatibility. */
    label?: string;
    /** Optional gallery flag kept for API compatibility. */
    showGallery?: boolean;
    className?: string;
    onAspectRatioChange?: (ratio: number) => void;
}

interface ProjectCardVariantStyles {
    card: string;
    media: string;
    content: string;
    title: string;
    meta: 'default' | 'compact';
}

const variantStyles: Record<ProjectCardVariant, ProjectCardVariantStyles> = {
    spotlight: {
        card: 'flex flex-col',
        media: 'aspect-16/10',
        content: 'gap-3 p-5 sm:p-6',
        title: 'text-xl sm:text-2xl lg:text-3xl',
        meta: 'default',
    },
    stack: {
        card: 'flex flex-col',
        media: 'aspect-16/9',
        content: 'gap-2 px-5 py-4',
        title: 'text-lg sm:text-xl',
        meta: 'compact',
    },
    grid: {
        card: 'flex flex-col h-full',
        media: 'aspect-16/10',
        content: 'gap-2 p-5 flex-1 justify-between',
        title: 'text-xl sm:text-2xl',
        meta: 'default',
    },
};

export function ProjectCard({
    project,
    variant = 'grid',
    label,
    className,
    onAspectRatioChange,
}: ProjectCardProps) {
    const style = variantStyles[variant];

    const rawImageUrl =
        project.featured_image_url ||
        project.gallery_image_urls?.[0] ||
        (project as any).gallery?.[0] ||
        project.galleries_with_urls?.[0]?.image_urls?.[0] ||
        (project.galleries_with_urls?.[0] as any)?.images?.[0] ||
        fallbackImage;

    const imageUrl = rawImageUrl === fallbackImage ? fallbackImage : toStorageUrl(rawImageUrl);

    const {
        orientation: dynamicOrientation,
        imgRef,
        handleLoad,
        containerStyle,
    } = useImageAspectRatio({
        initialAspectRatio: project.featured_image_aspect_ratio,
        initialOrientation: project.featured_image_orientation,
        onDimensionsChange: ({ aspectRatio }) => onAspectRatioChange?.(aspectRatio),
    });

    const orientation = dynamicOrientation || project.featured_image_orientation || 'landscape';
    const mediaAspectClass =
        variant === 'spotlight'
            ? 'aspect-16/10 sm:aspect-16/9 max-h-[460px]'
            : orientation === 'portrait'
              ? (variant === 'stack' ? 'aspect-[4/5]' : 'aspect-[4/5]')
              : orientation === 'square'
                ? 'aspect-square'
                : style.media;

    return (
        <Link
            href={`/projects/${project.slug}`}
            aria-label={`${project.title}${project.location ? ` — ${project.location}` : ''}`}
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-md hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:shadow-black/40',
                style.card,
                className,
            )}
        >
            {/* Image Plate — 100% full uncropped photograph with dynamic aspect ratio */}
            <div
                className={cn('relative w-full overflow-hidden bg-card flex items-center justify-center', !containerStyle && mediaAspectClass)}
                style={containerStyle}
            >
                <img
                    ref={imgRef}
                    src={imageUrl}
                    alt={project.title}
                    loading="lazy"
                    onLoad={handleLoad}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
            </div>

            {/* Content Plate — sits below the image, displaying only Title, Location, and Date */}
            <div
                className={cn(
                    'flex flex-col border-t border-border/60 bg-card',
                    style.content,
                )}
            >
                {label && (
                    <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
                            {label}
                        </span>
                    </div>
                )}

                <h3
                    className={cn(
                        'leading-tight font-black tracking-tight text-card-foreground uppercase transition-colors duration-300 group-hover:text-primary',
                        style.title,
                    )}
                >
                    {project.title}
                </h3>

                {variant === 'spotlight' && project.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                    </p>
                )}

                <ProjectMetaBadges project={project} size={style.meta} />
            </div>

            {/* Animated Primary Bottom Edge Accent */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </Link>
    );
}
