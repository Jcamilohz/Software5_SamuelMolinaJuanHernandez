import products from '../data/ProductData';




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
    product.name.includes(query) ||
    product.categories.includes(query)
  );
}
