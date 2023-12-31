import { React } from 'react'
import { Stack, Typography, Box, Grid, Card, Button } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'

import sett from '../Assests/Images/Group 148G148.png'
import trk from '../Assests/Images/icon Deliveredtrk.png'
import trks from '../Assests/Images/icon Deliveredtrks.png'
import fuel from '../Assests/Images/Icon_Orderfuel.png'

// let G = '';

const VechicleList = () => {

  return (
    <>
               <Box px={1}>
                   <Grid container columns={8} rowGap={1.2} mb={1}>
                       <VechicleCard
                       to='vehicle'
                      //  num = '1'
                       src={trk}
                       alt='trk'
                       h1='357'
                       p1='Available Vehicles'
                       p2='4% (30 days)' />

                       <VechicleCard
                       to='fuel'
                      //  num = '2'
                       src={fuel}
                       alt='fuel'
                       h1='102 L'
                       p1='Fuel Refill'
                       p2='4% (30 days)' />

                       <VechicleCard
                       to='Maintenance'
                      //  num = '3'
                       src={sett}
                       alt='setting'
                       h1='Rs 12800'
                       p1='Maintenance'
                       p2='25% (30 days)' />

                       <VechicleCard
                       to='totalVehicle'
                      //  num = '4'
                       src={trks}
                       alt='trucks'
                       h1='862'
                       p1='Total Vehicles'
                       p2='4% (30 days)' />

                   </Grid>
               </Box>
          <Outlet />
    </>
  )
}


const VechicleCard = (props) => {

  // const [flag, setFlag] = useState(true);
  
  // const handleClick = (e) => {

  //   if(G !== props.num) {
  //     setFlag(false);
  //     G = props.num;
  //   }  
  // }

  return (
    <>
        <Grid item lg={2} md={4} xs={8} px={1}>
          <Link to={props.to} underline='none' sx={{p:0, borderRadius:5}}>
            <Button sx={{p:0, textTransform:'none', width:1, borderRadius:5}}>
                <Card sx={{borderRadius:5, p:1.5, width:1, color:'white',
                  bgcolor: 'white',
                  // flag ? "white" : "#0155A5"
                  '&:hover': {
                    bgcolor:'#0155A5'
                  } ,
                  height:'100%'
                }}>
                    <Stack direction={'row'} spacing={1.3}>
                          <img src={props.src} alt={props.alt} style={{zIndex:2}} />
                       
                        <Stack direction={'column'} textAlign={'start'} justifyContent={'space-between'}>
                            <Box>
                              <Typography variant="h5" fontSize={'1.3rem'} color={'#464255'} fontWeight={600} sx={{mb:'4px'}}>
                                  {props.h1}
                              </Typography>
                              <Typography color={'#464255'} fontSize={'0.9rem'} fontWeight={500} lineHeight={1.1}>
                                  {props.p1}
                              </Typography>
                            </Box>
                            <Typography fontSize={'0.8rem'} color={'#A3A3A3'} fontWeight={400}>
                                {props.p2}
                            </Typography>
                        </Stack>
                    </Stack>
                </Card>
            </Button>
          </Link>  
        </Grid>
    </>
  )
}

export { VechicleCard }
export default VechicleList
