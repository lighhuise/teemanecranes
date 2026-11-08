export interface StatItem {
    value: number | string;
    suffix?: string;
    display: string;
    label: string;
    title?: string;
    short_label?: string;
    tons_label?: string;
}

export interface CompanyStats {
    years_experience: StatItem;
    projects_completed: StatItem;
    combined_experience: StatItem;
    max_capacity: StatItem;
    established_year: StatItem;
    availability: StatItem;
}

export interface CompanyAddress {
    street: string;
    suburb: string;
    city: string;
    postal_code: string;
    country: string;
    formatted: string;
    one_line: string;
}

export interface CompanyContact {
    phone: string;
    phone_tel: string;
    email: string;
    address: CompanyAddress;
    coordinates: {
        lat: number;
        lng: number;
    };
    maps_url: string;
}

export interface CompanyCredential {
    label: string;
}

export interface CompanyConfig {
    name: string;
    legal_name: string;
    tagline: string;
    description: string;
    stats: CompanyStats;
    contact: CompanyContact;
    credentials: CompanyCredential[];
}

import siteStats from '@/lib/site-stats';

export const defaultCompanyConfig: CompanyConfig = {
    name: 'Teemane Cranes',
    legal_name: 'Teemane Heavy Haulage',
    tagline: 'A Cut Above The Rest',
    description: "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012.",
    stats: {
        years_experience: {
            value: parseInt(siteStats.yearsInBusiness) || 25,
            suffix: '+',
            display: siteStats.yearsInBusiness,
            label: 'Years of Experience',
            title: "Years of\nExperience",
            short_label: 'Experience',
        },
        projects_completed: {
            value: parseInt(siteStats.successfulProjects) || 500,
            suffix: '+',
            display: siteStats.successfulProjects,
            label: 'Successful Projects',
            title: "Successful\nProjects",
            short_label: 'Projects Completed',
        },
        combined_experience: {
            value: siteStats.combinedExperienceYears,
            suffix: '+',
            display: `${siteStats.combinedExperienceYears}+`,
            label: 'Years Combined Experience',
            title: "Combined\nExperience",
            short_label: '100+ Years Experience',
        },
        max_capacity: {
            value: parseInt(siteStats.maxCapacity) || 440,
            suffix: 'T',
            display: siteStats.maxCapacity,
            tons_label: `${parseInt(siteStats.maxCapacity) || 440} tons`,
            label: 'Maximum Fleet Capacity',
            title: "Max Lift\nCapacity",
            short_label: 'Max Lift Capacity',
        },
        established_year: {
            value: siteStats.establishedYear,
            display: String(siteStats.establishedYear),
            label: 'Established',
            title: 'Established',
        },
        availability: {
            value: 24,
            suffix: '/7',
            display: siteStats.availability,
            label: 'Operational 24/7',
            title: 'Availability',
            short_label: 'Availability',
        },
    },
    contact: {
        phone: siteStats.phone,
        phone_tel: siteStats.phoneTel,
        email: siteStats.email,
        address: {
            street: '6 Van Eck St',
            suburb: 'Bellville South',
            city: 'Cape Town',
            postal_code: '7530',
            country: 'South Africa',
            formatted: "6 Van Eck St, Bellville South,\nCape Town, 7530",
            one_line: siteStats.address,
        },
        coordinates: {
            lat: -33.926637890850294,
            lng: 18.645063943495657,
        },
        maps_url: 'https://maps.google.com/?q=-33.926637890850294,18.645063943495657',
    },
    credentials: [
        { label: 'B-BBEE Certified' },
        { label: 'Red Seal Riggers' },
        { label: 'ISO 9001 & 14001' },
        { label: 'OHSAS 45001' },
        { label: 'Operational 24/7' },
    ],
};
