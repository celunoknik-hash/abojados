export const siteConfig = {
  name: 'Abojados',
  descriptor: 'Estudio jurídico',
  description:
    'Sitio demostrativo de orientación jurídica con información editable y reserva externa de consultas.',
  bookingUrl: '',
  bookingFallback: '/contacto#agenda',
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Áreas de práctica', href: '/areas' },
    { label: 'Contacto', href: '/contacto' },
  ],
  contact: {
    email: 'contacto@ejemplo.cl',
    phone: '+56 9 0000 0000',
    address: 'Dirección por definir, Santiago',
    hours: 'Horario de atención por definir',
  },
  practices: [
    {
      name: 'Derecho civil',
      description:
        'Orientación en contratos, obligaciones, responsabilidad y controversias entre particulares.',
    },
    {
      name: 'Derecho de familia',
      description:
        'Acompañamiento en acuerdos, cuidado personal, alimentos y otras materias familiares.',
    },
    {
      name: 'Derecho laboral',
      description:
        'Asesoría para personas y organizaciones frente a relaciones y conflictos laborales.',
    },
    {
      name: 'Derecho penal',
      description:
        'Orientación inicial y representación sujeta a la evaluación responsable de cada caso.',
    },
    {
      name: 'Derecho corporativo',
      description:
        'Apoyo jurídico para la operación, los contratos y la organización de empresas.',
    },
  ],
} as const;

export const bookingHref = siteConfig.bookingUrl || siteConfig.bookingFallback;
export const hasExternalBooking = Boolean(siteConfig.bookingUrl);

