import { usePage } from '@inertiajs/react';
import { CompanyConfig, CompanyStats, defaultCompanyConfig, StatItem } from '@/types/company';

function normalizeStat(incoming: unknown, fallback: StatItem): StatItem {
    if (incoming === undefined || incoming === null) {
        return fallback;
    }

    if (typeof incoming === 'number' || typeof incoming === 'string') {
        const str = String(incoming);
        const suffix = fallback.suffix ?? '';
        const display = (suffix && !str.endsWith(suffix)) ? `${str}${suffix}` : str;
        return {
            ...fallback,
            value: incoming,
            display,
        };
    }

    if (typeof incoming === 'object') {
        const raw = incoming as Partial<StatItem>;
        const value = raw.value !== undefined ? raw.value : fallback.value;
        const suffix = raw.suffix !== undefined ? raw.suffix : (fallback.suffix ?? '');
        const display = raw.display !== undefined
            ? raw.display
            : (raw.value !== undefined ? `${raw.value}${suffix}` : fallback.display);

        return {
            ...fallback,
            ...raw,
            value,
            suffix,
            display,
            label: raw.label ?? fallback.label,
            title: raw.title ?? raw.label ?? fallback.title ?? fallback.label,
            short_label: raw.short_label ?? fallback.short_label,
            tons_label: raw.tons_label ?? fallback.tons_label,
        };
    }

    return fallback;
}

export function useCompany(): CompanyConfig {
    const page = usePage<{ company?: Partial<CompanyConfig> }>();
    const sharedCompany = page.props?.company;

    if (!sharedCompany) {
        return defaultCompanyConfig;
    }

    const rawStats = (sharedCompany.stats || {}) as Partial<Record<keyof CompanyStats, unknown>>;

    const mergedStats: CompanyStats = {
        years_experience: normalizeStat(rawStats.years_experience, defaultCompanyConfig.stats.years_experience),
        projects_completed: normalizeStat(rawStats.projects_completed, defaultCompanyConfig.stats.projects_completed),
        combined_experience: normalizeStat(rawStats.combined_experience, defaultCompanyConfig.stats.combined_experience),
        max_capacity: normalizeStat(rawStats.max_capacity, defaultCompanyConfig.stats.max_capacity),
        established_year: normalizeStat(rawStats.established_year, defaultCompanyConfig.stats.established_year),
        availability: normalizeStat(rawStats.availability, defaultCompanyConfig.stats.availability),
    };

    const mergedAddress = {
        ...defaultCompanyConfig.contact.address,
        ...(sharedCompany.contact?.address || {}),
    };

    const streetAndSuburb = [mergedAddress.street, mergedAddress.suburb].filter(Boolean).join(', ');
    mergedAddress.line1 = mergedAddress.line1 || streetAndSuburb || defaultCompanyConfig.contact.address.line1;
    mergedAddress.locality = mergedAddress.locality || mergedAddress.city || defaultCompanyConfig.contact.address.locality;

    const mergedContact = {
        ...defaultCompanyConfig.contact,
        ...(sharedCompany.contact || {}),
        address: mergedAddress,
        coordinates: {
            ...defaultCompanyConfig.contact.coordinates,
            ...(sharedCompany.contact?.coordinates || {}),
        },
    };
    mergedContact.map_url = mergedContact.map_url || mergedContact.maps_url;

    return {
        ...defaultCompanyConfig,
        ...sharedCompany,
        stats: mergedStats,
        contact: mergedContact,
        credentials: sharedCompany.credentials ?? defaultCompanyConfig.credentials,
    };
}
