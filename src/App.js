import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import WidgetWhatsapp from './components/WidgetWhatsapp/WidgetWhatsapp';

function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
   <Routes>

  <Route path='/' element={ItemListContainer}></Route>
   </Routes>
  <Footer></Footer>
   <WidgetWhatsapp></WidgetWhatsapp>
   </BrowserRouter>

    </div>
  );
}

export default App;
