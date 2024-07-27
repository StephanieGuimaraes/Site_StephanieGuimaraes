//import React from 'react'
import { Card, CardContent} from '@mui/material'
import  './SimpleCard.css'
const SimpleCard = () => {
  return (
    <Card sx={{minWidth: 275}}>
        <CardContent>
            <h3>Meu card</h3>
            <p>txt do meu card</p>
            <ul>
                <li>Header</li>
                <li>4 seções</li>
                <li>Footer</li>
            </ul>
        </CardContent>
    </Card>
  )
}

export default SimpleCard