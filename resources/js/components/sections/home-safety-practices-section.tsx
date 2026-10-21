import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { BackgroundText } from "@/components/ui/misc/background-text";
import { AlertOctagon, Compass, FileCheck2, HardHat, Scale, ShieldCheck } from "lucide-react";
import React from "react";

// @ts-ignore
import imgSafety from "@/../images/safety.png";

export const safetyItems = [
    {
        step: "01",
        icon: Compass,
        title: "Risk Assessment & Planning",
        content: <><strong>Thorough risk assessment and planning</strong> form a critical part of how we prepare for every job. Each site is carefully assessed, <strong>potential hazards are identified</strong> and the required safety procedures and controls are put in place before our team commences work. We stand firmly behind these processes, ensuring the conditions, environment and scope of work have been properly considered. <strong>If the required safety standards are not met, work will not commence.</strong></>
    },
    {
        step: "02",
        icon: ShieldCheck,
        title: "Equipment & Certification",
        content: <>We place the same level of importance on the condition of our equipment as we do on the work itself. Our cranes, lifting equipment and rigging gear are <strong>inspected, certified and subject to the required checks</strong> to ensure they remain safe and fit for use.</>
    },
    {
        step: "03",
        icon: HardHat,
        title: "Lift Planning & Setup",
        content: <>Each lift is planned around the specific requirements of the job. <strong>Load weight, lifting points, rigging, crane capacity, ground conditions</strong> and crane setup are all carefully considered before lifting begins. <strong>If the required setup is not in place, the lift does not proceed.</strong></>
    },
    {
        step: "04",
        icon: FileCheck2,
        title: "Controlled Working Areas",
        content: <>We take responsibility for maintaining a safe working area around our operations. <strong>Exclusion zones and access are carefully controlled</strong> to keep unauthorised persons clear of lifting, rigging and moving equipment, <strong>protecting everyone on site</strong> and in the surrounding area.</>
    },
    {
        step: "05",
        icon: AlertOctagon,
        title: "Weather & Working Conditions",
        content: <>We <strong>monitor weather conditions</strong> before and throughout the work. <strong>If conditions are deemed unsafe, work will not commence.</strong> Should conditions change at any stage, work is stopped immediately and will only continue once it is safe to do so.</>
    },
    {
        step: "06",
        icon: Scale,
        title: "Safety Compliance",
        content: <>We stand firmly behind the safety standards that govern our work. Our operations are carried out in line with applicable <strong>OHS legislation, client requirements and Teemane procedures</strong>, with <strong>accountability for safety</strong> maintained across every level of our business. These standards are continuously reviewed and upheld to ensure that the way we work remains responsible, compliant and reflective of the safety standards our clients have come to trust Teemane for.</>
    }
];

export function HomeSafetyPracticesSection() {
    return (
        <>
            {/* Section 1: Core Safety Philosophy + Right-Edge Full-Height Cutout Image */}
            <section className="relative bg-muted/30 border-y border-border overflow-hidden">
                <BackgroundText position="left">SAFETY</BackgroundText>
                <img
                    src={imgSafety}
                    alt="Teemane Safety Operations"
                    className="pointer-events-none select-none absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-left translate-x-1/4 sm:translate-x-12 lg:translate-x-16 xl:translate-x-0 opacity-15 dark:opacity-20 lg:opacity-100 drop-shadow-black z-0"
                />

                <Wrapper className="relative z-10">
                    <div className="lg:w-2/3 xl:w-[70%] py-16 sm:py-20 lg:py-28 space-y-6 sm:space-y-8">
                        <SectionHeading
                            title="SAFETY STARTS BEFORE THE LIFT"
                            label="Our Priority"
                            align="left"
                        />

                        <div className="text-muted-foreground text-base sm:text-lg leading-relaxed space-y-5 sm:space-y-6">
                            <p>
                                <strong>Safety is firmly embedded</strong> in the way Teemane operates and remains a leading factor in every decision we make. In the environments we work in, there is no separating safety from the job itself. It influences how we plan, how we prepare our team, how we inspect our equipment and how work is carried out on site.
                            </p>
                            <p>
                                Our approach begins with <strong>identifying hazards, assessing risk</strong> and making sure the <strong>correct controls are in place</strong> before any work commences. Just as importantly, we place strong emphasis on the team behind the work. <strong>Medical fitness, training, competency, PPE</strong> and day-to-day readiness all form part of making sure our team is able to perform safely and responsibly.
                            </p>
                            <p>
                                For us, health and safety is not something reviewed only when required. It is <strong>continually monitored, measured and strengthened</strong> across the business, with the protection of our team, our clients, contractors, visitors, property and the surrounding environment remaining a <strong>constant priority</strong>.
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </section>

            {/* Section 2: Dedicated Restyled Safety Protocols Accordion Section */}
            <section className="py-16 sm:py-20 lg:py-28 bg-background border-b border-border relative overflow-x-clip">
                <Wrapper className="relative z-10">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* Left Sticky Column */}
                        <div className="lg:w-5/12 lg:sticky lg:top-32 space-y-4 sm:space-y-6">
                            <div className="inline-flex items-center gap-4">
                                <div className="h-px w-8 bg-primary shrink-0" />
                                <span className="text-sm font-bold text-primary tracking-widest uppercase whitespace-nowrap">
                                    Safety Protocols
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tighter uppercase text-foreground text-balance leading-[1.1]">
                                <span className="block">Disciplined</span>
                                <span className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">
                                    Field Standards
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                Every mobile crane deployment follows six non-negotiable operational safeguards from
                                thorough risk assessment and equipment certification to controlled working areas and
                                strict OHS compliance.
                            </p>
                        </div>

                        {/* Right Column: Elevated Card Accordion */}
                        <div className="w-full lg:w-7/12">
                            <Accordion className="divide-y-0 border-b-0 space-y-3 sm:space-y-4">
                                {safetyItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-open:border-primary/50 data-open:shadow-md data-open:ring-1 data-open:ring-primary/15 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b"
                                        >
                                            <AccordionTrigger className="group py-3.5 sm:py-4 hover:no-underline">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-open:bg-primary group-data-open:text-primary-foreground group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                                                        <Icon className="size-4 sm:size-5" strokeWidth={1.75} />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                                                            Protocol {item.step}
                                                        </span>
                                                        <span className="font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 sm:pb-5 pt-1 sm:pt-2">
                                                <div className="border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                    {item.content}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

export default HomeSafetyPracticesSection;

