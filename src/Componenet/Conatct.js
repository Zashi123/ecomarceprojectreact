import { Button, Box, Card, CardActionArea, Container, Grid, Icon, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import p1 from "../images/p1.jpg"
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Footer from './Footer';
import { margin, padding, style } from '@mui/system';
import { TextFields } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import Image from '../images/nature.jpg'; // Import using relative path




const useStyles = makeStyles((theme) => ({
  conatiner:{
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    color: 'white',
     height: 600,
    
  },
 main2:{
      display: 'flex',
     justifyContent: 'space-between',
  
 },
  main: {
   
 
    // textAlign: 'centre',
    marginTop: theme.spacing(5),
    // marginTop:theme.spacing(2)


  },

  txtbox:{
    // display:'flex',
    // // padding: theme.spacing(1),
    // flexDirection:'colum'

  }


}))


const Conatct = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.conatiner} >
      <Container maxWidth='md'  className={classes.main} > 

        <Grid container spacing={2}    className={classes.main2} >

          <Grid  xs={5} lg={5}   sm={5} md={5} >
            <Typography variant='h4'>Contact us here</Typography>
            <Typography>
              As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
            </Typography>

            <Box   className={classes.txtbox}>
              <IconButton><LocationOnIcon /></IconButton>
            <Typography>Address</Typography> <br/>
              <Typography> +254 46693580</Typography>
            </Box >

            <Box>
              <IconButton><PhoneAndroidIcon /></IconButton>
              <Typography>Address</Typography>
              <Typography> +254 46693580</Typography>
            </Box >

            <Box >
              <IconButton><EmailIcon /></IconButton>
              <Typography>Address</Typography>
              <Typography> +254 46693580</Typography>
            </Box >


          </Grid>

          





          <Grid  xs={5} lg={5} sm={5} md={5}>
            <Typography variant='h4'>Leave A Comment</Typography>
            <form>
              <Grid container spacing={2} style={{ maxWidth: 600 }} >

                <Grid item  sm={12} md={6}    style={{ maxWidth: 600,color:'red' }} >
                  <TextField
                    label='Name'
                    placeholder='Entre your name'
                    variant='outlined'
                    size='small'
                    required
       
                  ></TextField>
                </Grid>


                <Grid item sm={12} md={6} >
                  <TextField
                    label='Email'
                    placeholder='Entre your email'
                    variant='outlined'
                    size='small'
                    required
                  ></TextField>
                </Grid>



                <Grid item sm={12} md={6} >
                  <TextField
                    label='phone'
                    placeholder='Entre phone number'
                    variant='outlined'
                    size='small'
                    required
                  ></TextField>
                </Grid>

                <Grid item sm={12} >
                  <TextField
                    label='Massage'
                    placeholder='Entre your masassage'
                    variant='outlined'
                    // size='small'
                    fullWidth
                    multiline rows={6}
                  ></TextField>
                </Grid>

                <Grid item sm={12}>
                  <Button
                    label='submit'
                    variant='contained'
                    // color='primary'

                    fullWidth
                    required
                  >  submit</Button>
                </Grid>
              </Grid>
            </form>

          </Grid>

        </Grid>
        {/* <Grid className={classes.main}>

          <Grid>
            <Typography variant='h4'>Contact us here</Typography>
            <text>As you might expect of a company that began as a high-end  <br />
              interiors contractor, we pay strict attention.</text> <br />
            <Grid container spacing={2} className={classes.contact}>
              <Grid item sm={12} md={6} >
                <IconButton><LocationOnIcon /></IconButton>
                <wrapper>Adrees</wrapper>
                <Typography> +254 46693580</Typography>
              </Grid>
             
            </Grid>
            <Grid container spacing={2} className={classes.contact}>

              <Grid item sm={12} md={6} >
                <IconButton><PhoneAndroidIcon /></IconButton>
                <wrapper>Phone</wrapper>
                <Typography> +254 46693580</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.contact}>
              <Grid item sm={12} md={6} >
                <IconButton><EmailIcon /></IconButton>
                <wrapper>Email</wrapper>
                <Typography> nastehoyusu19@gmail.com</Typography>
              </Grid>
            </Grid>
          </Grid>



          <div className={classes.dheex}>


            <Typography variant='h4'>Leave A Comment</Typography>
            <form>
              <Grid container spacing={2} style={{ maxWidth: 600 }} >

                <Grid item sm={12} md={6} >
                  <TextField
                    label='Name'
                    placeholder='Entre your name'
                    variant='outlined'
                    size='small'
                    required
                  ></TextField>
                </Grid>


                <Grid item sm={12} md={6} >
                  <TextField
                    label='Email'
                    placeholder='Entre your email'
                    variant='outlined'
                    size='small'
                    required
                  ></TextField>
                </Grid>



                <Grid item sm={12} md={6} >
                  <TextField
                    label='phone'
                    placeholder='Entre  phone number'
                    variant='outlined'
                    size='small'
                    required
                  ></TextField>
                </Grid>

                <Grid item sm={12} >
                  <TextField
                    label='Massage'
                    placeholder='Entre your masassage'
                    variant='outlined'
                    // size='small'
                    fullWidth
                    multiline rows={6}
                  ></TextField>
                </Grid>

                <Grid item sm={12}>
                  <Button
                    label='submit'
                    variant='contained'
                    // color='primary'

                    fullWidth
                    required
                  >  submit</Button>
                </Grid>
              </Grid>
            </form>

          </div>

        </Grid> */}
      </Container><br /> <br />

      <Footer />
     


    </Paper>
  )
}

export default Conatct