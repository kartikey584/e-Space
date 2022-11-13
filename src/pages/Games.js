import React ,{useState} from 'react'
import { Stack , Typography} from '@mui/material'
import TextField from '@mui/material/TextField';
import {styled} from '@mui/material/styles';
import Gamesbutton from '../Components/overview/Game/gamesButtons'
import {Gamesdata} from "../Components/general/gameData"
const CustomTextField = styled(TextField)({
  'label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#DA0037',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#DA0037',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    }
  },
});

const Games = () => {
  const [search,setSearch] = useState("");
  const gameData = Gamesdata.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <Stack 
      direction = 'column'
      alingitems = 'center'
      justifycontent = 'center' 
      sx ={{
        width: '100%',
        height: '100%',
      }}
      overflow = 'hidden'
      >
        <Stack 
        direction = 'row'
        alingitems = 'center'
        justifycontent = 'space-evenly'

          sx = {{
            height: '10%',
            m:5,
            fontColor:'white',
            
          }}
        >
          <CustomTextField 
            label="Search " 
            variant = 'outlined' 
            sx = {{width: "50%", }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            />
        </Stack>
        <Stack
          direction = 'column'
          alingitems = 'center'
          justifycontent = 'space-evenly'
          sx ={{
            height: '90%'
          }}
        >
          <Typography 
            variant="h6"
            noWrap
            sx={{
              ml: 5,
              mt:0,
              fontWeight: 500,
              fontSize: 30,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Featured
          </Typography>
          
            <Gamesbutton games = {gameData} />
        </Stack>
      </Stack>
  )
}

export default Games