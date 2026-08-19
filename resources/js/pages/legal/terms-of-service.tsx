import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function TermsOfService() {
    return (
        <AppLayout>
            <Head title="Terms of Service" />
            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                <section className="py-24 bg-muted/30 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="Legal"
                            title="Terms of Service"
                            align="center"
                            className="mb-16"
                        >
                            Please read these terms carefully before using our services.
                        </SectionHeading>
                        <div className="max-w-3xl mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert mt-6">
                            <h2>1. Terms</h2>
                            <p>By accessing the website at Teemane Cranes, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                            
                            <h2>2. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Teemane Cranes' website for personal, non-commercial transitory viewing only.</p>

                            <h2>3. Disclaimer</h2>
                            <p>The materials on Teemane Cranes' website are provided on an 'as is' basis. Teemane Cranes makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                            <h2>4. Limitations</h2>
                            <p>In no event shall Teemane Cranes or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Teemane Cranes' website.</p>

                            <h2>5. Revisions and Errata</h2>
                            <p>The materials appearing on Teemane Cranes' website could include technical, typographical, or photographic errors. Teemane Cranes does not warrant that any of the materials on its website are accurate, complete or current.</p>

                            <p className="mt-8 text-muted-foreground text-sm">
                                These terms are effective as of {new Date().getFullYear()}.
                            </p>
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
