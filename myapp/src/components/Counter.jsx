import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [value, Setvalue] = useState(0)

    const plus = () => {
        Setvalue(value+1)
    }
    const minus = () => {
        Setvalue(value-1)
    }
    return (
    <div>
          <Typography variant='h3'>count {value}</Typography>
          <br />
          <Button variant="contained" onClick={plus}>+</Button>&nbsp;
          <Button variant="contained" onClick={minus}>-</Button>
    </div>
  )
}

export default Counter
