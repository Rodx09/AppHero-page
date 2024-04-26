
import React from 'react';
import { Home } from './Components/Home';
import { CardDetails } from './Components/CardDetails';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Header } from './Components/Header';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
    <Helmet><title>Lista de heroes</title></Helmet>
    <Header></Header>
    <BrowserRouter>
    <Routes>
    <Route path='/AppHero-page/build'element={<Home/>}/>
    <Route path='/AppHero-page/build/:id' element={<CardDetails/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
