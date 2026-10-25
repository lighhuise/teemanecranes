import { Link } from '@inertiajs/react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import Wrapper from "@/components/ui/misc/wrapper";
import SectionOverline from "@/components/ui/misc/section-overline";
// @ts-ignore
import logoUrl from '@/../images/logo.svg';

export default function Footer() {
    return (
        <footer className="bg-muted  z-5 text-muted-foreground relative overflow-hidden pt-24 pb-12 border-t-6 border-primary">
            {/* Background Typography */}
            <div aria-hidden={true} className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-[1%] pointer-events-none select-none overflow-hidden">
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
                            <SectionOverline label="A Cut Above The Rest" align="left" />
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="lg:col-span-3 lg:col-start-6">
                        <h3 className="text-foreground text-lg font-black mb-8 tracking-tighter uppercase">Navigation</h3>
                        <ul className="flex flex-col gap-3.5">
                          {[
                            { name: 'Home', href: '/' },
                            { name: 'Services', href: '/services' },
                            { name: 'Projects', href: '/projects' },
                            { name: 'About Us', href: '/about-us' },
                            { name: 'FAQ', href: '/faq' },
                            { name: 'Contact Us', href: '/contact-us' },
                          ].map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium w-fit"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:w-4 group-hover:h-0.5 group-hover:rounded-none group-hover:bg-primary transition-all duration-300" />
                                <span className="tracking-wide">{item.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4">
                        <h3 className="text-foreground text-lg font-black mb-8 tracking-tighter uppercase">Contact Us</h3>
                        <ul className="flex flex-col divide-y divide-border/80 border-y border-border/80">
                          <li className="py-3.5 flex items-start gap-3.5 group">
                            <span className="size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 mt-0.5 text-primary group-hover:border-primary/40 transition-colors">
                              <MapPin className="size-4" />
                            </span>
                            <div className="space-y-0.5 min-w-0">
                              <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">Yard Location</span>
                              <span className="text-sm font-bold text-foreground block leading-tight">6 Van Eck St, Bellville South</span>
                              <span className="text-xs text-muted-foreground block">Cape Town, 7530</span>
                            </div>
                          </li>
                          <li className="py-3.5 flex items-center justify-between gap-3 group">
                            <a href="tel:0842637690" className="flex items-center gap-3.5 min-w-0 flex-1">
                              <span className="size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 text-primary group-hover:border-primary/40 transition-colors">
                                <Phone className="size-4" />
                              </span>
                              <div className="space-y-0.5">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">Phone</span>
                                <span className="text-sm font-mono font-bold text-foreground group-hover:text-primary transition-colors">084 263 7690</span>
                              </div>
                            </a>
                            <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              Active
                            </span>
                          </li>
                          <li className="py-3.5 flex items-center justify-between gap-3 group">
                            <a href="mailto:enquiries@teemanecranes.co.za" className="flex items-center gap-3.5 min-w-0 flex-1">
                              <span className="size-7 rounded-md bg-muted border border-border flex items-center justify-center shrink-0 text-primary group-hover:border-primary/40 transition-colors">
                                <Mail className="size-4" />
                              </span>
                              <div className="space-y-0.5 min-w-0">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground block">Email</span>
                                <span className="text-sm font-medium text-foreground truncate block group-hover:text-primary transition-colors">enquiries@teemanecranes.co.za</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
                    <p>&copy; {new Date().getFullYear()} Teemane Cranes. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Wrapper>
            <Wrapper className={`pt-8 border-t border-border text-center`}>
                Designed and developed by  <a target={`_blank`} className={`text-primary hover:underline inline`} href="https://designbycode.co.za">designbycode</a>
            </Wrapper>
        </footer>
    );
}
