type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="site-shell page-hero-inner">
        <div className="page-hero-rule" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

