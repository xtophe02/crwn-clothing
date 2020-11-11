import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 320,
  },
  media: {
    height: 240,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export function ShopCard({ name, imageUrl, price }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography variant='h6'>{name}</Typography>
          <Typography variant='h6'>${price}</Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title='Contemplative Reptile'
        />
      </CardActionArea>
      <CardActions>
        <Button fullWidth color='primary'>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
