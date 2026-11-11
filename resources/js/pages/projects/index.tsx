import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading, { SectionOverline } from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectGalleryView, type ProjectListItem, type ProjectImageItem } from '@/components/project';
// @ts-ignore
import { BalancedMasonryGrid, Frame } from '@masonry-grid/react';
import EmergencyCta from '@/components/emergency-cta';
import { ArrowRight, Camera, Expand, FolderGit2, Images, ShieldCheck } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import { useCompany } from '@/hooks/use-company';
import DotPattern from "@/components/dot-pattern";
import { cn } from '@/lib/utils';

interface ProjectsIndexProps {
    projects: ProjectListItem[];
}

function ProjectGridFrameItem({ project }: { project: ProjectListItem }) {
    const isPortrait = project.featured_image_orientation === 'portrait';
    const isSquare = project.featured_image_orientation === 'square';
    const initialRatio = project.featured_image_aspect_ratio
        ? project.featured_image_aspect_ratio
        : (isPortrait ? 0.75 : isSquare ? 1.0 : 1.5);

    const [imgRatio, setImgRatio] = useState(initialRatio);
    const cardHeight = Math.round(1000 / imgRatio) + 360;

    return (
        <Frame width={1000} height={cardHeight}>
            <ProjectCard
                project={project}
                variant="grid"
                className="h-full w-full"
                onAspectRatioChange={(ratio) => setImgRatio(ratio)}
            />
        </Frame>
    );
}

