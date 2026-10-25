import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading, { SectionOverline } from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectListItem } from '@/components/project-card';
import PageSeparator from '@/components/page-separator';
import EmergencyCta from '@/components/emergency-cta';
import { ArrowLeft, ArrowRight, Calendar, Clock, Expand, HardHat, Images, Phone, ShieldCheck, Wrench } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryItem {
    title: string;
    description: string | null;
    images: string[];
    image_urls: string[];
}

interface ProjectDetail {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    content: string | null;
    featured_image_url: string | null;
    gallery_image_urls: string[];
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
    // Lightbox state for main gallery
    const [mainLightboxIndex, setMainLightboxIndex] = useState<number | null>(null);

    // Lightbox state for custom galleries: { galleryIndex, imageIndex }
    const [customLightbox, setCustomLightbox] = useState<{
        galleryIndex: number;
        imageIndex: number;
    } | null>(null);

    const mainSlides = (project.gallery_image_urls ?? []).map((url) => ({ src: url }));

    const hasMainGallery = (project.gallery_image_urls ?? []).length > 0;
    const hasCustomGalleries = (project.galleries_with_urls ?? []).length > 0;

    return (
        <AppLayout
            title={`${project.title} - Projects - Teemane Cranes`}
            description={project.description || `${project.title} - heavy lifting and crane operations project by Teemane Cranes.`}
            image={project.featured_image_url || undefined}
        >
            {/* Hero Header */}
            <div className="relative overflow-hidden border-b border-border bg-muted/30 py-16 lg:py-24">
              {/* Background Dot Matrix Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(oklch(0.469_0.113_242.6/0.14)_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none opacity-80" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

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

                  {/* Enlarged Image Display */}
                  <div className="lg:col-span-7">
                    {project.featured_image_url && (
                      <div className="relative aspect-16/10 lg:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card">
                        <img
                          src={project.featured_image_url}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold uppercase text-white font-mono">
                          <span>REF: {project.slug.toUpperCase()}</span>
                          <span className="text-primary font-bold">LIVE EXECUTION</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Wrapper>
            </div>

            {/* Cinematic Letterbox Page Divider directly under Overview */}
            <section className="relative isolate overflow-hidden h-52 sm:h-64 w-full border-y border-border bg-black">
                <img
                    src={project.featured_image_url || undefined}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity filter contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-primary/80" />
                <Wrapper className="relative z-10 h-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-white">
                            // FIELD LOG : SITE OPERATIONS
                        </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-xs">
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
                            className="mb-12"
                        >
                            High-resolution photography from the site lift operations and rigging phases.
                        </SectionHeading>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                            {project.gallery_image_urls.map((url, idx) => {
                                const isHero = idx === 0;
                                const isWide = idx === 3;

                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={() => setMainLightboxIndex(idx)}
                                        className={`group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
                                            isHero
                                                ? 'col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]'
                                                : isWide
                                                  ? 'col-span-2 aspect-16/9'
                                                  : 'aspect-4/3'
                                        }`}
                                    >
                                        <img
                                            src={url}
                                            alt={`${project.title} - Site Photography`}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                                            <div className="flex justify-between items-start">
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                                                    Photo #{idx + 1}
                                                </span>
                                                <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                                                    <Expand className="size-4" />
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                                                Inspect High-Res
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

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
                        const slides = (gallery.image_urls ?? []).map((url) => ({ src: url }));
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

                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                            {(gallery.image_urls ?? []).map((url, imgIdx) => {
                                                const isHero = imgIdx === 0;
                                                const isWide = imgIdx === 3;

                                                return (
                                                    <button
                                                        key={imgIdx}
                                                        type="button"
                                                        onClick={() =>
                                                            setCustomLightbox({
                                                                galleryIndex: gIdx,
                                                                imageIndex: imgIdx,
                                                            })
                                                        }
                                                        className={`group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
                                                            isHero
                                                                ? 'col-span-2 row-span-2 min-h-[280px] sm:min-h-[420px]'
                                                                : isWide
                                                                  ? 'col-span-2 aspect-16/9'
                                                                  : 'aspect-4/3'
                                                        }`}
                                                    >
                                                        <img
                                                            src={url}
                                                            alt={`${gallery.title} - Project Photography`}
                                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5">
                                                            <div className="flex justify-between items-start">
                                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                                                                    #{imgIdx + 1}
                                                                </span>
                                                                <div className="size-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                                                                    <Expand className="size-4" />
                                                                </div>
                                                            </div>
                                                            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                                                                Inspect High-Res
                                                            </span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>

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
                                <ProjectCard key={p.id} project={p} />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            )}

            <EmergencyCta />
        </AppLayout>
    );
}
