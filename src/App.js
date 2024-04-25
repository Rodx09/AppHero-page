
import React from 'react';
import { Home } from './Components/Home';
import { CardDetails } from './Components/CardDetails';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { Header } from './Components/Header';

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/:id' element={<CardDetails/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
