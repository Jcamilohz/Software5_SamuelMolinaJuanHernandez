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


export const getAllCardProducts = () => {
  return products.filter(product => product.card);
}

export const getTotalCartPrice = () => {
  const cartProducts = getAllCardProducts();

  return cartProducts.reduce((total, product) => {
    const productPrice = product.discount > 0 ? product.discountPrice : product.price;
    const shippingCost = product.shippingCost;

    return total + productPrice + shippingCost;
  }, 0); 
}

export const getAllFavoriteProducts = () => {
  return products.filter(product => product.favorite);
}

export const getTotalFavoritePrice = () => {
  const favoriteProducts = getAllFavoriteProducts();

  return favoriteProducts.reduce((total, product) => {
    const productPrice = product.discount > 0 ? product.discountPrice : product.price;
    const shippingCost = product.shippingCost;

    return total + productPrice + shippingCost;
  }, 0); 
}

export const getAllDiscountedProducts = () => {
  return products.filter(product => product.favorite);
}

export const getAllRecommendedProducts = () => {
  return products.filter(product => product.recommended);
}

export const getAllFreeShippingProducts = () => {
  return products.filter(product => product.freeShipping);
}

export const searchProductsByName = (query) => {
  return products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}
