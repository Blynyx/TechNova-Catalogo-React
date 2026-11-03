export const categoryLabels = {
  beauty: 'Belleza', fragrances: 'Fragancias', furniture: 'Muebles', groceries: 'Alimentos',
  'home-decoration': 'Decoración', 'kitchen-accessories': 'Cocina', laptops: 'Portátiles',
  'mens-shirts': 'Camisas de hombre', 'mens-shoes': 'Calzado de hombre',
  'mens-watches': 'Relojes de hombre', 'mobile-accessories': 'Accesorios móviles',
  motorcycle: 'Motocicletas', 'skin-care': 'Cuidado de la piel', smartphones: 'Celulares',
  'sports-accessories': 'Accesorios deportivos', sunglasses: 'Gafas de sol', tablets: 'Tabletas',
  tops: 'Prendas superiores', vehicle: 'Vehículos', 'womens-bags': 'Bolsos de mujer',
  'womens-dresses': 'Vestidos', 'womens-jewellery': 'Joyería',
  'womens-shoes': 'Calzado de mujer', 'womens-watches': 'Relojes de mujer'
};

export function categoryName(slug) {
  return categoryLabels[slug] ?? String(slug ?? 'Sin categoría').replaceAll('-', ' ');
}

export const formatPrice = value => new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'USD' }).format(Number(value) || 0);
export const formatRating = value => new Intl.NumberFormat('es-PE', {maximumFractionDigits: 1}).format(Number(value) || 0);

export function availabilityText(stock) {
  return Number(stock) <= 0 ? 'Agotado' : Number(stock) < 10 ? 'Pocas unidades' : 'Disponible';
}

// Resumen contextual en español basado en la categoría real del JSON.
// NO se presenta como traducción literal de la descripción inglesa del producto.
export function categorySummary(category) {
  return `Explora este producto de ${categoryName(category).toLowerCase()} y revisa sus características, precio y disponibilidad.`;
}
