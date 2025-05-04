import MenuIcon from '@mui/icons-material/Menu';
import { Login, Register, RegisterPets, Appointment, Ppal } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { FC, PropsWithChildren } from 'react';





const App = () => {
  localStorage.setItem("user", JSON.stringify({name: "usuario"}));
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#F0F0D7'}}>
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
              Paciente nuevo
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#727D73' }}>
              Servicios
            </Typography>
            <Button sx={{color: 'black'}}>Register</Button>
          </Toolbar>
        </AppBar>
      </Box> */}

    
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Navigate to="/login" />} />
      {/* Rutas dentro del layout */}
      <Route path='/' element={<Layout />}>
        <Route path='registerpets' element={<ProtecterRouter><RegisterPets /></ProtecterRouter>} />
        <Route path='appointment' element={<ProtecterRouter><Appointment /></ProtecterRouter>} />
        <Route path='ppal' element={<ProtecterRouter><Ppal /></ProtecterRouter>} />
      </Route>
    </Routes>
    </>
  );
};

// Funtional Component para que se inicie login nsi no se ha logueado ningun usuario
const ProtecterRouter: FC<PropsWithChildren> =({children})=>{
  const userJson = localStorage.getItem("user")
  if (userJson===null){
    return <Navigate to="/login"/>
  } else {
    return children;
  }
}



export default App