import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight, ArrowUpRight, Calendar, Images, Video } from 'lucide-react';
import Wrapper from '@/components/ui/misc/wrapper';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { buttonVariants } from '@/components/ui/button';
import { ProjectListItem } from '@/components/project-card';
import SectionOverline from '@/components/ui/misc/section-overline';
// @ts-ignore
import fallbackImage from '@/../images/IMG_0190-copy.webp';

interface HomeLatestProjectsSectionProps {
    projects?: ProjectListItem[];
}

export function HomeLatestProjectsSection({ projects = [] }: HomeLatestProjectsSectionProps) {
    if (!projects || projects.length === 0) {
        return null;
    }

    const featuredProject = projects[0];
    const secondaryProjects = projects.slice(1, 3);

    const featuredImage =
        featuredProject.featured_image_url ||
        featuredProject.gallery_image_urls?.[0] ||
        fallbackImage;

    return (
        <section className="py-24 bg-muted/30 border-y border-border relative overflow-hidden">
            <BackgroundText position="right">PROJECTS</BackgroundText>

            <Wrapper className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-3">
                        <SectionOverline label="Field Operations" align="left" />
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground">
                            LATEST <span className="text-primary">PROJECTS</span>
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-foreground transition-colors group"
                    >
                        <span>View All Projects</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                    {/* Primary Featured Project Card */}
                    <div className={secondaryProjects.length > 0 ? "lg:col-span-7" : "lg:col-span-12"}>
                        <Link
                            href={`/projects/${featuredProject.slug}`}
                            className="group relative flex flex-col justify-end h-full min-h-[440px] sm:min-h-[500px] rounded-2xl overflow-hidden border border-border bg-card shadow-lg hover:border-primary/60 transition-all duration-300"
                        >
                            <img
                                src={featuredImage}
                                alt={featuredProject.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Dual-mode calibrated gradient: light in light mode, deep in dark mode */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent dark:from-black/90 dark:via-black/45 dark:to-transparent" />

                            <div className="relative z-10 p-6 sm:p-8 space-y-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-primary text-primary-foreground">
                                        LATEST OPERATION
                                    </span>
                                    {featuredProject.project_date && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                            <Calendar className="size-3 text-primary" />
                                            {featuredProject.project_date}
                                        </span>
                                    )}
                                    {featuredProject.video_url && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                            <Video className="size-3 text-primary" />
                                            Video
                                        </span>
                                    )}
                                    {featuredProject.total_images && featuredProject.total_images > 0 && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                            <Images className="size-3 text-primary" />
                                            {featuredProject.total_images} {featuredProject.total_images === 1 ? 'Photo' : 'Photos'}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground dark:text-white tracking-tight">
                                        {featuredProject.title}
                                    </h3>
                                    {featuredProject.description && (
                                        <p className="text-sm text-muted-foreground dark:text-white/80 line-clamp-2 mt-2 max-w-xl">
                                            {featuredProject.description}
                                        </p>
                                    )}
                                </div>

                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary pt-2 group-hover:text-foreground dark:group-hover:text-white transition-colors">
                                    <span>View Case Study</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Secondary Projects / Archive Column */}
                    {secondaryProjects.length > 0 && (
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {secondaryProjects.map((project) => {
                                const cardImage =
                                    project.featured_image_url ||
                                    project.gallery_image_urls?.[0] ||
                                    fallbackImage;

                                return (
                                    <Link
                                        key={project.id}
                                        href={`/projects/${project.slug}`}
                                        className="group relative flex flex-col justify-end flex-1 min-h-[230px] rounded-2xl overflow-hidden border border-border bg-card shadow-md hover:border-primary/60 transition-all duration-300"
                                    >
                                        <img
                                            src={cardImage}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/55 to-transparent dark:from-black/90 dark:via-black/40 dark:to-transparent" />

                                        <div className="relative z-10 p-6 space-y-2">
                                            <div className="flex flex-wrap items-center gap-2">
                                                {project.project_date && (
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                                        <Calendar className="size-3 text-primary" />
                                                        {project.project_date}
                                                    </span>
                                                )}
                                                {project.video_url && (
                                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                                        <Video className="size-3 text-primary" />
                                                    </span>
                                                )}
                                                {project.total_images && project.total_images > 0 && (
                                                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-card/90 text-foreground border border-border dark:bg-black/60 dark:text-white/90 dark:border-white/20 backdrop-blur-xs">
                                                        <Images className="size-3 text-primary" />
                                                        {project.total_images} {project.total_images === 1 ? 'Photo' : 'Photos'}
                                                    </span>
                                                )}
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-foreground dark:text-white tracking-tight">
                                                {project.title}
                                            </h4>
                                            {project.description && (
                                                <p className="text-xs text-muted-foreground dark:text-white/75 line-clamp-1">
                                                    {project.description}
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}

                            {/* Link Card to all projects */}
                            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between gap-4 shadow-sm">
                                <div className="space-y-2">
                                    <SectionOverline label="Portfolio Archive" align="left" textClassName="text-[11px]" />
                                    <h4 className="text-lg font-black uppercase text-foreground tracking-tight">
                                        Explore All Case Studies
                                    </h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Detailed records of completed heavy lifts, rigging, and turnkey transport operations.
                                    </p>
                                </div>
                                <Link
                                    href="/projects"
                                    className={buttonVariants({
                                        size: "default",
                                        className: "w-full uppercase font-bold tracking-wider text-xs",
                                    })}
                                >
                                    <span>Browse Full Projects Gallery</span>
                                    <ArrowRight className="size-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
}
