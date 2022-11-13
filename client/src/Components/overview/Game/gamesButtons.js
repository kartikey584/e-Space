import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import axios from "axios";


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
}));

const ImageBackdrop = styled('span')(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'black',
  opacity: 0.3,
}));

const ImageMarked = styled('span')(() => ({
  height: 3,
  width: 18,
  backgroundColor: 'white',
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
}));
const Gamesbutton = ({games}) => {
  
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',height:'67%',ml:2,overflow: 'auto', }}>
      {games.map((game) => (
        <ImageButton
          focusRipple
          key={game.title}
          style={{
            width: game.width,
            margin: 5
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${game.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
              onClick={() => {
                if (window.username){
                const username = window.username
                const gameName = game.title
                const userGames = {username,gameName}
                console.log(userGames)
                axios.post("http://localhost:3001/games", userGames)
                  .then(res => {
                      console.log(res.data.userGames)         
                  })
                game.Joined = true
              }
              else{
                alert("Login to add games")
              }
            }}
            > 
              JOIN
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  )
}

export default Gamesbutton