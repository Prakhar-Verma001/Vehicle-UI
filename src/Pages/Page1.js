import React from 'react'
import { Grid } from '@mui/material'
import SideVehicle from '../Components/SideVehicle'
import Combo from '../Components/Combo'
import { Footer } from '../Components/Footer'

const Page1 = () => {
  return (
    <> 
        <Grid container>
            <Grid item lg={2} display={{lg:'block', xs:'none'}}>
                <SideVehicle />
            </Grid>
            <Grid item lg={10} xs={12}>
                <Combo />
            </Grid>
        </Grid>
        <Footer />
    </>
  )
}

export default Page1