import { Link, usePage } from '@inertiajs/react';
import { Menu, MapPin, Clock } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
// @ts-ignore
import logoUrl from '@/../images/logo.svg';
import Wrapper from "@/components/ui/misc/wrapper";
import { ModeToggle } from '@/components/mode-toggle';
import { home } from '@/routes';

const navLinks = [
  { name: 'Home', href: home.url() },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/our-team' },
  // { name: 'Equipment', href: '/equipment' },
];

export default function Navigation() {
  const { url } = usePage();

  const isActive = (href: string) =>
    href === '/' ? url === '/' : url.startsWith(href);

  return (
    <>
      {/* Notification Bar - Static (scrolls away) */}
      <div className="bg-foreground text-background text-[8px]  font-bold py-2.5 px-4 tracking-[0.2em] uppercase border-b border-border hidden sm:block">
        <Wrapper className="flex justify-between items-center w-full">
           <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-background/80">
                <MapPin className="w-3 h-3 text-primary" />
                Operating across South Africa
              </span>
           </div>
           <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-background/80">
                <Clock className="w-3 h-3 text-primary" />
                Available 24/7
              </span>

           </div>
        </Wrapper>
      </div>

      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/90 transition-all duration-300 shadow-sm">
        <Wrapper className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" prefetch="hover" className="flex items-center gap-2 group">
            <img
              src={logoUrl}
              alt="Teemane Cranes Logo"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch="hover"
                  className={`text-sm font-bold tracking-widest uppercase transition-colors px-2 py-1 rounded-md ${
                    active
                      ? 'text-primary bg-primary/10'
                      : 'hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Contact Us CTA */}
            <Link
              href="/contact-us"
              prefetch="hover"
              className="text-sm font-bold tracking-widest uppercase inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow px-5 py-2.5 rounded-lg"
            >
              Contact Us
            </Link>

            <div className="pl-4 border-l border-border">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-background border-l border-border flex flex-col p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Sheet Header with Logo */}
                <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
                  <img src={logoUrl} alt="Teemane Cranes Logo" className="h-9 w-auto" />
                </div>

                {/* Links */}
                <nav className="flex flex-col px-4 py-6 gap-1">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        prefetch="hover"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                          active
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground hover:text-primary hover:bg-accent'
                        }`}
                      >
                        {active && <span className="w-1 h-4 rounded-full bg-primary shrink-0" />}
                        {link.name}
                      </Link>
                    );
                  })}

                  {/* Contact Us CTA - Mobile */}
                  <Link
                    href="/contact-us"
                    prefetch="hover"
                    className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary text-primary-foreground transition-all shadow-sm hover:shadow"
                  >
                    Contact Us
                  </Link>
                </nav>

                <div className="mt-auto px-6 pb-8 space-y-2">
                  <div className="h-px w-full bg-border mb-4"></div>
                  <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase">TEEMANE CRANES</p>
                  <p className="text-sm text-muted-foreground">A Cut Above The Rest</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Wrapper>
      </nav>
    </>
  );
}
