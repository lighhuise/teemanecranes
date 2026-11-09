import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    featured_image_url?: string | null;
    image?: string | null;
    icon?: string | null;
}

interface ServiceCardProps {
    service: Service;
    index?: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const imageUrl = service.featured_image_url || service.image || fallbackImage;

    return (
        <Link
            href={`/services/${service.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-md hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:shadow-black/40"
        >
            {/* Image Plate — no text or overlays sit on the photograph */}
            <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <img
                    src={imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* Content Plate */}
            <div className="flex flex-1 flex-col gap-6 p-6 sm:p-7">
                <h3 className="text-xl leading-tight font-bold tracking-tight text-foreground uppercase transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {service.title}
                </h3>

                {/* Action Bar */}
                <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
                    <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase transition-colors duration-300 group-hover:text-primary">
                        Explore Capability
                    </span>

                    <div className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight className="size-4" strokeWidth={2.5} />
                    </div>
                </div>
            </div>

            {/* Animated Primary Bottom Edge Accent */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
        </Link>
    );
}
