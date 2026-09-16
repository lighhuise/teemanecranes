import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FaqPage({ faqs }: { faqs: any[] }) {
    return (
        <AppLayout>
            <Head title="Frequently Asked Questions - Teemane Cranes" />
            
            <div className="bg-muted/30 py-24 border-b border-border">
                <Wrapper>
                    <SectionHeading
                        label="FAQ"
                        title={<>FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span></>}
                        align="center"
                    >
                        Find answers to common questions about our services, equipment, and operations.
                    </SectionHeading>
                </Wrapper>
            </div>

            <section className="py-24 bg-background">
                <Wrapper>
                    <div className="max-w-3xl mx-auto">
                        {faqs.length > 0 ? (
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={faq.id} value={`item-${faq.id}`} className="py-2">
                                        <AccordionTrigger className="text-left font-bold text-lg py-5 hover:no-underline hover:text-primary transition-colors">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-6">
                                            <div 
                                                className="text-muted-foreground leading-relaxed text-base prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80"
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : (
                            <div className="text-center text-muted-foreground py-12">
                                No FAQs have been added yet. Please check back later.
                            </div>
                        )}
                    </div>
                </Wrapper>
            </section>
        </AppLayout>
    );
}
