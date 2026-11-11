import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading, { SectionOverline } from '@/components/ui/misc/section-heading';
import { ServiceCard, type ServiceListItem } from '@/components/service-card';
import { BackgroundText } from '@/components/ui/misc/background-text';
import DotPattern from "@/components/dot-pattern";
import { ProjectGalleryView, type ProjectImageItem } from '@/components/project';
// @ts-ignore
import { BalancedMasonryGrid, Frame } from '@masonry-grid/react';
import Lightbox from 'yet-another-react-lightbox';
import { ArrowRight, Wrench, ShieldCheck, Clock } from 'lucide-react';

interface ServicesIndexProps {
    services: (ServiceListItem & { content_blocks?: any[] })[];
}

function ServiceGridFrameItem({ service, idx }: { service: ServiceListItem; idx: number }) {
    const isPortrait = service.featured_image_orientation === 'portrait';
    const isSquare = service.featured_image_orientation === 'square';
    const initialRatio = service.featured_image_aspect_ratio
        ? service.featured_image_aspect_ratio
        : (isPortrait ? 0.75 : isSquare ? 1.0 : 1.5);

    const [imgRatio, setImgRatio] = useState(initialRatio);
    const cardHeight = Math.round(1000 / imgRatio) + 320;

    return (
        <Frame width={1000} height={cardHeight}>
            <ServiceCard
                service={service}
                index={idx}
                className="h-full w-full"
                onAspectRatioChange={(ratio) => setImgRatio(ratio)}
            />
        </Frame>
    );
}

export default function Index({ services = [] }: ServicesIndexProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Collect all field gallery photos across services
    const allGalleryShots: ProjectImageItem[] = React.useMemo(() => {
        const shots: ProjectImageItem[] = [];

        for (const s of services) {
            const blocks = s.content_blocks || [];
            for (const b of blocks) {
                if (b.type === 'gallery' && b.data?.images_meta) {
                    shots.push(...b.data.images_meta);
                } else if (b.type === 'gallery' && b.data?.image_urls) {
                    for (const url of b.data.image_urls) {
                        shots.push({ url, orientation: 'landscape', aspect_ratio: 1.778 });
                    }
                } else if (b.type === 'image' && b.data?.image_meta) {
                    shots.push(b.data.image_meta);
                } else if (b.type === 'image' && b.data?.image_url) {
                    shots.push({ url: b.data.image_url, orientation: 'landscape', aspect_ratio: 1.778 });
                }
            }
        }

        return shots.filter(
            (item, index, self) => item.url && self.findIndex((other) => other.url === item.url) === index
        );
    }, [services]);

    const lightboxSlides = allGalleryShots.map((s) => ({ src: s.url }));

    return (
        <AppLayout
            title="Specialized Crane & Lifting Services - Teemane Cranes"
            description="Explore our specialized mobile crane hire, rigging, industrial engineering, and precision heavy lifting capabilities across South Africa."
        >
            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                {/* Hero Header */}
                <section className="py-24 bg-muted/30 border-b border-border relative overflow-hidden">
                    <BackgroundText position="center">SERVICES</BackgroundText>
                    <DotPattern corner="top-left" />
                    <DotPattern corner="top-right" />
                    <Wrapper>
                        <SectionHeading
                            label="Our Capabilities"
                            title={<>ENGINEERED FOR <span className="text-primary">THE LIFT</span></>}
                            align="center"
                            className="mb-8"
                        >
                            We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge.
                        </SectionHeading>

                        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                                <span className="size-1 rounded-full bg-primary" />
                                20T to 550T Fleet Capacity
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                                <span className="size-1 rounded-full bg-primary" />
                                Certified Rigging Engineers
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                                <span className="size-1 rounded-full bg-primary" />
                                24/7 Rapid Deployment
                            </span>
                        </div>

                        {/* Services Grid Header */}
                        {services.length > 0 && (
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                                <SectionOverline label={`Core Capabilities (${services.length})`} align="left" />
                                <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
                                    Full uncropped equipment views &amp; specifications
                                </span>
                            </div>
                        )}

                        {/* Grid / Balanced Masonry Grid with Impactful Cards */}
                        {services.length > 2 ? (
                            <BalancedMasonryGrid frameWidth={320} gap={24}>
                                {services.map((service, idx) => (
                                    <ServiceGridFrameItem
                                        key={service.id}
                                        service={service}
                                        idx={idx}
                                    />
                                ))}
                            </BalancedMasonryGrid>
                        ) : services.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {services.map((service, idx) => (
                                    <ServiceCard key={service.id} service={service} index={idx} />
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs">
                                <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                                    <Wrench className="size-8" />
                                </div>
                                <h3 className="text-xl font-bold uppercase text-foreground mb-2">
                                    Capabilities Underway
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Our service capability profiles are currently being updated. Contact our dispatch team directly for customized crane hire and engineering solutions.
                                </p>
                            </div>
                        )}
                    </Wrapper>
                </section>

                {/* Field Operations & Capabilities Photography Showcase */}
                {allGalleryShots.length > 0 && (
                    <section className="py-24 bg-background border-b border-border">
                        <Wrapper>
                            <SectionHeading
                                label="Field Captures"
                                title={
                                    <>
                                        ON-SITE <span className="text-primary">OPERATIONS</span>
                                    </>
                                }
                                align="center"
                                className="mb-14"
                            >
                                A visual log of recent mobile crane lifts, shipyard rigging, and heavy engineering tasks delivered with precision and safety.
                            </SectionHeading>

                            <ProjectGalleryView
                                images={allGalleryShots}
                                projectTitle="Service Operations"
                                onImageClick={(idx) => setLightboxIndex(idx)}
                            />

                            <Lightbox
                                open={lightboxIndex !== null}
                                close={() => setLightboxIndex(null)}
                                index={lightboxIndex ?? 0}
                                slides={lightboxSlides}
                            />
                        </Wrapper>
                    </section>
                )}
            </div>
        </AppLayout>
    );
}
