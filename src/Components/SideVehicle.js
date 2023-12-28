import React from 'react'
import { Box, Stack, Typography, Paper, Button, Link } from '@mui/material'
import i1 from '../Assests/Images/Icon1.png'
import i2 from '../Assests/Images/Icon2.png'
import i3 from '../Assests/Images/Icon3.png'
import i4 from '../Assests/Images/Icon4.png'
import i5 from '../Assests/Images/Icon5.png'
import i6 from '../Assests/Images/Icon6.png'
import i7 from '../Assests/Images/Icon7.png'

const SideVehicle = () => {
  return (
    <>
        <Box px={1}>
            <Stack direction={'column'} spacing={5}>
                <Typography variant='h1' fontSize={'5rem'} color={'#0155A5'} fontWeight={700}>
                    BPS
                </Typography>

                <Stack direction={'column'} spacing={1} width={1}>
                    <Option src={i1} alt='i1' text='Dashboard'/>
                    <Option src={i2} alt='i2' text='Manage Booking'/>
                    <Option src={i3} alt='i3' text='Manage Vehicle'/>
                    <Option src={i4} alt='i4' text='Manage Driver'/>
                    <Option src={i5} alt='i5' text='Manage Customer'/>
                    <Option src={i6} alt='i6' text='Manage User'/>
                    <Option src={i7} alt='i7' text='Report'/>
                </Stack>

                <Box>
                    <Paper sx={{borderRadius:5, bgcolor:'#0155A5', p:2}}>
                        <Stack direction={'column'} spacing={2}>
                            <Typography variant="body1" lineHeight={2} fontWeight={500} fontSize={'0.8rem'} color="white">
                                Organize your
                                bookings through button
                                bellow!
                            </Typography>

                            <Button sx={{bgcolor: '#F2F5F3', width:'fit-content',
                            textTransform:'none', px:2,
                            '&:hover':{
                                bgcolor:'#B6BBC4'
                            }}}> 
                                <Link href='#' underline='none' sx={{
                                    color:'#464255' 
                                }}>
                                    +Add Booking
                                </Link>
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
        </Box>
    </>
  )
}

const Option = (props) => {
  return (
    <>
        <Button sx={{p:0, textAlign:'left', textTransform:'none', borderRadius:3}}>
            <Link href='#' underline='none' p={0} width={1}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}
                    borderRadius={3} p={1}
                    sx={{  color:'#464255' ,'&:hover': {
                        bgcolor:'#C5FFF8',
                        color:'#0155A5'
                      }}}>
                    <img src={props.src}  alt={props.alt}/>
                    <Typography variant='h6' fontWeight={600} lineHeight={1.2} fontSize={'0.98rem'}>
                        {props.text}
                    </Typography>
                </Stack>
            </Link>
        </Button>
    </>
  )
}

export {Option}
export default SideVehicle
