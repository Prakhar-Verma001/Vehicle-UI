import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'
import Nav from './Nav'
import VechicleList from './VechicleList'
// import Table3 from './Table3'
// import Table4 from './Table4'
// import Table2 from './Table2'
// import Table1 from './Table1'
const Combo = () => {
  return (
    <>
        <Box bgcolor={'#F2FFE9'}>
            <Stack direction={'column'} spacing={1}>
                <Nav />
                <Typography variant="h5" color="#464255" fontWeight={600} 
                sx={{px:2}}>
                   Manage Vehicle
                </Typography>

                <VechicleList />
                <Navigate to="vehicle" />
                {/* <Table1 />
                <VechicleList />
                <Table2 />
                <VechicleList />
                <Table3 />
                <VechicleList />
                <Table4 /> */}
            </Stack>
        </Box>
    </>
  )
}

export default Combo
