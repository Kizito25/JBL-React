import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import useStyles from "./cartStyle";

function Cart({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const classes = useStyles();
  const isCartEmpty = !cart.total_items;

  const EmptyCart = () => (
    <Grid container spacing={3} className={classes.CartContainer}>
      <Typography variant="subtitle1">
        {" "}
        Empty Cart, Please add Items{" "}
        <Link to="/" className={classes.link}>
          {" "}
          add items to cart
        </Link>
      </Typography>
    </Grid>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3} className={classes.CartContainer}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQty={handleUpdateCartQty}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h6">
          {" "}
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout{" "}
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h5">
        Your Cart
      </Typography>
      {isCartEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
export default Cart;
