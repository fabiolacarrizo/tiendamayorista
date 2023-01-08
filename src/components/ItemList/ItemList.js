import Item from '../Item/Item'
import './ItemList.css' 
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemList= ({products})=>{



return(
    <div>
    <div className='card_itemList'>
     {products.map(prod => <Item key={prod.id} {...prod}/>)} 
    </div>
     <div aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a id='botonAnterior' class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a id='botonSiguiente' class="page-link" href="#">Next</a>
    </li>
  </ul>
</div>
    </div>
)
}

export default ItemList
