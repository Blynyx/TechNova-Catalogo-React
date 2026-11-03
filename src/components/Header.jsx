import React from 'react';
import Icon from './Icons.jsx';
export default function Header({navigateHome}) {
 return <header className="header"><div className="container header-inner">
   <a href="#/" onClick={navigateHome} className="brand" aria-label="TechNova, inicio"><span className="brand-mark"><Icon name="sparkle" size={22}/></span><span>tech<span className="brand-strong">nova</span><span className="brand-dot">.</span></span></a>
   <nav className="topnav" aria-label="Navegación principal"><a href="#/" onClick={navigateHome} className="nav-active">Explorar productos</a><span className="nav-caption">Proyecto académico · React + API</span></nav>
   <span className="demo-pill"><span className="live-dot"/> API en vivo</span>
 </div></header>;
}
