import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BackgroundText } from '@/components/ui/misc/background-text';
import { HelpCircle } from 'lucide-react';
import React from 'react';
import DiamondPattern from '@/components/ui/misc/diamond-pattern';

export default function FaqPage({ faqs }: { faqs: any[] }) {
    return (
        <AppLayout title="Frequently Asked Questions - Teemane Cranes">
            <div className="bg-muted/30 py-24 border-b border-border relative overflow-hidden">
                <BackgroundText position="center">FAQ</BackgroundText>
                <DiamondPattern corner="top-right" />
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

            <section className="py-24 bg-background relative overflow-x-clip">
                <div aria-hidden={true} className="pointer-events-none absolute inset-0 overflow-hidden z-0">
                    <DiamondPattern corner="bottom-left" />
                </div>
                <Wrapper className="relative z-10">
                    <div className="max-w-3xl mx-auto">
                        {faqs.length > 0 ? (
                            <Accordion className="divide-y-0 border-b-0 space-y-3 sm:space-y-4">
                                {faqs.map((faq, index) => {
                                    const step = String(index + 1).padStart(2, '0');
                                    return (
                                        <AccordionItem
                                            key={faq.id ?? index}
                                            value={`item-${faq.id ?? index}`}
                                            className="rounded-2xl border border-border bg-card px-4 sm:px-6 py-1.5 sm:py-2 shadow-xs transition-all duration-300 hover:border-primary/30 data-open:border-primary/50 data-open:shadow-md data-open:ring-1 data-open:ring-primary/15 data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-primary/15 last:border-b"
                                        >
                                            <AccordionTrigger className="group py-3.5 sm:py-4 hover:no-underline">
                                                <div className="flex items-center gap-3 sm:gap-4">
                                                    <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-data-open:bg-primary group-data-open:text-primary-foreground group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                                                        <HelpCircle className="size-4 sm:size-5" strokeWidth={1.75} />
                                                    </div>
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                                                            Question {step}
                                                        </span>
                                                        <span className="font-heading text-base sm:text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                                                            {faq.question}
                                                        </span>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-4 sm:pb-5 pt-1 sm:pt-2">
                                                <div
                                                    className="border-t border-border/60 pt-3.5 sm:pt-4 pl-0 sm:pl-15 text-muted-foreground leading-relaxed text-sm sm:text-base prose dark:prose-invert max-w-none prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80"
                                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                                />
                                            </AccordionContent>
                                        </AccordionItem>
                                    );
                                })}
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

