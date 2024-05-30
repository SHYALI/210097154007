import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductDetail = ({ product }) => {
  return (
    <Card>
      <CardMedia
        image={`https://picsum.photos/500?random=${product.id}`}
        title={product.name}
        style={{ height: 300 }}
      />
      <CardContent>
        <Typography variant="h4" component="h2">
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
        <Typography variant="body2" component="p">
          Description: {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
