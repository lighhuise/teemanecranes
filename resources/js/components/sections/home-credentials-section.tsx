import Wrapper from "@/components/ui/misc/wrapper";
import { BadgeCheck, HardHat, FileCheck, ShieldPlus, Clock } from "lucide-react";
import {DotPattern} from "@/components/ui/misc/dot-pattern";

export function HomeCredentialsSection() {
    const credentials = [
        { label: 'B-BBEE Certified', icon: BadgeCheck },
        { label: 'Red Seal Riggers', icon: HardHat },
        { label: 'ISO 9001 & 14001', icon: FileCheck },
        { label: 'OHSAS 45001', icon: ShieldPlus },
        { label: 'Operational 24/7', icon: Clock },
    ];

    return (
        <section className="bg-radial-[at_50%_85%] from-primary/70 to-primary py-16 relative overflow-clip">
            <Wrapper >
                <DotPattern className={`text-primary-foreground/30 top-0` }/>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {credentials.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.label} className="flex flex-col items-center gap-3">
                                <Icon className="size-16 text-primary-foreground/70 mb-2" strokeWidth={1.5} />
                                <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/90">{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </Wrapper>
        </section>
    );
}
