import * as React from 'react'
import Box from '@mui/material/Box'
export default function TabsHorizontal({ children }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      {children}
    </Box>
  )
}
