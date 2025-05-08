import { Stack, Typography, TextField, Button, SxProps, Theme, Link, FormControl, InputLabel, MenuItem, Select, CardContent, CardMedia, Card } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"
import clinicImg from '../images/clinic.png'

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const Ppal = () => {
  

    
    return (
     <>
        <Stack marginTop="16px" alignItems="center">
          <Typography
            variant="h3"  
            color="#727D73" 
            fontWeight="500">
            Wellcom to Happy Pet Center
          </Typography>
        </Stack> 
        <Stack
          component="main" //define el comportamiento como etiqueta main
          //bgcolor="#D0DDD0"
          height="80vh"
          minWidth="200vh"          
          justifyContent="center" //alineación horizontal
          alignItems="center" //alineación vertical
          //direction="row"
          >
            <Card sx={{ maxWidthWidth: 1,}}>
              <CardMedia
                component="img"
                height="300"
                image={clinicImg}
                alt="green iguana"
              />
            </Card>
              
            {/* <Stack maxWidth="500"> */}
              <Typography variant="h6" fontWeight="500" gap="5" 
              sx={{textAlign: 'justify',color:'text.secondary', fontSize:'20px', width: '60%' }}>
              Today, in many homes, pets have become a member of the family, and as such, 
              it is necessary to ensure their well-being in every way, especially when it 
              comes to health.
              "Happy Pet Center" has a team of veterinarians at your disposal who 
              are responsible for diagnosing pets, prescribing medications, and 
              performing the procedures offered.
              </Typography>
            {/* </Stack> */}
          </Stack>
    </>
  );
}

