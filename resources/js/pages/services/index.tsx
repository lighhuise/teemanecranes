import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function Index({ services }: { services: any[] }) {
    return (
        <AppLayout>
            <Head title="Services" />
            
            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                <section className="py-24 bg-muted/30 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="Our Capabilities"
                            title="ENGINEERED FOR THE LIFT"
                            align="center"
                            className="mb-16"
                        >
                            We understand that every lifting project demands precision, reliability and efficiency. Our services offer the flexibility and strength needed to tackle any challenge.
                        </SectionHeading>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, idx) => (
                                <div key={service.id} className="reveal-up group relative p-8 bg-background border border-border flex flex-col justify-between min-h-[260px] transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1 rounded-sm cursor-default">
                                    <div className="space-y-4">
                                        <span className="text-3xl font-black text-muted-foreground/20 group-hover:text-primary transition-colors">
                                            0{idx + 1}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors uppercase">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {service.short_description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
