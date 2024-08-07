//import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import './SimpleCardTeste.css'
import { BoltSharp, CheckCircleOutline } from '@mui/icons-material'
import propTypes from 'prop-types';

const SimpleCardTeste = ({tag, title, subText, price, listItems}) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "15px"}} elevation={5}>
          <CardContent >
            <Stack sx={{padding: "16px"}}>
              <Typography gutterBottom variant="h5" fontWeight={550} component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{minHeight: "60px"}}>
                {subText}
              </Typography>
              {tag ? (
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
              ) : ("")}
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
                  {price}
                </Typography>
              </Stack>
              <Stack spacing={1} sx={{marginTop: "16px", minHeight: "100px"}}>
                {listItems.map((item, index) => (
                  <Stack key={index} direction="row" spacing={1} alignItems="center">
                    <CheckCircleOutline sx={{ color: "var(--primary-100)" }} />
                    <li className='textCard'>
                      <Typography 
                        variant="subtitle1"
                        color="var(--primary-200)"
                      >
                        {item}
                      </Typography>
                    </li>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </CardContent> 
    </Card>
  )
}

SimpleCardTeste.propTypes = {
  tag: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  subText: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  listItems: propTypes.arrayOf(propTypes.string).isRequired,
};

export default SimpleCardTeste