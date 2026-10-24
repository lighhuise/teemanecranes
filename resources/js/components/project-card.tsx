import { Link } from '@inertiajs/react';
import { ArrowRight, Images } from 'lucide-react';
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
    total_images?: number;
}

interface ProjectCardProps {
    project: ProjectListItem;
    index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const imageUrl =
        project.featured_image_url ||
        project.gallery_image_urls?.[0] ||
        project.galleries_with_urls?.[0]?.image_urls?.[0] ||
        fallbackImage;

    const totalPhotos =
        project.total_images ??
        ((project.gallery_image_urls?.length ?? 0) +
            (project.galleries_with_urls?.reduce(
                (acc, g) => acc + (g.image_urls?.length ?? 0),
                0
            ) ?? 0));

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="reveal-up group relative overflow-hidden bg-background border border-border flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 rounded-xl"
        >
            {/* Image Header */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border">
                <img
                    src={imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                {/* Total photos badge */}
                {totalPhotos > 0 && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-xs border border-white/20 text-xs font-bold text-white shadow-sm">
                        <Images className="w-3.5 h-3.5 text-primary" />
                        <span>{totalPhotos} {totalPhotos === 1 ? 'Photo' : 'Photos'}</span>
                    </span>
                )}
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="space-y-3">
                    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase leading-snug">
                        {project.title}
                    </h3>
                    {project.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    )}
                </div>

                <div className="mt-6 flex items-center text-sm font-bold tracking-widest text-primary uppercase">
                    View Project & Gallery <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
