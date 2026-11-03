const BASE = 'https://dummyjson.com/products';

async function request(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`La API respondió con el código ${response.status}.`);
  return response.json();
}

// limit=0 devuelve todos los productos para filtrarlos sin perder resultados.
export async function getProducts(signal) {
  const data = await request(`${BASE}?limit=0`, signal);
  if (!Array.isArray(data.products)) throw new Error('Formato de respuesta no válido.');
  return data.products;
}

export async function getProduct(id, signal) {
  return request(`${BASE}/${encodeURIComponent(id)}`, signal);
}
