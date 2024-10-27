import React from 'react';
import { ProductProvider } from './ProductProvider';
import { CartProvider } from './CartProvider';
import { UserProvider } from './UserContext';
import { FavoritesProvider } from './FavoriteProvider'; 
import { CommentProvider } from './CommentProvider';

const AppProvider = ({ children }) => {
  return (
    <ProductProvider>
        <UserProvider>
        <CartProvider>
          <FavoritesProvider> 
            <CommentProvider>
            {children}
            </CommentProvider>
          </FavoritesProvider>
      </CartProvider>
      </UserProvider>
    </ProductProvider>
  );
};

export default AppProvider;
