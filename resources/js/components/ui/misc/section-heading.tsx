import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import SectionOverline, { SectionOverlineAlign } from './section-overline';

export type Align = SectionOverlineAlign;

export interface SectionHeadingProps {
    /** Small label shown above the title with decorative lines */
    label?: string;
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

export default function SectionHeading({
    label,
    title,
    children,
    align = 'center',
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col space-y-6', alignClass[align], className)}>
            {/* Unified Reusable Overline */}
            {label && (
                <SectionOverline
                    label={label}
                    align={align}
                />
            )}

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl max-w-2xl text-balance font-black tracking-[0.35px] uppercase text-foreground leading-[1.1]">
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

export { SectionOverline };
