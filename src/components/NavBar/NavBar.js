import React, {useState} from "react";
import './NavBar.css'
import logo2 from '../../Assets/Img/logo2.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
      
        <div className="navbar">
  
            <div className={`nav_items ${isOpen && "open"}`}>
            <ul class="nav nav-pills">
  <li className="nav-item dropdown">
  <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <Link  className='boton_navbar'>Categorias </Link> </div> 
    <ul className="dropdown-menu">
        <div className='card-menuDespleglable'>
    <ul>
      <li><Link className='button-categories'  to={'/category/mujer'}><span>Mujer</span> </Link></li>
      <li><Link className='button-categories' to={'/category/hombre'}><span>Hombre</span></Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}><span>Niños</span></Link></li> 
      <li> <Link className='button-categories' to={'/category/digitales'}> <span>Digitales</span></Link></li>
      <li> <Link className='button-categories' to={'/category/ofertas'}> <span>Ofertas</span></Link></li>
      <li> <Link className='button-categories' to={'/category/varios'}> <span>Varios</span></Link></li>
      </ul> 
       </div> 
      </ul> 
  </li>
</ul>
                <Link className="boton_navbar" to={'/'}>Informacion</Link>
                <Link className="boton_navbar" to={'/sobrenosotros'}> Sobre Nosotros</Link>
                <Link className="boton_navbar" to={'/contacto'}> Contacto</Link>
            </div>      
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
              <div className="nav_logo"><Link to={'/'}><img src={logo2}></img></Link> </div>
            <CartWidget></CartWidget>
        </div>
    )
}
export default NavBar