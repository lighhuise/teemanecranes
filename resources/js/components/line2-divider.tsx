import React from 'react';
import { cn } from '@/lib/utils';
import Wrapper from '@/components/ui/misc/wrapper';
import { DiamondComponent } from '@/components/diamond-component';
import { DotPattern } from '@/components/ui/misc/dot-pattern';
import ScrollVelocity from '@/components/ScrollVelocity';

export interface LineDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    containerClassName?: string;
    iconClassName?: string;
    showDiamond?: boolean;
    velocity?: number;
    velocityTexts?: React.ReactNode[];
    children?: React.ReactNode;
}

function Line2Divider({
    className = '',
    containerClassName = '',
    iconClassName = '',
    showDiamond = true,
    velocity = 45,
    velocityTexts = ['TEEMANE CRANES', 'A CUT ABOVE THE REST'],
    children,
    ...props
}: LineDividerProps) {
    return (
        <div
            // aria-hidden={children ? undefined : true}
            className={cn(
                'bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip',
                containerClassName,
                className,
            )}
            {...props}
        >
            <DotPattern className="line2-divider-dots text-primary-foreground/50 top-0" />

            <div
                aria-hidden="true"
                className="line2-divider-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
            />

            {/* Scroll-Velocity Monumental Background Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-primary-foreground opacity-[0.10]"
            >
                <ScrollVelocity
                    texts={velocityTexts}
                    velocity={velocity}
                    damping={50}
                    stiffness={400}
                    numCopies={6}
                    skewWithVelocity={4}
                    outlineAlternate={true}
                    fadeEdges={true}
                    gap={48}
                    separator="◆"
                    scrollerClassName="font-heading !text-[7.5vw] sm:!text-[6vw] xl:!text-[84px] !leading-[1.05] !font-black uppercase !tracking-tighter !drop-shadow-none"
                />
            </div>

            <div
                aria-hidden={true}
                className="pointer-events-none absolute inset-2 border-2 border-dashed border-primary-foreground/10"
            />
            <div
                aria-hidden={true}
                className="pointer-events-none absolute inset-4 border-2 border-dashed border-primary-foreground/10"
            />

            <Wrapper className="relative z-10 flex items-center justify-center">
                {children ?? (
                    <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
                        {/* Left Dimension Line + Architectural Statement */}
                        <div className="relative flex flex-1 items-center justify-end gap-4">
                            <span className="hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                                A CUT ABOVE
                            </span>
                        </div>

                        {showDiamond && (
                            <div className="line2-divider-box relative flex items-center justify-center px-7 py-5 border-2 border-primary-foreground/55 shadow-sm shrink-0">
                                <span className="absolute -top-1 -left-1 size-2.5 border-t-2 border-l-2 border-primary-foreground/90" />
                                <span className="absolute -top-1 -right-1 size-2.5 border-t-2 border-r-2 border-primary-foreground/90" />
                                <span className="absolute -bottom-1 -left-1 size-2.5 border-b-2 border-l-2 border-primary-foreground/90" />
                                <span className="absolute -bottom-1 -right-1 size-2.5 border-b-2 border-r-2 border-primary-foreground/90" />

                                <span className="line2-divider-ring pointer-events-none absolute size-16 sm:size-18 rounded-full border border-dashed border-primary-foreground/35" />

                                <DiamondComponent
                                    className={cn(
                                        'relative z-10 w-9 sm:w-11 h-auto text-primary-foreground',
                                        iconClassName,
                                    )}
                                />
                            </div>
                        )}

                        {/* Right Architectural Statement + Dimension Line */}
                        <div className="relative flex flex-1 items-center justify-start gap-4">
                            <span className="hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                                THE REST
                            </span>
                        </div>
                    </div>
                )}
            </Wrapper>
        </div>
    );
}

export default Line2Divider;

Line2Divider.displayName = 'Line2Divider';
