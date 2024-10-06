import React from 'react';
import { ProductProvider } from './ProductProvider';
import { CartProvider } from './CartProvider';
import { UserProvider } from './UserContext';
import { FavoritesProvider } from './FavoriteProvider'; 

const AppProvider = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>
        <UserProvider>
          <FavoritesProvider> 
            {children}
          </FavoritesProvider>
        </UserProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default AppProvider;
