import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Box from '@mui/material/Box'
import Feed from './components/Feed'
import { Stack } from '@mui/material'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <Box>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <SideBar/>
          <Feed/>
          <RightSidebar/>
      </Stack>
    </Box>
  )
}

export default App
