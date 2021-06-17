import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./productStyles";

const Product = ({ product, addToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        image={product.media.source}
        title={product.name}
        className={classes.media}
        alt={product.name}
      />

      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name.length >= 30
              ? product.name.slice(0, 30).toLowerCase()
              : product.name.toLowerCase()}
          </Typography>
          <Typography variant="h6" className={classes.cardPrice} gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{
            __html: `${product.description.slice(0, 50)} ...`,
          }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => addToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
