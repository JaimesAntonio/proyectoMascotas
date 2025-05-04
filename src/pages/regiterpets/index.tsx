import { Stack, Typography, TextField, Button, SxProps, Theme, Link, speedDialActionClasses, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const RegisterPets = () => {
  const [formData, setFormData] = useState({ //manejo de variables como objeto 
      namepet:"",
      species:"",
      race:"",
      owner:"",
    });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();
    };
 
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
          component="main"
          height="100vh"
            //direction="row"
          justifyContent="center" //alineación horizontal
          alignItems="center" //alineación vertical
          >    
           {/* <Link component={routerLink} to="/login">Go back</Link> */}
            <Typography 
              variant="h3" 
              color="#727D73" 
              fontWeight="500">
                The Clinic
            </Typography>
            <Stack
              component="form"
              bgcolor="#AAB99A"
              maxHeight="75%"
              gap={1}
              p={4}
              borderRadius="12px"
              onSubmit={handleSubmit}>
              <Link component={routerLink} to="/login">Go back</Link>
              <Typography variant="h4" color="#727D73" fontWeight="500">
                Register Pet
              </Typography>
            <Stack direction="row" gap={3}>
              <TextField 
                  name="namepet" 
                  label="Name:" 
                  type="text" 
                  variant="standard" 
                  required
                  value={formData.namepet} 
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
              </Stack>

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