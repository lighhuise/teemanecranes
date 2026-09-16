import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <Link
            href={`/services/${service.slug}`}
            className="reveal-up group relative p-8 bg-background border border-border flex flex-col justify-between min-h-[260px] transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-sm"
        >
            <div className="space-y-4">
                <span className="text-3xl font-bold tracking-wider text-muted-foreground/20 group-hover:text-primary transition-colors">
                    0{index + 1}
                </span>
                <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors uppercase">
                    {service.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                    {service.short_description}
                </p>
            </div>
            <div className="mt-8 flex items-center text-sm font-bold tracking-widest text-primary uppercase">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
}
