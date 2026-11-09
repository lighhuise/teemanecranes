import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '@inertiajs/react';
import Lightbox from 'yet-another-react-lightbox';

import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { buttonVariants } from '@/components/ui/button';
import {
    ArrowRight,
    Expand,
    Info,
    MapPin,
    X,
    ZoomIn,
} from 'lucide-react';

// @ts-ignore
import imgSouthernWind2 from '@/../images/southern-wind-2.webp';
// @ts-ignore
import imgBoatLaunch from '@/../images/525e47f7-4f4c-44ff-9f7e-a37bf34516d9.webp';
// @ts-ignore
import imgSouthernWind from '@/../images/southernwind.webp';
// @ts-ignore
import imgHarbourWork from '@/../images/harbour-work.webp';
// @ts-ignore
import imgHarborGoldenHour from '@/../images/boat-launch.webp';
// @ts-ignore
import imgTeemaneBoat from '@/../images/teeman_final_sky_only.png';

interface FieldOperationItem {
    id: string;
    title: string;
    location: string;
    category: string;
    description: string;
    src: string;
    alt: string;
}

const FIELD_OPERATIONS: FieldOperationItem[] = [
    {
        id: 'southern-wind-2',
        title: 'Southern Wind Shipyard Lift',
        location: 'Cape Town Port',
        category: 'Shipyard Rigging',
        description: 'Tandem mobile crane maneuvering and high-boom stabilization for luxury ocean-going composite vessels.',
        src: imgSouthernWind2,
        alt: 'Mobile crane lifting Southern Wind yacht at Cape Town shipyard',
    },
    {
        id: 'boat-launch',
        title: 'Commercial Vessel Launch',
        location: 'Harbour Slipway',
        category: 'Marine Operations',
        description: 'Multi-leg sling rigging and millimeter-accurate waterside descent into port basin waters.',
        src: imgBoatLaunch,
        alt: 'Teemane mobile crane lowering boat into harbour slipway',
    },
    {
        id: 'southern-wind-1',
        title: 'High-Tolerance Hull Positioning',
        location: 'Southern Wind Basin',
        category: 'Precision Rigging',
        description: 'Synchronized dual-hook control ensuring zero hull deflection during specialized shipyard transport.',
        src: imgSouthernWind,
        alt: 'Dual crane precision hull alignment at shipyard',
    },
    {
        id: 'harbour-work',
        title: 'Dockside Crane Rigging & Cargo',
        location: 'Industrial Maritime Berth',
        category: 'Port Logistics',
        description: 'Certified rigging crews coordinating deep-reach crane positioning alongside deep-water berths.',
        src: imgHarbourWork,
        alt: 'Heavy mobile crane rigging at commercial port dockside',
    },
    {
        id: 'harbor-golden-hour',
        title: 'Quayside Heavy Mobilization',
        location: 'Commercial Harbour',
        category: 'Heavy Infrastructure',
        description: 'Outrigger ground spread and high-capacity boom extension ready for round-the-clock port operations.',
        src: imgHarborGoldenHour,
        alt: 'Mobile crane stationed at harbour quayside during sunset',
    },
    {
        id: 'teemane-boat',
        title: 'Specialised Yacht Hoist & Transfer',
        location: 'Marina Basin',
        category: 'Specialised Transport',
        description: 'Custom spreader beam configuration preventing compressive load stresses during vessel hoist and transport.',
        src: imgTeemaneBoat,
        alt: 'Teemane crane hoisting private yacht with custom spreader rigging',
    },
];

