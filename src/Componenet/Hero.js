import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Course = (props) => {
  const {id, image, title, description} = props
  return (
    <Card sx={{ maxWidth: '100%' }} /* style={{boxShadow: 'none'}} */>
      <CardActionArea>
        <CardMedia
          component="img"
          maximum height="300"
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See more
        </Button>
      </CardActions>
    </Card>
  );
  
}

export default Course
