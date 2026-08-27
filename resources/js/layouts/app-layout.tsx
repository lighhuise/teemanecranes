
import { Head } from '@inertiajs/react';
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toast";
import Navigation from "@/components/navigation";
import { useState, useEffect, Suspense, lazy } from 'react';
const Map = lazy(() => import("@/components/map"));
import EmergencyCta from "@/components/emergency-cta";

export default function AppLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 ">
            {title && <Head title={title} />}
            <a className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm" href="#main">Go to main content</a>
            <div id={'background-gradient'} className={` w-full min-h-180 absolute opacity-50 z-0 top-0 inset-x-0 bg-[radial-gradient(ellipse_at_bottom,transparent_70%,var(--color-primary))]  pointer-events-none `} aria-hidden={true}></div>
            <Navigation/>

            <main id={`main`} className="w-full flex-1 flex flex-col">
                {children}
            </main>

            {mounted && (
                <Suspense fallback={null}>
                    <Map />
                </Suspense>
            )}
            <EmergencyCta />
            <Footer />
            <Toaster   />
        </div>
    );
}
