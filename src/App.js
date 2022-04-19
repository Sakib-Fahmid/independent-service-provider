import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Helmet from 'react-helmet';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Logout from './Components/Logout/Logout';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <>
      <Helmet>
        <title>Study in Deutschland</title>
      </Helmet>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
