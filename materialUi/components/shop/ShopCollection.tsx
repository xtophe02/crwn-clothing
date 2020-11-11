import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { ShopCard } from './ShopCard';
// import Image from 'next/image';

const useStyles = makeStyles({
  root: {
    // marginTop: 50,
  },
});

export const ShopCollection = ({ title, items }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: 50 }}>
      <Typography variant='h3' gutterBottom className={classes.root}>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={3}>
            <ShopCard {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
