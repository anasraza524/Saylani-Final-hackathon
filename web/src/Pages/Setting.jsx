
import React,{useState} from 'react'
import {
  Typography, Card, CardContent,CircularProgress,
  TextField, Button, Paper, Chip, Box, Grid,
  CardActions, CardActionArea, Divider, CardMedia,Stack,MenuItem,Avatar

} from '@mui/material'
import OrderCard from '../Components/OrderCard'
const Setting = () => {
  return (
    <div>
      <Box>

<Typography sx={{m:2,fontSize:{xs:30,sm:50,lg:50}}}>
Order Detail
</Typography>


<Divider/>


<OrderCard
name="4545"
price={5}
status="peding"
TotalAmount={45}
totalItems="sfsdf"
number={5654656565}


/>


      </Box>


    </div>
  )
}

export default Setting