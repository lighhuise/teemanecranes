export interface ProjectGallery {
    title: string;
    description: string | null;
    images: string[];
    image_urls: string[];
}

export interface ProjectListItem {
    id: number;
    title: string;
    slug: string;
    location?: string | null;
    description: string | null;
    featured_image_url?: string | null;
    gallery_image_urls?: string[];
    galleries_with_urls?: ProjectGallery[];
    video_url?: string | null;
    embed_video_url?: string | null;
    project_date?: string | null;
    project_date_raw?: string | null;
    total_images?: number;
}
