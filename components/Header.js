import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Menu, Home, ShoppingCart} from '@material-ui/icons/';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '8rem'
  },
  menuButton: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  color:{
    backgroundColor: blueGrey[100]
  }
}));

const PostLink = props => (
  
    <Link href={`/${props.title}`} as={`/${props.title}`} >
      <Button color='primary'>{props.title}</Button>
    </Link>
  
);

const Header =()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.color}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color='primary' aria-label="menu">
            <Menu />
          </IconButton> */}
          <Typography variant="h6" className={classes.title} color='primary'>
          <Link href='/'>
          <IconButton edge="start" className={classes.menuButton} color='primary' aria-label="menu">
            <Home fontSize="large"/>
          </IconButton>
          </Link>
          </Typography>
          <PostLink title="shop" />
          <PostLink title="contact" />
          <PostLink title="sign in" />
          <Link href='/'>
          <IconButton edge="start" className={classes.menuButton} color='primary' aria-label="menu" >
            <ShoppingCart />
          </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header