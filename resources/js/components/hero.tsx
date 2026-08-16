import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "@/components/ui/misc/wrapper";
import { CalendarDays, HardHat, Clock } from "lucide-react";

// @ts-ignore
import heroMaskSvg from "@/../images/hero-mask-2.svg";
// @ts-ignore
import heroBgImage from "@/../images/blue_crane_desert_storm.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.hero-bg-parallax', {
                yPercent: 25,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative w-full pt-24 pb-12 lg:pt-2 lg:pb-16 flex justify-center overflow-hidden"
        >
            {/* Mobile View: Standard full bleed image with text overlay */}
            <div className="absolute inset-0 block lg:hidden z-0">
                <img
                    src={heroBgImage}
                    alt="Hero Background"
                    className="hero-bg-parallax w-full h-[130%] object-cover object-center -top-[15%] relative"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-black/40"></div>
            </div>

            <div className="relative z-10 w-full px-4 sm:px-6 block lg:hidden pt-10 pb-16">
                <h1 className="text-5xl sm:text-6xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-lg">
                    A CUT ABOVE <br />
                    <span className="text-primary">THE REST</span>
                </h1>
                <p className="mt-6 text-sm font-bold tracking-tight text-accent">
                    CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT
                </p>
            </div>

            {/* Desktop View: Perfectly matching example.svg proportions */}
            <Wrapper className="hidden lg:flex relative w-full items-center justify-center">

                <div className="relative w-full aspect-1337/540 max-h-175">

                    {/* Shadow Wrapper for the Masked Image */}
                    <div className="absolute inset-0 w-full h-full drop-shadow-sm drop-shadow-black/25">
                        {/* The Masked Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                maskImage: `url(${heroMaskSvg})`,
                                WebkitMaskImage: `url(${heroMaskSvg})`,
                                maskSize: "100% 100%",
                                WebkitMaskSize: "100% 100%",
                                maskRepeat: "no-repeat",
                                WebkitMaskRepeat: "no-repeat"
                            }}
                        >
                        <img
                            src={heroBgImage}
                            alt="Hero Background"
                            className="hero-bg-parallax w-full h-[130%] object-cover object-center top-[-25%] relative"
                        />
                        {/* Stats */}
                        <div id={`stats`} className="absolute inset-x-4 bottom-4 z-10 flex space-x-2">

                            {/* Stat 1: Experience */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <CalendarDays className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Years of<br/>Experience</p>
                                    <p className={`text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none`}>25+</p>
                                </div>
                            </div>

                            {/* Stat 2: Projects */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Successful<br/>Projects</p>
                                    <p className={`text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none`}>500+</p>
                                </div>
                            </div>

                            {/* Stat 3: Availability */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <Clock className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-black text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Availability</p>
                                    <p className={`text-6xl font-black text-shadow-black/75 text-shadow-sm text-white leading-none mt-7`}>24/7</p>
                                </div>
                            </div>

                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    </div>
                    </div>

                    {/*
                      Text positioned significantly higher (top-[2%])
                    */}
                    <div className="absolute top-[10%] left-[1%] max-w-[50%] z-20">
                        <h1 className="text-[5vw] xl:text-[75px] font-black tracking-tighter leading-[0.9] text-foreground">
                            A CUT ABOVE <br />
                            <span className="text-primary">THE REST</span>
                        </h1>
                        <p className="mt-[3%] xl:mt-3 text-[1.2vw] xl:text-[16px] font-bold tracking-tight text-muted-foreground whitespace-nowrap">
                            CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT
                        </p>
                    </div>
                </div>

            </Wrapper>
        </section>
    );
}
