// import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
// import Stack from '@mui/material/Stack'
// import MenuIcon from '@mui/icons-material/Menu';
// import { FC, PropsWithChildren } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// export  const Layout: FC<PropsWithChildren> = ({children}) => {



//   return (
//     <>
//      <Stack
//         component="main" //define el comportamiento como etiqueta main
//         bgcolor="#F0F0D7"
        
//         //direction="row"
//         //justifyContent="center" //alineación horizontal
//         sx= {{
//           // backgroundImage: 'url("/dog_ini.png")',
//           // backgroundRepeat: 'no-repeat',
//           backgroundSize: 'contain',
//           //height:"100vh"
//           }}
//         >

//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{backgroundColor: '#D0DDD0'}}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="#727D73"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuIcon />
//             </IconButton >
//             <Typography variant="h6" sx={{ flexGrow: 1}}>
//               <Link to="/registerpets" style={{ textDecoration: 'none', color: '#727D73' }}>
//                New Pet
//               </Link>
//             </Typography>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#727D73' }}>
//               Services
//             </Typography>
//             <Typography variant="h6" sx={{ flexGrow: 1}}>
//               <Link to="/appointment" style={{ textDecoration: 'none', color: '#727D73' }}>
//                Appointment
//               </Link>
//             </Typography>
//             <Button sx={{color: 'black'}}>Register</Button>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Outlet />{children}
//       </Stack> 
//     </>
  
//   )
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

const pages = [
  {label:'New Pets', path: '/registerpets' },
  {label: 'Services', path:'/services'},
  {label:'Apointment', path:'/appointment'}
];

const settings = [
  {label:'Profile', path: '/profile'},
  {label:'Logout', path:'/logout'}

];

export  const Layout: React.FC<React.PropsWithChildren> = ({children}) =>{
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navigate =useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <>
      <Stack
        component="main" //define el comportamiento como etiqueta main
        bgcolor="#F0F0D7"
        sx= {{
          backgroundSize: 'contain',
          }}
      >

    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ label, path }) => (
                <Button
                  key={label}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(path);
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {label}
                </Button>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ label, path }) => (
            <Button
              key={label}
              onClick={() => {
                handleCloseNavMenu();
                navigate(path);
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {label}
            </Button>
          ))} 
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ label, path }) => (
                <MenuItem
                  key={label}
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate(path);
                  }}
                >
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
    <Outlet />{children}
  </Stack>
  </>
  );
}
