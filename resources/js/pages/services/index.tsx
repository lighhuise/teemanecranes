import React, { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { type ServiceListItem } from '@/components/service-card';
import { ServicesSection } from '@/components/sections/services-section';
import { ProjectGalleryView, type ProjectImageItem } from '@/components/project';
import Lightbox from 'yet-another-react-lightbox';

interface ServicesIndexProps {
    services: (ServiceListItem & { content_blocks?: any[] })[];
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
                {/* Services Section displaying all capabilities */}
                <ServicesSection
                    services={services}
                    title={
                        <>
                            ENGINEERED FOR <span className="text-primary">THE LIFT</span>
                        </>
                    }
                    label="Our Capabilities"
                    description="We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge."
                    showPills={true}
                    showViewAllButton={false}
                />

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
