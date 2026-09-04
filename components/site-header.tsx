import Link from 'next/link';
import { Menu } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { bookingHref, hasExternalBooking, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="brand" aria-label="Abojados, inicio">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.descriptor}</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={bookingHref}
            target={hasExternalBooking ? '_blank' : undefined}
            rel={hasExternalBooking ? 'noreferrer' : undefined}
            className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}
          >
            Reservar consulta
          </Link>
        </div>

        <details className="mobile-menu lg:hidden">
          <summary aria-label="Abrir menú">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Navegación móvil">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href={bookingHref} className="mobile-booking">Reservar consulta</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

