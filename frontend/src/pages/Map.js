import React from 'react'
import { MapContextProvider } from '../contexts/MapContext'
import { Button, Stack, TextField, Typography } from '@mui/material'
import CustomMap from '../components/shared/CustomMap';

const Map = (props) => {

  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <CustomMap />
    </Stack>
  )
}

const MapPage = () => {
  return (
    <MapContextProvider>
      <Map />
    </MapContextProvider>
  )
}

export default MapPage