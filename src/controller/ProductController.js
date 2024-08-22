import products from '../data/ProductData';

export const getDiscountedProducts = (limit = 5) => {
  
  const discountedProducts = products.filter(product => product.discount > 0);
  return discountedProducts.slice(0, limit);
};

export const getRecommendedProducts = (limit = 5 ) => {
  const recommendedProducts = products.filter(product => product.recommended);
  return recommendedProducts.slice(0, limit);
};

export const getFavoriteProducts = (limit = 5) => {
  const favoriteProducts = products.filter(product => product.favorite);
  return favoriteProducts.slice(0, limit);
};

export const getCardProducts = (limit = 5) => {
  const cardProducts = products.filter(product => product.card);
  return cardProducts.slice(0, limit);
}

export const getFreeShippingProducts = (limit = 5) => {
  const freeShippingProducts = products.filter(product => product.freeShipping);
  return freeShippingProducts.slice(0, limit);
}


export const getProductById = (productId) => {
  return products.find(product => product.id === productId);
}
