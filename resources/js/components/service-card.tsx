import { Link } from '@inertiajs/react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
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
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-border/80 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/70 hover:shadow-2xl hover:shadow-primary/10 aspect-4/5 sm:aspect-3/4 min-h-[440px]"
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-muted">
                <img
                    src={imageUrl}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Layered Vignette & Gradients (Light Mode & Dark Mode) */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/75 via-30% to-transparent dark:from-black/95 dark:via-black/50 dark:via-50% dark:to-black/25 transition-all duration-500 group-hover:via-background/95 dark:group-hover:via-black/60" />
                <div className="absolute inset-0 bg-radial-[at_top_right] from-primary/10 dark:from-primary/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Top Floating Meta Bar */}
            <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
                {/* Capability Badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Specialised Service</span>
                </span>

                {/* Verified Standards Pill */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 text-foreground dark:border-white/20 dark:bg-black/40 dark:text-white/90 px-3 py-1.5 text-[11px] font-bold backdrop-blur-md shadow-xs transition-colors group-hover:border-primary/50">
                    <ShieldCheck className="size-3.5 text-primary" />
                    <span>Certified</span>
                </span>
            </div>

            {/* Bottom Content Card */}
            <div className="relative z-10 flex flex-col justify-end p-6 sm:p-7 space-y-3.5">
                {/* Service Title */}
                <h3 className="text-2xl sm:text-[26px] font-bold uppercase tracking-tight text-foreground dark:text-white leading-tight transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                </h3>

                {/* Short Description */}
                {service.short_description && (
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/75 line-clamp-2 leading-relaxed font-normal">
                        {service.short_description}
                    </p>
                )}

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-border/70 dark:border-white/15">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/80 dark:text-white/90 transition-colors duration-300 group-hover:text-primary">
                        Explore Capability
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
