import { Stack, Typography, TextField, Button, SxProps, Theme, Link, FormControl, InputLabel, MenuItem, Select, CardContent, CardMedia, Card } from '@mui/material';
import React, { useState } from 'react'
import {Link as routerLink} from "react-router-dom"
import diagnosticImg from '../images/diagnostic.png'

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
          height="55vh"
          maxWidth="100vh"          
          //justifyContent="center" //alineación horizontal
          alignItems="center" //alineación vertical
          >
            <Card sx={{ maxWidthWidth: 1,}}>
            <CardMedia
              component="img"
              height="300"
              image={diagnosticImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pet Diagnostic
              </Typography>
              
            </CardContent>
            </Card>
            
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              At Happy Pet Center,Hoy en día, en muchos hogares, las mascotas se han convertido en un miembro más de la familia y como tales, es necesario garantizar su bienestar en todo sentido, especialmente en lo que a salud se refiere.
La empresa “Mascota Feliz”, tiene dentro de su portafolio de servicios diversos beneficios para las mascotas afiliadas, entre ellos se encuentra el de visitas domiciliarias periódicas de promoción de la salud
y prevención de la enfermedad, las cuales son realizadas por un médico veterinario, y que además son gratuitas para los perros y gatos afiliados a la empresa.
Mascota Feliz cuenta con un equipo de veterinarios que se encargan de realizar visitas a domicilio, durante las cuales se revisan las mascotas y se dan recomendaciones para prevenir enfermedades,
mejorar la calidad de vida de los peludos o en caso de ser necesario (si la mascota se encuentra enferma) se realiza el diagnóstico y se formulan medicamentos.
              </Typography>
      </>
    );
}

