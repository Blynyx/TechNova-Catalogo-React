import React, {useEffect,useState} from 'react';
import Header from './components/Header.jsx';
import Catalog from './components/Catalog.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import {getProducts} from './services/productsApi.js';
import Icon from './components/Icons.jsx';
function readRoute(){const match=window.location.hash.match(/^#\/producto\/(\d+)$/);return match?match[1]:null}
export default function App(){
 const [productId,setProductId]=useState(readRoute);
 const [products,setProducts]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState(''),[retry,setRetry]=useState(0);
 useEffect(()=>{const onHash=()=>{setProductId(readRoute());window.scrollTo(0,0)};window.addEventListener('hashchange',onHash);return()=>window.removeEventListener('hashchange',onHash)},[]);
 useEffect(()=>{const controller=new AbortController();setLoading(true);setError('');getProducts(controller.signal).then(setProducts).catch(err=>{if(err.name!=='AbortError')setError(err.message||'Comprueba tu conexión a internet.')}).finally(()=>{if(!controller.signal.aborted)setLoading(false)});return ()=>controller.abort()},[retry]);
 const goDetail=id=>{window.location.hash=`/producto/${id}`};
 const goHome=()=>{window.location.hash='/';setProductId(null);window.scrollTo(0,0)};
 return <div className="site"><Header navigateHome={goHome}/>{productId?<ProductDetail id={productId} onBack={goHome}/>:<Catalog products={products} loading={loading} error={error} onRetry={()=>setRetry(v=>v+1)} onSelect={goDetail}/>}
 <footer className="footer"><div className="container footer-inner"><span className="footer-brand">tech<strong>nova</strong><span className="accent-dot">.</span></span><span>Proyecto académico · Ingeniería Web · React + DummyJSON</span><span className="footer-end"><Icon name="sparkle" size={15}/> Diseñado para explorar</span></div></footer></div>;
}
