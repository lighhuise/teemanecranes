import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowLeft, Play, ArrowRight, Expand } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/misc/section-heading';
import { FloatingStatCard } from '@/components/ui/misc/floating-stat-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import Lightbox from "yet-another-react-lightbox";
import { BackgroundText } from '@/components/ui/misc/background-text';
import { ProjectGalleryView, type ProjectImageItem } from '@/components/project';
import { cn } from '@/lib/utils';
import DotPattern from "@/components/dot-pattern";
import Line2Divider from '@/components/line2-divider';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RichTextBlock        { type: 'rich_text';     data: { content: string; max_width?: string; darker_background?: boolean } }
interface ImageBlock           { type: 'image';         data: { image: string; image_url: string; image_meta?: ProjectImageItem | null; caption?: string; alt?: string; darker_background?: boolean } }
interface GalleryBlock         { type: 'gallery';       data: { images: string[]; image_urls: string[]; images_meta?: ProjectImageItem[]; caption?: string; darker_background?: boolean; heading?: string; subheading?: string; description?: string; } }
interface VideoBlock           { type: 'video';         data: { url: string; caption?: string; darker_background?: boolean; heading?: string; subheading?: string; description?: string; } }
interface CtaBlock             { type: 'cta';           data: { heading: string; text?: string; button_label: string; button_url: string; darker_background?: boolean } }
interface MediaTextBlock       { type: 'media_text';    data: { heading?: string; subheading?: string; content?: string; button_label?: string; button_url?: string; images: string[]; image_urls?: string[]; images_meta?: ProjectImageItem[]; image_position: 'left' | 'right'; stat_card_value?: string; stat_card_label?: string; darker_background?: boolean; } }
interface Line2DividerBlock    {
    type: 'line2_divider';
    data: {
        show_diamond?: boolean;
        show_side_texts?: boolean;
        show_dashed_borders?: boolean;
        show_beam?: boolean;
        show_dots?: boolean;
        left_text?: string | null;
        right_text?: string | null;
        velocity?: number | string;
        velocity_texts?: string[];
        min_height?: number | string;
        padding_y?: string;
        theme_style?: string;
        watermark_opacity?: number | string;
    };
}

type ContentBlock = RichTextBlock | ImageBlock | GalleryBlock | VideoBlock | CtaBlock | MediaTextBlock | Line2DividerBlock;

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    featured_image_url: string | null;
    featured_image_orientation?: 'portrait' | 'landscape' | 'square' | null;
    featured_image_aspect_ratio?: number | null;
    content_blocks: ContentBlock[];
}

// ─── Video Embed Helper ───────────────────────────────────────────────────────

function getEmbedUrl(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
            const id = u.searchParams.get('v') ?? u.pathname.split('/').pop();
            return `https://www.youtube.com/embed/${id}`;
        }
        if (u.hostname.includes('vimeo.com')) {
            const id = u.pathname.split('/').pop();
            return `https://player.vimeo.com/video/${id}`;
        }
    } catch {
        // invalid URL
    }
    return null;
}

// ─── Block Renderers ──────────────────────────────────────────────────────────

function RichTextRenderer({ data }: { data: RichTextBlock['data'] }) {
    const maxWidthClass = data.max_width || 'max-w-none';
    return (
        <div
            className={`prose prose-neutral dark:prose-invert mx-auto ${maxWidthClass}
                       prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                       prose-h1:text-4xl lg:prose-h1:text-5xl
                       prose-h2:text-4xl lg:prose-h2:text-5xl
                       prose-h3:text-2xl lg:prose-h3:text-3xl
                       prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground`}
            dangerouslySetInnerHTML={{ __html: data.content }}
        />
    );
}

