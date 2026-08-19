import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function ErrorPage({ status }: { status: number }) {
    const messages: Record<number, { title: string; description: string }> = {
        503: {
            title: '503: Service Unavailable',
            description: 'Sorry, we are doing some maintenance. Please check back soon.',
        },
        500: {
            title: '500: Server Error',
            description: 'Whoops, something went wrong on our servers.',
        },
        404: {
            title: '404: Page Not Found',
            description: 'Sorry, the page you are looking for could not be found.',
        },
        403: {
            title: '403: Forbidden',
            description: 'Sorry, you are forbidden from accessing this page.',
        },
    };

    const { title, description } = messages[status] || {
        title: `${status}: Error`,
        description: 'An unexpected error occurred.',
    };

    return (
        <AppLayout>
            <Head title={title} />
            <div className="bg-background selection:bg-primary selection:text-white pb-24 min-h-[70vh] flex flex-col justify-center">
                <Wrapper className="text-center flex flex-col items-center justify-center">
                    <div className="bg-muted/30 p-8 rounded-full mb-8">
                        <AlertTriangle className="w-16 h-16 text-primary" />
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase mb-6">
                        {title}
                    </h1>
                    
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
                        {description}
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-lg shadow-sm hover:shadow transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </Wrapper>
            </div>
        </AppLayout>
    );
}
