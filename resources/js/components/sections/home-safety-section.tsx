import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
// @ts-ignore
import imgSafety from "@/../images/d58f37a7-3ec9-4491-9d4a-3ca9dd8dd979-copy-2.webp";

export function HomeSafetySection() {
    return (
        <section className="py-24 bg-background">
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative pb-6 lg:pb-0 order-2 lg:order-1">
                        <div className="aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg">
                            <img
                                src={imgSafety}
                                alt="Teemane Cranes Safety Briefing"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <FloatingStatCard
                            value="500+"
                            label="Projects Completed"
                            position="bottom-left"
                        />
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-4">
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">Where Excellence Begins</span>
                            <div className="h-px w-8 bg-primary"></div>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1]">
                            SAFETY STARTS <br />BEFORE THE LIFT
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            With services available for both short- and long-term hire and backed by prompt, professional support, Teemane oversees every stage from initial consultation and detailed site inspections to full project execution.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            For specialised projects, we incorporate advanced lift studies and CAD drawings, allowing us to anticipate challenges and engineer safe, efficient solutions before operations begin. Combined with decades of experience, this defines how the most demanding projects are completed to unmatched standards.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <Link prefetch={`hover`} href="/contact-us" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-bold px-8 h-14" })}>
                                Start a Project
                            </Link>
                            <Link prefetch={`hover`} href="/about-us" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-bold px-8 h-14 border-2" })}>
                                Our Approach
                            </Link>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
