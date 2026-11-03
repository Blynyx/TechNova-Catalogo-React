# Parte 1 — Análisis de la API y del endpoint JSON

## 1. Objetivo de la actividad

Conforme a **Evaluación Consolidado 2.1 — Ingeniería Web**, desarrollar en grupo una aplicación web front-end en React que consuma una API JSON pública. Presentar primero el análisis de la respuesta y **dos sketches** con nombres de componentes (45 minutos). Posteriormente implementar las **dos interfaces** con `fetch` o `axios` y una interacción básica (45 minutos). Si hay datos en inglés, adaptarlos razonablemente al español.

## 2. API elegida

- Proveedor: **DummyJSON**, API pública con datos ficticios.
- Dominio: `https://dummyjson.com`.
- Endpoint principal: `GET /products?limit=0`.
- Endpoint secundario: `GET /products/:id`.
- Método: **GET**; respuesta: **JSON**.
- Motivo de elección: datos heterogéneos con textos, números, imágenes, categorías y stock; permiten un catálogo y una ficha individual conectados.

## 3. Estructura del JSON

Respuesta del listado (ejemplo **ilustrativo de estructura**, no una captura del API en vivo):

```json
{
  "products": [
    {
      "id": 1,
      "title": "Nombre del producto",
      "description": "Descripción original en inglés",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "brand": "Marca de ejemplo",
      "sku": "ABC123",
      "thumbnail": "https://...",
      "images": ["https://..."]
    }
  ],
  "total": 194,
  "skip": 0,
  "limit": 30
}
```

`products` es un **arreglo de objetos**. `total`, `skip`, `limit` son metadatos de paginación de respuesta. Las cifras anteriores son solo ilustrativas y pueden variar.

| Campo | Tipo JSON | Uso en interfaz | Justificación |
| --- | --- | --- | --- |
| `products` | Array | Lista principal | Permite dibujar tarjetas con `.map()` |
| `id` | Number | Navegación a detalle | Identificador único de la selección |
| `title` | String | Título de tarjeta y ficha | Identificación del producto |
| `thumbnail` | String (URL) | Imagen de tarjeta | Reconocimiento visual rápido |
| `images` | Array de String | Galería de detalle | Información visual ampliada |
| `category` | String | Filtro y categoría visible | Organización de elementos |
| `price` | Number | Precio | Comparación y ordenación |
| `rating` | Number | Valoración | Apoya selección |
| `stock` | Number | Estado / unidades | Indica disponibilidad ficticia |
| `description` | String | Descripción original opcional | Información ampliada, conservada en inglés |
| `brand` | String u omitido | Marca en ficha | Contexto comercial |
| `sku` | String u omitido | Código en ficha | Identificación secundaria |
| `discountPercentage` | Number | Descuento visible | Dato comercial adicional |

## 4. Decisión de presentación

- **Interfaz 1 / Catálogo:** título, buscador, categorías, selector de orden, tarjetas con imagen, nombre, precio, valoración, descuento y enlace al detalle. 12 productos por página.
- **Interfaz 2 / Detalle:** imágenes, nombre, categoría, marca, precio, descripción contextual en español, stock, SKU y enlace de vuelta.
- **Interacción:** búsqueda local entre los productos descargados, filtro por categoría, ordenación por precio/valoración, paginación, navegación y cambio de imagen.
- **Criterios de usabilidad:** responsive, estados vacío/carga/error, etiquetas de controles, `alt` para imágenes.

## 5. Adaptación al español

Se implementa un diccionario `categoryLabels`, que mapea `smartphones`→`Celulares`, `laptops`→`Portátiles`, etc. Todas las etiquetas de pantalla y estados se presentan en español. El nombre comercial se conserva sin traducir; en detalle se muestra un resumen contextual redactado en español **que no pretende ser traducción de la descripción**. La descripción original inglesa es opcional y se identifica claramente como tal. Esta solución evita depender de una API de traducción y se ajusta al tiempo del ejercicio.

## 6. Flujo del JSON a la interfaz

```text
GET /products?limit=0
     ↓ fetch() + validación de estado HTTP
{products: [...], total, skip, limit}
     ↓ setProducts() en App
Catalog (filtro / búsqueda / orden / paginación)
     ↓ .map(product)
ProductCard  → seleccionar id
     ↓ navegación #/producto/:id
GET /products/:id
     ↓
ProductDetail (datos e imágenes)
```

**Fuente externa:** https://dummyjson.com/docs/products. Los nombres de campos y endpoints provienen de la documentación del proveedor. La estructura, justificaciones y decisiones de interfaz son del trabajo académico.
