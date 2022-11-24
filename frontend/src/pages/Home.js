import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { HomeContext, HomeContextProvider } from '../contexts/HomeContext'
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { DataContext } from '../contexts/DataContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = (props) => {

  const dataContext = useContext(DataContext)
  const themeContext = useContext(ThemeContext)

  const {clubs} = dataContext
  const {palette} = themeContext

  const navigate = useNavigate()

  return (
    <Stack height={'100%'} alignItems={'center'} justifyContent={'center'} padding={'50px'} gap={'50px'}>

      <Typography fontWeight={700} fontSize={48}>
        Soccer Clubs America
      </Typography>
      <Stack direction={'row'} gap={'20px'} alignItems={'center'} width={'90%'} padding={'1vmax'}>
        <TextField
          select
          label={'Find a club'}
          variant='filled'
          style={{flexGrow: 1}}
          onClick={(e) => navigate(`/club/${e.target.value}`)}
        >
          { clubs?.length && clubs.map((club) => {
            return (
              <MenuItem value={club.id}>
                {club.name}
              </MenuItem>
            )
          })}
        </TextField>
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