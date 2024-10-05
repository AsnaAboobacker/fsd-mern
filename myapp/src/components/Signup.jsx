import {Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Signup page</h1>
      <TextField id="outlined-basic" label="user id" variant="outlined" /><br />
      <Button variant="Contained">Sign up</Button>
    </div>
  )
}

export default Signup
