import React from "react";
import logo from "../../Assets/logo.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navbarStyles";

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="JBL Sellr"
              height="35px"
              className={classes.image}
            />
            JBL Sellr
          </Typography>

          <div className={classes.grow}> </div>

          <div className={classes.button}>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={5} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
