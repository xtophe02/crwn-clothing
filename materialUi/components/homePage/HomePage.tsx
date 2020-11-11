import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { sections } from '../../src/directory.data';
import { CardHome } from './CardHome';

const useStyles = makeStyles({
  root: {
    padding: 50,
  },
});

export const HomePage = () => {
  const classes = useStyles(sections);
  return (
    <Grid container spacing={3} className={classes.root}>
      {sections.slice(0, 3).map((sec) => (
        <Grid key={sec.id} item sm={4} xs={12}>
          <CardHome {...sec} />
        </Grid>
      ))}
      {sections.slice(3, 6).map((sec) => (
        <Grid key={sec.id} item sm={6} xs={12}>
          <CardHome {...sec} />
        </Grid>
      ))}
    </Grid>
  );
};
