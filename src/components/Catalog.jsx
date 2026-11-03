import React, {useMemo,useState} from 'react';
import Icon from './Icons.jsx';
import ProductCard from './ProductCard.jsx';
import {categoryName} from '../utils/localization.js';
const PAGE_SIZE=12;
export default function Catalog({products,loading,error,onRetry,onSelect}) {
 const [query,setQuery]=useState('');
 const [category,setCategory]=useState('all');
 const [sort,setSort]=useState('featured');
 const [page,setPage]=useState(1);
 const categories=useMemo(()=> [...new Set(products.map(p=>p.category).filter(Boolean))].sort((a,b)=>categoryName(a).localeCompare(categoryName(b),'es')), [products]);
 const filtered=useMemo(()=>{
   let list=products.filter(p=> (category==='all'||p.category===category) && `${p.title} ${p.brand||''} ${categoryName(p.category)} ${p.category}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
   if(sort==='price-asc')list=[...list].sort((a,b)=>a.price-b.price);
   if(sort==='price-desc')list=[...list].sort((a,b)=>b.price-a.price);
   if(sort==='rating')list=[...list].sort((a,b)=>b.rating-a.rating);
   return list;
 },[products,category,query,sort]);
 const countPages=Math.max(1,Math.ceil(filtered.length/PAGE_SIZE));
 const shown=filtered.slice((Math.min(page,countPages)-1)*PAGE_SIZE,Math.min(page,countPages)*PAGE_SIZE);
 function updateQuery(v){setQuery(v);setPage(1)}
 function updateCategory(v){setCategory(v);setPage(1)}
 function updateSort(v){setSort(v);setPage(1)}
 return <>
   <section className="hero"><div className="container hero-content"><div className="hero-copy"><span className="hero-kicker"><Icon name="sparkle" size={15}/> TU ESPACIO PARA DESCUBRIR</span><h1>Encuentra algo <span>extraordinario.</span></h1><p>Un catálogo inteligente para explorar productos, comparar precios y descubrir tus próximos favoritos.</p><a href="#catalogo" className="hero-cta">Explorar catálogo <Icon name="arrow" size={18}/></a></div><div className="hero-art" aria-hidden="true"><div className="art-halo"></div><div className="art-ring ring-one"></div><div className="art-ring ring-two"></div><div className="hero-orb">✦</div><div className="art-label">EXPLORA · DESCUBRE · INSPÍRATE</div></div></div></section>
   <main className="container catalog-section" id="catalogo"><div className="section-heading"><div><span className="section-overline">COLECCIÓN</span><h2>Explora nuestros productos<span className="accent-dot">.</span></h2><p>Información actualizada desde DummyJSON, organizada para ti.</p></div><span className="count-chip"><Icon name="grid" size={16}/> {products.length} productos</span></div>
     <div className="toolbar"><label className="search-field"><Icon name="search" size={20}/><input value={query} onChange={e=>updateQuery(e.target.value)} placeholder="Busca un producto, marca o categoría..." aria-label="Buscar productos"/>{query&&<button onClick={()=>updateQuery('')} aria-label="Limpiar búsqueda"><Icon name="close" size={16}/></button>}</label>
       <label className="select-wrap"><Icon name="sliders" size={18}/><select value={category} onChange={e=>updateCategory(e.target.value)} aria-label="Filtrar categoría"><option value="all">Todas las categorías</option>{categories.map(c=><option key={c} value={c}>{categoryName(c)}</option>)}</select></label>
       <label className="select-wrap sort-select"><select value={sort} onChange={e=>updateSort(e.target.value)} aria-label="Ordenar productos"><option value="featured">Destacados</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option><option value="rating">Mejor valorados</option></select></label>
     </div>
     <div className="result-line"><span>{loading?'Cargando productos...':`${filtered.length} ${filtered.length===1?'resultado':'resultados'} encontrados`}</span>{(query||category!=='all'||sort!=='featured')&&<button className="reset-button" onClick={()=>{setQuery('');setCategory('all');setSort('featured');setPage(1)}}>Limpiar filtros</button>}</div>
     {loading ? <div className="card-grid" aria-live="polite">{Array.from({length:8},(_,i)=><div key={i} className="skeleton-card"><div className="skeleton-image"/><div className="skeleton-line"/><div className="skeleton-line short"/></div>)}</div> : error ? <div className="state-card" role="alert"><Icon name="box" size={34}/><h3>No pudimos cargar los productos</h3><p>{error}</p><button className="primary-button" onClick={onRetry}>Reintentar</button></div> : shown.length ? <><div className="card-grid">{shown.map(p=><ProductCard key={p.id} product={p} onSelect={onSelect}/>)}</div>{countPages>1&&<nav className="pagination" aria-label="Páginas del catálogo"><button disabled={page===1} onClick={()=>{setPage(p=>p-1);document.getElementById('catalogo')?.scrollIntoView()}}>Anterior</button><span>Página {page} de {countPages}</span><button disabled={page===countPages} onClick={()=>{setPage(p=>p+1);document.getElementById('catalogo')?.scrollIntoView()}}>Siguiente</button></nav>}</> : <div className="state-card"><Icon name="search" size={34}/><h3>No encontramos coincidencias</h3><p>Prueba otra palabra o modifica la categoría seleccionada.</p><button className="primary-button" onClick={()=>{setQuery('');setCategory('all');setPage(1)}}>Ver todos los productos</button></div>}
   </main>
 </>;
}
