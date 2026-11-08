import React, { useId } from 'react';
import { cn } from '@/lib/utils';
import Wrapper from '@/components/ui/misc/wrapper';
import { DiamondComponent } from '@/components/diamond-component';

export interface LineDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    containerClassName?: string;
    iconClassName?: string;
    showDiamond?: boolean;
    children?: React.ReactNode;
}

function LineDivider({
    className = '',
    containerClassName = '',
    iconClassName = '',
    showDiamond = true,
    children,
    ...props
}: LineDividerProps) {
    const uid = useId().replace(/:/g, '');
    const subGridId = `${uid}-bp-subgrid`;
    const majorGridId = `${uid}-bp-majorgrid`;
    const rulerTicksId = `${uid}-bp-ticks`;

    return (
        <div
            aria-hidden={children ? undefined : true}
            className={cn(
                'bg-radial-[at_50%_50%] from-primary/85 to-primary text-primary-foreground relative z-10 min-h-36 sm:min-h-40 py-10 sm:py-12 overflow-hidden select-none flex items-center border-y border-primary-foreground/30 shadow-inner',
                containerClassName,
                className
            )}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute inset-0 size-full"
            >
                <defs>
                    <pattern id={subGridId} width="16" height="16" patternUnits="userSpaceOnUse">
                        <path
                            d="M 16 0 L 0 0 0 16"
                            fill="none"
                            className="stroke-primary-foreground/10"
                            strokeWidth="0.75"
                        />
                    </pattern>
                    <pattern id={majorGridId} width="80" height="80" patternUnits="userSpaceOnUse">
                        <rect width="80" height="80" fill={`url(#${subGridId})`} />
                        <path
                            d="M 80 0 L 0 0 0 80"
                            fill="none"
                            className="stroke-primary-foreground/22"
                            strokeWidth="1"
                        />
                        <path
                            d="M -4 0 L 4 0 M 0 -4 L 0 4"
                            fill="none"
                            className="stroke-primary-foreground/40"
                            strokeWidth="1"
                        />
                    </pattern>
                    <pattern id={rulerTicksId} width="80" height="10" patternUnits="userSpaceOnUse">
                        <path
                            d="M 0 0 V 8 M 16 0 V 4 M 32 0 V 4 M 48 0 V 4 M 64 0 V 4"
                            fill="none"
                            className="stroke-primary-foreground/30"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${majorGridId})`} />
                <rect x="0" y="0" width="100%" height="8" fill={`url(#${rulerTicksId})`} />
                <rect
                    x="0"
                    y="100%"
                    width="100%"
                    height="8"
                    fill={`url(#${rulerTicksId})`}
                    className="-translate-y-2"
                />
            </svg>

            {/* Monumental Background Display Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[11vw] xl:text-[140px] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-primary-foreground opacity-[0.09]"
            >
                TEEMANE CRANES
            </div>

            <div className="pointer-events-none absolute inset-x-3 sm:inset-x-6 inset-y-2 border border-primary-foreground/22" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-primary-foreground/25" />

            <Wrapper className="relative z-10 flex items-center justify-center">
                {children ?? (
                    <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
                        {/* Left Dimension Line + Architectural Statement */}
                        <div className="relative flex flex-1 items-center justify-end gap-4">
                            <div className="relative flex flex-1 max-w-xs items-center">
                                <span className="h-3 w-px bg-primary-foreground/60 shrink-0" />
                                <div className="h-px w-full bg-linear-to-r from-primary-foreground/20 via-primary-foreground/60 to-primary-foreground/95" />
                                <span className="size-1.5 rotate-45 border-t border-r border-primary-foreground/85 -ml-1.5 shrink-0" />
                            </div>
                            <span className="hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                                A CUT ABOVE
                            </span>
                        </div>

                        {showDiamond && (
                            <div className="relative flex items-center justify-center px-7 py-5  border-2 border-primary-foreground/55 shadow-sm shrink-0">
                                <span className="absolute -top-1 -left-1 size-2.5 border-t-2 border-l-2 border-primary-foreground/90" />
                                <span className="absolute -top-1 -right-1 size-2.5 border-t-2 border-r-2 border-primary-foreground/90" />
                                <span className="absolute -bottom-1 -left-1 size-2.5 border-b-2 border-l-2 border-primary-foreground/90" />
                                <span className="absolute -bottom-1 -right-1 size-2.5 border-b-2 border-r-2 border-primary-foreground/90" />

                                <span className="pointer-events-none absolute size-16 sm:size-18 rounded-full border border-dashed border-primary-foreground/35" />

                                <DiamondComponent
                                    className={cn(
                                        'relative z-10 w-9 sm:w-11 h-auto text-primary-foreground',
                                        iconClassName
                                    )}
                                />
                            </div>
                        )}

                        {/* Right Architectural Statement + Dimension Line */}
                        <div className="relative flex flex-1 items-center justify-start gap-4">
                            <span className="hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                                THE REST
                            </span>
                            <div className="relative flex flex-1 max-w-xs items-center">
                                <span className="size-1.5 rotate-45 border-b border-l border-primary-foreground/85 -mr-1.5 shrink-0" />
                                <div className="h-px w-full bg-linear-to-l from-primary-foreground/20 via-primary-foreground/60 to-primary-foreground/95" />
                                <span className="h-3 w-px bg-primary-foreground/60 shrink-0" />
                            </div>
                        </div>
                    </div>
                )}
            </Wrapper>
        </div>
    );
}

export default LineDivider;

LineDivider.displayName = 'LineDivider';
