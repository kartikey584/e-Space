import React ,{useState} from 'react'
import { Button, Grid ,Stack , TextareaAutosize, TextField, Typography } from '@mui/material'
import {styled} from '@mui/material/styles';
import emailjs from 'emailjs-com';
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
const ContactUs = () => {
    const [name , setname] = useState('')
    const [username , setusername] = useState('')
    const [email , setemail] = useState('')
    const [about , setabout] = useState('')
    const [message , setmessage] = useState('')
    var emailParams = {
        name : name,
        username : username,
        user_email : email,
        about : about,
        message : message
    }
    const sendEmail  = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_r35stvk",
            "template_v77nmz7",
            emailParams,
            "zNkCc_OYQfcSK9X4B",
        ).then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    }
  return (
    
    <Stack
        direction = 'row'
        alignItems = 'center'
        justifyContent = 'space-evenly'
        sx = {{
            width : '100%',
            height : '100%',
            // border : '1px solid red'
        }}
        >
            <Grid
                sx = {{
                    width : '50%',
                    height : '100%',
                    // border : '1px solid blue'
                }}>
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
                            // textAlign: 'center'
                        }}
                    >                    
                        <CustomTextField 
                            label="Name " 
                            name = "name"
                            variant = 'outlined' 
                            sx = {{m: 2,width: "40%", }}
                            value={name}
                            onChange={(e) => {
                            setname(e.target.value);
                            }}
                        />
                        <CustomTextField 
                            label="UserName " 
                            name = "username"
                            variant = 'outlined' 
                            sx = {{m: 2,width: "40%", }}
                            value={username}
                            onChange={(e) => {
                            setusername(e.target.value);
                            }}
                        />
                        <br></br>
                        <CustomTextField 
                            label="Email "
                            name = "user_email"
                            type = 'email' 
                            variant = 'outlined' 
                            sx = {{m: 2,width: "40%", }}
                            value={email}
                            onChange={(e) => {
                            setemail(e.target.value);
                            }}
                        />
                        <CustomTextField 
                            label="About "
                            name = "About"
                            type = 'text' 
                            variant = 'outlined' 
                            sx = {{m: 2,width: "40%", }}
                            value={about}
                            onChange={(e) => {
                            setabout(e.target.value);
                            }}
                        />
                    </Typography >
            </Grid>
            <Grid
                sx = {{
                    width : '50%',
                    height : '100%',
                    // border : '1px solid blue'
                }}>
                    <CustomTextField
                        label="Message"
                        name = "message"
                        multiline
                        rows={5}
                        sx = {{
                            m: 2,
                            width: "70%",
                        }}
                        value={message}
                        onChange={(e) => {
                        setmessage(e.target.value);
                        }}
                    />
                    <Button 
                        variant="contained"
                        color = "error" 
                        sx ={{
                            m: 2,
                            fontSize: 15,
                            color: 'white', 
                        }}
                         onClick={sendEmail}
                        >
                        Submit
                    </Button> 
            </Grid>
        </Stack>
  )
}

export default ContactUs