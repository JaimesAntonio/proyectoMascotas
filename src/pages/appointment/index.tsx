import { Stack, Typography, TextField, Button, SxProps, Theme, Link, FormControl, InputLabel, MenuItem, Select, Alert } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink, useNavigate} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };

interface IAppoint {
  name:string;
  email:string;
  namepet:string;
  reason:string;
  phone:number | null;
  notes:string;
}

export const Appointment = () => {
  const [appointData, setAppointData] = useState<IAppoint>({ //manejo de variables como objeto 
      name:"",
      email:"",
      namepet:"",
      reason:"",
      phone:null,
      notes:"",
    });
    
    const navigate =useNavigate();
    const user = localStorage.getItem('userName');
    const customers = JSON.parse(localStorage.getItem('customer') || '[]');
    const customer = customers.find(item => item.name===user)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();

      const appointments = JSON.parse(localStorage.getItem('appointment') || '[]');
      appointments.push(appointData);
      localStorage.setItem('appointment', JSON.stringify(appointments));
      navigate("/login")  

    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  //función para actualizar de datos
      const {value, name} = e.target; //target se usa para acceder a las propiedades del objeto
      
      setAppointData({...appointData, [name]:value})

    };
  
    return (
      <> 
        <Stack
          component="main" //define el comportamiento como etiqueta main
          //bgcolor="#D0DDD0"
          height="90vh"
          //direction="row"
         justifyContent="center" //alineación horizontal
          alignItems="center" //alineación vertical
          >
            <Typography 
                variant="h3" 
                color="#727D73" 
                fontWeight="500">
                Happy Pet Center
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
                    value={customer.name} 
                    sx={stylesInputs}
                    onChange={handleChange}/>

                    <TextField 
                    name="email" 
                    label="Email:" 
                    type="email" 
                    variant="standard" 
                    required
                    value={customer.email} 
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
                    value={customer.phone} 
                    sx={stylesInputs}
                    onChange={handleChange}/>

                    <TextField 
                    name="namepet" 
                    label="Pet's name" 
                    type="test"  
                    variant="standard"
                    required 
                    value={customer.name } 
                    sx={stylesInputs}
                    onChange={handleChange}/>
                </Stack>
                
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason(s) for appointment</InputLabel>
                <Select
                name="reason"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={appointData.reason}
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
                  value={appointData.notes} 
                  sx={stylesInputs}
                  onChange={handleChange}/>  

                <Button variant="outlined" type="Request" sx={{}}>Register</Button>
            </Stack>
        </Stack>
      </>
    );
}

