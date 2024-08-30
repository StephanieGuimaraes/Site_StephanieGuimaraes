//import React from 'react'
import {Stack, Typography } from '@mui/material'
import './ShowProject.css'
import FotoProvisoria from '../../../assets/FotoProvisoria.jpg'

const ShowProject = () => {
  return (
    <Stack direction="row" spacing={4} justifyContent="center" padding={4} sx={{backgroundColor: "red"}} width="50%" >
      <Stack alignSelf="center" width="50%">
        <Typography variant="h5" fontWeight={600}>Ola</Typography>
        <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem consectetur blanditiis, sapiente rerum corporis!</Typography>
      </Stack>
      <img src={FotoProvisoria} alt='' className='img1'/>
    </Stack>
  )
}

export default ShowProject