import React from 'react';
import Icon from './Icons.jsx';
import {categoryName,formatPrice,formatRating} from '../utils/localization.js';
export default function ProductCard({product,onSelect}) {
 return <article className="product-card">
   <button className="product-visual" onClick={()=>onSelect(product.id)} aria-label={`Ver detalles de ${product.title}`}>
     {product.thumbnail ? <img loading="lazy" src={product.thumbnail} alt={product.title}/> : <span className="image-fallback"><Icon name="box" size={36}/></span>}
     {Number(product.discountPercentage)>0 && <span className="discount-badge">−{Math.round(product.discountPercentage)}%</span>}
   </button>
   <div className="product-info"><span className="eyebrow">{categoryName(product.category)}</span>
     <button className="product-title" onClick={()=>onSelect(product.id)}>{product.title}</button>
     <div className="rating-row"><Icon name="star" size={14} fill="#f2ad47" color="#f2ad47"/><span>{formatRating(product.rating)}</span><span className="separator">·</span><span>{product.stock>0?'En stock':'Agotado'}</span></div>
     <div className="card-footer"><span className="price">{formatPrice(product.price)}</span><button className="round-arrow" onClick={()=>onSelect(product.id)} aria-label={`Abrir ${product.title}`}><Icon name="arrow" size={19}/></button></div>
   </div>
 </article>
}
