import { ReactNode } from 'react';
import Wrapper from '@/components/ui/misc/wrapper';
import { BackgroundText } from '@/components/ui/misc/background-text';
import SectionHeading from '@/components/ui/misc/section-heading';
import { cn } from '@/lib/utils';

export interface PageHeroProps {
    /** Watermark text rendered behind the hero content */
    watermark?: string;
    /** Small section overline label */
    label?: string;
    /** Primary title */
    title: string | ReactNode;
    /** Optional subtitle or descriptive copy */
    description?: ReactNode;
    /** Optional additional elements below description (pills, chips, buttons) */
    children?: ReactNode;
    align?: 'center' | 'left';
    className?: string;
}

export default function PageHero({
    watermark,
    label,
    title,
    description,
    children,
    align = 'center',
    className,
}: PageHeroProps) {
    return (
        <section className={cn('py-24 bg-muted/30 border-b border-border relative overflow-hidden', className)}>
            {watermark && <BackgroundText position={align}>{watermark}</BackgroundText>}
            <Wrapper className="relative z-10">
                <SectionHeading
                    label={label}
                    title={title}
                    align={align}
                    className={cn(align === 'center' ? 'mb-8' : 'mb-6')}
                >
                    {description}
                </SectionHeading>

                {children && (
                    <div className={cn(align === 'center' && 'flex flex-col items-center text-center')}>
                        {children}
                    </div>
                )}
            </Wrapper>
        </section>
    );
}

export { PageHero };
