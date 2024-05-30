import axios from 'axios';

const API_BASE_URL = 'http://testserver.com/api';

export const getProducts = async (category, company, filters) => {
  
  const response = await axios.get(`${API_BASE_URL}/products`, {
    params: { category, company, ...filters }
  });
  return response.data;
};

export const getProductDetails = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};
