import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading, { SectionOverline } from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectGalleryView, type ProjectListItem, type ProjectImageItem, type ImageOrientation } from '@/components/project';
import PageSeparator from '@/components/page-separator';
import EmergencyCta from '@/components/emergency-cta';
import { ArrowLeft, ArrowRight, Calendar, Clock, Expand, HardHat, Images, Phone, ShieldCheck, Wrench } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import { cn } from '@/lib/utils';
import DotPattern from "@/components/dot-pattern";
import Line2Divider from '@/components/line2-divider';
import { useImageAspectRatio } from '@/hooks/use-image-aspect-ratio';

interface GalleryItem {
    title: string;
    description: string | null;
    images: string[];
    image_urls: string[];
    images_meta?: ProjectImageItem[];
}

interface Line2DividerBlock {
    type: 'line2_divider';
    data: {
        show_diamond?: boolean;
        show_side_texts?: boolean;
        show_dashed_borders?: boolean;
        show_beam?: boolean;
        show_dots?: boolean;
        left_text?: string | null;
        right_text?: string | null;
        velocity?: number | string;
        velocity_texts?: string[];
        min_height?: number | string;
        padding_y?: string;
        theme_style?: string;
        watermark_opacity?: number | string;
    };
}

interface RichTextBlock {
    type: 'rich_text';
    data: {
        content: string;
        max_width?: string;
        darker_background?: boolean;
    };
}

interface CtaBlock {
    type: 'cta';
    data: {
        heading: string;
        text?: string;
        button_label: string;
        button_url: string;
        darker_background?: boolean;
    };
}

type ProjectContentBlock = Line2DividerBlock | RichTextBlock | CtaBlock | { type: string; data: any };

interface ProjectDetail {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    content_blocks?: ProjectContentBlock[];
    featured_image_url: string | null;
    featured_image_orientation?: ImageOrientation | null;
    featured_image_aspect_ratio?: number | null;
    gallery_image_urls: string[];
    gallery_images?: ProjectImageItem[];
    galleries_with_urls: GalleryItem[];
    video_url?: string | null;
    embed_video_url?: string | null;
    project_date?: string | null;
    project_date_raw?: string | null;
    created_at?: string | null;
}

interface ProjectsShowProps {
    project: ProjectDetail;
    relatedProjects?: ProjectListItem[];
}

