import Carousel from "../Carousel/Carousel"
import Categories from "../categories/Categories"
import CartInfoPrincipal from "../CartInfoPrincipal/CartInfoPrincipal"
import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../service/firebase'
import ItemList from '../ItemList/ItemList'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './ItemListContainer.css'



const ItemListContainer= ()=>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] =useState(true) 
    const [renderProducts, setRenderProducts]=useState(false)
  
    const {categoryId} = useParams()
  
  useEffect(()=>{
    setLoading(true)
      
  
  const collectionRef = categoryId 
  ? query (collection(db, 'products'), where('category', '==', categoryId))
  : collection(db, 'products')
  
   getDocs(collectionRef ).then(response =>{
  const productsAdapted = response.docs.map(doc =>{
    const data= doc.data()
    return {id : doc.id, ...data}
  })
  
      setProducts(productsAdapted)
   }).finally(()=>{
  setLoading(false)
   })
  },[categoryId])
  


    return(
        <div className="container-principal">
<Carousel></Carousel>
<Categories></Categories> 
<ItemList  products={products} />
<CartInfoPrincipal></CartInfoPrincipal>  



      </div>
    )
}

export default ItemListContainer