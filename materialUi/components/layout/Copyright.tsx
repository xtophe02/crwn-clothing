import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(4, 0),
  },
}));
export function Copyright() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant='h6' align='center' gutterBottom>
          Crown Clothing
        </Typography>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <MuiLink color='inherit' href='https://material-ui.com/'>
            Christophe Moreira
          </MuiLink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </footer>
  );
}
