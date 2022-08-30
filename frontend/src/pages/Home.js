import React from 'react'
import Map from '../components/home components/Map'
import { HomeContextProvider } from '../contexts/HomeContext'

const Home = (props) => {

  return (
    <span className='home-root'>
      <Map />
    </span>
  )
}

const HomePage = () => {
  return (
    <HomeContextProvider>
      <Home />
    </HomeContextProvider>
  )
}

export default HomePage