export function HomeFieldOperationsSection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [activeInfo, setActiveInfo] = useState<{ item: FieldOperationItem; index: number } | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const lightboxSlides = FIELD_OPERATIONS.map((item) => ({
        src: item.src,
        alt: item.alt,
    }));

    const renderCard = (index: number, containerClasses: string) => {
        const item = FIELD_OPERATIONS[index];
        return (
            <div
                role="button"
                tabIndex={0}
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightboxIndex(index);
                    }
                }}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${containerClasses}`}
            >
                {/* Pure photography without dark tint overlays or on-image text */}
                <img
                    src={item.src}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Hover Zoom Cue (Top-Right) */}
                <div className="absolute top-3.5 right-3.5 z-10 size-9 rounded-xl bg-background/85 dark:bg-card/85 text-foreground backdrop-blur-md border border-border/70 shadow-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover:scale-100">
                    <ZoomIn className="size-4" />
                </div>

                {/* Information Button (Bottom-Right) - Opens popup with info */}
                <div className="absolute bottom-3.5 right-3.5 z-10">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveInfo({ item, index });
                        }}
                        aria-label={`View information for ${item.title}`}
                        title="View photo information"
                        className="size-9 rounded-xl bg-background/90 dark:bg-card/90 text-foreground/80 hover:text-primary hover:bg-background backdrop-blur-md border border-border/80 shadow-xs flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
                    >
                        <Info className="size-4" />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section className="py-24 bg-muted/30 border-b border-border relative overflow-hidden">
            <BackgroundText position="left">OPERATIONS</BackgroundText>

            <Wrapper className="relative z-10">
                {/* Section Header */}
                <SectionHeading
                    label="Field Operations"
                    title="CRANES IN ACTION: FIELD SHOWCASE"
                    align="center"
                    className="mb-14 sm:mb-16"
                >
                    From high-stakes shipyard yacht rigging at Southern Wind to coastal slipway launches and heavy harbour infrastructure, explore authentic captures of Teemane mobile cranes delivering precision across South Africa's worksites.
                </SectionHeading>

                {/* Bento Grid Collage */}
                <div className="space-y-5 sm:space-y-6">
                    {/* Top Triptych Grid: 2 Tall Vertical Flanks + Center Stacked Pair */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
                        {/* 01. Tall Portrait: Southern Wind Shipyard */}
                        {renderCard(
                            0,
                            'md:col-span-1 lg:col-span-4 lg:row-span-2 min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]'
                        )}

                        {/* Center Column: 2 Stacked Landscapes (02 & 03) */}
                        <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-5 sm:gap-6 lg:row-span-2">
                            {renderCard(1, 'flex-1 min-h-[260px] sm:min-h-[295px]')}
                            {renderCard(2, 'flex-1 min-h-[260px] sm:min-h-[295px]')}
                        </div>

                        {/* 04. Tall Portrait: Harbour Work Rigging */}
                        {renderCard(
                            3,
                            'md:col-span-2 lg:col-span-4 lg:row-span-2 min-h-[460px] sm:min-h-[520px] lg:min-h-[640px]'
                        )}
                    </div>

                    {/* Bottom Split Row: Wide Cinematic Harbour Shot + Precision Boat Hoist */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                        {/* 05. Wide Panorama: Golden Hour Harbour Mobilization */}
                        {renderCard(4, 'lg:col-span-7 min-h-[300px] sm:min-h-[360px]')}

                        {/* 06. Balanced Card: Teemane Boat Hoist Transfer */}
                        {renderCard(5, 'lg:col-span-5 min-h-[300px] sm:min-h-[360px]')}
                    </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl border border-border bg-card">
                    <div className="space-y-1 text-center sm:text-left">
                        <h4 className="font-heading font-bold text-base sm:text-lg uppercase tracking-tight text-foreground">
                            Planning a Specialised or Maritime Lift?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Our engineering team prepares in-depth CAD lift studies, rigging diagrams, and risk assessments for complex projects.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                        <Link
                            prefetch="hover"
                            href="/contact-us"
                            className={buttonVariants({
                                size: 'lg',
                                className: 'uppercase tracking-widest font-bold px-7 h-12 text-xs sm:text-sm',
                            })}
                        >
                            Request Lift Feasibility
                            <ArrowRight className="ml-2 size-4" />
                        </Link>
                        <Link
                            prefetch="hover"
                            href="/projects"
                            className={buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                                className: 'uppercase tracking-widest font-bold px-7 h-12 text-xs sm:text-sm border-2',
                            })}
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </Wrapper>

            {/* Information Popup Modal */}
            {activeInfo && isMounted && createPortal(
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in-0 duration-200"
                    onClick={() => setActiveInfo(null)}
                >
                    <div
                        className="bg-card text-card-foreground border border-border rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setActiveInfo(null)}
                            className="absolute top-4 right-4 size-8 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Close information"
                        >
                            <X className="size-4" />
                        </button>

                        {/* Thumbnail preview */}
                        <div className="aspect-video rounded-xl overflow-hidden border border-border mb-4 bg-muted/40">
                            <img
                                src={activeInfo.item.src}
                                alt={activeInfo.item.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Category & Location */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                {activeInfo.item.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                                <MapPin className="size-3 text-primary" />
                                {activeInfo.item.location}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-foreground">
                            {activeInfo.item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2.5">
                            {activeInfo.item.description}
                        </p>

                        {/* Footer Actions */}
                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    const idx = activeInfo.index;
                                    setActiveInfo(null);
                                    setLightboxIndex(idx);
                                }}
                                className={buttonVariants({
                                    size: 'default',
                                    className: 'uppercase tracking-wider font-bold text-xs cursor-pointer',
                                })}
                            >
                                <Expand className="mr-2 size-3.5" />
                                View In Lightbox
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveInfo(null)}
                                className={buttonVariants({
                                    variant: 'outline',
                                    size: 'default',
                                    className: 'uppercase tracking-wider font-bold text-xs cursor-pointer',
                                })}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}

            {/* Official yet-another-react-lightbox */}
            <Lightbox
                open={lightboxIndex !== null}
                close={() => setLightboxIndex(null)}
                index={lightboxIndex ?? 0}
                slides={lightboxSlides}
            />
        </section>
    );
}

export default HomeFieldOperationsSection;
