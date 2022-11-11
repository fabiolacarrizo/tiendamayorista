import './NavBar.css'
import logo2 from '../../Assets/Img/logo2.png'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
    return (
        <nav> 
<div className='card_logo'> <Link to={'/'}> <img className='logo' src={logo2} ></img></Link> </div>

<div className='card-botonesNav'>
<ul class="nav nav-pills">
  <li class="nav-item dropdown">
  <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> <Link to={'/'} className='boton_navbar'> Categorias </Link> </div> 
    <ul class="dropdown-menu">
        <div className='card-menuDespleglable'>
    <ul>
      <li><Link className='button-categories'  to={'/category/Mujer'}><span>Mujer</span> </Link></li>
      <li><Link className='button-categories' to={'/category/Hombre'}><span>Hombre</span></Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}><span>Niños</span></Link></li> 
     </ul>
        <ul>
      <li> <Link className='button-categories' to={'/category/infantil'}> <span>Digitales</span></Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}> <span>Ofertas</span></Link></li>
      <li> <Link className='button-categories' to={'/category/infantil'}> <span>Varios</span></Link></li>
      </ul>  </div> </ul> 
  </li>
</ul>
    <Link className='boton_navbar'>Informacion </Link>
    <Link className='boton_navbar'>Sobre Nosotros </Link>
    <Link className='boton_navbar'>Contacto</Link>
    
     <span className='card-cartWidget'><CartWidget></CartWidget></span>
</div>

        </nav>
    )
}

export default Navbar