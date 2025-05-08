import { Stack, Typography, TextField, Button, SxProps, Theme, Link, speedDialActionClasses, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink, useNavigate} from "react-router-dom"

const stylesInputs: SxProps<Theme> ={
  '& .MuiInputLabel-standard': {'&.Mui-focused':{color:'#D0DDD0'},},
  '& .MuiInput-underline:after': { borderBottomColor: '#D0DDD0' }, // activo (focus)
  };
interface Pet {
  namepet:string; 
  species:string;
  race:string;
  owner:string;
}

// interface Customer {
//   name:string;
//   nip:number | null;
//   email:string;
//   password:string;
//   repassword:string;
//   phone:number | null;
//   adress:string;
// }

export const RegisterPets = () => {
  const [formData, setFormData] = useState<Pet>({ //manejo de variables como objeto 
      namepet:"",
      species:"",
      race:"",
      owner:"",
    });

  // const [customerData, setcustomerData] = useState<Customer>({ //manejo de variables como objeto 
  //       name:"",
  //       nip:null,
  //       email:"",
  //       password:"",
  //       repassword:"",
  //       phone:null,
  //       adress:"",
  //     });

  const navigate =useNavigate();
  const customers = JSON.parse(localStorage.getItem('customer') || '[]');
  console.log(customers);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //función para entada de datos
      e.preventDefault();

      const pets = JSON.parse(localStorage.getItem('pet') || '[]');
      pets.push(formData);
      localStorage.setItem('pet', JSON.stringify(pets));
      navigate("/ppal")
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

              <select name="owner" value={formData.owner} onChange={handleChange}>
                <option value="">Seleccionar dueño</option>
                  {customers.map((customerData, index) => (
                    <option key={index} value={customerData.name}>
                    {customerData.name}
                      </option>
                ))}
              </select>
                
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