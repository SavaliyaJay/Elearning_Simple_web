import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Course from './Pages/Course';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from './components/Footer';
import Products from './components/Products';


function App() {

  return (

    <>
      {/* <Home /> */}
      <header>

        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Course" element={<Course />}></Route>
            <Route exact path="/AboutUs" element={<AboutUs />}></Route>
            <Route exact path="/ContactUs" element={<ContactUs />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Registration" element={<Registration />}></Route>
          </Routes>
          {/* <ProductPage/> */}
          <Products />
          <Footer />
        </Router>
      </header>

      {/* <footer>

        <Footer />
      </footer> */}


    </>
  );
}

export default App;
