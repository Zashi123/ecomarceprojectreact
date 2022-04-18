import { Button, Card, CardContent, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import Footer from '../Componenet/Footer';
import { textAlign } from '@mui/system';

  const useStyles = makeStyles((theme) => ({
    aboutContainer: {
      '&&': {
        // background: theme.palette.primary.main,
        padding: theme.spacing(5),
        // width:theme.spacing(100)
             textAlign:'center',
            //  backgroundImage: `url(${'https://media.istockphoto.com/photos/portrait-of-young-afro-woman-with-bright-makeup-picture-id1331637318?b=1&k=20&m=1331637318&s=170667a&w=0&h=0i4Viz3mAqNm9Pz1b6tnUKqpp6zHQb_OvPFsnHSOUh4='})`,
            //  backgroundSize: 'cover',
         
     
       
      },
      // Link:{
      //   margin: theme.spacing(5),
      // }
    
  
    },
  }))

const Singup = () => {
  const classes = useStyles()
  return (
    <Paper>

    <Container    className={classes.aboutContainer} maxWidth='lg'  >
    
    <Typography variant='h4'>SIGN IN</Typography>
    <Card  style={{ maxWidth: 500, margin:'0 auto', padding:"20px 5px" }} className={classes.main}>
    <CardContent>
  <form>
  <Grid container spacing={2}>
    <Grid item  xs={12} sm={12} md={6} >
      <TextField
        label='username'
        placeholder='Entre your username'
        variant='outlined'
        size='small'
        fullWidth
        required
      ></TextField>
    </Grid>

    <Grid item   xs={12} sm={12} md={6} >
      <TextField
        label='Last Name'
        placeholder='last name'
        variant='outlined'
        size='small'
        fullWidth
        required
      ></TextField>
    </Grid>

    <Grid item  xs={12} sm={12}>
      <Button
        label='submit'
        variant='contained'
        // color='primary'
        fullWidth
  
      >  LOGIN</Button> 
    </Grid> <br/>

    <Grid  style={{margin:"15px", alignItems:'center'}} > 

    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> <br/>

    <Link>CREATE A NEW ACCOUNT</Link>
    </Grid>

  </Grid>
</form>
</CardContent >
</Card>



</Container>
<Footer/>
</Paper>


      // {/* <Wrapper>
      //   <Title>SIGN IN</Title>
      //   <Form>
      //     <Input placeholder="username" />
      //     <Input placeholder="password" />
      //     <Button>LOGIN</Button>
      //     <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
      //     <Link>CREATE A NEW ACCOUNT</Link>
      //   </Form>
      // </Wrapper> */}


  );
};

export default Singup;