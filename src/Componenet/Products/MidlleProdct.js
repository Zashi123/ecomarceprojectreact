import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography, CardActions, Box, Container } from '@mui/material'
import React from 'react'
import theme from '../../Theme';
import { makeStyles } from '@mui/styles';
import   p19 from '../../images/p19.png'
import { padding } from '@mui/system';
import '../../App.css';

 



const useStyles = makeStyles((theme) => ({
  // box:{
  //   display:'flex',
  //   justifyContent:'centre',
  //  textAlign:'centre',

  // },
  main:{
      marginTop: theme.spacing(5),
       margin: theme.spacing(2),

    // padding:theme.spacing(2)
  
    // btn: {
    //   display:'none'
    // }
  },
  // cont: {
  //   '&': {
  //     display: 'flex',
  //     justifyContent: 'space-between',

  //     // alignItems:'centre', 
  //     position: 'relative',

  //   },
  


  //   // margin: theme.spacing(2)

  // }

}))

function MidlleProdct() {
  const classes=useStyles()
  return (
    <Container  maxWidth='lg' className='container' >

   <Grid  container spacing={1}>
  <Grid  sm={3} md={3} lg={3} className='main'>
  <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={p19}
              alt="green iguana"
            />
          </CardActionArea>
            <CardActions  className='btn'>
            <Button size="lg" color="secondary"  >
              buy now
            </Button>
            </CardActions>
       
        </Card>




    </Grid>


{/* 
    <Grid className={classes.main}    sm={3} md={3} lg={3}>
  <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={p1}
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions >
            <Button size="small" color="secondary">
              see more
            </Button>
          </CardActions>
        </Card>




    </Grid> */}


    {/* <Grid className={classes.main}    sm={3} md={3} lg={3}> 
  <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia style={{width:'400'}}
              component="img"
              height="350"
              image={p1}
              alt="green iguana"
            />
          </CardActionArea>
          <CardActions >
            <Button size="small" color="secondary">
              see more
            </Button>
          </CardActions>
        </Card>




    </Grid> */}
      </Grid>



    </Container>
  )
}

export default MidlleProdct