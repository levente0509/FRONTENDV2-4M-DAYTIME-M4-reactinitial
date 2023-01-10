import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function LoadingMask() {
  return (
    <Box>
      Loading...
      <br />
      <CircularProgress/>
    </Box>
  )
}

export default LoadingMask
