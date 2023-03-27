import { AppBar, Container, Toolbar, Typography, FormControl, InputLabel, Box, Button } from '@mui/material'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()   

  return (
    <AppBar color='transparent' position='static'>
        <Container >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography onClick={() => navigate('/')} sx={{fontWeight: 'bold', fontSize:30, cursor: 'pointer'}}>VetFit / eFit</Typography>
                    <Box sx={{ justifyContent: 'flex-end', display: 'flex', marginLeft: 5 }}>
                        <Button onClick={() => navigate('/')} size='large' 
                        sx={{color: 'black'}}>
                        GET ALL</Button>
                    </Box> 
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', marginRight: '5px'}}>
                    </Box> 
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar


