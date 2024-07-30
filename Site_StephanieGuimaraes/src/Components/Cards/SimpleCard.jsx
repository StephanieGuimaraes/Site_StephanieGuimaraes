//import React from 'react'
import { Card, CardContent, Stack} from '@mui/material'
import  './SimpleCard.css'
import { CheckCircleOutline } from '@mui/icons-material'
const SimpleCard = () => {
  return (
    <Card sx={{minWidth: 275, padding: "16px", borderRadius: "15px"}}>
        <CardContent>
            <Stack spacing={2}>
                <h3 className='cardtitle'>Landing Page Simples</h3>
                <p className='simpletext'>R$ 999</p>
                <ul>
                    <Stack spacing={1}>
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
                </ul>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default SimpleCard