import React from 'react'
import { useNavigate } from "react-router-dom";
import { HomeContextProvider } from '../contexts/HomeContext'
import { Button, Stack, TextField, Typography } from '@mui/material'

const Home = (props) => {

  const navigate = useNavigate()

  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
      <Stack>
        <TextField
          label={'Find a club'}
          variant='filled'
        />
        <Typography>or</Typography>
        <Button
          variant='contained'
          onClick={() => {
            navigate('/map')
          }}
        >
          go to map
        </Button>
      </Stack>
      
    </Stack>
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