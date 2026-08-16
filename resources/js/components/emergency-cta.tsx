import { PhoneCall, AlertTriangle } from 'lucide-react';
import Wrapper from './ui/misc/wrapper';

export default function EmergencyCta() {
    return (
        <section className="bg-radial-[at_50%_85%] from-primary/70 to-primary text-primary-foreground relative z-10 py-16 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                 style={{
                     backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                     backgroundSize: '24px 24px',
                     maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
                     WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
                 }}>
            </div>

            <Wrapper>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full backdrop-blur-sm border border-background/20">
                            <AlertTriangle className="w-5 h-5 text-background" />
                            <span className="font-bold tracking-widest uppercase text-sm">24/7 Rapid Response</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-tight">
                            Emergencies Don't Wait For Business Hours.
                        </h2>
                        <p className="text-primary-foreground/90 md:text-lg max-w-2xl leading-relaxed">
                            Unexpected equipment failures and critical incidents demand immediate action. Our specialized rapid-response teams are on standby 24/7 to provide urgent crane lifting and transport solutions minimizing your downtime and mitigating potential losses.
                        </p>
                    </div>

                    <div className="shrink-0 w-full lg:w-auto">
                        <a href="tel:0842637690" className="flex items-center justify-center gap-6 bg-background text-foreground hover:bg-background/95 transition-all hover:scale-105 duration-300 px-8 py-6 rounded-xl shadow-2xl group w-full lg:w-auto border border-border">
                            <div className="bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                <PhoneCall className="w-8 h-8 text-primary group-hover:animate-pulse" />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Emergency Hotline</span>
                                <span className="block text-2xl md:text-3xl font-black tracking-tight text-primary">084 263 7690</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
