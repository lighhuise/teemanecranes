import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    featured_image_url?: string | null;
    image?: string | null;
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
            className="reveal-up group relative overflow-hidden bg-background border border-border flex flex-col justify-between transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1 rounded-xl"
        >
            {/* Image Header */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-muted border-b border-border">
                <img
                    src={imageUrl}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div className="space-y-3">
                    <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase">
                        {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {service.short_description}
                    </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-bold tracking-widest text-primary uppercase">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}

