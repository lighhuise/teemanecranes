import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Wrapper from "@/components/ui/misc/wrapper";
// @ts-ignore
import logoUrl from '@/../images/logo.svg';

export default function Footer() {
    return (
        <footer className="bg-muted  z-5 text-muted-foreground relative overflow-hidden pt-24 pb-12 border-t-6 border-primary">
            {/* Background Typography */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
                <h2 className="text-[20vh] xl:text-[300px] font-black tracking-tighter leading-none whitespace-nowrap text-foreground">TEEMANE</h2>
            </div>

            <Wrapper className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Link href="/" className="inline-block">
                            <img src={logoUrl} alt="Teemane Cranes Logo" className="h-16 w-auto" />
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-foreground uppercase">
                                <div className="h-px w-8 bg-primary"></div>
                                A Cut Above The Rest
                            </div>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h3 className="text-foreground text-lg font-bold mb-8 tracking-widest uppercase">Navigation</h3>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Services', href: '/services' },
                                // { name: 'Our Team', href: '/our-team' },
                                { name: 'Contact Us', href: '/contact-us' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-fit font-medium">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h3 className="text-foreground text-lg font-bold mb-8 tracking-widest uppercase">Contact Us</h3>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <span className="block text-foreground font-bold mb-1">Address</span>
                                    <span className="text-muted-foreground">6 Van Eck St, Bellville South, Cape Town, 7530</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-muted-foreground">084 263 7690</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-muted-foreground">enquiries@teemanecranes.co.za</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
                    <p>&copy; {new Date().getFullYear()} Teemane Cranes. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
}
