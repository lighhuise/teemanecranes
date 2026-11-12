import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// @ts-ignore
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import Wrapper from './ui/misc/wrapper';
import { MapPin, Navigation as NavIcon } from 'lucide-react';
import {BackgroundText} from "@/components/ui/misc/background-text";
import SectionOverline from "@/components/ui/misc/section-overline";
import { useCompany } from '@/hooks/use-company';
import LogoMark from "@/components/logo-mark";

export default function Map() {
    const { contact } = useCompany();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const position: [number, number] = [contact.coordinates.lat, contact.coordinates.lng];

    if (!mounted) {
        return (
            <section className="bg-background relative z-10 w-full mb-24 mt-12">
                <Wrapper>

                    <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground animate-pulse font-medium tracking-widest uppercase">Loading Map...</span>
                    </div>
                </Wrapper>
            </section>
        );
    }

    // Custom marker using the theme's primary color with an inner circle for detail
    const customMarkerIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: var(--primary); width: 28px; height: 28px; border-radius: 50%; border: 4px solid var(--background); box-shadow: 0 0 20px var(--primary); display: flex; align-items: center; justify-content: center; position: relative; top: -14px; left: -14px;"><div style="background-color: var(--background); width: 8px; height: 8px; border-radius: 50%;"></div></div>`,
        iconSize: [0, 0],
    });

    return (
        <section className="bg-background relative z-10 w-full pb-24 pt-12">
            <BackgroundText position="center">LOCATION</BackgroundText>
            <LogoMark className={`absolute opacity-10 size-100 blur-xs left-0 top-1/2 -translate-1/2`}/>
            <LogoMark className={`absolute opacity-10 size-100 blur-xs right-0 top-1/2 translate-x-1/2 -translate-y-1/2`}/>
            <Wrapper>
                <div className="flex flex-col gap-10">

                    {/* Header Text Section */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 w-full">
                        <div className="space-y-4 max-w-2xl">
                            <SectionOverline label="Headquarters" align="left" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-[1.1]">
                                Find Us On The Map
                            </h2>
                            <p className="text-muted-foreground md:text-lg leading-relaxed pt-2">
                                Centrally located to rapidly deploy cranes, rigging teams, and heavy transport equipment anywhere across the Western Cape.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
                            <div className="flex items-center gap-4 border-l-4 border-primary/20 pl-4 py-1">
                                <div className="shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-foreground font-bold mb-1">Address</span>
                                    <span className="text-muted-foreground text-sm">{contact.address.line1},<br/>{contact.address.locality}, {contact.address.postal_code}</span>
                                </div>
                            </div>
                            <a href={contact.map_url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase bg-linear-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-xs hover:shadow px-6 py-4 rounded-lg group shrink-0">
                                <NavIcon className="size-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="relative w-full h-[400px] lg:h-[550px] rounded-xl overflow-hidden border-2 border-border shadow-[0_0_40px_-15px_var(--color-primary)] group grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="w-full h-full relative z-0" style={{ zIndex: 0 }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} icon={customMarkerIcon}>
                                <Popup>
                                    <div className="font-sans leading-relaxed text-center">
                                        <strong className="text-base text-primary font-bold tracking-tight block mb-1">Teemane Cranes</strong>
                                        <span className="text-sm text-foreground">{contact.address.line1}</span>
                                    </div>
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <style>{`
                            html.dark .leaflet-tile-pane {
                                filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
                            }
                        `}</style>
                    </div>

                </div>
            </Wrapper>
        </section>
    );
}
