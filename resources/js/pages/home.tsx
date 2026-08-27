import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import Wrapper from "@/components/ui/misc/wrapper";
import { StackedImage } from "@/components/ui/misc/stacked-image";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Head, Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// @ts-ignore
import imgCompanyIntro from "@/../images/IMG_0190-copy.webp";
// @ts-ignore
import imgSafety from "@/../images/d58f37a7-3ec9-4491-9d4a-3ca9dd8dd979-copy-2.webp";


export default function Home({ services }: { services: any[] }) {
    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Teemane Cranes | A Cut Above The Rest</title>
                <meta name="description" content="Established in 2012, Teemane Cranes delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to 440T capacity." />
            </Head>

            <Hero />

            {/* 1. INTRODUCTION SECTION */}
            <section className="py-24 bg-background">
                <Wrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-4">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-sm font-bold text-primary tracking-widest uppercase">Who We Are</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.1] ">
                                THE ONLY NAME <br />TRUSTED TO PERFORM
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                Established in 2012, Teemane Cranes prides itself on countless victories across South Africa's most demanding worksites. From high-stakes projects to complex operations that have redefined what's possible in mobile crane hire.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                                Backed by a fleet of hydraulic cranes with capacities of up to 440 tons and more than 100 years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments.
                            </p>
                            <div className="pt-4">
                                <Link href="/about-us" className={buttonVariants({ size: "lg", className: "uppercase tracking-widest font-bold px-8 h-14" })}>
                                    Our Story
                                </Link>
                            </div>
                        </div>
                        <div className="relative pb-6 lg:pb-0">
                            <div className="aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg">
                                <img
                                    src={imgCompanyIntro}
                                    alt="Teemane Cranes on site"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <FloatingStatCard
                                value="100+"
                                label="Years Combined Experience"
                                position="bottom-right"
                            />
                        </div>

                    </div>
                </Wrapper>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-24 bg-muted/30 border-y border-border">
                <Wrapper>
                    <SectionHeading
                        label="Our Capabilities"
                        title="ENGINEERED FOR THE LIFT"
                        align="center"
                        className="mb-16"
                    >
                        We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge from construction sites to the most demanding industrial operations.
                    </SectionHeading>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <Link key={service.id} href={`/services/${service.slug}`} className="group relative p-8 bg-background border border-border flex flex-col justify-between min-h-65 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-md">
                                <div className="space-y-4">
                                    <span className="text-3xl font-black text-muted-foreground/20 group-hover:text-primary transition-colors">
                                        0{idx + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {service.short_description}
                                    </p>
                                </div>
                                <ArrowRight className="w-6 h-6 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-8" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-bold px-10 h-14 border-2" })}>
                            View All Services
                        </Link>
                    </div>
                </Wrapper>
            </section>

            {/* 3. SAFETY / WHERE EXCELLENCE BEGINS SECTION */}
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

            {/* 4. CREDENTIALS STRIP */}
            <section className="bg-radial-[at_50%_85%] from-primary/70 to-primary py-10">
                <Wrapper>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {[
                            { label: 'B-BBEE Certified' },
                            { label: 'Red Seal Riggers' },
                            { label: 'ISO 9001 & 14001' },
                            { label: 'OHSAS 45001' },
                            { label: 'Operational 24/7' },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary-foreground/60"></div>
                                <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/90">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </section>
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
