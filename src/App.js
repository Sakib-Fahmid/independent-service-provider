import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Helmet from 'react-helmet';
import Login from './Components/Login/Login';

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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
