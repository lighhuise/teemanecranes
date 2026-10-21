import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "@/components/ui/misc/wrapper";
import { CalendarDays, HardHat, Clock } from "lucide-react";

// @ts-ignore
import heroMaskSvg from "@/../images/hero-mask-2.svg";
// @ts-ignore
import heroBgImage from "@/../images/hero-image.webp";

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
            className="relative w-full pt-0 pb-0 lg:pt-2 lg:pb-16 flex justify-center overflow-hidden"
        >
            {/* Mobile View: Full-bleed edge-to-edge image with top-left SVG cutout and no stats */}
            <div className="relative w-full aspect-4/5 sm:aspect-16/10 min-h-[60vh] block lg:hidden overflow-hidden">
                <img
                    src={heroBgImage}
                    alt="Hero Background"
                    className="hero-bg-parallax w-full h-[115%] object-cover object-[65%_center] -top-8 relative"
                />

                {/* Top-left SVG Cutout Overlay fixed to corner */}
                <div className="absolute top-0 left-0 z-10 w-[68%] sm:w-[52%] aspect-[543.19/270.12]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 2"
                        viewBox="0 0 543.19 270.12"
                        className="w-full h-full fill-background block"
                    >
                        <path d="M543.19 0v129.35c0 4.25-1.69 8.32-4.69 11.32L413.73 265.44c-3 3-7.06 4.68-11.31 4.68H0V0z" />
                    </svg>

                    {/* Heading & Subtitle inside the SVG cutout */}
                    <div className="absolute inset-0 flex flex-col justify-center pl-4 sm:pl-6 pr-[20%] pb-[6%]">
                        <h1 className="text-[6.8vw] sm:text-4xl font-black tracking-tighter leading-[0.9] text-foreground">
                            A CUT ABOVE <br />
                            <span className="text-primary">THE REST</span>
                        </h1>
                        <p className="mt-1.5 sm:mt-2 text-[1.8vw] sm:text-[10px] font-bold tracking-tight text-muted-foreground uppercase leading-tight">
                            CRANE HIRE • HEAVY LIFTING • SPECIALISED TRANSPORT
                        </p>
                    </div>
                </div>
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
                            className="hero-bg-parallax w-full h-[110%] object-cover object-center -top-10 relative"
                        />
                        {/* Stats */}
                        <div id={`stats`} className="absolute inset-x-4 bottom-4 z-10 flex space-x-2">

                            {/* Stat 1: Experience */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <CalendarDays className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Years of<br/>Experience</p>
                                    <p className={`text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`}>25+</p>
                                </div>
                            </div>

                            {/* Stat 2: Projects */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <HardHat className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Successful<br/>Projects</p>
                                    <p className={`text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none`}>500+</p>
                                </div>
                            </div>

                            {/* Stat 3: Availability */}
                            <div className={`size-52 border-2 p-4 border-white/25 flex flex-col justify-between bg-white/15 rounded-sm transition-all duration-150 hover:backdrop-blur-xs `}>
                                <div className="flex justify-between items-start">
                                    <Clock className="w-8 h-8 text-white drop-shadow-md" />
                                </div>
                                <div className="flex flex-col">
                                    <p className={`text-xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-tight mb-1`}>Availability</p>
                                    <p className={`text-6xl font-bold text-shadow-black/75 text-shadow-sm text-white leading-none mt-7`}>24/7</p>
                                </div>
                            </div>

                        </div>
                        {/*<div className="absolute inset-0 bg-linear-to-tr from-black/80 via-black/20 to-transparent pointer-events-none"></div>*/}
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
