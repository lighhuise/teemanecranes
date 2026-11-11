export type ImageOrientation = 'portrait' | 'landscape' | 'square';

export interface ProjectImageItem {
    url: string;
    orientation: ImageOrientation;
    aspect_ratio?: number | null;
    width?: number | null;
    height?: number | null;
}

export interface ProjectGallery {
    title: string;
    description: string | null;
    images: string[];
    image_urls: string[];
    images_meta?: ProjectImageItem[];
}

export interface ProjectListItem {
    id: number;
    title: string;
    slug: string;
    location?: string | null;
    description: string | null;
    featured_image_url?: string | null;
    featured_image_conversions?: {
        original?: string | null;
        thumb?: string | null;
        medium?: string | null;
        display?: string | null;
        large?: string | null;
    };
    featured_image_orientation?: ImageOrientation | null;
    featured_image_aspect_ratio?: number | null;
    gallery_image_urls?: string[];
    gallery_images?: ProjectImageItem[];
    galleries_with_urls?: ProjectGallery[];
    video_url?: string | null;
    embed_video_url?: string | null;
    project_date?: string | null;
    project_date_raw?: string | null;
    total_images?: number;
}
