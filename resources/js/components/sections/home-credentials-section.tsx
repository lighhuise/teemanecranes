import Wrapper from "@/components/ui/misc/wrapper";

export function HomeCredentialsSection() {
    return (
        <section className="bg-radial-[at_50%_85%] from-primary/70 to-primary py-10">
            <Wrapper>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {[
                        { label: 'B-BBEE Certified' },
                        { label: 'Red Seal Riggers' },
                        { label: 'ISO 9001 & 14001' },
                        { label: 'OHSAS 45001' },
                        { label: 'Operational 24/7' },
                    ].map((item) => (
                        <div key={item.label} className="flex flex-col items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary-foreground/60"></div>
                            <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/90">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}
