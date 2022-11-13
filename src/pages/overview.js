import React from 'react'
import Home from './home'
import Games from './Games'
import Community from './community'
import Signup from '../Components/general/signup'
import Login from '../Components/general/login'
import Navbar from "../Components/general/navbar"

import {Stack,Grid} from '@mui/material';
const overview = () => {
    const renderer = (() => {
        const path = window.location.pathname;
        if('/home' == path ){
            return <Home />
        }
        if('/games' == path){
            return <Games />
        }
        if('/community' == path){
            return <Community />
        }
        // if ('/signup' == path){
        //     return <Signup />
        // }
        // if ('/login' == path){
        //     return <Login />
        // }
    })
  return (
    <Stack direction = "column" 
    sx ={{
        width: "100vw",
        height: "100vh",
    }}
    >
        <Grid
            sx = {{
                height:'8%',
                
                // border: '1px solid white'

            }}
        >
            <Navbar />
        </Grid>
        <Grid
        sx = {{
            height:'92%',
            backgroundColor: "#000021",
            // border: '1px solid red'
        }}
        >
            <>
                {renderer()}     
            </> 
        </Grid>
    </Stack>
  )
}

export default overview