import { Card, CardContent, CardMedia, Typography} from '@mui/material'


const MediaCard = () => {
  return (
    <Card sx={{maxWidth: 345 }} elevation={3}>
       <CardMedia
       component="img"
       alt="green iguana"
       height="140"
       image="../../assets/FotoProvisoria.jpg"
       />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        
    </Card>
  )
}

export default MediaCard