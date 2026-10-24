import React from 'react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectCard, ProjectListItem } from '@/components/project-card';
import EmergencyCta from '@/components/emergency-cta';
import { FolderGit2 } from 'lucide-react';

interface ProjectsIndexProps {
    projects: ProjectListItem[];
}

export default function Index({ projects }: ProjectsIndexProps) {
    return (
        <AppLayout
            title="Projects & Showcase - Teemane Cranes"
            description="Explore our track record of heavy lifting, mobile crane operations, shipyard installations, and precision engineering across South Africa."
        >
            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                {/* Hero Header */}
                <section className="py-24 bg-muted/30 border-b border-border relative overflow-hidden">
                    <BackgroundText position="center">PROJECTS</BackgroundText>
                    <Wrapper>
                        <SectionHeading
                            label="Our Portfolio"
                            title={
                                <>
                                    PROVEN RESULTS ON{' '}
                                    <span className="text-primary">EVERY LIFT</span>
                                </>
                            }
                            align="center"
                            className="mb-16"
                        >
                            Explore our track record of landmark mobile crane operations, heavy rigging, maritime shipyard tasks, and industrial installations across South Africa.
                        </SectionHeading>

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
                                <h3 className="text-xl font-black uppercase text-foreground mb-2">
                                    Showcase Underway
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Our latest project case studies and site photo galleries are currently being updated. Contact our team directly to discuss our extensive project capabilities.
                                </p>
                            </div>
                        )}
                    </Wrapper>
                </section>
            </div>

            <EmergencyCta />
        </AppLayout>
    );
}
