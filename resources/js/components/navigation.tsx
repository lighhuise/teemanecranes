import { Link } from '@inertiajs/react';
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
import team from '@/routes/team';

const navLinks = [
  { name: 'Home', href: home.url() },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/our-team' },
  // { name: 'Equipment', href: '/equipment' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Navigation() {
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
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={logoUrl}
              alt="Teemane Cranes Logo"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-widest uppercase transition-colors hover:text-primary relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
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
              <SheetContent side="right" className="w-[80vw] sm:w-[350px] bg-background border-l border-border flex flex-col pt-16">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-2xl font-black tracking-tight transition-colors hover:text-primary hover:translate-x-2 duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pb-8 space-y-4">
                  <div className="h-px w-full bg-border"></div>
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
