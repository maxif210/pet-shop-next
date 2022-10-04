import React from 'react'
import { Icons } from './Icons'
import ShoppingCart from './ShoppingCart'

export const Header = () => {
  return (
    <header className="header">
    <img alt="logo" width="90px" height="6%" src="image/logoVete.webp"/>
    <nav className="navbar">
      <a href="#home">Inicio</a>
      <a href="#about">Sobre nosotros</a>
      <a href="#shop">Tienda</a>
      <a href="#services">Consejos</a>
      <a href="#contact">Contacto</a>
    </nav>
    <Icons />

    <ShoppingCart />
    
  </header>
  )
}
