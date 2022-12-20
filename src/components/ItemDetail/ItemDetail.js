import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import whatsapp from '../../Assets/Img/whatsapp.png'

const ItemDetail = ({boxcont,id, name, code, category, price, stockbox, img, description, data,boxdescription}) =>{
  const [goCart, setGoCart] = useState(false);
  const { addItem } = useCartContext();




const OnAdd = (quantity) => {
  setGoCart(true);

        const productToAdd = {
            id,
            name,
            price,
            img,
            code,
            category,
            description,
            stockbox,
            boxcont,
            boxdescription
        }

        addItem(productToAdd, quantity)
 
    }

  const navigate = useNavigate()

const preciocaja= price * boxcont

 return(
    <div className="card-detalleItem"> 
    <div className="card-detalleImgVolver">
   <button style={{width:100}}  className="button1" onClick={() => (navigate(-1)) }><span> Volver</span></button>
      <img  src={img} alt=""></img>
    </div>

     <div className='cart-descriptionProduct'>
      <h3>{name}</h3>
      <h5>Codigo:DQ{code}</h5>
      <h5>Descripcion: </h5>
      <p>{description}</p>
      <h5>Contenido de la Caja: {boxcont}u</h5> 
      <p>{boxdescription} ${price} c/u   </p>
      <h6>Venta solo x Cajas</h6>
    <p>${preciocaja}</p>
       

      {
        goCart
        ? ( <p className='cart-botonesDetail'> <Link className='out-underline' to={'/'} ><button className='button1'> <span>Seguir Comprando</span></button> </Link>
        <Link className='out-underline' to={'/cart'} > <button className='button1'> <span>Finalizar Compra</span></button></Link> </p> )
         : <Counter onAdd={OnAdd} stockbox={stockbox}/>
      }

      <button className='boton-consulta'> <img  src={whatsapp}></img><p>Consultar precio x Bulto</p> </button>
  
      </div>
  </div>
 )
}

export default ItemDetail