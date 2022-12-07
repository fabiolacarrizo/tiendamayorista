import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import WidgetWhatsapp from './components/WidgetWhatsapp/WidgetWhatsapp';
import SobreNosotros from '../src/components/SobreNosotros/SobreNosotros'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';
import Checkout from '../src/components/Checkout/Checkout'
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <CartProvider>
   <NavBar></NavBar>
   <Routes>
   <Route path='/' element={<ItemListContainer/>}/>  
  <Route path='/sobrenosotros' element={<SobreNosotros/>}></Route>
  <Route path='*' element={<h1>404 NOT FOUND</h1>} />
  <Route path='/category/:categoryId' element={<ItemListContainer/>}>  </Route>
  <Route path= '/detail/:productId' element={<ItemDetailContainer/>}/> 
  <Route path='/cart' element={<Cart/>} > </Route>
  <Route path='/checkout' element={<Checkout/>}></Route>
  <Route path='/contacto' element={<Contacto/>}></Route>
   </Routes>
  <Footer></Footer>
   <WidgetWhatsapp></WidgetWhatsapp>
   </CartProvider>
   </BrowserRouter>

    </div>
  );
}

export default App;
