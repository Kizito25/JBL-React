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
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navbarStyles";

function Navbar({ cartTotalItems }) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="JBL React Shop"
              height="35px"
              className={classes.image}
            />
            JBL React Shop
          </Typography>

          <div className={classes.grow}> </div>
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show Cart Items"
              color="inherit"
            >
              <Badge badgeContent={cartTotalItems} color="secondary">
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
