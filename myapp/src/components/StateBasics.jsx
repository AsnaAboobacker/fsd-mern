import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, Setname] = useState("")
    var [valu, Setvalu] = useState("")
  
  const Handleinput = (e) => {
    Setname(e.target.value)
  }
  const Newfun = () => {
        Setvalu(name)
      
    }
  return (
    <div>
          <Typography variant='h3'>Welcome {valu}</Typography>
      <TextField variant='outlined' onChange={Handleinput}/><br />
      <Button variant="contained" onClick={Newfun}>change</Button>
    </div>
  )
}

export default StateBasics