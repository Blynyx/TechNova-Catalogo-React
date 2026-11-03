# Parte 1 — Sketches y diseño de componentes React

## Bocetos (wireframes previos)

Abrir en un navegador o visualizador de imágenes:

1. [`sketches/01_sketch_catalogo.svg`](sketches/01_sketch_catalogo.svg) — pantalla principal, **sketch en baja fidelidad**.
2. [`sketches/02_sketch_detalle.svg`](sketches/02_sketch_detalle.svg) — pantalla secundaria, **sketch en baja fidelidad**.
3. [`sketches/03_diseno_catalogo.svg`](sketches/03_diseno_catalogo.svg) — propuesta visual final del catálogo.
4. [`sketches/04_diseno_detalle.svg`](sketches/04_diseno_detalle.svg) — propuesta visual final de detalle.

Los mockups finales son ilustraciones estáticas del diseño previsto. La interfaz ejecutable está en `src/` y se alimenta con datos reales; por eso las tarjetas, fotos y títulos variarán frente a los mockups.

## Componentes que se usan o crean

| Componente | Archivo | Responsabilidad |
| --- | --- | --- |
| `App` | `src/App.jsx` | Estado de productos, control de errores, selección de vista y navegación hash |
| `Header` | `src/components/Header.jsx` | Cabecera, marca y acceso al catálogo |
| `Catalog` | `src/components/Catalog.jsx` | Vista principal, búsqueda, filtrado, orden, paginación |
| `ProductCard` | `src/components/ProductCard.jsx` | Tarjeta reutilizable de producto; imagen, precio y acceso a detalle |
| `ProductDetail` | `src/components/ProductDetail.jsx` | Vista secundaria; consulta por id, galería e información ampliada |
| `Icon` | `src/components/Icons.jsx` | Iconos SVG reutilizables sin librería externa |
| `getProducts` | `src/services/productsApi.js` | Función de consulta del listado por `fetch` |
| `getProduct` | `src/services/productsApi.js` | Función de consulta del detalle por `fetch` |
| `categoryName`, `availabilityText` | `src/utils/localization.js` | Traducción de categorías y estados |

## Relación entre componentes

```text
App
 ├── Header
 ├── Catalog (cuando ruta #/)
 │    └── ProductCard (varias instancias)
 └── ProductDetail (cuando ruta #/producto/:id)
```

## Línea gráfica final

- **Estética:** tecnológica, moderna y profesional, con jerarquía tipográfica, aire visual y tarjetas.
- **Paleta:** azul marino `#101e37`, azul acento `#257ff0`, gris claro `#f4f7fb`, blanco `#ffffff`.
- **Tipografía:** `Manrope` para títulos y `DM Sans` para interfaz (fallback de sistema cuando no carga Google Fonts).
- **Diseño adaptable:** 4 columnas de productos en escritorio, 3 en tablet y 2 en móvil.
- **Navegación:** portada → tarjeta → detalle → volver a portada.

## Relación sketch → implementación

El área de búsqueda del sketch se convierte en `<input>` controlado; el menú de categorías en `<select>`; los bloques de tarjetas en `<ProductCard>`; la ficha ampliada en `<ProductDetail>`. Los nombres anteriores aparecen indicados directamente en los bocetos.
