import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { FormEvent, useEffect } from 'react';
import { toast } from '@/components/ui/toast';
import { cn } from "@/lib/utils";
import SectionHeading from '@/components/ui/misc/section-heading';

interface HoneypotData {
    enabled: boolean;
    nameFieldName: string;
    validFromFieldName: string;
    encryptedValidFrom: string;
}

export default function ContactUs({ flash, honeypot }: { flash: { success?: string }, honeypot?: HoneypotData }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        ...(honeypot?.enabled ? {
            [honeypot.nameFieldName]: '',
            [honeypot.validFromFieldName]: honeypot.encryptedValidFrom,
        } : {})
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/contact-us', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.add({ title: 'Success!', description: 'Your message has been sent successfully.', type: 'success' });
            },
            onError: () => {
                toast.add({ title: 'Error', description: 'Please check the form for errors and try again.', type: 'error' });
            }
        });
    };

    return (
        <>
            <Head title="Contact Us" />

            <div className="bg-muted/30 py-24 border-b border-border">
                <Wrapper>
                    <SectionHeading
                        label="Get In Touch"
                        title="LET'S GET TO WORK"
                        align="center"
                    >
                        Whether you need a quote, want to discuss a project, or require immediate emergency support. Our team is available 24 hours a day, 365 days a year.
                    </SectionHeading>
                </Wrapper>
            </div>

            <section className="py-24 bg-background">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-black tracking-tighter text-foreground uppercase mb-4">
                                    Our Office
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Headquartered in Bellville South, Cape Town, we serve clients across South Africa. Trusted by some of the country's most established companies as their sole provider for full turnkey lifting solutions.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Address</h3>
                                            <p className="text-muted-foreground">
                                                6 Van Eck St<br />
                                                Bellville South, Cape Town, 7530
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Phone</h3>
                                            <a href="tel:0842637690" className="text-muted-foreground hover:text-primary transition-colors">
                                                084 263 7690
                                            </a>
                                            <p className="text-xs text-muted-foreground/70 mt-1 uppercase tracking-wider font-bold">Available 24hrs, 365 Days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md border border-primary/20">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Email</h3>
                                            <a href="mailto:enquiries@teemanecranes.co.za" className="text-muted-foreground hover:text-primary transition-colors">
                                                enquiries@teemanecranes.co.za
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enquiry categories */}
                            <div className="border-t border-border pt-8">
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Enquiry Types</p>
                                <div className="flex flex-wrap gap-3">
                                    {['New Project', 'General Inquiry', 'Emergency Support', 'Careers'].map((type) => (
                                        <span key={type} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground">{type}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-background border border-border p-8 md:p-12 rounded-lg shadow-xl relative">
                            {flash?.success ? (
                                <div className="absolute inset-0 z-10 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-lg border border-primary/50">
                                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase mb-4 text-foreground">Message Sent!</h3>
                                    <p className="text-lg text-muted-foreground">
                                        {flash.success}
                                    </p>
                                </div>
                            ) : null}

                            <h2 className="text-2xl font-black tracking-tighter text-foreground uppercase mb-6">
                                Send a Message
                            </h2>

                            <form onSubmit={submit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none">Full Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className={errors.name ? 'border-destructive' : ''}
                                    />
                                    {errors.name && <p className="text-sm text-destructive font-medium">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none">Email Address</label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className={errors.email ? 'border-destructive' : ''}
                                        />
                                        {errors.email && <p className="text-sm text-destructive font-medium">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium leading-none">Phone Number (Optional)</label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className={errors.phone ? 'border-destructive' : ''}
                                        />
                                        {errors.phone && <p className="text-sm text-destructive font-medium">{errors.phone}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={10}
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className={cn(errors.message ? 'border-destructive' : '', 'min-h-30')}
                                    />
                                    {errors.message && <p className="text-sm text-destructive font-medium">{errors.message}</p>}
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full text-base font-bold tracking-wide uppercase"
                                    disabled={processing}
                                >
                                    {processing ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

ContactUs.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
