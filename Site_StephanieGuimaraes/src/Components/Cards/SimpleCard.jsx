//import React from 'react'
import { Card, CardContent, Stack} from '@mui/material'
import  './SimpleCard.css'
import { CheckCircleOutline } from '@mui/icons-material'
const SimpleCard = () => {
  return (
    <Card sx={{minWidth: 275, padding: "24px"}}>
        <CardContent>
            <h3>Meu card</h3>
            <p>txt do meu card</p>
            <ul>
                <Stack direction="row" spacing={1}>
                    <CheckCircleOutline sx={{ color: "#b92118" }}/>
                    <li>Header</li>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <CheckCircleOutline sx={{ color: "#b92118" }}/>
                    <li>4 seções</li>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <CheckCircleOutline sx={{ color: "#e64319" }}/>
                    <li>Footer</li>
                </Stack>
            </ul>
        </CardContent>
    </Card>
  )
}

export default SimpleCard