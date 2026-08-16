import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { Target, ShieldCheck, Trophy, Truck, Users, Building2, Zap, Award } from 'lucide-react';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import SectionHeading from '@/components/ui/misc/section-heading';
// @ts-ignore
import imgBoat from '@/../images/Teemane-Boat.webp';

export default function AboutUs() {
    return (
        <>
            <Head title="About Us - Teemane Cranes" />

            {/* Hero Section */}
            <div className="bg-muted/30 py-24 lg:py-32 border-b border-border relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary),transparent_50%)] opacity-10"></div>
                <Wrapper className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="text-sm font-bold text-primary tracking-widest uppercase">Our Story</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground uppercase leading-[1.1] mb-8">
                            Redefining What's Possible In <span className="text-primary">Mobile Crane</span> Hire.
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                            Established in 2012, Teemane Cranes prides itself on countless victories across South Africa's most demanding worksites, from high-stakes projects to complex operations.
                        </p>
                    </div>
                </Wrapper>
            </div>

            {/* Stats Bar */}
            <div className="bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground  py-10 border-b border-primary/20">
                <Wrapper>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl md:text-5xl font-black tracking-tighter">2012</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Established</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black tracking-tighter">440T</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Max Lift Capacity</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black tracking-tighter">100+</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Years Combined Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black tracking-tighter">24/7</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Emergency Response</div>
                        </div>
                    </div>
                </Wrapper>
            </div>

            {/* Core Content Section */}
            <section className="py-24 bg-background">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-foreground leading-[1.2]">
                                Leading the projects that shape industries today.
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Backed by a fleet of hydraulic cranes with capacities of up to 440 tons and a team driven to deliver unmatched results, we stand at the forefront of the sector. Every lift, transport, and rigging operation is executed with precision, safety, and efficiency at its core.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 pt-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20">
                                        <Trophy className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">Proven Track Record</h3>
                                    <p className="text-muted-foreground text-sm">Countless victories across South Africa's most demanding worksites since 2012.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">Massive Capacity</h3>
                                    <p className="text-muted-foreground text-sm">A modern fleet of hydraulic cranes with staggering capacities of up to 440 tons.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">Unmatched Safety</h3>
                                    <p className="text-muted-foreground text-sm">Stringent safety protocols ensuring zero-incident operations on high-stakes projects.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-lg border border-primary/20">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">Precision Execution</h3>
                                    <p className="text-muted-foreground text-sm">A highly skilled team driven to deliver unmatched results in complex operations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative pb-6 lg:pb-0">
                            <div className="aspect-4/5 rounded-xl overflow-hidden border border-border shadow-lg">
                                <img
                                    src={imgBoat}
                                    alt="Teemane Cranes maritime operations"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <FloatingStatCard
                                value="440T"
                                label="Maximum Fleet Capacity"
                                position="bottom-left"
                            />
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Trusted Partner Section */}
            <section className="py-24 bg-muted/30 border-y border-border">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left: Icon Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
                            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Building2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black uppercase mb-3">Sole Provider</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Trusted as the exclusive full turnkey solutions partner by South Africa's most established companies.</p>
                            </div>
                            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black uppercase mb-3">100+ Years Experience</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">Our management team brings over a century of combined industry experience to every project.</p>
                            </div>
                            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black uppercase mb-3">High-Risk Certainty</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">The depth of knowledge, control, and capability required to deliver certainty in high-risk environments.</p>
                            </div>
                            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-xl border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-black uppercase mb-3">Complex Success</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">A track record of success on projects of the highest complexity, delivered on time and to specification.</p>
                            </div>
                        </div>

                        {/* Right: Text */}
                        <div className="space-y-8 order-1 lg:order-2">
                            <SectionHeading
                                label="Why Choose Us"
                                title="Entrusted by South Africa's Most Established Companies."
                                align="left"
                            >
                                <div className="space-y-4">
                                    <p>
                                        Operating across some of the most advanced and complex sites, we are entrusted by South Africa's most established companies as their sole provider for full turnkey solutions.
                                    </p>
                                    <p>
                                        Backed by more than 100 years of combined management experience, we bring the depth of knowledge, control and capability required to deliver certainty in high-risk environments and success on projects of the highest complexity.
                                    </p>
                                </div>
                            </SectionHeading>
                            <a href="/contact-us" className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-8 py-4 rounded-lg font-bold tracking-widest uppercase text-sm">
                                Work With Us
                            </a>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

AboutUs.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
