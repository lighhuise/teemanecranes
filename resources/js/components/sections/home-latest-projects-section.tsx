import React from 'react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import Wrapper from '@/components/ui/misc/wrapper';
import { BackgroundText } from '@/components/ui/misc/background-text';
import SectionOverline from '@/components/ui/misc/section-overline';
import { ProjectArchiveCard, ProjectCard, type ProjectListItem } from '@/components/project';
import DotPattern from "@/components/dot-pattern";

interface HomeLatestProjectsSectionProps {
    projects?: ProjectListItem[];
}

export function HomeLatestProjectsSection({ projects = [] }: HomeLatestProjectsSectionProps) {
    if (!projects || projects.length === 0) {
        return null;
    }

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

    const featuredProject = sortedProjects[0];
    const secondaryProjects = sortedProjects.slice(1, 3);

    return (
        <section className="py-24 bg-muted/30 border-y border-border relative overflow-clip">
            <BackgroundText position="right">PROJECTS</BackgroundText>
            <DotPattern corner={`top-left`} />
            <DotPattern corner={`bottom-right`} />
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
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                    {/* Primary Featured Project Card */}
                    <div className="lg:col-span-5">
                        <ProjectCard
                            project={featuredProject}
                            variant="spotlight"
                            label="Latest Operation"
                            className="h-full"
                        />
                    </div>

                    {/* Secondary Projects / Archive Column */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {secondaryProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} variant="stack" />
                        ))}

                        <ProjectArchiveCard />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
