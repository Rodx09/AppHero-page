
import React from 'react';
import { Home } from './Components/Home';
import { CardDetails } from './Components/CardDetails';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
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
