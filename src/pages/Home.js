import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Footer from '../Componenet/Footer';
import MidlleProdct from '../Componenet/Products/MidlleProdct';
import Prodactss from '../Componenet/Products/Prodactss';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';
import p1 from '../images/p1.jpg'


const useStyles = makeStyles((theme) => ({
  aboutContainer:{
    
    background: ` url(${p1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  height: '100vh',
  marginTop:theme.spacing(2)
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // position :'relative',
  },



}))



const  Home=()=> {

  const classes = useStyles()
  const theme=useTheme()
 
  return (
    <div> 
      <Paper className={classes.aboutContainer} style={{boxShadow:'none'}}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            
            </Grid>
          </Container>
        </Paper>

        <MidlleProdct/>
       <Prodactss/><br/>
      <Footer/>

    </div>
  )
}





export default Home
