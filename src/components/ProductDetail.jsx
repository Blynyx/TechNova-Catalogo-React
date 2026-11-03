import React, {useEffect,useState} from 'react';
import Icon from './Icons.jsx';
import {availabilityText,categoryName,categorySummary,formatPrice,formatRating} from '../utils/localization.js';
import {getProduct} from '../services/productsApi.js';
export default function ProductDetail({id,onBack}) {
 const [product,setProduct]=useState(null),[loading,setLoading]=useState(true),[error,setError]=useState(''),[active,setActive]=useState(0),[showOriginal,setShowOriginal]=useState(false),[retry,setRetry]=useState(0);
 useEffect(()=>{const controller=new AbortController();setLoading(true);setError('');setProduct(null);setActive(0);setShowOriginal(false);
 getProduct(id,controller.signal).then(setProduct).catch(err=>{if(err.name!=='AbortError')setError(err.message||'No se pudo obtener el detalle.')}).finally(()=>{if(!controller.signal.aborted)setLoading(false)});
 return ()=>controller.abort();},[id,retry]);
 if(loading)return <main className="container detail-shell"><button className="back-link" onClick={onBack}><Icon name="back" size={18}/> Volver al catálogo</button><div className="state-card">Cargando información del producto...</div></main>;
 if(error||!product)return <main className="container detail-shell"><button className="back-link" onClick={onBack}><Icon name="back" size={18}/> Volver al catálogo</button><div className="state-card" role="alert"><h2>No se pudo abrir el producto</h2><p>{error||'Producto no encontrado'}</p><button onClick={()=>setRetry(v=>v+1)} className="primary-button">Reintentar</button></div></main>;
 const images=(product.images?.length?product.images:[product.thumbnail]).filter(Boolean);
 return <main className="container detail-shell"><button className="back-link" onClick={onBack}><Icon name="back" size={18}/> Volver al catálogo</button>
   <nav className="breadcrumbs" aria-label="Ruta de navegación">Inicio <span>/</span> {categoryName(product.category)} <span>/</span> <strong>{product.title}</strong></nav>
   <div className="detail-grid"><div className="detail-gallery"><div className="detail-main-image">{images[active]&&<img src={images[active]} alt={`${product.title}, imagen ${active+1}`}/>}</div>{images.length>1&&<div className="thumbs">{images.slice(0,5).map((src,i)=><button className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={`Ver imagen ${i+1}`} key={`${src}-${i}`}><img src={src} alt=""/></button>)}</div>}</div>
   <section className="detail-content"><span className="detail-category">{categoryName(product.category)}</span><h1>{product.title}</h1><div className="detail-rating"><Icon name="star" fill="#f2ad47" color="#f2ad47" size={19}/> <b>{formatRating(product.rating)}</b><span>Valoración del catálogo de demostración</span></div><div className="detail-price">{formatPrice(product.price)}</div>{product.discountPercentage>0&&<span className="detail-discount">Descuento indicado por API: {product.discountPercentage}%</span>}
     <div className="detail-description"><h3>Sobre este producto</h3><p>{categorySummary(product.category)}</p>{product.description&&<><button className="text-toggle" onClick={()=>setShowOriginal(v=>!v)} aria-expanded={showOriginal}>{showOriginal?'Ocultar':'Ver'} descripción original (inglés)</button>{showOriginal&&<p className="original-text" lang="en">{product.description}</p>}</>}</div>
     <div className="specs"><div><span>Marca</span><b>{product.brand||'No especificada'}</b></div><div><span>Disponibilidad</span><b className="stock-status"><Icon name="check" size={16}/> {availabilityText(product.stock)}</b></div><div><span>Unidades en inventario</span><b>{product.stock??'No especificado'}</b></div><div><span>Código SKU</span><b>{product.sku||'No especificado'}</b></div></div>
     <div className="demo-note"><Icon name="box" size={18}/><span>Catálogo demostrativo: no procesa compras ni utiliza inventario de una tienda real.</span></div>
   </section></div>
 </main>;
}
