import AppLayout from "@/layouts/app-layout";
import Hero from "@/components/hero";
import { Head } from "@inertiajs/react";
import { HomeIntroSection } from "@/components/sections/home-intro-section";
import { HomeServicesSection } from "@/components/sections/home-services-section";
import { HomeLatestProjectsSection } from "@/components/sections/home-latest-projects-section";
import { HomeSafetySection } from "@/components/sections/home-safety-section";
import { HomeSafetyPracticesSection } from "@/components/sections/home-safety-practices-section";
import { HomeFieldOperationsSection } from "@/components/sections/home-field-operations-section";
import { HomeCredentialsSection } from "@/components/sections/home-credentials-section";
import PageSeparator from "@/components/page-separator";
import { ProjectListItem } from "@/components/project-card";
import { useCompany } from "@/hooks/use-company";
import Line2Divider from "@/components/line2-divider";

interface HomeProps {
    services: any[];
    projects?: ProjectListItem[];
}

export default function Home({ services, projects = [] }: HomeProps) {
    const { stats } = useCompany();

    return (
        <div className="bg-background selection:bg-primary selection:text-white">
            <Head>
                <title>Teemane Cranes | A Cut Above The Rest</title>
                <meta name="description" content={`Established in ${stats.established_year.display}, Teemane Cranes delivers crane hire, heavy lifting, rigging and specialised transport across South Africa's most demanding worksites. Up to ${stats.max_capacity.display} capacity.`} />
            </Head>

            <Hero />
            <HomeIntroSection />
            <Line2Divider/>
            {/*<PageSeparator/>*/}
            <HomeServicesSection services={(services || []).slice(0, 3)} />
            <Line2Divider/>
            <HomeLatestProjectsSection projects={projects} />
            <HomeSafetySection />
            <HomeFieldOperationsSection />
            <Line2Divider/>
            <HomeSafetyPracticesSection />
            <HomeCredentialsSection />
        </div>
    );
}

Home.displayName = "Home";
Home.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
