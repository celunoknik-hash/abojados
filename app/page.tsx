import Link from 'next/link';
import { ArrowUpRight, CalendarDays, FileSearch, LockKeyhole, MessageSquareText, ShieldCheck } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { bookingHref, hasExternalBooking, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const approach = [
  {
    icon: MessageSquareText,
    title: 'Escuchar el contexto',
    text: 'Ordenar los antecedentes iniciales y precisar qué decisión necesita tomar la persona.',
  },
  {
    icon: FileSearch,
    title: 'Revisar la información',
    text: 'Identificar los documentos relevantes y los asuntos que requieren una evaluación más profunda.',
  },
  {
    icon: ShieldCheck,
    title: 'Definir el alcance',
    text: 'Explicar los próximos pasos posibles sin anticipar resultados ni crear expectativas incorrectas.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Contenido demostrativo y editable</p>
            <h1 id="hero-title">
              Claridad jurídica para
              <em>decisiones importantes.</em>
            </h1>
            <p className="hero-lead">
              Un espacio profesional para presentar áreas de práctica, explicar la forma de trabajo
              y facilitar el primer contacto con cada persona.
            </p>
            <div className="hero-actions">
              <Link
                href={bookingHref}
                target={hasExternalBooking ? '_blank' : undefined}
                rel={hasExternalBooking ? 'noreferrer' : undefined}
                className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}
              >
                Solicitar consulta <CalendarDays aria-hidden="true" />
              </Link>
              <Link href="/areas" className="text-link">
                Explorar áreas de práctica <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <p className="hero-note">
              <LockKeyhole size={15} aria-hidden="true" />
              La información de este sitio es demostrativa y no constituye asesoría jurídica.
            </p>
          </div>

          <div className="hero-media">
            {/* oxlint-disable-next-line nextjs/no-img-element -- The static export serves this image without a runtime optimizer. */}
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-office.png`}
              alt="Oficina contemporánea preparada para una consulta jurídica"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <article className="consultation-card" id="agenda" aria-labelledby="booking-title">
              <header className="dossier-head">
                <span aria-hidden="true" />
                <div>
                  <small>Expediente de consulta</small>
                  <h2 id="booking-title">Reserve una conversación</h2>
                </div>
              </header>
              <div className="dossier-body">
                <div className="dossier-steps">
                  <div className="dossier-step">
                    <b>01</b>
                    <div><strong>Indique el área</strong><p>Identifique la materia general que necesita revisar.</p></div>
                  </div>
                  <div className="dossier-step">
                    <b>02</b>
                    <div><strong>Elija una hora</strong><p>La agenda externa se conectará aquí cuando esté disponible.</p></div>
                  </div>
                  <div className="dossier-step">
                    <b>03</b>
                    <div><strong>Reciba confirmación</strong><p>Los datos definitivos se incorporarán antes del uso comercial.</p></div>
                  </div>
                </div>
                <Link href={bookingHref} className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}>
                  Ir a contacto <ArrowUpRight aria-hidden="true" />
                </Link>
                {!hasExternalBooking && <p className="calendar-pending">Google Calendar aún no está configurado.</p>}
              </div>
            </article>
          </div>
        </div>

        <div className="practice-ribbon" aria-label="Áreas de práctica demostrativas">
          <div className="site-shell">
            {siteConfig.practices.map((practice) => <span key={practice.name}>{practice.name}</span>)}
          </div>
        </div>
      </section>

      <section className="section-block home-intro">
        <div className="site-shell split-copy">
          <div>
            <p className="section-label">Nuestro enfoque</p>
            <h2>La primera conversación debe ayudar a entender el problema.</h2>
          </div>
          <div className="prose-copy">
            <p>La estructura del sitio presenta información general antes de solicitar una consulta, para que cada persona pueda ubicar la materia y preparar los antecedentes básicos.</p>
            <p>Todo el contenido es demostrativo y puede reemplazarse desde una configuración central cuando estén disponibles los datos reales del estudio.</p>
          </div>
        </div>
      </section>

      <section className="section-block section-muted">
        <div className="site-shell">
          <div className="section-heading">
            <p className="section-label">Forma de trabajo</p>
            <h2>Tres momentos para ordenar una consulta inicial.</h2>
          </div>
          <div className="principles-grid">
            {approach.map(({ icon: Icon, title, text }, index) => (
              <article className="principle-card" key={title}>
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="site-shell cta-band-inner">
          <div><p className="section-label">Información demostrativa</p><h2>Revise las áreas y prepare el primer contacto.</h2></div>
          <Link href="/contacto" className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}>Ir a contacto <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
