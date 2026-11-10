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
    showSideTexts?: boolean;
    showDashedBorders?: boolean;
    showBeam?: boolean;
    showDots?: boolean;
    leftText?: string | null;
    rightText?: string | null;
    velocity?: number;
    velocityTexts?: React.ReactNode[];
    watermarkOpacity?: number | string;
    minHeight?: number | string;
    paddingY?: 'compact' | 'normal' | 'spacious' | 'huge' | string;
    themeStyle?: 'primary' | 'dark' | 'muted' | string;
    children?: React.ReactNode;
}

const paddingClasses: Record<string, string> = {
    compact: 'py-8',
    normal: 'py-16',
    spacious: 'py-24',
    huge: 'py-32',
};

const themeClasses: Record<string, string> = {
    primary: 'bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground',
    dark: 'bg-radial-[at_50%_85%] from-card/90 to-background text-foreground border-y border-border',
    muted: 'bg-radial-[at_50%_85%] from-muted to-muted/80 text-foreground border-y border-border',
};

function Line2Divider({
    className = '',
    containerClassName = '',
    iconClassName = '',
    showDiamond = true,
    showSideTexts = true,
    showDashedBorders = true,
    showBeam = true,
    showDots = true,
    leftText,
    rightText,
    velocity = 45,
    velocityTexts = ['TEEMANE CRANES', 'A CUT ABOVE THE REST'],
    watermarkOpacity = 0.10,
    minHeight,
    paddingY = 'normal',
    themeStyle = 'primary',
    children,
    style,
    ...props
}: LineDividerProps) {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const minHeightStyle = minHeight
        ? (typeof minHeight === 'number'
            ? `${minHeight}px`
            : (/^\d+$/.test(String(minHeight).trim()) ? `${minHeight}px` : String(minHeight)))
        : undefined;

    const opacityNum = watermarkOpacity !== undefined && watermarkOpacity !== null
        ? Number(watermarkOpacity)
        : 0.10;

    const leftDisplay = leftText !== undefined ? leftText : 'A CUT ABOVE';
    const rightDisplay = rightText !== undefined ? rightText : 'THE REST';
    const activePadding = paddingClasses[paddingY] || paddingClasses.normal;
    const activeTheme = themeClasses[themeStyle] || themeClasses.primary;

    return (
        <div
            className={cn(
                'relative flex flex-col justify-center overflow-clip',
                activeTheme,
                activePadding,
                containerClassName,
                className,
            )}
            style={{
                minHeight: minHeightStyle,
                ...style,
            }}
            {...props}
        >
            {showDots && (
                <DotPattern className={cn(
                    "line2-divider-dots top-0",
                    themeStyle === 'primary' ? "text-primary-foreground/50" : "text-muted-foreground/30"
                )} />
            )}

            {showBeam && (
                <div
                    aria-hidden="true"
                    className="line2-divider-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
                />
            )}

            {/* Scroll-Velocity Monumental Background Watermark */}
            <div
                aria-hidden="true"
                className={cn(
                    "pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2",
                    themeStyle === 'primary' ? "text-primary-foreground" : "text-foreground"
                )}
                style={{ opacity: isNaN(opacityNum) ? 0.10 : opacityNum }}
            >
                {isMounted ? (
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
                ) : (
                    <div className="text-center font-heading text-[11vw] xl:text-[140px] font-black uppercase tracking-tighter leading-none whitespace-nowrap">
                        TEEMANE CRANES
                    </div>
                )}
            </div>

            {showDashedBorders && (
                <>
                    <div
                        aria-hidden={true}
                        className={cn(
                            "pointer-events-none absolute inset-2 border-2 border-dashed",
                            themeStyle === 'primary' ? "border-primary-foreground/10" : "border-border/60"
                        )}
                    />
                    <div
                        aria-hidden={true}
                        className={cn(
                            "pointer-events-none absolute inset-4 border-2 border-dashed",
                            themeStyle === 'primary' ? "border-primary-foreground/10" : "border-border/60"
                        )}
                    />
                </>
            )}

            <Wrapper className="relative z-10 flex items-center justify-center">
                {children ?? (
                    <div className="flex w-full items-center justify-center gap-4 sm:gap-6">
                        {/* Left Dimension Line + Architectural Statement */}
                        {showSideTexts && leftDisplay && (
                            <div className="relative flex flex-1 items-center justify-end gap-4">
                                <span className={cn(
                                    "hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap",
                                    themeStyle === 'primary' ? "text-primary-foreground" : "text-foreground"
                                )}>
                                    {leftDisplay}
                                </span>
                            </div>
                        )}

                        {showDiamond && (
                            <div className={cn(
                                "line2-divider-box relative flex items-center justify-center px-7 py-5 border-2 shadow-sm shrink-0",
                                themeStyle === 'primary'
                                    ? "border-primary-foreground/55"
                                    : "border-primary/60 bg-background/50"
                            )}>
                                <span className={cn(
                                    "absolute -top-1 -left-1 size-2.5 border-t-2 border-l-2",
                                    themeStyle === 'primary' ? "border-primary-foreground/90" : "border-primary"
                                )} />
                                <span className={cn(
                                    "absolute -top-1 -right-1 size-2.5 border-t-2 border-r-2",
                                    themeStyle === 'primary' ? "border-primary-foreground/90" : "border-primary"
                                )} />
                                <span className={cn(
                                    "absolute -bottom-1 -left-1 size-2.5 border-b-2 border-l-2",
                                    themeStyle === 'primary' ? "border-primary-foreground/90" : "border-primary"
                                )} />
                                <span className={cn(
                                    "absolute -bottom-1 -right-1 size-2.5 border-b-2 border-r-2",
                                    themeStyle === 'primary' ? "border-primary-foreground/90" : "border-primary"
                                )} />

                                <span className={cn(
                                    "line2-divider-ring pointer-events-none absolute size-16 sm:size-18 rounded-full border border-dashed",
                                    themeStyle === 'primary' ? "border-primary-foreground/35" : "border-primary/40"
                                )} />

                                <DiamondComponent
                                    className={cn(
                                        'relative z-10 w-9 sm:w-11 h-auto',
                                        themeStyle === 'primary' ? 'text-primary-foreground' : 'text-primary',
                                        iconClassName,
                                    )}
                                />
                            </div>
                        )}

                        {/* Right Architectural Statement + Dimension Line */}
                        {showSideTexts && rightDisplay && (
                            <div className="relative flex flex-1 items-center justify-start gap-4">
                                <span className={cn(
                                    "hidden md:inline-block font-heading text-lg lg:text-xl font-black uppercase tracking-[0.2em] whitespace-nowrap",
                                    themeStyle === 'primary' ? "text-primary-foreground" : "text-foreground"
                                )}>
                                    {rightDisplay}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </Wrapper>
        </div>
    );
}

export default Line2Divider;

Line2Divider.displayName = 'Line2Divider';
