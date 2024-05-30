import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts(filters.category, filters.company, filters);
      setProducts(result);
    };
    fetchData();
  }, [filters]);

  return (
    <div>
      <FilterBar setFilters={setFilters} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
