import React from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Hero from '../Componenet/Hero'
import p1 from "../images/p1.jpg"
import p2 from "../images/p2.jpg"
import p3 from "../images/p3.jpg"
import p4 from "../images/p4.jpg"
import p6 from "../images/p6.jpg"
import p7 from "../images/p7.jpg"
import Footer from '../Componenet/Footer';
// import Proudact from '../Componenet/proudact';
// import { styled } from '@mui/material/styles';



const useStyles = makeStyles((theme) => ({
  coursesContainer:{
   marginTop: theme.spacing(5),
   padding: theme.spacing(5)
  },
  aboutContainer:{
    '&&': {
      background: theme.palette.secondary.light,
      padding: theme.spacing(5),
      // borderRadius:'50%'
      zIndex:'2'
    }
  },
  hero:{
    marginTop: theme.spacing(5),
    
  }
}))

const Proudact = ()=> {
    const classes = useStyles()
  return (
    <div>

        
<Paper className={classes.coursesContainer}>
        <Container maxWidth="lg">
          <Grid container spacing={2} className={classes.midd}>
              <Grid item sm={12} md={3}>
        
                    <Hero
      
                      id={123}
                      title="Web development"
                      description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                      image={p1}
                    />
                </Grid>
                <Grid item sm={12} md={3}>
                    <Hero
                      id={123}
                      title="Web development"
                      description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                      image={p2}
                    />
                </Grid>
                <Grid item sm={12} md={3}>
                    <Hero
                      id={123}
                      title="Web development"
                      description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                      image={p3}
                    />
                </Grid>
                <Grid item sm={12} md={3}>
                    <Hero
                      id={123}
                      title="Web development"
                      description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                      image={p4}
                    />
                </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p6}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p6}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p7}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p7}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p1}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p1}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p1}
                  />
              </Grid>
              <Grid item sm={12} md={3}>
                  <Hero
                    id={123}
                    title="Web development"
                    description= "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    image={p1}
                  />
              </Grid>
          </Grid>
        </Container>
      </Paper>
        
    </div>
  )
}

export default Proudact