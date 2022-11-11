import './CartWidget.css'
import iconocarrito from '../../Assets/Img/iconocarrito.png'
import { Link } from 'react-router-dom'
import React from "react";

const CartWidget = () =>{

 return (

   <Link to={'/Cart'}>
    <div className='cartWidget'>
  <img  src={iconocarrito} alt=""></img>
  <div >
     <p className='contador' > <span>0</span></p>

  </div>
 </div> 
 </Link>
 )
}


export default CartWidget