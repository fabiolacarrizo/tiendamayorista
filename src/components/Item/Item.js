import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, code, price , img, category,visible,}) =>{
  



    return(
        <div className='card_productos'>
            <img className='card_productosImg' src={img} alt={name}></img>
            <h5>{name}</h5>
            <h6>Codigo: DQ{code}</h6>
            <p>${price}</p>     
            <Link className='boton-detalle'  to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item