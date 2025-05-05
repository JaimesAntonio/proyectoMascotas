
import { Stack, Typography, TextField, Button, SxProps, Theme, Link, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const Logout = () => {
  

    
    return (
      <> 
        <Stack
          component="main" //define el comportamiento como etiqueta main
          //bgcolor="#D0DDD0"
          height="100vh"
          //direction="row"
          justifyContent="center" //alineación horizontal
          alignItems="center" //alineación vertical
          >
            <Typography 
                variant="h3" 
                color="#727D73" 
                fontWeight="500">
                The Clinic
            </Typography> 
            
        </Stack>
      </>
    );
}
