//import React from 'react'
import { Card, CardContent, Stack} from '@mui/material'
import  './SimpleCard.css'
import { CheckCircleOutline } from '@mui/icons-material'
import propTypes from 'prop-types';

const SimpleCard = ({cardTitle, price}) => {
  return (
    <Card sx={{minWidth: 275, padding: "24px 32px", borderRadius: "15px"}} elevation={3}>
        <CardContent>
            <Stack spacing={2}>
                <h3 className='cardtitle'>{cardTitle}</h3>
                <p className='price'>{price}</p>
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

SimpleCard.propTypes = {
    cardTitle: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
  };

export default SimpleCard