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
    // background: "blue",
    minHeight: "28rem",
    // justifyContent: "center",
    // textAlign: "center"
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    // justifyContent: "center",
    color: theme.palette.text.secondary,
    
    // background: "orange"
  },
  typo:{
    textTransform: 'uppercase'
  }
}));

const FrontPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {['hats', 'jackets', 'sneakers'].map(value => (
          <Grid key={value} item xs={12} sm={4} >
            <Paper elevation={12}>
            <Grid container className={classes.container} justify="center" alignItems="center">
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

        {['womens', 'mens'].map(value => (
          <Grid key={value} item xs={12} sm={6}>
            <Paper elevation={12}>
            <Grid container className={classes.container} justify="center" alignItems="center">
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

export default FrontPage;
