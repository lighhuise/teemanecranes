import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import SectionHeading from '@/components/ui/misc/section-heading';

export default function PrivacyPolicy() {
    return (
        <AppLayout>
            <Head title="Privacy Policy" />
            <div className="bg-background selection:bg-primary selection:text-white pb-24">
                <section className="py-24 bg-muted/30 border-b border-border">
                    <Wrapper>
                        <SectionHeading
                            label="Legal"
                            title="Privacy Policy"
                            align="center"
                            className="mb-16"
                        >
                            Your privacy is critically important to us.
                        </SectionHeading>
                        <div className="max-w-3xl mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert mt-6">
                            <h2>1. Information We Collect</h2>
                            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                            
                            <h2>2. How We Use Your Information</h2>
                            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

                            <h2>3. Third-Party Sharing</h2>
                            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>

                            <h2>4. External Links</h2>
                            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>

                            <h2>5. Your Choices</h2>
                            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>

                            <p className="mt-8 text-muted-foreground text-sm">
                                This policy is effective as of {new Date().getFullYear()}.
                            </p>
                        </div>
                    </Wrapper>
                </section>
            </div>
        </AppLayout>
    );
}
