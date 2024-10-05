import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                  <Typography>MyApp</Typography>&nbsp;
                    <Link to='/log'>
                        <Button variant="contained">Login</Button>
                  </Link>
                  &nbsp;
                    <Link to='/sup'>
                      <Button variant="contained">Sign up</Button>
                  </Link>
                  &nbsp;
                  <Link to='/st'>
                      <Button variant="contained" style={{ justifyContent: 'flex-end' }}>State</Button>
                  </Link>
                  &nbsp;
                  <Link to='/ct'>
                      <Button variant="contained" >Count</Button>
                  </Link>  
                  &nbsp;
                  <Link to='/nm'>
                      <Button variant="contained" >Names</Button>
                   </Link>
                    &nbsp;
                   <Link to='/ap'>
                     <Button variant="contained" >Api</Button>
                    </Link>
                    &nbsp;
                    <Link to='/pk'>
                      <Button variant="contained" >Pokemon</Button>
                    </Link>
          </Toolbar>
        </AppBar><br />
    </div>
  )
}

export default Navbar
