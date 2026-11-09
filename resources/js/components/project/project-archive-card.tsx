import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import SectionOverline from '@/components/ui/misc/section-overline';

interface ProjectArchiveCardProps {
    href?: string;
    label?: string;
    title?: string;
    description?: string;
    cta?: string;
    className?: string;
}

export function ProjectArchiveCard({
    href = '/projects',
    label = 'Portfolio Archive',
    title = 'Explore All Case Studies',
    description = 'Detailed records of completed heavy lifts, rigging, and turnkey transport operations.',
    cta = 'Browse Full Projects Gallery',
    className,
}: ProjectArchiveCardProps) {
    return (
        <div
            className={cn(
                'flex flex-col justify-between gap-4 rounded-2xl border border-border/80 bg-card p-6',
                className,
            )}
        >
            <div className="space-y-2">
                <SectionOverline label={label} align="left" textClassName="text-[11px]" />
                <h4 className="text-lg font-black tracking-tight text-foreground uppercase">
                    {title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <Link
                href={href}
                className={buttonVariants({
                    size: 'default',
                    className: 'w-full text-xs font-bold tracking-wider uppercase',
                })}
            >
                <span>{cta}</span>
                <ArrowRight className="ml-2 size-4" />
            </Link>
        </div>
    );
}
