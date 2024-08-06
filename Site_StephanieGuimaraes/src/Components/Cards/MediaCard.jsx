//import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Button } from 'react-scroll'
import './MediaCard.css'
import fotoProvisoria from '../../assets/FotoProvisoria.jpg'

const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px"}} elevation={4}>
        <CardMedia
          component="img"
          alt="imagem representado a justiça é sega"
          height="140"
          image={fotoProvisoria}
        />
        <Stack padding={1}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              LizardAC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>                                                                                                       
          <CardActions sx={{padding: "16px"}}>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Stack>
        
    </Card>
  )
}

export default MediaCard