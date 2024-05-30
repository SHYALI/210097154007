import React from 'react';
import { TextField, Button, Select, MenuItem } from '@material-ui/core';

const FilterBar = ({ setFilters }) => {
  const handleFilterChange = (event) => {
    setFilters(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div>
      <TextField label="Category" name="category" onChange={handleFilterChange} />
      <TextField label="Company" name="company" onChange={handleFilterChange} />
      <Select name="rating" onChange={handleFilterChange}>
        <MenuItem value="">All Ratings</MenuItem>
        <MenuItem value="1">1 Star</MenuItem>
        <MenuItem value="2">2 Stars</MenuItem>
        <MenuItem value="3">3 Stars</MenuItem>
        <MenuItem value="4">4 Stars</MenuItem>
        <MenuItem value="5">5 Stars</MenuItem>
      </Select>
      <TextField label="Min Price" name="minPrice" type="number" onChange={handleFilterChange} />
      <TextField label="Max Price" name="maxPrice" type="number" onChange={handleFilterChange} />
      <Select name="availability" onChange={handleFilterChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="available">Available</MenuItem>
        <MenuItem value="unavailable">Unavailable</MenuItem>
      </Select>
      <Button onClick={() => setFilters({})}>Clear Filters</Button>
    </div>
  );
};

export default FilterBar;
