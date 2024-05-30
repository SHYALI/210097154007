import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        image={`https://picsum.photos/200?random=${product.id}`}
        title={product.name}
        style={{ height: 140 }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography color="textSecondary">
          {product.company} - {product.category}
        </Typography>
        <Typography variant="body2" component="p">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" component="p">
          Rating: {product.rating} Stars
        </Typography>
        <Typography variant="body2" component="p">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" component="p">
          Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
