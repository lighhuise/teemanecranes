import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading, { SectionOverline } from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectListItem } from '@/components/project-card';
import EmergencyCta from '@/components/emergency-cta';
import { ArrowRight, Camera, Expand, FolderGit2, Images, ShieldCheck } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface ProjectsIndexProps {
    projects: ProjectListItem[];
}

export default function Index({ projects }: ProjectsIndexProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Featured flagship project (first in the list)
    const featuredProject = projects.length > 0 ? projects[0] : null;

    // Collect all unique gallery photos across projects for the Field Photography showcase
    const allGalleryShots = projects
        .flatMap((p) => {
            const urls = [
                ...(p.gallery_image_urls || []),
                ...(p.galleries_with_urls?.flatMap((g) => g.image_urls) || []),
            ];
            return urls.map((url) => ({
                src: url,
                projectTitle: p.title,
                projectSlug: p.slug,
            }));
        })
        .filter(
            (item, index, self) =>
                item.src &&
                self.findIndex((other) => other.src === item.src) === index
        )
        .slice(0, 8);

    const lightboxSlides = allGalleryShots.map((s) => ({ src: s.src }));

    return (
        <AppLayout
            title="Projects & Showcase - Teemane Cranes"
            description="Explore our track record of heavy lifting, mobile crane operations, shipyard installations, and precision engineering across South Africa."
        >
            <div className="bg-background selection:bg-primary selection:text-white">
                {/* Hero Header */}
                <section className="py-24 bg-muted/30 border-b border-border relative overflow-hidden">
                    <BackgroundText position="center">PROJECTS</BackgroundText>
                    <Wrapper>
                        <div className="flex flex-col items-center text-center mb-16 relative py-2">
                            <SectionHeading
                                label="Portfolio"
                                title={<>PROVEN RESULTS ON <span className="text-primary">EVERY LIFT</span></>}
                                align="center"
                                className="mb-4"
                            >
                                Explore our track record of landmark mobile crane operations, heavy rigging, maritime shipyard tasks, and industrial installations across South Africa.
                            </SectionHeading>
                            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 pt-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                                    <span className="size-1 rounded-full bg-primary" />
                                    Up to 440T Heavy Lift
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                                    <span className="size-1 rounded-full bg-primary" />
                                    Civil &amp; Marine Rigging
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground">
                                    <span className="size-1 rounded-full bg-primary" />
                                    ISO-Compliant Precision
                                </span>
                            </div>
                        </div>

                        {/* Featured Flagship Project Showcase */}
                        {featuredProject && (
                            <div className="mb-20 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden relative">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                    {/* Left Details */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="flex flex-wrap items-center gap-2.5">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                                                <span className="size-2 rounded-full bg-primary animate-pulse" />
                                                Featured Showcase
                                            </span>

                                            {featuredProject.total_images && featuredProject.total_images > 0 && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/60 px-3 py-1.5 text-xs font-bold text-foreground">
                                                    <Camera className="size-3.5 text-primary" />
                                                    <span>{featuredProject.total_images} High-Res Photos</span>
                                                </span>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight">
                                                {featuredProject.title}
                                            </h3>
                                            {featuredProject.description && (
                                                <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
                                                    {featuredProject.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Highlight specs */}
                                        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/60">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                    Fleet Deployment
                                                </span>
                                                <p className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                                                    <ShieldCheck className="size-4 text-primary shrink-0" />
                                                    Certified Riggers
                                                </p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                    Project Gallery
                                                </span>
                                                <p className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                                                    <Images className="size-4 text-primary shrink-0" />
                                                    Full Photographic Log
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <Link
                                                href={`/projects/${featuredProject.slug}`}
                                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs px-7 py-3.5 shadow-md shadow-primary/20 transition-all hover:scale-105"
                                            >
                                                <span>Explore Case Study & Gallery</span>
                                                <ArrowRight className="size-4" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Interactive Photo Bento */}
                                    <div className="lg:col-span-7">
                                        {(() => {
                                            const featuredShots = [
                                                featuredProject.featured_image_url,
                                                ...(featuredProject.gallery_image_urls || []),
                                                ...(featuredProject.galleries_with_urls?.flatMap((g) => g.image_urls) || []),
                                            ].filter(Boolean) as string[];

                                            const mainHeroShot = featuredShots[0];
                                            const subShots = featuredShots.slice(1, 4);

                                            return (
                                                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                                    {/* Main Hero Photo (Spans full width) */}
                                                    <Link
                                                        href={`/projects/${featuredProject.slug}`}
                                                        className="col-span-3 aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden relative group border border-border/80 shadow-md block"
                                                    >
                                                        <img
                                                            src={mainHeroShot}
                                                            alt={featuredProject.title}
                                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                                                            <div className="flex items-center justify-between w-full">
                                                                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                                                                    View Primary Lift Showcase
                                                                </span>
                                                                <div className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                                                                    <ArrowRight className="size-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    {/* Sub Preview Tiles */}
                                                    {subShots.map((url, idx) => (
                                                        <Link
                                                            key={idx}
                                                            href={`/projects/${featuredProject.slug}`}
                                                            className="aspect-4/3 rounded-xl overflow-hidden relative group border border-border/80 shadow-xs block"
                                                        >
                                                            <img
                                                                src={url}
                                                                alt=""
                                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <Expand className="size-5 text-white" />
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Projects Grid Header */}
                        {projects.length > 0 && (
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                                <SectionOverline label={`All Projects (${projects.length})`} align="left" />
                                <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
                                    Hover preview tiles to browse project galleries
                                </span>
                            </div>
                        )}

                        {/* Projects Card Grid */}
                        {projects.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {projects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs">
                                <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                                    <FolderGit2 className="size-8" />
                                </div>
                                <h3 className="text-xl font-bold uppercase text-foreground mb-2">
                                    Showcase Underway
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Our latest project case studies and site photo galleries are currently being updated. Contact our team directly to discuss our extensive project capabilities.
                                </p>
                            </div>
                        )}
                    </Wrapper>
                </section>

                {/* Field Operations & Site Captures Bento Showcase */}
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
                                A visual log of recent mobile crane lifts, shipyard rigging, and heavy transport operations captured live in the field.
                            </SectionHeading>

                            {/* Responsive Bento Mosaic */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                {allGalleryShots.map((shot, idx) => {
                                    // Make first image large (2 columns and 2 rows on medium+)
                                    const isHeroTile = idx === 0;
                                    const isWideTile = idx === 3;

                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => setLightboxIndex(idx)}
                                            className={`group relative overflow-hidden rounded-2xl border border-border bg-muted cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary ${
                                                isHeroTile
                                                    ? 'col-span-2 row-span-2 min-h-[280px] sm:min-h-[360px]'
                                                    : isWideTile
                                                      ? 'col-span-2 aspect-16/9'
                                                      : 'aspect-4/3'
                                            }`}
                                        >
                                            <img
                                                src={shot.src}
                                                alt={shot.projectTitle}
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                                                loading="lazy"
                                            />

                                            {/* Hover Vignette Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 text-left">
                                                <div className="flex justify-end">
                                                    <div className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                                                        <Expand className="size-4" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                                        Site Capture
                                                    </span>
                                                    <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight line-clamp-1">
                                                        {shot.projectTitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

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

            <EmergencyCta />
        </AppLayout>
    );
}
