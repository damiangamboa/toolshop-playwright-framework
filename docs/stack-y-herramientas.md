# Stack y herramientas

## Contexto

Framework de automatización E2E para Practice Software Testing (versión with-bugs), pensado como proyecto de portafolio y construido por pasos.

## Decisión

- Playwright con TypeScript en modo estricto (`strict` y `noUncheckedIndexedAccess`).
- npm como gestor de paquetes, con `package-lock.json` versionado y Node LTS fijado en `.nvmrc`.
- ESLint con `eslint-plugin-playwright` para análisis estático de los tests, y Prettier para el formato.
- Husky, lint-staged y commitlint para validar localmente; el CI repetirá los mismos checks.
- Alias de rutas en `tsconfig` para imports legibles.

## Consecuencias

- Playwright no verifica tipos al ejecutar, así que `tsc --noEmit` será un gate propio en CI.
- Las herramientas externas a Playwright deben resolver los alias de rutas.
- Los hooks locales se pueden saltar; el CI es la fuente de verdad.