export default function Index({ projects = [] }: ProjectsIndexProps) {
    const { stats } = useCompany();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Always ensure ordering by project_date descending
    const sortedProjects = React.useMemo(() => {
        return [...projects].sort((a, b) => {
            const timeA = a.project_date_raw ? new Date(a.project_date_raw).getTime() : 0;
            const timeB = b.project_date_raw ? new Date(b.project_date_raw).getTime() : 0;
            if (timeB !== timeA) {
                return timeB - timeA;
            }
            return (b.id ?? 0) - (a.id ?? 0);
        });
    }, [projects]);

    // Featured flagship project (first in the list)
    const featuredProject = sortedProjects.length > 0 ? sortedProjects[0] : null;

    // Collect all unique gallery photos across projects for the Field Photography showcase with orientation
    const allGalleryShots = sortedProjects
        .flatMap((p) => {
            const items = [
                ...(p.gallery_images || []),
                ...(p.galleries_with_urls?.flatMap((g) => g.images_meta || []) || []),
            ];

            if (items.length > 0) {
                return items.map((item) => ({
                    src: item.url,
                    orientation: item.orientation || 'landscape',
                    aspect_ratio: item.aspect_ratio,
                    width: item.width,
                    height: item.height,
                    projectTitle: p.title,
                    projectSlug: p.slug,
                }));
            }

            const urls = [
                ...(p.gallery_image_urls || []),
                ...(p.galleries_with_urls?.flatMap((g) => g.image_urls) || []),
            ];

            return urls.map((url) => ({
                src: url,
                orientation: 'landscape' as const,
                aspect_ratio: 1.77,
                width: null,
                height: null,
                projectTitle: p.title,
                projectSlug: p.slug,
            }));
        })
        .filter(
            (item, index, self) =>
                item.src &&
                self.findIndex((other) => other.src === item.src) === index
        )
        .slice(0, 16);

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
                    <DotPattern corner={`top-left`} />
                    <DotPattern corner={`top-right`} />
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
                                    Up to {stats.max_capacity.display} Heavy Lift
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
                            <div className="mb-20 rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-9 shadow-xs overflow-hidden relative">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                                    {/* Left Details */}
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                                                <span className="size-1.5 rounded-full bg-primary" />
                                                Featured Showcase
                                            </span>

                                            {featuredProject.total_images && featuredProject.total_images > 0 && (
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold text-foreground">
                                                    <Camera className="size-3.5 text-primary" />
                                                    <span>{featuredProject.total_images} High-Res Photos</span>
                                                </span>
                                            )}
                                        </div>

                                        <div className="space-y-2.5">
                                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
                                                {featuredProject.title}
                                            </h3>
                                            {featuredProject.description && (
                                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
                                                    {featuredProject.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Hairline bordered spec cells */}
                                        <div className="grid grid-cols-2 rounded-xl border border-border bg-muted/20 divide-x divide-border overflow-hidden">
                                            <div className="p-3.5 space-y-1">
                                                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                    Fleet Deployment
                                                </span>
                                                <p className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                                                    <ShieldCheck className="size-4 text-primary shrink-0" />
                                                    Certified Riggers
                                                </p>
                                            </div>
                                            <div className="p-3.5 space-y-1">
                                                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground block">
                                                    Project Gallery
                                                </span>
                                                <p className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1.5">
                                                    <Images className="size-4 text-primary shrink-0" />
                                                    Full Photo Log
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <Link
                                                href={`/projects/${featuredProject.slug}`}
                                                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs px-6 py-3.5 transition-colors"
                                            >
                                                <span>Explore Case Study &amp; Gallery</span>
                                                <ArrowRight className="size-4" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Right Interactive Photo Showcase that fully fills container */}
                                    <div className="lg:col-span-7 w-full h-full">
                                        {(() => {
                                            const featuredShots = Array.from(
                                                new Set([
                                                    featuredProject.featured_image_url,
                                                    ...(featuredProject.gallery_image_urls || []),
                                                    ...(featuredProject.galleries_with_urls?.flatMap((g) => g.image_urls) || []),
                                                ])
                                            ).filter(Boolean) as string[];

                                            const mainHeroShot = featuredShots[0];
                                            const subShots = featuredShots.slice(1, 4);
                                            const isHeroPortrait = featuredProject.featured_image_orientation === 'portrait';

                                            if (isHeroPortrait && subShots.length > 0) {
                                                return (
                                                    <div className="rounded-2xl border border-border bg-muted/30 p-2 grid grid-cols-3 gap-2.5 sm:gap-3 h-full min-h-[380px] sm:min-h-[460px]">
                                                        {/* Tall Hero Shot filling 2 columns */}
                                                        <Link
                                                            href={`/projects/${featuredProject.slug}`}
                                                            className="col-span-2 h-full min-h-[340px] rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs"
                                                        >
                                                            <img
                                                                src={mainHeroShot}
                                                                alt={featuredProject.title}
                                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                            />
                                                        </Link>

                                                        {/* Stacked Sub-shots filling 1 column */}
                                                        <div className="col-span-1 flex flex-col gap-2.5 sm:gap-3 h-full justify-between">
                                                            {subShots.slice(0, 2).map((url, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={`/projects/${featuredProject.slug}`}
                                                                    className="flex-1 min-h-[160px] rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs"
                                                                >
                                                                    <img
                                                                        src={url}
                                                                        alt=""
                                                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                                    />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            }

                                            return (
                                                <div className="rounded-2xl border border-border bg-muted/30 p-2 flex flex-col gap-2.5 sm:gap-3 h-full">
                                                    {/* Main Hero Shot filling full width */}
                                                    <Link
                                                        href={`/projects/${featuredProject.slug}`}
                                                        className={`w-full ${subShots.length > 0 ? 'aspect-16/10 sm:aspect-16/9' : 'aspect-16/10 lg:aspect-4/3 min-h-[360px]'} rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs`}
                                                    >
                                                        <img
                                                            src={mainHeroShot}
                                                            alt={featuredProject.title}
                                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        />
                                                    </Link>

                                                    {/* Sub-shots row filling full width */}
                                                    {subShots.length > 0 && (
                                                        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                                                            {subShots.map((url, idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    href={`/projects/${featuredProject.slug}`}
                                                                    className="aspect-4/3 rounded-xl overflow-hidden relative group border border-border/80 bg-card block shadow-2xs"
                                                                >
                                                                    <img
                                                                        src={url}
                                                                        alt=""
                                                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                                    />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Projects Grid Header */}
                        {sortedProjects.length > 0 && (
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                                <SectionOverline label={`All Projects (${sortedProjects.length})`} align="left" />
                                <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
                                    Hover preview tiles to browse project galleries
                                </span>
                            </div>
                        )}

                        {/* Projects Masonry Grid */}
                        {sortedProjects.length > 0 ? (
                            <BalancedMasonryGrid frameWidth={320} gap={24}>
                                {sortedProjects.map((project) => (
                                    <ProjectGridFrameItem key={project.id} project={project} />
                                ))}
                            </BalancedMasonryGrid>
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

                            {/* Masonry Field Operations Gallery */}
                            <ProjectGalleryView
                                images={allGalleryShots.map((shot) => ({
                                    url: shot.src,
                                    orientation: shot.orientation,
                                    aspect_ratio: shot.aspect_ratio,
                                    width: shot.width,
                                    height: shot.height,
                                }))}
                                projectTitle="Field Operations"
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

            <EmergencyCta />
        </AppLayout>
    );
}
