import Wrapper from "@/components/ui/misc/wrapper";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";

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
                        <ServiceCard key={service.id} service={service} index={idx} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/services" className={buttonVariants({ variant: "secondary", size: "lg", className: "uppercase tracking-widest font-bold px-10 h-14 border-2" })}>
                        View All Services
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}
