import React from 'react'
import { Stack, Grid, Typography } from '@mui/material';
import ImageSlider from "../Components/overview/home/imageSlider"
const home = () => {
    return (
        <Stack
            direction="row"
            sx={{ width: "100%", height: "90%" }}
        >
            <Grid sx={{
                width: "50%",
                mt: 30,
            }}>
                <Typography
                    variant="h6"
                    sx={{
                        ml: 20,
                        fontFamily: 'poppins',
                        fontWeight: 500,
                        fontSize: '5rem',
                        color: 'white',
                        textDecoration: 'none',
                        lineHeight: '1',
                        letterSpacing: '.2rem',
                    }}
                >
                    Join the
                    <br />
                    Community
                </Typography>
                <br />
                <Typography
                    variant="h6"
                    sx={{
                        ml: 20,
                        fontFamily: 'poppins',
                        fontWeight: 700,
                        fontSize: '2rem',
                        color: '#DA0037',
                        lineHeight: '0',
                        textDecoration: 'none',
                        letterSpacing: '.2rem',
                    }}
                >
                    Connect to eSpace
                </Typography>
            </Grid>
            <Grid 
                sx = {{
                    position : 'relative',
                    mt : 10,
                    width : '48%',
                    height : '90%',
                    // border : '5px solid #DA0037',
                    // borderRadius : '10%',
                }}
            >
                <ImageSlider />
            </Grid>
        </Stack>

    )
}

export default home