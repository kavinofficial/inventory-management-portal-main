import React from 'react'
import { Typography } from '@mui/material'
import OrderList from '../components/OrderList'
import { Box } from '@mui/material'

const Order = () => {
  return (
    <Box sx={{ m: 0, p: 3, width: '100%' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Orders
      </Typography>
      <OrderList />
    </Box>
  )
}

export default Order
