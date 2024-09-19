import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {

    const navigate = useNavigate();


    const goToAbout = () => {
        navigate('/Dashboard');  
      };


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#f5f5f5',
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <Box
          component="form"
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>goToAbout()}
          > 
            Login
          </Button>
        </Box>
      </Box>
    </Container>

  )
}

export default Login
