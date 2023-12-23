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

const Table2 = () => {

    function createData( D, V, B, S, R, A ) {
        return { D, V, B, S, R, A };
      }
      
      const rows = [
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56),
        createData('23/08/2023', 'UP 13 AC 1543', '#70178KT', '332, Kucha Ghasi Ram, Chandni', 2, 192.56)
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
                     <TableCell sx={{fontWeight:700, color:'white', py:1.5}}>Date</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Vehcile</TableCell>
                     <TableCell align='left' sx={{fontWeight:700, color:'white', py:1.5}}>Booking ID</TableCell>
                     <TableCell align='center' sx={{fontWeight:700, color:'white', py:1.5}}>Station</TableCell>
                     <TableCell align='right' sx={{fontWeight:700, color:'white', py:1.5}}>Refill (in Liter)</TableCell>
                     <TableCell align='right' sx={{fontWeight:700, color:'white', py:1.5}}>Amount (in Rs)</TableCell>
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
                          <TableCell sx={{color:'#828282'}} scope="row">{row.D}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="left">{row.V}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="left">{row.B}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="center">{row.S}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="center">{row.R}</TableCell>
                          <TableCell sx={{color:'#828282'}} align="center">{row.A}</TableCell>
                          <TableCell>
                              <Stack direction={'row'} spacing={2} justifyContent={'end'}>
                                  <img src={eye} alt='aye' height={'70%'} style={{marginBlock:'5%'}} />
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

export default Table2