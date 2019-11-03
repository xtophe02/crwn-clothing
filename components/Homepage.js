import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    minHeight: "28rem",
    
    '& :hover':{
      transition: 'opacity 1s ease-out, transform 0.5s ease-out',
      transform: 'scale(1.2)',
      opacity: 1
      
    }
  
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    opacity: 0.7,
    cursor: 'pointer',
  },
  typo: {
    textTransform: "uppercase"
  }
}));

const Homepage = () => {
  const classes = useStyles();
  const images = {
    hats:
      "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    jackets:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    sneakers:
      "https://images.unsplash.com/photo-1526722085281-54220256ee34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    womens:
      "https://images.unsplash.com/photo-1498661367879-c2085689eed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    mens: "https://images.unsplash.com/photo-1467504057324-4c38f39ff87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {["hats", "jackets", "sneakers"].map(value => (
          <Grid key={value} item xs={12} sm={4} >
            <Paper
              elevation={12}
              style={{ background: `url(${images[value]}) no-repeat`, backgroundSize:'cover'}}
              
            >
              <Grid
                container
                className={classes.container}
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.paper} elevation={6}>
                  <Typography variant="h6" className={classes.typo}>
                    {value}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.typo}>
                    shop now
                  </Typography>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        ))}

        {["womens", "mens"].map(value => (
          <Grid key={value} item xs={12} sm={6}>
            <Paper
              elevation={12}
              style={{ background: `url(${images[value]}) no-repeat`, backgroundSize:'cover' }}
            >
              <Grid
                container
                className={classes.container}
                justify="center"
                alignItems="center"
              >
                <Paper className={classes.paper} elevation={6}>
                  <Typography variant="h6" className={classes.typo}>
                    {value}
                  </Typography>
                  <Typography variant="subtitle1" className={classes.typo}>
                    shop now
                  </Typography>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Homepage;
