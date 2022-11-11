import Carousel from "../Carousel/Carousel"
import bootstrap from 'bootstrap'
import Categories from "../categories/Categories"

const ItemListContainer= ()=>{
    return(
        <div className="container-principal">
<Carousel></Carousel>

<Categories></Categories>

        </div>
    )
}


export default ItemListContainer