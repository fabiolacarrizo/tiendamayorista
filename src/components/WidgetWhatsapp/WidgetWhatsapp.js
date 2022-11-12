import './WidgetWhatsapp.css'
import whatsapp from '../../Assets/Img/whatsapp.png'
 
const WidgetWhatsapp =()=>{
    return(
        <div className='icon_whatsapp'>
       <a href='https://api.whatsapp.com/send?phone=5491126222492' target='_blank'>  <img src={whatsapp}></img>  </a>
        </div>
    )
}

export default WidgetWhatsapp