import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import Wrapper from "@/components/ui/misc/wrapper";
import { StackedImage } from "@/components/ui/misc/stacked-image";
import { FloatingStatCard } from "@/components/ui/misc/floating-stat-card";
import SectionHeading from "@/components/ui/misc/section-heading";
import { Head, Link } from "@inertiajs/react";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { HomeIntroSection } from "@/components/sections/home-intro-section";
import { HomeServicesSection } from "@/components/sections/home-services-section";
import { HomeSafetySection } from "@/components/sections/home-safety-section";
import { HomeCredentialsSection } from "@/components/sections/home-credentials-section";

export default function Home({ services }: { services: any[] }) {
    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Teemane Cranes | A Cut Above The Rest</title>
                <meta name="description" content="Established in 2012, Teemane Cranes delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to 440T capacity." />
            </Head>

            <Hero />
            <HomeIntroSection />
            <HomeServicesSection services={services} />
            <HomeSafetySection />
            <HomeCredentialsSection />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = AppLayout;
