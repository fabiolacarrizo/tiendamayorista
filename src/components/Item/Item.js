import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, code, price , img, category,}) =>{

    return(
        <div className='card_productos'>
            <img className='card_productosImg' src={img} alt={name}></img>
            <h3>{name}</h3>
            <h5>Codigo: DQ{code}</h5>
            <p>${price}</p>     
            <Link className='boton-detalle'  to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item