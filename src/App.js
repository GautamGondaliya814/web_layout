
import './App.css';
import './media.css'
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home from './componet/Home';
import Header from './componet/Header';
import Footer from './componet/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './componet/About';
import Ourteachar from './componet/Ourteachar';
import Becometeachar from './componet/Becometeachar';
import Teacher from './componet/Teacher';
import Teacherdateail from './componet/Teacherdetail';
import Gallery from './componet/Gallery';
import Gallerycarousel from './componet/Gallerycarousel';
import Faq from './componet/Faq';
import Login from './componet/Login';
import Error from './componet/Error';
import Coursepage from './componet/Coursepage';
import Blogpage from './componet/Blogpage';
import Contect from './componet/Contect';
import Product from './componet/Product';
import Productcarousel from './componet/Productcarousel';
import Productdetail from './componet/Productdetail';
import Cart from './componet/Cart';
import Checkout from './componet/Checkout';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={ <Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/ourteachar' element={<Ourteachar />}></Route>
          <Route path='/teacher' element={<Teacher />}></Route>
          <Route path='/becometeachar' element={<Becometeachar />}></Route>
          <Route path='/teacherdetail' element={<Teacherdateail />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/gallerycarousel' element={<Gallerycarousel />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/error' element={<Error />}></Route>
          <Route path='/coursepage' element={<Coursepage />}></Route>
          <Route path='/blogpage' element={<Blogpage />}></Route>
          <Route path='/contect' element={<Contect />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/productcarousel' element={<Productcarousel />}></Route>
          <Route path='/productdetail' element={<Productdetail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
