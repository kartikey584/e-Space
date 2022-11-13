import React, { useState } from 'react'
import history from "../../utils/history"
import axios from "axios"
import { Link, Stack, Button, Grid, TextField, Typography, Modal } from '@mui/material'
const Login = ({handleClose,setUserData,toggleloginorsignup}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passworderror, setPasswordError] = useState(false)
    const [usernameerror, setUsernameError] = useState(false)
    const [open, setOpen] = useState(true);
    
    const handleclick = () => {
        (password == "") ? setPasswordError(true) : setPasswordError(false);
        (username == "") ? setUsernameError(true) : setUsernameError(false);
        const user = { username, password }
        axios.post("http://localhost:3001/login", user)
            .then(res => {
                console.log(res.data.user)
                alert(res.data.message)
                if(res.data.message === "Login Successfull")handleClose();
                window.username = res.data.user.username
                setUserData(res.data.user.username)
                
            })
    }
    return (
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
                                fontSize: '1.8rem',
                                letterSpacing: '.1rem',
                                color: 'white',
                                textDecoration: 'none',
                                textAlign: 'center'
                            }}
                        >
                            Login
                            <br />
                            <TextField
                                error={usernameerror}
                                variant="standard"
                                size="small"
                                label="Username"
                                color="primary"
                                sx={{
                                    mt: 2,
                                    mb: 2,
                                    textAlign: 'center'
                                }}
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                id='username'
                            />
                            <br />
                            <TextField
                                error={passworderror}
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
                            <Button variant="contained" color='secondary'
                                onClick={handleclick}
                            >Login</Button>
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
                        Don't have an account?
                        <Link
                            component="button"
                            variant="body2"
                            underline='hover'
                            onClick={() => { 
                                toggleloginorsignup(false);
                            }}
                            sx={{
                                fontWeight: 800,
                                fontSize: '1rem',
                                letterSpacing: '.1rem',
                                fontFamily: 'poppins'
                            }}

                        >
                            Signup
                        </Link>
                    </Typography>

                </Stack>
            </Stack>

    )
}

export default Login