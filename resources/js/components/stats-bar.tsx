import Wrapper from '@/components/ui/misc/wrapper';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import { useState, useEffect } from 'react';
import {DotPattern} from "@/components/ui/misc/dot-pattern";
import { useCompany } from '@/hooks/use-company';

export default function StatsBar() {
    const [mounted, setMounted] = useState(false);
    const { stats } = useCompany();
    useEffect(() => setMounted(true), []);

    return (
        <div className="bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip text-primary-foreground ">
            <Wrapper>
                <DotPattern className={`text-primary-foreground/30 top-0` }/>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
