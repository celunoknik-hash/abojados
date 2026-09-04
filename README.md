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

## Publicar en GitHub Pages

El código de la aplicación debe compilarse antes de publicarse. Publicar la raíz
del repositorio con Jekyll muestra este README en lugar del sitio.

```bash
pnpm build:pages
```

La versión estática se genera en `dist/client/`, con HTML para las cuatro
páginas, estilos, imágenes y rutas bajo `/abojados/`.

En GitHub, seleccione **Settings > Pages > Build and deployment > Source >
GitHub Actions**. El flujo `.github/workflows/deploy-pages.yml` compila y publica
el sitio al actualizar `main`, y también permite ejecutarlo manualmente.

El enlace publicado es https://celunoknik-hash.github.io/abojados/.
`pnpm dev` y `pnpm build` conservan la configuración de Sites.

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

