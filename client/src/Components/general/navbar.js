import React ,{useState ,useEffect} from 'react';
import history from '../../utils/history';
import Login from "./login"
import Signup from './signup'

import {
    Box,
    IconButton,
    Typography,
    Menu,
    Avatar,
    Button,
    MenuItem,
    Stack,
    Grid,
    Modal
} from '@mui/material';


const  Navbar = () => {
  const [userData ,setUserData] = useState();
  const [loginorsignup , toggleloginorsignup] = useState(true);
  const [usermenu,setusermenu] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)

  }
  const handleClose = () => {
    setOpen(false)

  };
  const handleOpenUserMenu = (event) => {
      setusermenu(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
      setusermenu(null);
  };
  return (
    <Stack direction = "row"
    sx={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "#000021",
      }}
    >     
      <Grid>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 5,
              mt:2,
              fontWeight: 700,
              fontSize: 25,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            eSpace
          </Typography>
        </Grid>
          <Stack 
            direction = 'row'
            alingitems = 'center'
            justifyContent= 'flex-end'
            sx={{ flexGrow: 1, display:'flex',mt:2}} >
            
            
            <Button
              variant="text"
              sx={{
                mr: 2,
                fontWeight: 100,
                fontSize: 20,
                color: 'white',
              }}
              onClick={() => {
                history.push('/home')
                }}
            >
                Home
              </Button>
              <Button
                variant="text"
                sx={{
                  mr: 2,
                  fontWeight: 100,
                  fontSize: 20,
                  color: 'white',
                }}
                onClick={() => {
                  history.push('/games')
                  }}
            >
                Games
              </Button>
              <Button
              variant="text"
              sx={{
                mr: 2,
                fontWeight: 100,
                fontSize: 20,
                color: 'white',
              }}
              onClick={() => {
                history.push('/community')
                }}
            >
                Community
              </Button>
            
            {
            userData  

            ? 
            
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              mt:1,
              fontWeight: 700,
              fontSize: 20,
              // letterSpacing: '.3rem',
              color: '#DA0037',
              textDecoration: 'none',
            }}
          >
            {userData}
          </Typography>

            :

              <Button variant="outlined" color = "error" size="small"
              sx ={{
                mr: 2,
              }}
              onClick = {handleOpen}
            >Login</Button>
            }
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Grid sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                height: 600,
                bgcolor: 'background.paper',
                boxShadow: 24,
              }}>
                {loginorsignup ? <Login setUserData = {setUserData} 
                handleClose  = {handleClose} toggleloginorsignup = {toggleloginorsignup}/> 
                : <Signup  toggleloginorsignup = {toggleloginorsignup}/>}
                
              </Grid>
            </Modal>
          </Stack>
          
          <Box sx={{ flexGrow: 0 , mt:2,mr:2}}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={usermenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted  
              open={Boolean(usermenu)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick = {() => setUserData('')}>Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Stack>
  );
};
export default Navbar;