export default function Show({ project, relatedProjects = [] }: ProjectsShowProps) {
    const {
        orientation: heroOrientation,
        imgRef: heroImgRef,
        handleLoad: handleHeroLoad,
        containerStyle: heroContainerStyle,
    } = useImageAspectRatio({
        initialAspectRatio: project.featured_image_aspect_ratio,
        initialOrientation: project.featured_image_orientation,
    });

    // Lightbox state for main gallery
    const [mainLightboxIndex, setMainLightboxIndex] = useState<number | null>(null);

    // Lightbox state for custom galleries: { galleryIndex, imageIndex }
    const [customLightbox, setCustomLightbox] = useState<{
        galleryIndex: number;
        imageIndex: number;
    } | null>(null);

    // Normalize main gallery images with orientation metadata
    const mainGalleryItems: ProjectImageItem[] = React.useMemo(() => {
        if (project.gallery_images && project.gallery_images.length > 0) {
            return project.gallery_images;
        }
        return (project.gallery_image_urls ?? []).map((url) => ({
            url,
            orientation: 'landscape' as const,
            aspect_ratio: 1.77,
        }));
    }, [project.gallery_images, project.gallery_image_urls]);

    const mainSlides = React.useMemo(() => {
        return mainGalleryItems.map((item) => ({ src: item.url }));
    }, [mainGalleryItems]);

    const hasMainGallery = mainGalleryItems.length > 0;
    const hasCustomGalleries = (project.galleries_with_urls ?? []).length > 0;

    return (
        <AppLayout
            title={`${project.title} - Projects - Teemane Cranes`}
            description={project.description || `${project.title} - heavy lifting and crane operations project by Teemane Cranes.`}
            image={project.featured_image_url || undefined}
        >
            {/* Hero Header */}
            <div className="relative overflow-hidden border-b border-border bg-muted/30 py-16 lg:py-24">
                <DotPattern corner={`top-left`} />
                <DotPattern corner={`top-right`} />

              <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <SectionOverline label="Field Record // Crane Ops" align="left" />
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
                      {project.title}
                    </h1>
                    {project.description && (
                      <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.project_date && (
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs font-mono">
                          <Calendar className="size-3.5 text-primary" />
                          {project.project_date}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs">
                        <Wrench className="size-3.5 text-primary" />
                        Mobile Crane &amp; Heavy Lift
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs">
                        <ShieldCheck className="size-3.5 text-primary" />
                        ISO-Compliant Precision
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-semibold text-foreground shadow-2xs">
                        <Clock className="size-3.5 text-primary" />
                        Turnkey Mobilisation
                      </span>
                    </div>
                  </div>

                  {/* Enlarged Image Display - Dynamic Aspect Ratio & Orientation Aware */}
                  <div className={cn(
                    "lg:col-span-7",
                    heroOrientation === 'portrait' ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-7"
                  )}>
                    {project.featured_image_url && (
                      <div className={cn(
                        "rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card",
                        heroOrientation === 'portrait' && "max-w-md mx-auto lg:ml-auto"
                      )}>
                        <div
                          className="relative overflow-hidden bg-card flex items-center justify-center"
                          style={heroContainerStyle ?? {
                            aspectRatio: heroOrientation === 'portrait' ? '3/4' : '16/9',
                          }}
                        >
                          <img
                            ref={heroImgRef}
                            src={project.featured_image_url}
                            alt={project.title}
                            onLoad={handleHeroLoad}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Wrapper>
            </div>

            {/* Field Log Operational Status Divider */}
            <section className="relative isolate overflow-hidden py-5 w-full border-y border-border bg-card">
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                <Wrapper className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-foreground">
                            // FIELD LOG : SITE OPERATIONS
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-muted/60 text-xs font-bold text-foreground uppercase tracking-wider">
                        <span>Project Documentation Below</span>
                        <span className="text-primary font-bold">↓</span>
                    </div>
                </Wrapper>
            </section>

            {/* Video Showcase Section (YouTube / Vimeo) */}
            {project.embed_video_url && (
                <section className="py-20 bg-background border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="On-Site Footage"
                            title={
                                <>
                                    PROJECT <span className="text-primary">VIDEO</span>
                                </>
                            }
                            align="left"
                            className="mb-10"
                        >
                            Live operational footage and site execution recorded during project mobilization.
                        </SectionHeading>

                        <div className="relative aspect-16/9 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl bg-black">
                            <iframe
                                src={project.embed_video_url}
                                title={`${project.title} Video Documentation`}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </Wrapper>
                </section>
            )}

            {/* Case Study Content */}
            {project.content && (
                <section className="py-16 bg-muted/20 border-b border-border">
                    <Wrapper>
                        <div className="max-w-4xl">
                            <SectionOverline label="Case Study // Scope of Work" align="left" className="mb-6" />
                            <div
                                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: project.content }}
                            />
                        </div>
                    </Wrapper>
                </section>
            )}

            {/* Modular Content Blocks (including Line 2 Marquee Divider) */}
            {project.content_blocks && project.content_blocks.length > 0 && (
                <div className="flex flex-col">
                    {project.content_blocks.map((block, i) => {
                        if (block.type === 'line2_divider') {
                            const d = block.data || {};
                            return (
                                <Line2Divider
                                    key={i}
                                    showDiamond={d.show_diamond ?? true}
                                    showSideTexts={d.show_side_texts ?? true}
                                    showDashedBorders={d.show_dashed_borders ?? true}
                                    showBeam={d.show_beam ?? true}
                                    showDots={d.show_dots ?? true}
                                    leftText={d.left_text}
                                    rightText={d.right_text}
                                    velocity={d.velocity ? Number(d.velocity) : 45}
                                    velocityTexts={d.velocity_texts && d.velocity_texts.length > 0 ? d.velocity_texts : undefined}
                                    minHeight={d.min_height}
                                    paddingY={d.padding_y}
                                    themeStyle={d.theme_style}
                                    watermarkOpacity={d.watermark_opacity}
                                />
                            );
                        }

                        if (block.type === 'rich_text') {
                            const d = block.data || {};
                            const maxWidthClass = d.max_width || 'max-w-none';
                            return (
                                <section key={i} className={`w-full py-20 ${d.darker_background ? 'bg-muted border-y border-border' : 'bg-background'}`}>
                                    <Wrapper>
                                        <div
                                            className={`prose prose-lg dark:prose-invert mx-auto ${maxWidthClass} prose-headings:font-black prose-headings:uppercase prose-a:text-primary`}
                                            dangerouslySetInnerHTML={{ __html: d.content }}
                                        />
                                    </Wrapper>
                                </section>
                            );
                        }

                        if (block.type === 'cta') {
                            const d = block.data || {};
                            return (
                                <section key={i} className={`w-full py-16 ${d.darker_background ? 'bg-muted border-y border-border' : 'bg-background'}`}>
                                    <Wrapper>
                                        <div className="bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-black tracking-tight text-foreground uppercase mb-2">
                                                    {d.heading}
                                                </h3>
                                                {d.text && (
                                                    <p className="text-muted-foreground leading-relaxed">{d.text}</p>
                                                )}
                                            </div>
                                            <a
                                                href={d.button_url}
                                                className="shrink-0 inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all"
                                            >
                                                {d.button_label}
                                                <ArrowRight className="size-4" />
                                            </a>
                                        </div>
                                    </Wrapper>
                                </section>
                            );
                        }

                        return null;
                    })}
                </div>
            )}

            {/* Main Image Gallery */}
            {hasMainGallery && (
                <section className="py-20 bg-muted/30 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="Photo Gallery"
                            title={
                                <>
                                    SITE <span className="text-primary">GALLERY</span>
                                </>
                            }
                            align="left"
                            className="mb-10"
                        >
                            High-resolution photography from the site lift operations and rigging phases.
                        </SectionHeading>

                        <ProjectGalleryView
                            images={mainGalleryItems}
                            projectTitle={project.title}
                            onImageClick={(idx) => setMainLightboxIndex(idx)}
                        />

                        <Lightbox
                            open={mainLightboxIndex !== null}
                            close={() => setMainLightboxIndex(null)}
                            index={mainLightboxIndex ?? 0}
                            slides={mainSlides}
                        />
                    </Wrapper>
                </section>
            )}

            {/* Custom / Dedicated Galleries */}
            {hasCustomGalleries && (
                <div className="flex flex-col">
                    {project.galleries_with_urls.map((gallery, gIdx) => {
                        const galleryItems: ProjectImageItem[] = (gallery.images_meta && gallery.images_meta.length > 0)
                            ? gallery.images_meta
                            : (gallery.image_urls ?? []).map((url) => ({
                                url,
                                orientation: 'landscape' as const,
                                aspect_ratio: 1.77,
                            }));
                        const slides = galleryItems.map((item) => ({ src: item.url }));
                        const isOpen = customLightbox?.galleryIndex === gIdx;

                        return (
                            <section
                                key={gIdx}
                                className={`w-full py-20 border-b border-border ${
                                    gIdx % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                                }`}
                            >
                                <Wrapper>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-2">
                                                <Images className="size-3.5" />
                                                <span>Photo Collection</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                                                {gallery.title}
                                            </h3>
                                            {gallery.description && (
                                                <p className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed">
                                                    {gallery.description}
                                                </p>
                                            )}
                                        </div>

                                        <ProjectGalleryView
                                            images={galleryItems}
                                            projectTitle={gallery.title}
                                            onImageClick={(imgIdx) =>
                                                setCustomLightbox({
                                                    galleryIndex: gIdx,
                                                    imageIndex: imgIdx,
                                                })
                                            }
                                        />

                                        <Lightbox
                                            open={isOpen}
                                            close={() => setCustomLightbox(null)}
                                            index={customLightbox?.imageIndex ?? 0}
                                            slides={slides}
                                        />
                                    </div>
                                </Wrapper>
                            </section>
                        );
                    })}
                </div>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <section className="py-20 bg-muted/20 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="More Case Studies"
                            title={
                                <>
                                    RELATED <span className="text-primary">PROJECTS</span>
                                </>
                            }
                            align="left"
                            className="mb-12"
                        >
                            Explore other demanding lifting and rigging projects delivered by Teemane Cranes.
                        </SectionHeading>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {relatedProjects.map((p) => (
                                <ProjectCard key={p.id} project={p} variant="grid" />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            )}

            <EmergencyCta />
        </AppLayout>
    );
}
