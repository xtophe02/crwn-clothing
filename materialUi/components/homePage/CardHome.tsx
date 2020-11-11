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
    // maxWidth: 345,
  },
  media: (props) => ({
    height: props.size ? 340 : 240,
    transition: 'transform .5s',
    '&:hover': {
      transform: 'scale(1.5)',
    },
  }),
});

export function CardHome(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <div style={{ overflow: 'hidden' }}>
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title='Contemplative Reptile'
          />
        </div>
        <CardContent>
          <Typography variant='h5' component='h2' align='center'>
            {props.title.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
