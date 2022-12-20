import './NavBar.css'
import logo2 from '../../Assets/Img/logo2.png'
import search from '../../Assets/Img/search.png'
import menu from '../../Assets/Img/menu.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (

    <header>
        <nav> 
<div className='card_logo'> <Link to={'/'}> <img className='logo' src={logo2} ></img></Link> </div>
  
   <div className='menuhamburguesaimg'><img src={menu}></img></div> 

<div className='card-botonesNav'>



<ul class="nav nav-pills">
  <li class="nav-item dropdown">
  <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <Link  className='boton_navbar'> Categorias </Link> </div> 
    <ul class="dropdown-menu">
        <div className='card-menuDespleglable'>
    <ul>
      <li><Link className='button-categories'  to={'/category/mujer'}><span>Mujer</span> </Link></li>
      <li><Link className='button-categories' to={'/category/hombre'}><span>Hombre</span></Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}><span>Niños</span></Link></li> 
     </ul>
        <ul>
      <li> <Link className='button-categories' to={'/category/digitales'}> <span>Digitales</span></Link></li>
      <li> <Link className='button-categories' to={'/category/ofertas'}> <span>Ofertas</span></Link></li>
      <li> <Link className='button-categories' to={'/category/varios'}> <span>Varios</span></Link></li>
      </ul>  </div> </ul> 
  </li>
</ul>
    <Link className='boton_navbar'>Informacion </Link>
    <Link className='boton_navbar' to={'/sobrenosotros'}>Sobre Nosotros</Link>
    <Link className='boton_navbar' to={'/contacto'}>Contacto</Link>

       
<span className='barra-buscar'>  <img className='icono-buscar' src={search}></img> <input  placeholder='Buscar' ></input> </span>
    
</div> 

   <span className='card-cartWidget'>
        <CartWidget></CartWidget>  </span> 
        </nav>
        </header>  
    )
}

export default Navbar