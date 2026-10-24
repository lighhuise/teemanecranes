import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectListItem } from '@/components/project-card';
import EmergencyCta from '@/components/emergency-cta';
import { ArrowLeft, Calendar, Expand, Images, Phone } from 'lucide-react';
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
            <div className="relative border-b border-border bg-muted/20 overflow-hidden">
                <BackgroundText position="center">PROJECT</BackgroundText>
                {project.featured_image_url && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                        <img
                            src={project.featured_image_url}
                            alt=""
                            className="w-full h-full object-cover opacity-20 blur-xs"
                        />
                    </div>
                )}

                <Wrapper className="relative py-20 lg:py-24 z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <Link
                                href="/projects"
                                className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary mb-8 transition-colors gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to All Projects
                            </Link>

                            {project.created_at && (
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                    <Calendar className="w-3.5 h-3.5" />
                                    <span>{project.created_at}</span>
                                </div>
                            )}

                            <SectionHeading
                                label="Project Profile"
                                title={project.title}
                                align="left"
                                className="mb-0"
                            >
                                {project.description && (
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                )}
                            </SectionHeading>
                        </div>

                        {project.featured_image_url && (
                            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
                                <img
                                    src={project.featured_image_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>
                </Wrapper>
            </div>

            {/* Project Content / Scope of Work */}
            {project.content && (
                <section className="py-20 bg-background border-b border-border">
                    <Wrapper>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase mb-6">
                                <div className="h-px w-8 bg-primary"></div>
                                Project Overview & Scope
                            </div>
                            <div
                                className="prose prose-neutral dark:prose-invert max-w-none
                                           prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-headings:text-foreground
                                           prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-10
                                           prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:mt-8
                                           prose-p:text-base sm:prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                           prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                                           prose-li:text-muted-foreground"
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

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.gallery_image_urls.map((url, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setMainLightboxIndex(idx)}
                                    className="group relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 hover:scale-[1.02]"
                                >
                                    <img
                                        src={url}
                                        alt={`${project.title} - Site Photography`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="size-11 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                            <Expand className="size-5" />
                                        </div>
                                    </div>
                                </button>
                            ))}
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

                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {(gallery.image_urls ?? []).map((url, imgIdx) => (
                                                <button
                                                    key={imgIdx}
                                                    type="button"
                                                    onClick={() =>
                                                        setCustomLightbox({
                                                            galleryIndex: gIdx,
                                                            imageIndex: imgIdx,
                                                        })
                                                    }
                                                    className="group relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-300 hover:scale-[1.02]"
                                                >
                                                    <img
                                                        src={url}
                                                        alt={`${gallery.title} - Project Photography`}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <div className="size-11 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                            <Expand className="size-5" />
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
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

            {/* Inquire for Similar Projects CTA */}
            <section className="py-20 bg-background border-b border-border">
                <Wrapper>
                    <div className="rounded-2xl border border-border bg-muted/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Have A Similar Requirement?
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                                Consult With Our Rigging & Lift Specialists
                            </h3>
                            <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                                From site inspections and CAD lift studies to end-to-end crane hire and turnkey project execution, we have the fleet and expertise ready.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-lg shadow-sm hover:bg-primary/90 transition-all text-center"
                            >
                                Request a Quote
                            </Link>
                            <a
                                href="tel:0842637690"
                                className="inline-flex items-center justify-center gap-2 bg-card border border-border text-foreground hover:border-primary font-bold tracking-widest uppercase text-xs px-8 py-4 rounded-lg transition-all text-center"
                            >
                                <Phone className="size-4 text-primary" />
                                084 263 7690
                            </a>
                        </div>
                    </div>
                </Wrapper>
            </section>

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
