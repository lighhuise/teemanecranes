import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/misc/section-heading';
import { ServiceCard } from '@/components/service-card';

export default function Index({ services }: { services: any[] }) {
    return (
        <AppLayout title="Services">


            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                <section className="py-24 bg-muted/30 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="Our Capabilities"
                            title={<>ENGINEERED FOR <span className={`text-primary`}>THE LIFT</span> </>}
                            align="center"
                            className="mb-16"
                        >
                            We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge.
                        </SectionHeading>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, idx) => (
                                <ServiceCard key={service.id} service={service} index={idx} />
                            ))}
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
