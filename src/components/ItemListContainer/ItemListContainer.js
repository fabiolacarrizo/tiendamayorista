import Carousel from "../Carousel/Carousel"
import Categories from "../categories/Categories"
import CartInfoPrincipal from "../CartInfoPrincipal/CartInfoPrincipal"


const ItemListContainer= ()=>{
    return(
        <div className="container-principal">
<Carousel></Carousel>
<Categories></Categories>
<CartInfoPrincipal></CartInfoPrincipal>


        </div>
    )
}


export default ItemListContainer