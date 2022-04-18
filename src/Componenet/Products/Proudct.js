import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography, CardActions, Container } from '@mui/material'
import { Box, spacing } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
// import Prodactss from './Prodactss'
import { makeStyles } from '@mui/styles';
import theme from '../../Theme';


const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(5),
    // margin: theme.spacing(2),
   


  },
  cont: {
    '&': {
      display: 'flex',
      justifyContent: 'space-between',

      // alignItems:'centre', 
      position: 'relative',

    },
    btn: {
      alignItems: 'centre',
      position:'absolute',
      left:-10,

      '&&': {
        height: theme.spacing(5),
      },



    }


    // margin: theme.spacing(2)

  }

}))
const Proudct = ({p}) => {
  const classes = useStyles()
  return (

    <Paper className={classes.main}    style={{ boxShadow: 0}} >
    

      <Grid>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={p.imgp}
              alt="green iguana"
            />
            <CardContent>
              <Box className={classes.cont}>
                <Typography>
                  {p.desc}
                </Typography>
                {/* <Box>
              <Typography>{p.category}</Typography>
              </Box> */}
                <Typography>
                  {p.price}
                </Typography>

              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="small" color="primary" variant='contained' style={{}}>
              Buy Now
            </Button>
          </CardActions>
        </Card>

      </Grid>






   
    </Paper>
  )
}

export default Proudct