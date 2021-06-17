import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./productsStyle";

const Products = ({ products, addToCart }) => {
  const classes = useStyles();
  return (
    <main>
      <Grid container justify="center" spacing={6} className={classes.main}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
