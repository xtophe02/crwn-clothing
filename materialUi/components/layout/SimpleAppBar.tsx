import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
// import Link from '../../src/Link';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // padding: 20,
      paddingTop: 40,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' color='transparent' elevation={0}>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <AlternateEmailOutlinedIcon color='primary' />
          </IconButton> */}
          <Link href='/'>
            <div className={classes.title}>
              {' '}
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
              >
                <HomeOutlined style={{ fontSize: 50 }} />
              </IconButton>
            </div>
          </Link>
          <Link href='/shop'>
            <Button size='large' color='inherit'>
              Shop
            </Button>
          </Link>
          <Button size='large' color='inherit'>
            Contact
          </Button>
          <Button size='large' color='inherit'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
