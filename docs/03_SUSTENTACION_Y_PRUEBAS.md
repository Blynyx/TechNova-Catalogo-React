# Guía de sustentación y lista de verificación

## Guion breve para exponer (3–5 minutos)

**1. Problema y objetivo (30 s).** «El objetivo era desarrollar una aplicación React que consuma datos de una API JSON pública, con dos interfaces y una interacción real».

**2. API y análisis (45 s).** «Elegimos DummyJSON porque expone una lista de productos con imágenes, precios, categorías, stock e ID. El JSON principal contiene un arreglo `products`; con `id` obtenemos la ficha de cada producto».

**3. Sketches (45 s).** «Antes de programar diseñamos un catálogo con buscador y una ficha de detalle; anotamos los componentes `Catalog`, `ProductCard`, `ProductDetail`, etc. Luego aplicamos una línea gráfica azul y blanco».

**4. Programación (60 s).** «En `productsApi.js` usamos `fetch`. `App` almacena los productos y controla las dos vistas. `Catalog` filtra y ordena la lista; `ProductDetail` consulta el ID seleccionado. Los productos no están escritos a mano: vienen de la API».

**5. Español y demostración (45 s).** «Usamos un diccionario para nombres de categorías y etiquetas de la interfaz. Los nombres comerciales originales no se modifican; la descripción inglesa puede verse bajo demanda. Demostramos una búsqueda, un filtro y el paso al detalle».

## Pruebas manuales sugeridas

| Prueba | Acción | Resultado esperado |
| --- | --- | --- |
| Carga inicial | Abrir la web con internet | Aparecen tarjetas recibidas desde la API |
| Buscar | Escribir una parte del nombre o marca | Se filtran las tarjetas sin recargar |
| Sin resultados | Buscar texto inexistente | Estado vacío con botón de restablecimiento |
| Categoría | Seleccionar categoría | Solo productos de esa categoría |
| Precio | Ordenar de menor a mayor | Precios ascendentes |
| Paginación | Pulsar siguiente | Se muestran registros diferentes |
| Detalle | Seleccionar una tarjeta | Se muestra la segunda interfaz y sus datos |
| Navegación | Volver al catálogo | Aparece nuevamente la vista principal |
| Traducción | Revisar categorías | Etiquetas en español |
| Error de conexión | Desactivar red y recargar | Mensaje de error, botón reintentar |
| Adaptabilidad | Reducir ventana | Las tarjetas cambian de columnas |

**Estado:** esta tabla es un **plan de pruebas**, no constituye evidencia de pruebas ya ejecutadas. Hacer las pruebas en el equipo, marcar sus resultados y capturar pantallas si el profesor las pide.

## Cobertura de rúbrica (12 puntos máximos brutos)

1. **Análisis JSON (3):** `docs/01_ANALISIS_JSON.md`, campos y justificaciones.
2. **Sketches (3):** los dos bocetos y el diseño definitivo, relacionados con los campos JSON.
3. **React + API (3):** código de `src/` con `fetch`, componentes y navegación.
4. **Español + sustento (3):** `localization.js`, UI en español y esta guía de exposición.

El PDF **no exige explícitamente** una base de datos propia, login, checkout, backend, GitHub ni despliegue.
