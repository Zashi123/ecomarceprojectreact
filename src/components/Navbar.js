import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  appbar: {
    '&&':{
      background: theme.palette.secondary.main
    },
  },
  toolbar:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  navlinks:{
    display: 'flex',
    '&&':{
      padding: 0
    }
  },
  link: {
    color: 'white',
    '&:hover':{
      background: theme.palette.secondary.light
    },
    '&&':{
      width: 'auto'
    }
  },
  logo: {
    color: 'white',
  },
}))

function Navbar() {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            Samaha
          </Typography>
          <List className={classes.navlinks}>
            <ListItem className={classes.link}>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemText>What we do</ListItemText>
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemText>Testimonials</ListItemText>
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemText>Gallery</ListItemText>
            </ListItem>
            <ListItem className={classes.link}>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar