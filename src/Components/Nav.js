import React from 'react'
import { Box, Stack, Typography, TextField, IconButton, Link } from '@mui/material'
import pic from '../Assests/Images/placeholderpic.png'
import sms from '../Assests/Images/Group 1171275085sms.png'
import set from '../Assests/Images/Group 1171275084setting.png'
import bell from '../Assests/Images/Group 1171275084setting.png'

const Nav = () => {
  return (
    <>
        <Box p={2}>
            <Stack direction={'row'} spacing={3} alignItems={'center'}>
                <Box flexGrow={1}>
                    <TextField variant='outlined' placeholder='Enter here' 
                    InputProps={{ sx: { borderRadius: 3 } }}
                    sx={{ width:1}} />
                </Box>

                <Stack direction={'row'} display={{md:'flex', xs:'none'}} spacing={2} alignItems={'center'}>
                    <Link href="#"><img src={bell} alt='bell' /></Link>
                    <Link href="#"><img src={sms} alt='sms' /></Link>
                    <Link href="#"><img src={set} alt='setting' /></Link>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    <Typography variant="body1">Hello, <span style={{fontWeight:600}}>
                        Samantha</span>
                    </Typography>
                    <IconButton><img src={pic} alt='pic' /></IconButton>
                </Stack>
            </Stack>
        </Box>
    </>
  )
}

export default Nav