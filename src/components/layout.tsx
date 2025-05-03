import Stack from '@mui/material/Stack'
import React from 'react'

export  const Layout = () => {
  return (
    <Stack
    component="main" //define el comportamiento como etiqueta main
    bgcolor="#D0DDD0"
    height="91vh"
    direction="row"
    justifyContent="center" //alineación horizontal
    alignItems="center" //alineación vertical
    sx= {{
      backgroundImage: 'url("../dog_ini.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      }}>
        Layout
    </Stack>
  )
}


