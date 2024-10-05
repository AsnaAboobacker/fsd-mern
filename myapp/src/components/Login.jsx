import {Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    
    <div>
          <h1>Login page</h1>
          <TextField id="outlined-basic" label="username" variant="outlined" /><br />
          <TextField id="outlined-basic" label="password" variant="outlined" /><br />
          <TextField id="outlined-basic" label="age" variant="outlined" /><br />
          <TextField id="outlined-basic" label="contact" variant="outlined" /><br />
          <Button variant="Contained">Login</Button>

    </div>
  )
}

export default Login
