import { ThemeProvider } from '@mui/system';
import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import ClubPage from './pages/Club';
import HomePage from './pages/Home';
import MapPage from './pages/Map';

const Main = (props) => {

  const themeContext = useContext(ThemeContext)

  const { theme, palette } = themeContext

  return (
    <ThemeProvider theme={theme}>
      <div className='app-root' style={{backgroundColor: palette.background.main}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/clubs/:id' element={<ClubPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default Main