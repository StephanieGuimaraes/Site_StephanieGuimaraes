//import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import './SimpleCardTeste.css'
import { BoltSharp, CheckCircleOutline } from '@mui/icons-material'

const SimpleCardTeste = () => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px"}} elevation={4}>
          <CardContent >
            <Stack sx={{padding: "16px"}}>
              <Typography gutterBottom variant="h5" fontWeight={550} component="div">
                Landing Page Simples
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species
              </Typography>
              <Box
                minHeight={32}
                maxWidth={100}
                margin="8px 0 0"
                display="flex"
                alignItems="center"
                padding="0 12px"
                bgcolor="var(--accent-50)"
                color="var(--white)"
                borderRadius={4}
                alignSelf="end"
                fontSize="18px"
              >
                <Stack direction="row" alignItems="center">
                  <Typography 
                    variant="subtitle1" 
                    color="var(--white)"
                    >
                    Popular
                  </Typography>
                  <BoltSharp/>
                </Stack>
                
              </Box>
              <Stack direction="row">
                <Typography 
                  gutterBottom variant="h5" 
                  fontWeight={600}
                  component="div" 
                  margin="16px 0" 
                  color="var(--primary-100)"
                  >
                  R$
                </Typography>
                <Typography 
                  gutterBottom variant="h3" 
                  component="div" 
                  margin="16px 0 0" 
                  color="var(--primary-100)"
                  >
                  1999
                </Typography>
              </Stack>
              <Stack spacing={1} sx={{marginTop: "16px"}}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutline sx={{ color: "var(--primary-100)" }}/>
                    <li className='textCard'>Header</li>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutline sx={{ color: "var(--primary-100)" }}/>
                    <li className='textCard'>4 seções</li>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutline sx={{ color: "var(--primary-100)" }}/>
                    <li className='textCard'>Footer</li>
                </Stack>
              </Stack>
            </Stack>
          </CardContent> 
    </Card>
  )
}

export default SimpleCardTeste