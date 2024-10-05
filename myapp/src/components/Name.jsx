import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [value, Setvalue] = useState()
    const ab = () => {
        Setvalue("Aboobacker")
    }
    const ay = () => {
        Setvalue("Ayisha")
    }
    const as = () => {
        Setvalue("Asna")
    }
    useEffect(() => { as() },[])
  return (
      <div>
          <Typography variant='h4'>Hy {value}</Typography>
          <Button variant="contained" onClick={ab}>Aboobacker</Button>&nbsp;
          <Button variant="contained" onClick={ay}>Ayisha</Button>&nbsp;
          <Button variant="contained" onClick={as}>Asna</Button>&nbsp;
    </div>
  )
}

export default Name
