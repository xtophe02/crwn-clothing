import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

import { SimpleAppBar } from './SimpleAppBar';
import { Copyright } from './Copyright';

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <SimpleAppBar />
      {children}

      <Copyright />
    </Paper>
  );
};
