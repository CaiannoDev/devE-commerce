import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/Footer/Footer';
import ShopContextProvider from './context/ShopContext';
import men_banner from './components/assets/banner_mens.png';
import kids_banner from './components/assets/banner_kids.png';
import women_banner from './components/assets/banner_women.png';





function App() {
  

  return (
    <ShopContextProvider>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>} />
                <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men" />} />
                <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>} />
                <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kid"/>} />
                <Route path='/product' element={<Product/>} >
                  <Route path=':productId' element={<Product/>} />
                </Route>
                <Route path='/cart' element={< Cart />} />
                <Route path='/login' element={<LoginSignup/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </ShopContextProvider>
        
  )
}

export default App
