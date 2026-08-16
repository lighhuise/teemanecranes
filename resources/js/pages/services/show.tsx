import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { ArrowLeft } from 'lucide-react';

export default function Show({ service }: { service: any }) {
    return (
        <AppLayout>
            <Head title={service.title} />
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Services
                    </Link>
                    
                    <div className="bg-card text-card-foreground shadow-sm rounded-lg border overflow-hidden">
                        {service.image && (
                            <div className="w-full h-64 overflow-hidden bg-muted">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            </div>
                        )}
                        <div className="p-8">
                            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert mt-6">
                                {service.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
