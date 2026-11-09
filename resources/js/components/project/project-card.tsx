import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';
import { ProjectMetaBadges } from './project-meta-badges';
import type { ProjectListItem } from './types';

export type ProjectCardVariant = 'spotlight' | 'stack' | 'grid';

interface ProjectCardProps {
    project: ProjectListItem;
    variant?: ProjectCardVariant;
    /** Optional badge label kept for API compatibility. */
    label?: string;
    /** Optional gallery flag kept for API compatibility. */
    showGallery?: boolean;
    className?: string;
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
        card: 'min-h-[520px] sm:min-h-[600px] h-full',
        media: 'min-h-[380px] sm:min-h-[460px] flex-1',
        content: 'gap-2.5 p-5 sm:p-6',
        title: 'text-2xl sm:text-3xl',
        meta: 'default',
    },
    stack: {
        card: 'min-h-[320px] sm:min-h-[360px] flex-1',
        media: 'min-h-[220px] sm:min-h-[260px] flex-1',
        content: 'gap-1.5 px-5 py-4',
        title: 'text-lg sm:text-xl',
        meta: 'compact',
    },
    grid: {
        card: 'min-h-[380px] sm:min-h-[420px] h-full',
        media: 'min-h-[280px] sm:min-h-[320px] flex-1',
        content: 'gap-2 p-5',
        title: 'text-xl sm:text-2xl',
        meta: 'default',
    },
};

export function ProjectCard({
    project,
    variant = 'grid',
    className,
}: ProjectCardProps) {
    const style = variantStyles[variant];

    const imageUrl =
        project.featured_image_url ||
        project.gallery_image_urls?.[0] ||
        project.galleries_with_urls?.[0]?.image_urls?.[0] ||
        fallbackImage;

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
            {/* Image Plate — clean photograph with no gradient overlay or text */}
            <div className={cn('relative w-full overflow-hidden bg-muted', style.media)}>
                <img
                    src={imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content Plate — sits below the image, displaying only Title, Location, and Date */}
            <div
                className={cn(
                    'flex flex-col border-t border-border/60 bg-card',
                    style.content,
                )}
            >
                <h3
                    className={cn(
                        'leading-tight font-black tracking-tight text-card-foreground uppercase transition-colors duration-300 group-hover:text-primary',
                        style.title,
                    )}
                >
                    {project.title}
                </h3>

                <ProjectMetaBadges project={project} size={style.meta} />
            </div>

            {/* Animated Primary Bottom Edge Accent */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </Link>
    );
}
