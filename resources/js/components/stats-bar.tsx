import Wrapper from '@/components/ui/misc/wrapper';
import CountUpPkg from 'react-countup';
const CountUp = (CountUpPkg as any).default || CountUpPkg;
import { useState, useEffect } from 'react';

export default function StatsBar() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground py-10 border-b border-primary/20">
            <Wrapper>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? <CountUp end={2012} duration={2.5} separator="" enableScrollSpy scrollSpyOnce /> : '2012'}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Established</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? <CountUp end={440} duration={2.5} enableScrollSpy scrollSpyOnce suffix="T" /> : '440T'}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Max Lift Capacity</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce suffix="+" /> : '100+'}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Years Combined Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold tracking-wider">
                            {mounted ? <CountUp end={24} duration={2.5} enableScrollSpy scrollSpyOnce suffix="/7" /> : '24/7'}
                        </div>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70 mt-1">Emergency Response</div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
