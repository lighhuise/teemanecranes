import Wrapper from '@/components/ui/misc/wrapper';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import React, { useState, useEffect } from 'react';
import {DotPattern} from "@/components/ui/misc/dot-pattern";
import { useCompany } from '@/hooks/use-company';

export default function StatsBar() {
    const [mounted, setMounted] = useState(false);
    const { stats } = useCompany();
    useEffect(() => setMounted(true), []);

    return (
        <div className="bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip text-primary-foreground ">
            <Wrapper>
                <DotPattern className={`text-primary-foreground/0 top-0` }/>
                <div
                    aria-hidden="true"
                    className="line2-divider-beam pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
                />
                <div
                    aria-hidden={true}
                    className="pointer-events-none absolute inset-2 border-2 border-dashed border-primary-foreground/10"
                />
                <div
                    aria-hidden={true}
                    className="pointer-events-none absolute inset-4 border-2 border-dashed border-primary-foreground/10"
                />


                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-shadow-sm text-shadow-black/50">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? (
                                <CountUp
                                    end={Number(stats.established_year.value)}
                                    duration={1.2}
                                    separator=""
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            ) : (
                                stats.established_year.display
                            )}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">
                            {stats.established_year.label}
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? (
                                <CountUp
                                    end={Number(stats.max_capacity.value)}
                                    duration={1.2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix={stats.max_capacity.suffix || ''}
                                />
                            ) : (
                                stats.max_capacity.display
                            )}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">
                            {stats.max_capacity.short_label || stats.max_capacity.label}
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? (
                                <CountUp
                                    end={Number(stats.combined_experience.value)}
                                    duration={1.2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix={stats.combined_experience.suffix || ''}
                                />
                            ) : (
                                stats.combined_experience.display
                            )}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">
                            {stats.combined_experience.label}
                        </div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? (
                                <CountUp
                                    end={Number(stats.availability.value)}
                                    duration={1.2}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    suffix={stats.availability.suffix || ''}
                                />
                            ) : (
                                stats.availability.display
                            )}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">
                            Emergency Response
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
