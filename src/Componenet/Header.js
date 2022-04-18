import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
 import { useTheme } from '@emotion/react';
import MobileNavbar from './MobileNavbar';
import {  Button, useMediaQuery } from '@mui/material';
// import { fontSize } from '@mui/system';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { IconButton} from '@mui/material';
import SearchBox from './SearchBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },

  link:{
    color: 'white',
    padding: theme.spacing(1.5),
    fontSize: theme.spacing(1.8),
    textDecoration: 'none',
    '&:hover':{
      color: theme.palette.secondary.dark
    },
    // '&&':{
    //   width:'1'
    // }
  },
  serach: {
    color:'white',
  },
  iconbutton:{
    // color:'white'
    color: theme.palette.secondary.dark
    

  }

}))


const Header = () => {
  const classes = useStyles()
  const theme=useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>
   
    <AppBar position="static " sx={{ flexGrow: 1 }}>

      <Container maxWidth="xl" >
        <Toolbar disableGutters className={classes.toolbar}>
          <Typography>
            Samaha
          </Typography>
          
          {
            isTablet ? (
              <></>
              ):(
              <SearchBox/>
            )
          }
            {isMobile ? (
          <MobileNavbar/> 
          ):(
              <div>
                  <Link to="/" className={classes.link}> Home </Link>
                  <Link to="/conatct" className={classes.link}> Contact </Link>
                  <Link to="/register" className={classes.link}> Log in </Link>
                  <Link to="/singup" className={classes.link}> sing up </Link>
              </div>
            )}
      
           {/* <IconButton className={classes.iconbutton}>  <  ShoppingCartIcon/></IconButton>
           */}
        </Toolbar>
      </Container>
    
            

     
    </AppBar>

    </div>

 
  );


};
export default Header;