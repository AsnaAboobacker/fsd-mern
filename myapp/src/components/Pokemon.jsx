import React, { useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Pokemon = () => {
  var [poki, setpoki] = useState([])

  axios.get("https://dummyapi.online/api/pokemon")
    .then(response => {
      console.log(response.data)
      setpoki(response.data)
    })
  return (
    <div>
      <Grid container spacing={2}>

        {poki.map((val) => {
          return (
            <Grid item xs={12} sm={2} md={2}>
      
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  sx={{ height: 190 }}
                  image={val.image_url}
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.pokemon}
                  </Typography>
                  
                </CardContent>
                
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Pokemon
