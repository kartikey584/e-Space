import React, { useState } from 'react'
import history from "../../utils/history"
import { Stack, Button, Grid, TextField, Typography,Link ,Modal } from '@mui/material'
import axios from 'axios';
const Signup = ({toggleloginorsignup}) => {
  const [email, setemail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passworderror, setPasswordError] = useState(false)
  const [emailerror, setEmailError] = useState(false)
  const [usernameerror, setUsernameError] = useState(false)
  const [helperTextname , setHelperTextname] = useState('')
  const [helperTextemail , setHelperTextemail] = useState('')
  const [helperTextpass , setHelperTextpass] = useState('')
  const [helperTextcpass , setHelperTextcpass] = useState('')

  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  var result = regex.test(email)

  const handleClick = () => {
    (confirmPassword != password || confirmPassword == "" || password == "") ? setPasswordError(true) : setPasswordError(false);

    (email != "" && result) ? setEmailError(false) : setEmailError(true);
    (username == "") ? setUsernameError(true) : setUsernameError(false);
    if (!username) setHelperTextname("Cannot be empty");else setHelperTextname('')
    if (!email) setHelperTextemail("Cannot be empty");else setHelperTextemail('')
    if (!password) setHelperTextpass("Cannot be empty");else if(password != confirmPassword) setHelperTextpass('Password Dosen\'t match');else setHelperTextpass('')
    if (!confirmPassword) setHelperTextcpass("Cannot be empty");else if(password != confirmPassword) setHelperTextcpass('Password Dosen\'t match');else setHelperTextcpass('')

    const user = { username, email, password, confirmPassword }
    if (username && email && result && password && (password === confirmPassword)) {
      axios.post("http://localhost:3001/register", user)
        .then(res => {
          toggleloginorsignup(true)
          alert(res.data.message)
        })
    } 
    else {
      alert("invlid input")
    }
  }

  return (
    // <Stack sx={{ width: '100vw', height: '100vh', backgroundColor: "#000021" }}>
    // <Modal
    //   open={open}
    //   onClose={handleClose}
    // >
    //   <Grid sx={{
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 800,
    //     height: 600,
    //     bgcolor: 'background.paper',
    //     boxShadow: 24,
    //   }}>
      <Stack
        direction='row'
        sx={{ width: '100%', height: '100%' }}>
        <Grid
          alingitems='center'
          justifyContent='center'
          sx={{
            width: '45%',
            // border: '1px solid red',
            backgroundImage: `url('./images/loginCover.jpg')`
          }} />
        <Stack
          direction='column'
          alingitems='center'
          justifyContent='center'
          sx={{ width: '55%', backgroundColor: '#FFD8A9' }}>
          <Grid>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: '2rem',
                letterSpacing: '.1rem',
                color: '#D36B00',
                textDecoration: 'none',
                textAlign: 'center',
                fontFamily: 'Silkscreen,cursive',
                lineHeight: '1',
              }}
            >
              Connect to eSpace
            </Typography>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mb: 5,
                fontWeight: 700,
                fontSize: '1.2rem',
                letterSpacing: '.1rem',
                color: '#D36B00',
                textDecoration: 'none',
                textAlign: 'center',
                fontFamily: 'Silkscreen,cursive'
              }}
            >
              Escape The Ordinary
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              noWrap
              sx={{
                width: '100%',
                fontWeight: 700,
                fontSize: 25,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Register to Join!
              <br />
              <TextField
                error={emailerror}
                helperText = {helperTextemail}
                variant="standard"
                size="small"
                label="E-mail"
                color="primary"
                type="email"
                value={email}
                onChange={e => setemail(e.target.value)}
                sx={{
                  mt: 2,
                  mb: 2,
                  textAlign: 'center'
                }}
                id='email'
              />
              <br />
              <TextField
                error={usernameerror}
                helperText = {helperTextname}
                variant="standard"
                size="small"
                label="Username"
                color="primary"
                value={username}
                onChange={e => setUsername(e.target.value)}
                sx={{
                  mb: 2,
                  textAlign: 'center'
                }}

                id='username'
              />
              <br />
              <TextField
                error={passworderror}
                helperText = {helperTextpass}
                variant="standard"
                size="small"
                label="Password"
                color="primary"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                sx={{
                  mb: 2,
                  textAlign: 'center'
                }}
                id='password'
              />
              <br />
              <TextField
                error={passworderror}
                helperText = {helperTextcpass}
                variant="standard"
                size="small"
                label="Confirm Password"
                color="primary"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                sx={{
                  mb: 2,
                  textAlign: 'center'
                }}
                id='confirmPassword'
              />
              <br />

              <Button variant="contained" color='secondary'
                onClick={handleClick}
              >Register</Button>
            </Typography>
          </Grid>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mt: 5,
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '.1rem',
              color: '#D36B00',
              textDecoration: 'none',
              textAlign: 'center',

            }}
          >
            Already Registered?
            <Link
              component="button"
              variant="body2"
              underline='hover'
              onClick={() => { toggleloginorsignup(true) }}
              sx={{
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '.1rem',
                fontFamily: 'poppins'
              }}

            >
              login
            </Link>
          </Typography>
        </Stack>
      </Stack>
    //   </Grid>
    // </Modal>
    

  )
}

export default Signup