
import { Head } from '@inertiajs/react';
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/toast";
import Navigation from "@/components/navigation";
import { useState, useEffect, Suspense, lazy } from 'react';
const Map = lazy(() => import("@/components/map"));
import EmergencyCta from "@/components/emergency-cta";

import { usePage } from '@inertiajs/react';

interface AppLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
}

export default function AppLayout({ children, title, description, image }: AppLayoutProps) {
    const [mounted, setMounted] = useState(false);
    const { url } = usePage();
    useEffect(() => setMounted(true), []);

    const defaultTitle = 'Teemane Cranes';
    const siteTitle = title ? `${title} - ${defaultTitle}` : defaultTitle;
    const siteDescription = description || "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012.";
    // Need a default image, ideally the logo or a hero image
    const siteImage = image || '/images/logo.svg'; 
    // Construct full URL using window.location if available, fallback to path
    const fullUrl = typeof window !== 'undefined' ? window.location.href : url;

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 ">
            <Head>
                {title ? <title>{title}</title> : <title>{defaultTitle}</title>}
                <meta name="description" content={siteDescription} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={fullUrl} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={siteImage} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={fullUrl} />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={siteImage} />
            </Head>
            <a className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-background focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 font-bold text-sm" href="#main">Go to main content</a>
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
