import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeServicesSection({ services }: { services: any[] }) {
    return (
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
                        <div key={service.id} className="group relative p-8 bg-background border border-border flex flex-col justify-between min-h-65 transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-md cursor-default">
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
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "uppercase tracking-widest font-bold px-10 h-14 border-2" })}>
                        View All Services
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}
