import './Categories.css' 
import relojmujerjpg from '../../Assets/Img/relojmujerjpg.jpg'
import relojhombre from '../../Assets/Img/relojhombre.jpg'
import relojinfantil from '../../Assets/Img/relojinfantil.jpg'
import digitales2 from '../../Assets/Img/digitales2.jpg'
import fondoportada3 from '../../Assets/Img/fondoportada3.jpg'
import varios from '../../Assets/Img/varios.png'
import { Link } from 'react-router-dom'

const Categories= ()=>{


    return(
        <div className='categories-container'>
<Link to={'/category/mujer'}>
<div className='cart-imgcategories'> 
<img src={relojmujerjpg}></img> 
<div className='categories-text'> <p className="btn draw-border">Mujer</p> </div> </div>
</Link>

<Link to={'/category/hombre'}>
<div className='cart-imgcategories'> 
<img src={relojhombre}></img> 
<div className='categories-text'> <p className="btn draw-border">Hombre</p> </div> </div>
</Link>

<Link to={'/category/infantil'}>
<div className='cart-imgcategories'> 
<img src={relojinfantil}></img> 
<div className='categories-text'> <p className="btn draw-border">Niños</p> </div> </div>
</Link>

<Link to={'/category/digitales'}>
<div className='cart-imgcategories'>
     <img src={digitales2}></img>
     <div className='categories-text'> <p className="btn draw-border">Digitales</p> </div> </div>
</Link>

<Link to={'/category/ofertas'}>
<div className='cart-imgcategories'> 
<img src={fondoportada3}></img> 
<div className='categories-text'> <p className="btn draw-border">Ofertas</p> </div> </div>
</Link>

<Link to={'/category/varios'}>
<div className='cart-imgcategories'> 
<img src={varios}></img> 
<div className='categories-text'> <p className="btn draw-border">Varios</p> </div> </div>
</Link>


        </div>
    )
}

export default Categories