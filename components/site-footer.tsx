import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link href="/" className="brand footer-brand" aria-label="Abojados, inicio">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span><strong>{siteConfig.name}</strong><small>{siteConfig.descriptor}</small></span>
          </Link>
          <p className="footer-copy">
            Sitio demostrativo preparado para incorporar la identidad, los profesionales y los datos
            reales de un estudio jurídico.
          </p>
        </div>
        <div>
          <p className="footer-title">Navegación</p>
          <nav className="footer-links" aria-label="Navegación del pie de página">
            {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-title">Datos demostrativos</p>
          <ul className="footer-contact">
            <li><Mail aria-hidden="true" /> {siteConfig.contact.email}</li>
            <li><Phone aria-hidden="true" /> {siteConfig.contact.phone}</li>
            <li><MapPin aria-hidden="true" /> {siteConfig.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} Abojados. Contenido demostrativo.</p>
        <p>La información general de este sitio no constituye asesoría jurídica.</p>
      </div>
    </footer>
  );
}

