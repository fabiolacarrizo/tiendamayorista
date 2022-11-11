import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import bootstrap from 'bootstrap'
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

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
   </BrowserRouter>

    </div>
  );
}

export default App;
