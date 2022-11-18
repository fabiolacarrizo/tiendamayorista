import { useState} from 'react'
import './ItemCount.css'


const ItemCount= ({onAdd , stockbox})=>{
    const [quantity, setQuantity]= useState(1)
//despues crear un stock para cajas y un stock para bultos

//const stock =20

const incrementar= () =>{ 
  if( quantity < stockbox)  {setQuantity(quantity+1)} 
}

const disminuir= () =>{ 
 if (quantity > 1) {
     setQuantity(quantity-1)
} }  



    return(
        <div>


    <p className='cart-buttoncount'> 
            <button className='button1' onClick={disminuir}><span> - </span> </button>
                 <span>{quantity}</span>
            <button className='button1' onClick={incrementar}><span> + </span></button>
            
        <button className='button1' onClick={() => onAdd(quantity)}> <span>Agregar Al Carrito</span> </button> </p>

        </div>
    )
}

export default ItemCount