import React from "react";
import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard, type ServiceListItem } from "@/components/service-card";
import { BackgroundText } from "@/components/ui/misc/background-text";
import DotPattern from "@/components/dot-pattern";
import { Wrench } from "lucide-react";

export interface ServicesSectionProps {
    services: (ServiceListItem & { content_blocks?: any[] })[];
    title?: React.ReactNode;
    label?: string;
    description?: React.ReactNode;
    limit?: number;
    showViewAllButton?: boolean;
    useMasonry?: boolean;
    showPills?: boolean;
    className?: string;
}

export function ServicesSection({
    services = [],
    title = "ENGINEERED FOR THE LIFT",
    label = "Our Capabilities",
    description = "We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge from construction sites to the most demanding industrial operations.",
    limit,
    showViewAllButton = false,
    useMasonry = true,
    showPills = false,
    className,
}: ServicesSectionProps) {
    const displayedServices = limit ? (services || []).slice(0, limit) : (services || []);

    return (
        <section className={`py-24 bg-muted/30 border-y border-border relative overflow-clip ${className || ''}`}>
            <BackgroundText position="center">SERVICES</BackgroundText>
            <DotPattern corner="bottom-left" />
            <DotPattern corner="bottom-right" />
            <Wrapper>
                <SectionHeading
                    label={label}
                    title={title}
                    align="center"
                    className={showPills ? "mb-8" : "mb-16"}
                >
                    {description}
                </SectionHeading>

                {showPills && (
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                            <span className="size-1 rounded-full bg-primary" />
                            20T to 550T Fleet Capacity
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                            <span className="size-1 rounded-full bg-primary" />
                            Certified Rigging Engineers
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold text-muted-foreground shadow-2xs">
                            <span className="size-1 rounded-full bg-primary" />
                            24/7 Rapid Deployment
                        </span>
                    </div>
                )}

                {/* Services Grid */}
                {displayedServices.length > 0 ? (
                    useMasonry && displayedServices.length > 1 ? (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {displayedServices.map((service, idx) => (
                                <div key={service.id} className="break-inside-avoid">
                                    <ServiceCard service={service} index={idx} className="w-full" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                            {displayedServices.map((service, idx) => (
                                <ServiceCard key={service.id} service={service} index={idx} className="w-full" />
                            ))}
                        </div>
                    )
                ) : (
                    <div className="max-w-md mx-auto text-center py-16 px-6 bg-card border border-border rounded-2xl shadow-xs">
                        <div className="size-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 text-primary">
                            <Wrench className="size-8" />
                        </div>
                        <h3 className="text-xl font-bold uppercase text-foreground mb-2">
                            Capabilities Underway
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Our service capability profiles are currently being updated. Contact our dispatch team directly for customized crane hire and engineering solutions.
                        </p>
                    </div>
                )}

                {showViewAllButton && (
                    <div className="mt-16 text-center">
                        <Link href="/services" className={buttonVariants({ variant: "secondary", size: "lg", className: "uppercase tracking-widest font-bold px-10 h-14 border-2" })}>
                            View All Services
                        </Link>
                    </div>
                )}
            </Wrapper>
        </section>
    );
}

// Keep HomeServicesSection export for backward compatibility
export { ServicesSection as HomeServicesSection };
