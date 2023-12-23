import React from 'react'
import { Stack, Typography, Box, Button, Paper, Link } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import slider from '../Assests/Images/Sliders.png'
import eye from '../Assests/Images/Eye.png'
import trash from '../Assests/Images/Trash.png'
import pack from '../Assests/Images/package.png'

const Table1 = () => {

    function createData(Vehicle, Location, Driver, Fuel) {
        return { Vehicle, Location, Driver, Fuel };
      }
      
      const rows = [
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Add Driver', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Add Driver', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Ravi Kumar', 47),
        createData('UP 13 AC 1543', 'Kucha Ghasi Ram, Chandni Chowk', 'Add Driver', 47)
      ];

  return (
    <>
        <Box bgcolor={'#F2FFE9'}>
            <Stack direction={'row'} justifyContent={'end'} px={2}>
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
                     <TableCell sx={{fontWeight:700, color:'white', py:1.5}}>Vehicle</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Location</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Driver</TableCell>
                     <TableCell align='center' sx={{fontWeight:700, color:'white', py:1.5}}>Fuel % (in Liter)</TableCell>
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
                          <TableCell sx={{color:'#828282'}} scope="row">{row.Vehicle}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="left">{row.Location}</TableCell>
                          <TableCell align="left">
                            {
                              row.Driver === 'Add Driver'?
                              <Link href='#' underline='none'>{row.Driver}</Link>:
                              <Typography color={'#828282'}>Ravi Kumar</Typography>
                            }
                          </TableCell>
                          <TableCell sx={{color:'#828282'}} align="center">{row.Fuel}</TableCell>
                          <TableCell>
                              <Stack direction={'row'} spacing={2} justifyContent={'end'}>
                                  <Link href='#'><img src={eye} alt='eye' height={'70%'} style={{marginBlock:'15%'}} /></Link>
                                  <Link href='#'><img src={trash} alt='trash' height={'70%'} style={{marginBlock:'15%'}} /></Link>
                                  <Link href='#'><img src={pack} alt='package' height={'70%'} style={{marginBlock:'15%'}} /></Link>
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

export default Table1