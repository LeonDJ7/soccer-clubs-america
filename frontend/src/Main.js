import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';

const Main = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default Main