import React ,{useState} from 'react'
import {Stack ,Grid, Typography, Button,Modal} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import history from '../../../utils/history'
import Chat from './Chat'
import  io from 'socket.io-client';

const socket=io.connect("http://localhost:3001");

const List = ({games}) => {
    const [open, setOpen] = useState(false);
    const room = games.title
    const handleChat = () => {
        setOpen(true)
        socket.emit("join_room", room);
    }
    const handleClose = () => {
        setOpen(false)
    
    };
  return (
    <Stack 
        sx ={{
            mb : 2,
            width : '100%',
            borderBottom : '2px solid #FF5722',
            borderRadius : 30
        }}
    >
        <Stack 
            direction = "row"
            alignItems= 'center'
            justifyContent= 'space-evenly'
            sx ={{
                m : 1,
            }}
        >
            <Grid
                sx ={{
                    width : "7%",
                    height : "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            <img src = {games.url} width = "100%" height = "100%" ></img>
            </Grid>
            <Grid
            alignItems = 'center'
            justifyContent = 'center' 
            sx = {{
                ml : 1,
                width : '50%',
                height : '100%',
                textAlign : 'center'
                // border : '1px solid blue'
            }}>
                <Typography
                    noWrap
                    sx={{
                    fontSize: 20,
                    color: 'white',
                    wordWrap : 'break-word',
                }}
                >{games.description}</Typography>
            </Grid>
            <Grid
                alignItems= 'center'
                justifyContent = 'center' 
                sx = {{
                    ml : 1,
                    width : '20%',
                    height : '100%',
                    // border : '1px solid blue',
                    textAlign : 'center',
            }}> 
                <Typography
                        noWrap
                        sx={{
                        fontSize: 20,
                        color: 'white',
                    }}
                >   
                    <PersonIcon /> {games.memberCount}</Typography>
            </Grid>
            <Button 
                variant="contained"
                color = "error" 
                sx ={{
                    fontSize: 15,
                    color: 'white', 
                }}
                onClick = {handleChat} 
                >
                Chat
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Grid sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 1000,
                height: 800,
                bgcolor: 'background.paper',
                boxShadow: 24,
              }}>
                <Chat socket = {socket} room = {games.title}/>                
              </Grid>
            </Modal>
            <Button 
                variant="contained"
                color = "error" 
                sx ={{
                    fontSize: 15,
                    color: 'white', 
                }}
                onClick={() => {
                    games.Joined = false;
                    history.push('./community')
                }} 
                >
                Leave
            </Button>
        </Stack>
            
    </Stack>
  )
}

export default List