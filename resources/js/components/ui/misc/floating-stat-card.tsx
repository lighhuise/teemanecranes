import { cn } from '@/lib/utils';

type FloatingPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FloatingStatCardProps {
    value: string;
    label: string;
    position?: FloatingPosition;
    className?: string;
}

const positionClasses: Record<FloatingPosition, string> = {
    'top-left':     'top-0 left-0 md:-left-8 md:-top-6',
    'top-right':    'top-0 right-0 md:-right-8 md:-top-6',
    'bottom-left':  'bottom-0 left-0 md:-left-8 md:-bottom-6',
    'bottom-right': 'bottom-0 right-0 md:-right-8 md:-bottom-6',
};

export function FloatingStatCard({
    value,
    label,
    position = 'bottom-left',
    className,
}: FloatingStatCardProps) {
    return (
        <div
            className={cn(
                'absolute bg-background p-6 md:p-8 rounded-xl border border-border shadow-2xl pointer-events-none z-20',
                positionClasses[position],
                className
            )}
        >
            <div className="text-4xl md:text-5xl font-black text-primary mb-1 leading-none">{value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
        </div>
    );
}
