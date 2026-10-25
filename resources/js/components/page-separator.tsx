import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '@inertiajs/react';
import { ArrowRight, Clock, HardHat, ShieldCheck, Wrench, Activity } from 'lucide-react';
import Wrapper from '@/components/ui/misc/wrapper';
import { DotPattern } from '@/components/ui/misc/dot-pattern';
import SectionOverline from '@/components/ui/misc/section-overline';

// @ts-ignore
import defaultBannerImage from '@/../images/banner-background.webp';
// @ts-ignore
import fallbackBannerImage from '@/../images/IMG_0190-copy.webp';

gsap.registerPlugin(ScrollTrigger);

export interface PageSeparatorProps {
    image?: string | null;
    fallbackSrc?: string;
    children?: React.ReactNode;
    className?: string;
    imageClassName?: string;
}

function PageSeparator({
    image,
    fallbackSrc = fallbackBannerImage,
    children,
    className = '',
    imageClassName = '',
}: PageSeparatorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const initialSrc = image || defaultBannerImage || fallbackSrc;
    const [currentSrc, setCurrentSrc] = useState<string>(initialSrc);

    useEffect(() => {
        setCurrentSrc(image || defaultBannerImage || fallbackSrc);
    }, [image, fallbackSrc]);

    // Parallax scroll animation with GSAP ScrollTrigger
    useEffect(() => {
        if (!containerRef.current || !imageRef.current) {
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleImageError = () => {
        if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
        }
    };

    return (
        <section
            ref={containerRef}
            className={`relative isolate overflow-hidden py-20 sm:py-24 bg-card text-card-foreground border-y border-border ${className}`}
        >
            {/* Parallax Background Image with Luminous Blend */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                    ref={imageRef}
                    src={currentSrc}
                    alt=""
                    aria-hidden={true}
                    onError={handleImageError}
                    className={`absolute inset-x-0 -top-[25%] h-[150%] w-full object-cover mix-blend-luminosity opacity-10 will-change-transform ${imageClassName}`}
                />

                {/* 3D Perspective CAD Floor with Subtle Primary Tint */}
                <div
                    className="absolute inset-x-0 -bottom-24 h-[140%] bg-[linear-gradient(to_right,oklch(0.469_0.113_242.6/0.07)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.469_0.113_242.6/0.07)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"
                    style={{ transform: 'perspective(700px) rotateX(28deg)', transformOrigin: 'center top' }}
                />

                {/* Radial Cobalt Spotlight */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-60"
                />

                {/* Subtle Background Typography Watermark */}
                <div
                    aria-hidden={true}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 select-none pointer-events-none opacity-5 text-[18vw] xl:text-[220px] font-black uppercase tracking-tighter leading-none text-foreground whitespace-nowrap"
                >
                    TEEMANE
                </div>
            </div>

            <Wrapper className="relative z-10 w-full">
                <div className="relative pl-6 sm:pl-8 border-l-4 border-primary">
                    {children ?? (
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                            <div className="max-w-3xl space-y-3">
                                <SectionOverline label="Specification Protocol" align="left" />
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
                                    Heavy Lifting Across South Africa
                                </h2>
                                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                                    Turnkey CAD studies, certified rigging, and 440T mobile fleet readiness.
                                </p>
                            </div>

                            <div className="shrink-0">
                                <Link
                                    href="/contact-us"
                                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-xs pl-6 pr-4 py-3.5 shadow-xl shadow-primary/20 transition-all hover:scale-105"
                                >
                                    <span>Connect With Engineers</span>
                                    <span className="flex size-6 items-center justify-center rounded-lg bg-primary-foreground/20 text-primary-foreground group-hover:scale-110 transition-transform">
                                        <ArrowRight className="size-3.5" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
}

export default PageSeparator;

PageSeparator.displayName = 'PageSeparator';
