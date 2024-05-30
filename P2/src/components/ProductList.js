import React from 'react';
import { Grid, Pagination } from '@material-ui/core';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  );
};

export default ProductList;
