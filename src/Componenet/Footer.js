import { collapseClasses, Container, Grid, IconButton, iconButtonClasses, List, ListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { MailOutline, Phone, } from '@material-ui/icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';


const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    '&&': {
      background: theme.palette.primary.main,
      padding: theme.spacing(5),
      // width:theme.spacing(100)
      color: 'white'


    }

  },

  main2: {
    display: 'flex',
   justifyContent: 'space-between',
    //  marging:theme.spacing(2),
    // font: 'bold',
    // FlexDirection:'column'

  },

  // IconButton:{
  //     '&&':{
  //       background:theme.palette.secondary.dark,
  //       // padding: theme.spacing(5)
  //     }

  //   },

  ListItem: {
    // flex:1,
    // flexWrap:'wrap',
    // color:'red',
    //  display: 'flex',
    // flex:3,
  

    //  flexWrap: 'wrap-reverse',
    // p: 1,
    // m: 1,
    // bgcolor: 'background.paper',
    // maxWidth: 300,
    // borderRadius: 1,



  },
  IconButton: {
    color: 'wheat'
  }








}))


function Footer() {

  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.aboutContainer}>
        <Container maxWidth='lg '>
          <Grid container className={classes.main2}>
            <Grid item xs={12} sm={6} md={3}  lg={3}>
              <Typography>
                ZASHI Fashion
              </Typography>
              <Typography>
                The customer is at the heart of our unique <br />  business model,which includes design.
              </Typography> <br />


              <socialicon>
                <socialicon color="3B5999">
                  <FacebookIcon />
                </socialicon>
                <socialicon color="E4405F">
                  <InstagramIcon />
                </socialicon>
                <socialicon color="55ACEE">
                  <TwitterIcon />
                </socialicon>

              </socialicon>

              {/* <IconButton>
                <FacebookIcon/>
              </IconButton>
              <IconButton>
                <InstagramIcon/>
              </IconButton>
              <IconButton>
                <TwitterIcon/>
              </IconButton> <br/> */}
            </Grid>



            <Grid item xs={12} sm={6} md={3}  lg={3}>

              <Typography>Useful Links</Typography>
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                {/* <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem> */}
              </List>
            </Grid>

            <Grid  item  xs={12} sm={6} md={3}  lg={3}>
              <Box>
              <Typography>Contact</Typography>
              <Typography>
                <Phone /> +542 44493580
              </Typography> <br />
              <Typography>
                <MailOutline /> nastehoyusuf19@gmail.com
              </Typography> <br />

              <Typography>
                <LocationOnIcon /> contact@lama.dev
              </Typography>
              </Box>
            </Grid>



              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Typography>
                  About us
                </Typography>
              </Grid>
            

          </Grid>

        </Container>
      </Paper>


    </div>
  )
}

export default Footer