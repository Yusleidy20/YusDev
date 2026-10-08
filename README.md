# YusDev

Landing page de YusDev, agencia de desarrollo web para negocios, profesionales y emprendedores. Está construida con React, TypeScript y Vite.

## Desarrollo local

```sh
npm ci
npm run dev
```

## Publicación

El workflow de GitHub Actions compila el sitio con Vite y publica el contenido de `dist` en GitHub Pages al actualizar la rama `master`.

En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions** como fuente. El dominio personalizado `yusdev.world` está configurado en `CNAME` y en `public/CNAME`.

Para validar el build localmente:

```sh
npm run build
```
