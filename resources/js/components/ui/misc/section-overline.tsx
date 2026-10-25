import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export type SectionOverlineAlign = 'left' | 'center' | 'right';

export interface SectionOverlineProps {
    /** Text or element displayed in the overline */
    label?: string;
    children?: ReactNode;
    /**
     * Alignment of the overline:
     * - 'left': hairline gradient line on the left, text on the right
     * - 'center': hairline gradient lines flanking both sides of the text
     * - 'right': hairline gradient line on the right
     */
    align?: SectionOverlineAlign;
    className?: string;
    textClassName?: string;
    lineClassName?: string;
}

const lineFlexClass: Record<SectionOverlineAlign, string> = {
    left:   'flex-row',
    center: 'flex-row',
    right:  'flex-row-reverse',
};

export default function SectionOverline({
    label,
    children,
    align = 'left',
    className,
    textClassName,
    lineClassName,
}: SectionOverlineProps) {
    const content = label ?? children;

    if (!content) {
        return null;
    }

    return (
        <div className={cn('inline-flex items-center gap-3.5', lineFlexClass[align], className)}>
            {/* Left gradient line: present for 'left' and 'center' */}
            {align !== 'right' && (
                <div
                    className={cn(
                        'h-px w-10 bg-linear-to-r from-transparent via-primary/50 to-primary shrink-0',
                        lineClassName
                    )}
                />
            )}

            <span
                className={cn(
                    'text-xs sm:text-sm font-black text-primary tracking-[0.22em] uppercase whitespace-nowrap',
                    textClassName
                )}
            >
                {content}
            </span>

            {/* Right gradient line: present for 'center' and 'right' */}
            {align !== 'left' && (
                <div
                    className={cn(
                        'h-px w-10 bg-linear-to-l from-transparent via-primary/50 to-primary shrink-0',
                        lineClassName
                    )}
                />
            )}
        </div>
    );
}

export { SectionOverline };
