import './CartInfoPrincipal.css'
import infoenvio from '../../Assets/Img/infoenvio.png'
import infomayorista from '../../Assets/Img/infomayorista.png'
import infopago from '../../Assets/Img/infopago.png'

const CartInfoPrincipal=()=>{
return(
    <div className='container-infoPrincipal'>
 
 <div className='cart-infoPrincipal'>
<h4>Envios a todo el pais</h4>
<img className='info-icono' src={infoenvio}></img>
 </div>

 <div className='cart-infoPrincipal'>
<h4>Efectivo y Trasferencias</h4>
<img className='info-icono' src={infopago}></img>
 </div>

 <div className='cart-infoPrincipal'>
<h4>Mayoristas | Minimo de Compra una caja</h4>
<img className='info-icono' src={infomayorista}></img>
 </div>

    </div>
)

}

export default CartInfoPrincipal