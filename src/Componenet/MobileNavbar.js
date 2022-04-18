import * as React from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, Divider, Box, List, ListItem, ListItemText, Link } from '@mui/material';
import SearchBox from './SearchBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  box: {
    background: theme.palette.primary.main,
    height: '100vh',
    width: theme.spacing(20),
    '&&':{
      paddingTop: theme.spacing(5),
    }

  },
  link:{
    '&&':{
      color: 'white',
    },
    padding: theme.spacing(1),
    fontSize: theme.spacing(1.8),
    textDecoration: 'none',
    cursor: 'pointer',
   '&:hover':{
      background: theme.palette.secondary.light,
      color: 'black'
    }
  },
  icon: {
    '&&':{
      color: 'white',
    }
  },
  search:{
    marginLeft: 15,
  },
}))

const MobileNavbar = () => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = React.useState(false)

  return (
    <>
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
       anchor='right'
    >
      <Box className={classes.box}>
        <List>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/" className={classes.link}> Home </Link>
                </ListItemText>
              </ListItem >
              <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/conatct" className={classes.link}> Contact </Link>
                </ListItemText>
              </ListItem >
              <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/register" className={classes.link}> Register </Link>
                </ListItemText>
              </ListItem >
              <Divider/>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/singup" className={classes.link}> sing in </Link>
                </ListItemText>
              </ListItem >
              <Divider/>
        </List>
        <Box className={classes.search}>
          <SearchBox/>
        </Box>
        
       {/* <IconButton className={classes.iconbutton}>  <  ShoppingCartIcon/></IconButton>  */}
     </Box>
    </Drawer>
      <IconButton onClick={() => {setOpenDrawer(!openDrawer)}} className={classes.icon} >
        <MenuIcon />
    </IconButton>
  </>
  );
}

export default MobileNavbar;