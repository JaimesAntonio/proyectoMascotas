import { Stack, Typography, TextField, Button, SxProps, Theme, Link, speedDialActionClasses, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const RegisterPets = () => {
  const [formData, setFormData] = useState({ //manejo de variables como objeto 
      name:"",
      species:"",
      race:"",
      owner:"",
    });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();
    };
  
    // const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {  //función para actualizar de datos
    //   const {value, name} = e.target; //target se usa para acceder a las propiedades del objeto
      
    //   setFormData({...formData, [name]:value})

    // };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name as string]: value,
      }));
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
              maxHeight="60%"
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
                  name="race" 
                  label="Race:" 
                  type="text" 
                  variant="standard"
                  required 
                  value={formData.race} 
                  sx={stylesInputs}
                  onChange={handleChange}/>

                <TextField 
                  name="owner" 
                  label="Owner" 
                  type="text"  
                  variant="standard"
                  required 
                  value={formData.owner} 
                  sx={stylesInputs}
                  onChange={handleChange}/>
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Species</InputLabel>
                <Select
                name="species"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.species}
                label="Species"
                onChange={handleChange}
                >
                <MenuItem value={"Bird"}>Bird</MenuItem>
                <MenuItem value={"Cat"}>Cat</MenuItem>
                <MenuItem value={"Dog"}>Dog</MenuItem>
                <MenuItem value={"Rabbit"}>Rabbit</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
                </FormControl>
                

                <Button variant="outlined" type="submit" sx={{}}>Register</Button>
            </Stack>
        </Stack>
      </>
    );
}