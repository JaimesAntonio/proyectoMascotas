import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import Stack from '@mui/material/Stack'
import MenuIcon from '@mui/icons-material/Menu';
import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export  const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <>
     <Stack
        component="main" //define el comportamiento como etiqueta main
        bgcolor="#F0F0D7"
        
        //direction="row"
        //justifyContent="center" //alineación horizontal
        sx= {{
          // backgroundImage: 'url("/dog_ini.png")',
          // backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          //height:"100vh"
          }}
        >

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#D0DDD0'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="#727D73"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#727D73' }}>
              New Pet            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#727D73' }}>
              Services
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#727D73' }}>
              Appointment
            </Typography>
            <Button sx={{color: 'black'}}>Register</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />{children}
      </Stack> 
    </>
  
  )
}


