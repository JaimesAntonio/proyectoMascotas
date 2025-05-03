

import {Stack, SxProps, TextField, Theme, Typography, Button, Link} from '@mui/material';
import React, { useState } from 'react';
import {Link as routerLink} from "react-router-dom"
const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

  
export const Login = () => {

  const [formData, setFormData] = useState({ //manejo de variables como objeto 
    login:"",
    password:"",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
    e.preventDefault();
    alert("/dashboard");
    //const formData = new FormData(e.currentTarget); //formData es un objeto de clase FormData
    //alert(formData.get("login"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {  //función para actualizar de datos
    const {value, name} = e.target; //target se usa para acceder a las propiedades del objeto
    setFormData({...formData, [name]:value})
  };

  return (
    <> 
      <Stack
        component="main" //define el comportamiento como etiqueta main
        bgcolor="#D0DDD0"
        height="100vh"
        direction="row"
        justifyContent="center" //alineación horizontal
        alignItems="center" //alineación vertical
        sx= {{
          backgroundImage: 'url("/dog_ini.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          }}>
          
          <Stack
            component="form"
            bgcolor="#AAB99A"
            maxHeight="70%"
            gap={4}
            p={5}
            borderRadius="12px"
            marginLeft="1000px"
            onSubmit={handleSubmit}>
            
            <Typography variant="h2" color="#727D73" fontWeight="500">
              The Clinic
            </Typography>
            
            <TextField 
                name="login" 
                label="Login Name:" 
                type="email" 
                variant="standard" 
                value={formData.login} 
                sx={stylesInputs}
                onChange={handleChange}/>  
              <TextField 
                name="password" 
                label="Password" 
                type="password" 
                variant="standard" 
                value={formData.password} 
                onChange={handleChange} 
                sx={stylesInputs}/>

              <Link component={routerLink} to="/register">Go to Register</Link>
              <Button variant="outlined" type="submit" sx={{}}>Sing in</Button>
          </Stack>
      </Stack>
    </>
  );
}

