import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./productsStyle";
// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png",
//   },
//   {
//     id: 2,
//     name: "MacBook",
//     description: "Apple MacBook",
//     price: "$10",
//     image:
//       "https://freepngimg.com/thumb/macbook/28586-4-macbook-transparent.png",
//   },
// ];
const Products = ({ products }) => {
  const classes = useStyles();
  return (
    <main>
      <Grid container justify="center" spacing={6} className={classes.main}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
