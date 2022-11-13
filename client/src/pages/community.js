import { Grid, Stack ,Typography } from '@mui/material'
import React from 'react'
import List from "../Components/overview/community/list"
import {Gamesdata} from "../Components/general/gameData"
import ContactUs from '../Components/overview/community/contactUs'
import axios from 'axios'
const community = (game) => {
  const communityList  = (game) => {
    if (game.Joined){
      return(<List key = {game.title} games = {game}/>)
    }
  }
  return (
    <Stack 
      direction = 'column'
      alingitems = 'center'
      justifycontent = 'center' 
      sx ={{
        mt : 5,
        width: '100%',
        height: '100%',
        backgroundColor: "#000021",
        overflow : 'auto'
        // border : '1px solid white'
      }}
      >
    <Stack 
      direction = 'column'
      alingitems = 'center'
      justifycontent = 'center' 
      sx ={{
        mt : 5,
        width: '100%',
        height: '55%',
        overflow: 'auto',
        // border : '1px solid white'
      }}
    >
    {Gamesdata.map((game, index) =>(
        communityList(game)
     ))}
    </Stack>
    <Stack 
      direction = 'column'
      alingitems = 'center'
      justifycontent = 'center' 
      sx ={{
        mt : 3,
        width: '100%',
        height: '45%',
        // border : '1px solid white'
      }}
    >
      <Typography
        variant="h6"
        noWrap
        sx={{
            width: '100%',
            fontWeight: 700,
            fontSize: '1.8rem',
            letterSpacing: '.1rem',
            color: 'white',
            textDecoration: 'none',
            textAlign: 'center'
        }}
      >     
      Contact us</Typography>
      <ContactUs />
    </Stack>
    </Stack>

  )
}

export default community