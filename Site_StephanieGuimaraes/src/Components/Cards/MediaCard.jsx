import { Card, CardContent, Stack } from '@mui/material'
import './MediaCard'

const MediaCard = () => {
  return (
    <Card sx={{minWidth: 275, padding: "24px 32px", borderRadius: "15px"}} elevation={3}>
        <CardContent>
            <Stack>
                <h3>Title</h3>
                    <p>lerem5</p>
                    <ul>
                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <li >Header</li>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <li >4 seções</li>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <li>Footer</li>
                            </Stack>
                        </Stack>
                    </ul>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default MediaCard