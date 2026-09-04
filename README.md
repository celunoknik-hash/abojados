# Abojados

Sitio web multipágina demostrativo para un estudio jurídico. Incluye Inicio, Nosotros, Áreas de práctica, Contacto, navegación adaptable, metadatos y una integración preparada para Google Calendar.

## Abrir el proyecto

Requisitos: Node.js 22.13 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

El sitio local se abre normalmente en `http://localhost:3000`.

## Crear la versión de producción

```bash
pnpm build
```

## Editar el contenido

La marca, navegación, áreas de práctica, datos de contacto y enlace de reserva se encuentran en `lib/site-config.ts`.

Antes de utilizar el sitio comercialmente, reemplace:

- Los datos de contacto demostrativos.
- Las descripciones de áreas por servicios reales y verificables.
- La presentación del estudio y sus profesionales.
- El valor vacío de `bookingUrl` por la URL pública de citas de Google Calendar.

Cuando `bookingUrl` está vacío, las llamadas a reserva dirigen a la página de Contacto y muestran que la agenda aún está pendiente.

## Imagen principal

`public/hero-office.png` es una imagen original generada para este proyecto. No contiene personas, logotipos ni documentos legibles.

## Aviso

Todo el contenido jurídico y de contacto incluido inicialmente es demostrativo. La información general del sitio no constituye asesoría jurídica.

