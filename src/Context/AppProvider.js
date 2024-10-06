import React from 'react';
import { ProductIdProvider } from './ProductIdContext';
import { CartProvider } from './CartProvider';
import { UserProvider } from './UserContext';

const AppProvider = ({ children }) => {
  return (
    <ProductIdProvider>
      <CartProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </CartProvider>
    </ProductIdProvider>
  );
};

export default AppProvider;
