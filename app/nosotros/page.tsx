import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Eye, Scale, ShieldCheck } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Presentación demostrativa del enfoque y la forma de trabajo del estudio Abojados.',
};

const principles = [
  { icon: Eye, title: 'Información comprensible', text: 'Explicar alternativas, etapas y límites con un lenguaje que permita decidir con mayor contexto.' },
  { icon: ShieldCheck, title: 'Tratamiento reservado', text: 'Organizar el primer contacto para cuidar la información y evitar solicitudes innecesarias.' },
  { icon: Scale, title: 'Evaluación responsable', text: 'Revisar cada asunto antes de proponer un alcance de trabajo o una estrategia determinada.' },
];

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una presentación clara antes de la primera conversación."
        lead="Esta página está preparada para incorporar la historia, la experiencia verificable y el equipo real del estudio."
      />
      <section className="section-block">
        <div className="site-shell split-copy">
          <div>
            <p className="section-label">Perfil demostrativo</p>
            <h2>Un estudio orientado a comprender primero el contexto.</h2>
          </div>
          <div className="prose-copy">
            <p>Abojados es una marca demostrativa creada para mostrar cómo puede presentarse un estudio jurídico profesional en internet.</p>
            <p>Antes de publicar el sitio para uso comercial, este texto debe reemplazarse por información verificable sobre los profesionales, sus habilitaciones, experiencia y jurisdicciones de ejercicio.</p>
          </div>
        </div>
      </section>
      <section className="section-block section-muted">
        <div className="site-shell">
          <div className="section-heading">
            <p className="section-label">Principios de atención</p>
            <h2>Una base sobria para presentar la forma de trabajo.</h2>
          </div>
          <div className="principles-grid">
            {principles.map(({ icon: Icon, title, text }) => (
              <article className="principle-card" key={title}>
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
          <div><p className="section-label">Siguiente paso</p><h2>Conozca las áreas demostrativas del estudio.</h2></div>
          <Link href="/areas" className={cn(buttonVariants({ size: 'lg' }), 'gold-button')}>Ver áreas <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}

