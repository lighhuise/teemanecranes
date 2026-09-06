import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Align = 'left' | 'center' | 'right';

interface SectionHeadingProps {
    /** Small label shown above the title with decorative lines */
    label: string;
    /** Main heading text */
    title: string | ReactNode;
    /** Optional descriptive paragraph or any children below the title */
    children?: ReactNode;
    /** Text alignment — controls layout of the label, title and children */
    align?: Align;
    className?: string;
}

const alignClass: Record<Align, string> = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
};

const lineClass: Record<Align, string> = {
    left:   'flex-row',
    center: 'flex-row',
    right:  'flex-row-reverse',
};

export default function SectionHeading({
    label,
    title,
    children,
    align = 'center',
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col space-y-6', alignClass[align], className)}>
            {/* Label with decorative lines */}
            <div className={cn('inline-flex items-center gap-4', lineClass[align])}>
                {/* Left line — hidden on right-aligned, always shown on left/center */}
                {align !== 'right' && <div className="h-px w-8 bg-primary shrink-0" />}
                <span className="text-sm font-bold text-primary tracking-widest uppercase whitespace-nowrap">
                    {label}
                </span>
                {/* Right line — shown on center and right */}
                {align !== 'left' && <div className="h-px w-8 bg-primary shrink-0" />}
            </div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl max-w-2xl text-balance font-black tracking-tighter text-foreground leading-[1.1]">
                {title}
            </h2>

            {/* Optional children (description or extra content) */}
            {children && (
                <div className={cn(
                    'text-lg text-muted-foreground leading-relaxed',
                    align === 'center' && 'max-w-2xl mx-auto',
                    align === 'left'   && 'max-w-2xl',
                    align === 'right'  && 'max-w-2xl ml-auto',
                )}>
                    {children}
                </div>
            )}
        </div>
    );
}
