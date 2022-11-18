import React from 'react';
import { CartContext, useCartContext } from '../../context/CartContext';
import { useContext } from 'react';
import './ItemCart.css';
import deleteicon from '../../../src/Assets/Img/deleteicon.png'


const ItemCart = ({ img, name , price, quantity, id, code, boxcont}) => {

    const { removeProduct } = useContext(CartContext);

    return (
        
        <div className='cart_detail'>
        <img className='cart_detailImg'  src={img} alt={name} />
            <div className='cart_detailDatos'>
                <p>Título: {name}</p>
                <p>Codigo: DQ{code}</p>
                <p>Cajas: {quantity}</p>
                <p>Cantidad: {boxcont * quantity}</p>   
                <p>Precio:$ {price}c/u</p>
                <p>Subtotal: ${quantity * boxcont * price}</p>
                <button className='button-delete' onClick={() => removeProduct(id)}> <img style={{width:60 , height:60}} src={deleteicon}></img></button>
            </div>
        </div>
    )
}

export default ItemCart