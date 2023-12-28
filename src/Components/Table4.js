import React from 'react'
import { Stack, Box, Button, Paper, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import slider from '../Assests/Images/Sliders.png'
import eye from '../Assests/Images/Eye.png'
import trash from '../Assests/Images/Trash.png'
import add from '../Assests/Images/Plus-Circle.png'

const Table4 = () => {

    function createData( V, L, D, S ) {
        return { V, L, D, S };
      }
      
      const rows = [
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Available'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Booked'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Maintenance'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Booked'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Maintenance'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Available'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Booked'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Booked'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Available'),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 'Maintenance')
      ];

  return (
    <>
        <Box bgcolor={'#F2FFE9'}>
            <Stack direction={'row'} justifyContent={'end'} spacing={1.5} px={2}>

               <Button sx={{bgcolor:'#0155A5', borderRadius:5, color:'white', py:1, px: {md:3, xs:2},
               textTransform:'none',   '&:hover': {
                   bgcolor:'#0766AD'                
                 }}}>
                   <Stack direction={'row'} alignItems={'center'} spacing={0.5} justifyContent={'center'}>
                       <img src={add} width={'30%'} alt='add' />
                       <Typography variant='body1'>Add</Typography>
                   </Stack>
               </Button>

               <Button sx={{bgcolor:'#0155A5', borderRadius:5, color:'white', py:1, px: 3,
               textTransform:'none',   '&:hover': {
                   bgcolor:'#0766AD'                
                 }}}>
                   <Stack direction={'row'} spacing={0.5} justifyContent={'center'}>
                       <img src={slider} alt='sliders' />
                       <Typography variant='body1'>Apply Filter</Typography>
                   </Stack>
               </Button>

            </Stack>

            <Box px={2}>
             <TableContainer sx={{bgcolor:'transparent'}}>
               <Table sx={{ minWidth: 650, borderCollapse:'separate', borderSpacing:'0 10px' }} size="small" aria-label="a dense table">
                 <TableHead>
                   <TableRow component={Paper} sx={{bgcolor:'#0155A5'}}>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Vehcile</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Location</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Driver</TableCell>
                     <TableCell align='center' sx={{fontWeight:700, color:'white', py:1.5}}>Status</TableCell>
                     <TableCell align='right' sx={{fontWeight:700, color:'white', py:1.5}}>Option</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {rows.map((row) => (
                      <TableRow
                        component={Paper}
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                          <TableCell sx={{color:'#828282'}} scope="row">{row.V}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="left">{row.L}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="left">{row.D}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="center">{row.S}</TableCell>
                          <TableCell>
                              <Stack direction={'row'} spacing={2} justifyContent={'end'}>
                                  <img src={eye} alt='aye' height={'70%'} style={{marginBlock:'5%'}} />
                                  <img src={trash} alt='trash' height={'70%'} style={{marginBlock:'5%'}} />
                              </Stack>
                          </TableCell>
                      </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer>
            </Box>
        </Box>
    </>
  )
}

export default Table4
