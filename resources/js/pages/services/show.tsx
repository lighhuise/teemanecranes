import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Wrapper from '@/components/ui/misc/wrapper';
import { ArrowLeft, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from '@/components/ui/misc/section-heading';

// ─── Types ────────────────────────────────────────────────────────────────────

interface RichTextBlock  { type: 'rich_text';  data: { content: string } }
interface ImageBlock     { type: 'image';      data: { image: string; image_url: string; caption?: string; alt?: string } }
interface GalleryBlock   { type: 'gallery';    data: { images: string[]; image_urls: string[]; caption?: string } }
interface VideoBlock     { type: 'video';      data: { url: string; caption?: string } }
interface CtaBlock       { type: 'cta';        data: { heading: string; text?: string; button_label: string; button_url: string } }

type ContentBlock = RichTextBlock | ImageBlock | GalleryBlock | VideoBlock | CtaBlock;

interface Service {
    id: number;
    title: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    featured_image_url: string | null;
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
    return (
        <div
            className="prose prose-neutral dark:prose-invert max-w-none
                       prose-headings:font-black prose-headings:tracking-tight
                       prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                       prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: data.content }}
        />
    );
}

function ImageRenderer({ data }: { data: ImageBlock['data'] }) {
    return (
        <figure className="overflow-hidden rounded-lg">
            <img
                src={data.image_url}
                alt={data.alt ?? ''}
                className="w-full object-cover rounded-lg"
            />
            {data.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
}

function GalleryRenderer({ data }: { data: GalleryBlock['data'] }) {
    const [lightbox, setLightbox] = useState<number | null>(null);
    const urls = data.image_urls ?? [];

    return (
        <figure>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {urls.map((url, i) => (
                    <button
                        key={i}
                        onClick={() => setLightbox(i)}
                        className="aspect-square overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <img
                            src={url}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>
            {data.caption && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                        <img
                            src={urls[lightbox]}
                            alt=""
                            className="max-h-[80vh] w-full object-contain rounded-lg"
                        />
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={() => setLightbox(i => i !== null && i > 0 ? i - 1 : urls.length - 1)}
                                className="text-white/70 hover:text-white transition-colors px-4 py-2 text-sm font-bold tracking-widest uppercase"
                            >
                                ← Prev
                            </button>
                            <span className="text-white/50 text-sm">{lightbox + 1} / {urls.length}</span>
                            <button
                                onClick={() => setLightbox(i => i !== null && i < urls.length - 1 ? i + 1 : 0)}
                                className="text-white/70 hover:text-white transition-colors px-4 py-2 text-sm font-bold tracking-widest uppercase"
                            >
                                Next →
                            </button>
                        </div>
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors"
                        >
                            Close ✕
                        </button>
                    </div>
                </div>
            )}
        </figure>
    );
}

function VideoRenderer({ data }: { data: VideoBlock['data'] }) {
    const embedUrl = getEmbedUrl(data.url);

    return (
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
                    <Play className="w-5 h-5" />
                    {data.caption ?? data.url}
                </a>
            )}
            {data.caption && embedUrl && (
                <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                    {data.caption}
                </figcaption>
            )}
        </figure>
    );
}

function CtaRenderer({ data }: { data: CtaBlock['data'] }) {
    return (
        <div className="bg-muted/40 border border-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-2">
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
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    );
}

function ContentBlock({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'rich_text': return <RichTextRenderer data={block.data} />;
        case 'image':     return <ImageRenderer data={block.data} />;
        case 'gallery':   return <GalleryRenderer data={block.data} />;
        case 'video':     return <VideoRenderer data={block.data} />;
        case 'cta':       return <CtaRenderer data={block.data} />;
        default:          return null;
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Show({ service }: { service: Service }) {
    const hasBlocks = service.content_blocks && service.content_blocks.length > 0;

    return (
        <AppLayout>
            <Head title={service.title} />

            {/* Hero */}
            <div className="relative border-b border-border">
                {service.featured_image_url && (
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={service.featured_image_url}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
                    </div>
                )}
                <Wrapper className={`relative py-24 ${service.featured_image_url ? '' : 'bg-muted/30'}`}>
                    <Link
                        href="/services"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Services
                    </Link>
                    <SectionHeading
                        label="Service Profile"
                        title={service.title}
                        align="left"
                        className="mb-8"
                    >
                        {service.description && (
                            <div 
                                className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none dark:prose-invert text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: service.description }}
                            />
                        )}
                    </SectionHeading>
                </Wrapper>
            </div>

            {/* Content Blocks */}
            {hasBlocks && (
                <Wrapper className="py-16 md:py-24">
                    <div className="flex flex-col gap-16">
                        {service.content_blocks.map((block, i) => (
                            <ContentBlock key={i} block={block} />
                        ))}
                    </div>
                </Wrapper>
            )}
        </AppLayout>
    );
}