function ImageRenderer({ data }: { data: ImageBlock['data'] }) {
    const meta = data.image_meta;
    return (
        <figure className="overflow-hidden rounded-2xl border border-border/80 bg-card p-2 sm:p-3">
            <div
                className="relative w-full overflow-hidden bg-card flex items-center justify-center rounded-xl"
                style={{
                    aspectRatio: meta?.aspect_ratio
                        ? `${meta.aspect_ratio}`
                        : (meta?.orientation === 'portrait' ? '3/4' : '16/9'),
                }}
            >
                <img
                    src={data.image_url}
                    alt={data.alt ?? ''}
                    className="w-full h-full object-contain rounded-xl"
                    loading="lazy"
                />
            </div>
            {data.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic font-medium">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
}

function GalleryRenderer({ data }: { data: GalleryBlock['data'] }) {
    const [lightbox, setLightbox] = useState<number | null>(null);
    const items: ProjectImageItem[] = (data.images_meta && data.images_meta.length > 0)
        ? data.images_meta
        : (data.image_urls ?? []).map((url) => ({
            url,
            orientation: 'landscape' as const,
            aspect_ratio: 1.778,
        }));

    const slides = items.map((item) => ({ src: item.url }));

    return (
        <div className="space-y-10">
            {(data.heading || data.subheading || data.description) && (
                <SectionHeading align="left" label={data.subheading} title={data.heading}>
                    {data.description && <p className="whitespace-pre-wrap">{data.description}</p>}
                </SectionHeading>
            )}
            <figure>
                <ProjectGalleryView
                    images={items}
                    projectTitle={data.heading || 'Service Gallery'}
                    onImageClick={(idx) => setLightbox(idx)}
                />

                {data.caption && (
                    <figcaption className="text-center text-sm text-muted-foreground mt-4 italic font-medium">
                        {data.caption}
                    </figcaption>
                )}

                {/* Lightbox */}
                <Lightbox
                    open={lightbox !== null}
                    close={() => setLightbox(null)}
                    index={lightbox ?? 0}
                    slides={slides}
                />
            </figure>
        </div>
    );
}

function VideoRenderer({ data }: { data: VideoBlock['data'] }) {
    const embedUrl = getEmbedUrl(data.url);

    return (
        <div className="space-y-12">
            {(data.heading || data.subheading || data.description) && (
                <SectionHeading align="left" label={data.subheading} title={data.heading}>
                    {data.description && <p className="whitespace-pre-wrap">{data.description}</p>}
                </SectionHeading>
            )}
            <figure>
                {embedUrl ? (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                    <iframe
                        src={embedUrl}
                        title={data.caption ?? 'Video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    />
                </div>
            ) : (
                <a
                    href={data.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-primary hover:underline"
                >
                    <Play className="size-5" />
                    {data.caption ?? data.url}
                </a>
            )}
            {data.caption && embedUrl && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
        </div>
    );
}

function CtaRenderer({ data }: { data: CtaBlock['data'] }) {
    return (
        <div className="bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-2xl font-black tracking-tighter text-foreground mb-2">
                    {data.heading}
                </h3>
                {data.text && (
                    <p className="text-muted-foreground leading-relaxed">{data.text}</p>
                )}
            </div>
            <a
                href={data.button_url}
                className="shrink-0 inline-flex items-center gap-2 bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground font-bold tracking-widest uppercase text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all"
            >
                {data.button_label}
                <ArrowRight className="size-4" />
            </a>
        </div>
    );
}

function MediaTextRenderer({ data }: { data: MediaTextBlock['data'] }) {
    const isImageLeft = data.image_position === 'left';
    const urls = data.image_urls ?? [];
    const hasMultiple = urls.length > 1;

    return (
        <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 min-w-0 w-full space-y-6">
                {(data.heading || data.subheading) && (
                    <SectionHeading align="left" label={data.subheading} title={data.heading}/>
                )}
                {data.content && (
                    <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground
                                    prose-headings:font-black prose-headings:tracking-[0.35px] prose-headings:uppercase prose-headings:text-foreground prose-headings:leading-[1.1]
                                    prose-h1:text-4xl lg:prose-h1:text-5xl
                                    prose-h2:text-4xl lg:prose-h2:text-5xl
                                    prose-h3:text-2xl lg:prose-h3:text-3xl
                                    prose-p:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed
                                    prose-a:text-primary hover:prose-a:underline" dangerouslySetInnerHTML={{ __html: data.content }} />
                )}
                {data.button_label && data.button_url && (
                    <a href={data.button_url} className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-primary/70 text-primary-foreground font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-lg shadow-sm hover:from-primary/90 hover:to-primary transition-all group">
                        {data.button_label}
                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                )}
            </div>

            {/* Media Content - Uncropped 100% full view */}
            <div className="flex-1 min-w-0 w-full relative group overflow-clip">
                <DotPattern corner="top-left" />
                <DotPattern corner="top-right" />

                <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-card relative">
                    {hasMultiple ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            className="w-full aspect-4/3 sm:aspect-16/10"
                            style={{
                                '--swiper-theme-color': 'var(--primary)',
                                '--swiper-navigation-size': '24px',
                                '--swiper-navigation-color': 'white',
                                '--swiper-pagination-color': 'var(--primary)',
                                '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.7)',
                                '--swiper-pagination-bullet-inactive-opacity': '1',
                            } as React.CSSProperties}
                        >
                            {urls.map((url, i) => (
                                <SwiperSlide key={i} className="flex items-center justify-center bg-card">
                                    <img src={url} alt="" className="w-full h-full object-contain" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : urls.length === 1 ? (
                        <div className="w-full aspect-4/3 sm:aspect-16/10 flex items-center justify-center bg-card">
                            <img src={urls[0]} alt="" className="w-full h-full object-contain" />
                        </div>
                    ) : (
                        <div className="w-full aspect-4/3 sm:aspect-16/10 bg-muted flex items-center justify-center">
                            <span className="text-muted-foreground text-sm uppercase tracking-widest font-mono">No Image</span>
                        </div>
                    )}
                </div>

                {data.stat_card_value && data.stat_card_label && (
                    <FloatingStatCard
                        value={data.stat_card_value}
                        label={data.stat_card_label}
                        position={isImageLeft ? 'bottom-right' : 'bottom-left'}
                    />
                )}
            </div>
        </div>
    );
}

function Line2DividerRenderer({ data }: { data: Line2DividerBlock['data'] }) {
    return (
        <Line2Divider
            showDiamond={data.show_diamond ?? true}
            showSideTexts={data.show_side_texts ?? true}
            showDashedBorders={data.show_dashed_borders ?? true}
            showBeam={data.show_beam ?? true}
            showDots={data.show_dots ?? true}
            leftText={data.left_text}
            rightText={data.right_text}
            velocity={data.velocity ? Number(data.velocity) : 45}
            velocityTexts={data.velocity_texts && data.velocity_texts.length > 0 ? data.velocity_texts : undefined}
            minHeight={data.min_height}
            paddingY={data.padding_y}
            themeStyle={data.theme_style}
            watermarkOpacity={data.watermark_opacity}
        />
    );
}

function ContentBlock({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'rich_text':     return <RichTextRenderer data={block.data} />;
        case 'image':         return <ImageRenderer data={block.data} />;
        case 'gallery':       return <GalleryRenderer data={block.data} />;
        case 'video':         return <VideoRenderer data={block.data} />;
        case 'cta':           return <CtaRenderer data={block.data} />;
        case 'media_text':    return <MediaTextRenderer data={block.data} />;
        case 'line2_divider': return <Line2DividerRenderer data={block.data} />;
        default:              return null;
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Show({ service }: { service: Service }) {
    const hasBlocks = service.content_blocks && service.content_blocks.length > 0;

    return (
        <AppLayout
            title={`${service.title} - Services - Teemane Cranes`}
            description={service.short_description || service.description?.substring(0, 160)}
            image={service.featured_image_url || undefined}
        >
            {/* Hero Header — zero ambient blur, orientation-aware uncropped display */}
            <div className="relative border-b border-border bg-muted/20 overflow-hidden py-16 lg:py-24">
                <BackgroundText position="center">SERVICE</BackgroundText>
                <DotPattern corner="top-left" />
                <DotPattern corner="top-right" />

                <Wrapper className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className={cn(
                            "space-y-6",
                            service.featured_image_orientation === 'portrait' ? "lg:col-span-6" : "lg:col-span-5"
                        )}>
                            <Link
                                href="/services"
                                className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Services
                            </Link>

                            <SectionHeading
                                label="Service Profile"
                                title={service.title}
                                align="left"
                                className="mb-0"
                            >
                                {service.description && (
                                    <div
                                        className="prose prose-sm sm:prose lg:prose-lg max-w-none dark:prose-invert text-muted-foreground"
                                        dangerouslySetInnerHTML={{ __html: service.description }}
                                    />
                                )}
                            </SectionHeading>
                        </div>

                        {service.featured_image_url && (
                            <div className={cn(
                                "flex items-center justify-center",
                                service.featured_image_orientation === 'portrait' ? "lg:col-span-6" : "lg:col-span-7"
                            )}>
                                <div className={cn(
                                    "relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-card",
                                    service.featured_image_orientation === 'portrait' ? "max-w-md mx-auto lg:ml-auto" : "w-full"
                                )}>
                                    <div
                                        className="relative w-full overflow-hidden bg-card flex items-center justify-center"
                                        style={{
                                            aspectRatio: service.featured_image_aspect_ratio
                                                ? `${service.featured_image_aspect_ratio}`
                                                : (service.featured_image_orientation === 'portrait' ? '3/4' : '16/9'),
                                        }}
                                    >
                                        <img
                                            src={service.featured_image_url}
                                            alt={service.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Wrapper>
            </div>

            {/* Content Blocks */}
            {hasBlocks && (
                <div className="flex flex-col">
                    {service.content_blocks.map((block, i) => {
                        if (block.type === 'line2_divider') {
                            return <Line2DividerRenderer key={i} data={block.data} />;
                        }

                        const isDark = (block as any).data?.darker_background;

                        return (
                            <section key={i} className={`w-full py-24 ${isDark ? 'bg-muted border-y border-border' : ''}`}>
                                <Wrapper>
                                    <ContentBlock block={block} />
                                </Wrapper>
                            </section>
                        );
                    })}
                </div>
            )}
        </AppLayout>
    );
}
