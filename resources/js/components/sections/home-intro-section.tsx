import Wrapper from "@/components/ui/misc/wrapper";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
// @ts-ignore
import imgCompanyIntro from "@/../images/IMG_0190-copy.webp";

export function HomeIntroSection() {
    return (
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
    );
}
