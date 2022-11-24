import React from 'react'
import { ClubContextProvider } from '../contexts/ClubContext'
import { Button, Stack, TextField, Typography } from '@mui/material'

const Club = (props) => {

  return (
    <Stack alignItems={'center'} justifyContent={'center'}>
    </Stack>
  )
}

const ClubPage = () => {
  return (
    <ClubContextProvider>
      <Club />
    </ClubContextProvider>
  )
}

export default ClubPage