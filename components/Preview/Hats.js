import React from "react";
import { ShopContext } from "../../context/ShopProvider";

import { makeStyles, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Item from "./Item";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Hats = () => {
  const classes = useStyles();
  const shopItems = React.useContext(ShopContext);
  return (
    <Container className={classes.root}>
      <h1>{shopItems[0].title}</h1>

      <Grid container spacing={3}>
        {[0, 1, 2, 3].map(value => (
          <Grid key={value} item xs={12} sm={6} md={3}>
            <Item items={shopItems[0].items[value]} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Hats;
