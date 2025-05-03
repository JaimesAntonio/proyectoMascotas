import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Typography, Toolbar, IconButton, Button} from '@mui/material';
import { Login, Register, RegisterPets } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';


  
const App = () => {
 
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
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/registerpets" element={<RegisterPets />} />
      </Routes>
    </>
  );
}

export default App