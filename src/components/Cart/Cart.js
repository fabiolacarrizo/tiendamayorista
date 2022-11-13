import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart.js";
import './Cart.css'
import cartcomprarmas from '../../Assets/Img/cartcomprarmas.png'

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
		 <div className="cart-Container">
				<h4>No hay elementos en el carrito</h4>
				<Link className="botonSeguirComprando" to="/"> <img src={cartcomprarmas}></img>Hacer compras</Link>
		</div>
		);
	}

	return (
		<div className="cart-Container">
			<div className="card_todoslosproductos">
			{
            cart.map((product) => <ItemCart key={product.id} {...product} />)
            }
           </div>
			<p className="totalCard">Total: ${totalPrice()}</p>
	     
	<p className="buttons-itemcart" >	<Link className='out-underline' to='/'> <button><span> Seguir Comprando</span></button></Link> 
	 <Link className='out-underline' to='/checkout'> <button><span> checkout </span></button></Link> </p>	 
			
		</div>
	);
};

export default Cart;