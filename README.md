# TechNova — Catálogo de productos con React y DummyJSON

**Evaluación Consolidado 2.1 · Ingeniería Web**  
**Tipo:** proyecto front-end académico con dos interfaces.  
**API:** [DummyJSON Products](https://dummyjson.com/docs/products).  
**Tecnologías:** React 19, JavaScript, Vite 7, CSS, API Fetch.  
**Integrantes:** ____________________  
**Asignatura / sección:** ____________________

## ¿Qué hace la aplicación?

TechNova consulta el endpoint real de productos y muestra un catálogo responsivo con imágenes, nombres, categorías traducidas, precios en dólares, valoración y disponibilidad. Permite **buscar**, **filtrar por categoría**, **ordenar**, **paginar** y **abrir una segunda interfaz con detalle** de cada producto. El detalle consulta independientemente `/products/:id`, permite recorrer imágenes y regresar al catálogo. Incluye estados de carga, errores con reintento y vacíos.

> **Advertencia:** DummyJSON es una API con datos ficticios. Los precios y el inventario son de demostración; esta web no vende ni cobra productos.

## Requisitos

- Node.js 20.19+ o 22.12+ recomendado para Vite 7.
- npm y conexión a internet para instalar dependencias y obtener datos de DummyJSON.

## Cómo ejecutar (Windows / VS Code)

1. Descomprimir `TechNova_Catalogo_React.zip`.
2. Abrir la carpeta `TechNova_Catalogo_React` en VS Code.
3. Abrir una terminal en esa carpeta y ejecutar:

```bash
npm install
npm run dev
```

4. Abrir la URL que muestre Vite, normalmente **http://localhost:5173/**.
5. Para crear versión de producción:

```bash
npm run build
npm run preview
```

**Nota de verificación:** El paquete incluye todo el código fuente, pero no `node_modules`; es necesario ejecutar `npm install` localmente. La compilación de producción no pudo comprobarse en el entorno de preparación porque no se contó con acceso al registro npm.

## Primera parte — 45 minutos: análisis y sketches

Leer [`docs/01_ANALISIS_JSON.md`](docs/01_ANALISIS_JSON.md) y consultar los bocetos en [`docs/sketches`](docs/sketches). Los bocetos numerados 01 y 02 representan el diseño previo; los 03 y 04, la propuesta visual final. Los nombres de componentes aparecen en el documento de diseño.

## Segunda parte — 45 minutos: implementación

Abrir `src/App.jsx`, `src/services/productsApi.js` y los componentes dentro de `src/components`. La navegación usa rutas hash (`#/` y `#/producto/123`), lo que evita depender de React Router para una tarea acotada.

## Estructura

```text
TechNova_Catalogo_React/
├── index.html
├── package.json
├── README.md
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── services/productsApi.js
│   ├── utils/localization.js
│   └── components/
│       ├── Header.jsx
│       ├── Icons.jsx
│       ├── Catalog.jsx
│       ├── ProductCard.jsx
│       └── ProductDetail.jsx
└── docs/
    ├── 01_ANALISIS_JSON.md
    ├── 02_DISENO_COMPONENTES.md
    ├── 03_SUSTENTACION_Y_PRUEBAS.md
    └── sketches/ (4 archivos SVG)
```

## Endpoints consultados

- `GET https://dummyjson.com/products?limit=0` — catálogo completo.
- `GET https://dummyjson.com/products/{id}` — detalle de un registro seleccionado.

## Idioma

Las categorías, etiquetas de interfaz y estados de inventario se muestran en español mediante `localization.js`. Se mantiene el nombre comercial original; la descripción original en inglés solo aparece si el usuario elige verla. El resumen en español de la ficha se genera por categoría y **no es una traducción literal**.

## Fuentes

- [Consigna de la evaluación: Consolidado 2.1](docs/01_ANALISIS_JSON.md) (análisis basado en el PDF del curso).
- [Documentación oficial DummyJSON — Products](https://dummyjson.com/docs/products).
- [Documentación oficial React](https://react.dev/).
- [Documentación oficial Vite](https://vite.dev/guide/).
