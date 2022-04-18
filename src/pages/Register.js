import { Button, Card, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { margin } from '@mui/system';
import { CardActions, CardContent } from '@material-ui/core';
import Footer from '../Componenet/Footer';


const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    '&&': {
      // background: theme.palette.primary.main,
      padding: theme.spacing(5),
      // width:theme.spacing(100)
        textAlign:'center',
   
     
    },
    main:{

      
    }

  },
}))
const Register= () =>{
  const classes = useStyles()
  return (
    <Paper   >
            <Container   maxWidth="lg"       className={classes.aboutContainer}>
                  <Grid>
                <Typography>CREATE AN ACCOUNT</Typography>
                <Card  style={{ maxWidth: 500, margin:'0 auto', padding:"20px 5px" }} className={classes.main}>
                <CardContent>
              
              <Grid container spacing={2}>
                <Grid  item   xs={6} sm={12} md={6} >
                  <TextField
                    label='Name'
                    placeholder='Entre your name'
                    variant='outlined'
                    size='small'
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid item   xs={6} sm={12} md={6} >
                  <TextField
                    label='Last Name'
                    placeholder='last name'
                    variant='outlined'
                    size='small'
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid item  xs={6} sm={12} md={6} >
                  <TextField
                    label='surname'
                    placeholder='Entre your surenma'
                    variant='outlined'
                    size='small'
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                <Grid item   xs={6} sm={12}  md={6} >
                  <TextField
                    label='Email'
                    placeholder='Entre your email'
                    variant='outlined'
                    size='small'
                    fullWidth
                    required
                  ></TextField>
                </Grid>

                

                <Grid item  xs={6} sm={12}  md={6}>
                  <TextField
                    label=' Password'
                    placeholder='Entre your password'
                    variant='outlined'
                    // size='small'
                    fullWidth
                    required
                  
                    // multiline rows={6}
                  ></TextField>
                </Grid>

                
                <Grid item   xs={12} sm={12}  md={6}>
                  <TextField
                    label=' Confarm Password'
                    placeholder='confrm your password'
                    variant='outlined'
                    // size='small'
                    fullWidth
                    required
                  
                    // multiline rows={6}
                  ></TextField>
                </Grid>

                <Grid item   xs={6} sm={12}>
                  <Button
                    label='submit'
                    variant='contained'
                    // color='primary'
                    fullWidth
              
                  >  CREATE</Button>
                </Grid>
              </Grid>
         
           </CardContent >
            </Card>

            </Grid>
            </Container>

            <Footer/>
           
          </Paper>
  
  )
}

export default Register