import { Stack, Typography, TextField, Button, SxProps, Theme, Link } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const Register = () => {
  const [formData, setFormData] = useState({ //manejo de variables como objeto 
      name:"",
      nip:"",
      email:"",
      password:"",
      repassword:"",
      phone:"",
      adress:"",
    });
    
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();
      // if (formData.password !== formData.repassword) {
      //   setError("Passwords do not match");
      //   return;
      // }
      //const formData = new FormData(e.currentTarget); //formData es un objeto de clase FormData
      //alert(formData.get("login"));
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {  //función para actualizar de datos
      const {value, name} = e.target; //target se usa para acceder a las propiedades del objeto
      
      setFormData({...formData, [name]:value})

      if (
        name === "repassword" &&
        formData.password !== formData.repassword
      ) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
  
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
              maxHeight="75%"
              gap={1}
              p={4}
              borderRadius="12px"
              marginLeft="1000px"
              onSubmit={handleSubmit}>
              <Link component={routerLink} to="/login">Go back</Link>
              <Typography variant="h3" color="#727D73" fontWeight="500">
                The Clinic
              </Typography>
              
              <TextField 
                  name="name" 
                  label="Name:" 
                  type="text" 
                  variant="standard" 
                  required
                  value={formData.name} 
                  sx={stylesInputs}
                  onChange={handleChange}/>

                <TextField 
                  name="nip" 
                  label="Nip:" 
                  type="nunmber" 
                  variant="standard" 
                  required
                  value={formData.nip} 
                  sx={stylesInputs}
                  onChange={handleChange}/>  

                <TextField 
                  name="email" 
                  label="Email:" 
                  type="email" 
                  variant="standard"
                  required 
                  value={formData.email} 
                  sx={stylesInputs}
                  onChange={handleChange}/>

                <TextField 
                  name="password" 
                  label="Password" 
                  type="password"  
                  variant="standard"
                  required 
                  value={formData.password} 
                  sx={stylesInputs}
                  onChange={handleChange}/>
                
                <TextField 
                  name="repassword" 
                  label="Confirm Password" 
                  type="password" 
                  variant="standard"
                  required 
                  value={formData.repassword} 
                  onChange={handleChange} 
                  sx={stylesInputs}/>

                <TextField 
                  name="phone" 
                  label="Phone:" 
                  type="nunmber" 
                  variant="standard"
                  required 
                  value={formData.phone} 
                  sx={stylesInputs}
                  onChange={handleChange}/>  

                <TextField 
                  name="adress" 
                  label="Adress" 
                  type="test" 
                  variant="standard"
                  required 
                  value={formData.adress} 
                  sx={stylesInputs}
                  onChange={handleChange}/>  

                {error.length > 0 && <Typography>{error}</Typography>}
                <Button variant="outlined" type="submit" sx={{}}>Register</Button>
            </Stack>
        </Stack>
      </>
    );
}

