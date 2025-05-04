import { Stack, Typography, TextField, Button, SxProps, Theme, Link, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

export const Appointment = () => {
  const [formData, setFormData] = useState({ //manejo de variables como objeto 
      name:"",
      nip:"",
      email:"",
      namepet:"",
      reason:"",
      phone:"",
      notes:"",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {  //función para actualizar de datos
      const {value, name} = e.target; //target se usa para acceder a las propiedades del objeto
      
      setFormData({...formData, [name]:value})

    };
  
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
                Request a Service
              </Typography>
              <Stack direction="row" gap={3}>
                <TextField 
                    name="name" 
                    label="Full Name:" 
                    type="text" 
                    variant="standard" 
                    required
                    value={formData.name} 
                    sx={stylesInputs}
                    onChange={handleChange}/>

                    <TextField 
                    name="email" 
                    label="Email:" 
                    type="email" 
                    variant="standard" 
                    required
                    value={formData.nip} 
                    sx={stylesInputs}
                    onChange={handleChange}/>  
                </Stack>
                <Stack direction="row" gap={3}>
                    <TextField 
                    name="phone" 
                    label="Phone:" 
                    type="nunmber" 
                    variant="standard"
                    required 
                    value={formData.email} 
                    sx={stylesInputs}
                    onChange={handleChange}/>

                    <TextField 
                    name="namepet" 
                    label="Pet's name" 
                    type="test"  
                    variant="standard"
                    required 
                    value={formData.namepet} 
                    sx={stylesInputs}
                    onChange={handleChange}/>
                </Stack>
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason(s) for appointment</InputLabel>
                <Select
                name="reason"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.reason}
                label="species"
                onChange={handleChange}
                >
                <MenuItem value={"Grooming"}>Grooming</MenuItem>
                <MenuItem value={"Annual Exam"}>Annual Exam</MenuItem>
                <MenuItem value={"Vaccinations"}>Vaccinations</MenuItem>
                <MenuItem value={"Patient Visit"}>Patient Visit</MenuItem>
                <MenuItem value={"Sick Pet Exm"}>Sick Pet Exm</MenuItem>
                
                </Select>
                </FormControl>

                <TextField 
                  name="notes" 
                  label="Notes" 
                  type="text" 
                  variant="standard"
                  required 
                  value={formData.adress} 
                  sx={stylesInputs}
                  onChange={handleChange}/>  

                <Button variant="outlined" type="Request" sx={{}}>Register</Button>
            </Stack>
        </Stack>
      </>
    );
}

