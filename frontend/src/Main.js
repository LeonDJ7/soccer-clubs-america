import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import MapPage from './pages/Map';

const Main = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/map' element={<MapPage />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default Main