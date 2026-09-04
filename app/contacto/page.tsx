import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import { bookingHref, hasExternalBooking, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Datos demostrativos de contacto y acceso a la agenda externa de Abojados.',
};

const contactItems = [
  { icon: Mail, label: 'Correo', value: siteConfig.contact.email },
  { icon: Phone, label: 'Teléfono', value: siteConfig.contact.phone },
  { icon: MapPin, label: 'Dirección', value: siteConfig.contact.address },
  { icon: Clock3, label: 'Atención', value: siteConfig.contact.hours },
];

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Un primer paso ordenado y sin información innecesaria."
        lead="Los datos de esta página son marcadores demostrativos. Reemplácelos antes de utilizar el sitio públicamente."
      />
      <section className="section-block" id="agenda">
        <div className="site-shell contact-layout">
          <div>
            <p className="section-label">Datos demostrativos</p>
            <h2 className="contact-title">Canales preparados para los datos reales del estudio.</h2>
            <div className="contact-list">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div className="contact-item" key={label}>
                  <Icon aria-hidden="true" />
                  <div><span>{label}</span><strong>{value}</strong></div>
                </div>
              ))}
            </div>
          </div>

          <aside className="booking-panel" aria-labelledby="agenda-title">
            <CalendarDays aria-hidden="true" />
            <p className="section-label">Agenda externa</p>
            <h2 id="agenda-title">Reserve una consulta en Google Calendar.</h2>
            <p>
              {hasExternalBooking
                ? 'La agenda está disponible. El enlace se abrirá en una pestaña nueva.'
                : 'La URL pública de Google Calendar todavía no ha sido incorporada. Mientras tanto, utilice los datos demostrativos como referencia de ubicación.'}
            </p>
            <Link
              href={bookingHref}
              target={hasExternalBooking ? '_blank' : undefined}
              rel={hasExternalBooking ? 'noreferrer' : undefined}
              aria-disabled={!hasExternalBooking}
              className={cn(buttonVariants({ size: 'lg' }), 'gold-button', !hasExternalBooking && 'booking-disabled')}
            >
              {hasExternalBooking ? 'Abrir Google Calendar' : 'Agenda pendiente'} <ArrowUpRight aria-hidden="true" />
            </Link>
            <small>Configure `bookingUrl` en `lib/site-config.ts` para activar este botón.</small>
          </aside>
        </div>
      </section>
    </main>
  );
}

