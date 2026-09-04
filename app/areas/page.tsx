import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Áreas de práctica',
  description: 'Áreas jurídicas demostrativas incluidas en el sitio Abojados.',
};

export default function AreasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Áreas de práctica"
        title="Materias organizadas para orientar el primer contacto."
        lead="Las áreas y sus descripciones son demostrativas. Deben ajustarse a los servicios que el estudio realmente presta."
      />
      <section className="section-block">
        <div className="site-shell practices-grid">
          {siteConfig.practices.map((practice, index) => (
            <article className="practice-card" key={practice.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{practice.name}</h2>
              <p>{practice.description}</p>
              <Link href="/contacto#agenda">Consultar por esta área <ArrowUpRight aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="notice-panel">
        <div className="site-shell notice-panel-inner">
          <div><p className="section-label">Alcance</p><h2>La viabilidad y el servicio aplicable dependen de la revisión de cada caso.</h2></div>
          <Link href="/contacto" className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}>Ir a contacto <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}

