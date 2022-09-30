import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Page404 from './components/Page404';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='category-name/:catName' element={<Home />} />
          </Route>

          <Route path='/cart' element={<Cart />} />

          <Route path='/product-details/:id' element={<ProductDetails />} />

          <Route path='*' element={<Page404 />} />
        </Routes>       

        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
