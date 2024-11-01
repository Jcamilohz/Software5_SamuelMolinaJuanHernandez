import React from 'react';
import { ProductProvider } from './ProductProvider';
import { CartProvider } from './CartProvider';
import { UserProvider } from './UserContext';
import { FavoritesProvider } from './FavoriteProvider';
import { CommentProvider } from './CommentProvider';
import { QuestionProvider } from './QuestionProvider';
import { PurchaseProvider } from './ProductPaidProvider';
import { CategoryProvider} from './CategorieProvider';

const AppProvider = ({ children }) => {
  return (
    <ProductProvider>
      <UserProvider>
        <PurchaseProvider>
        <CartProvider>
          <FavoritesProvider>
            <CommentProvider>
              <QuestionProvider>
                <CategoryProvider>
                {children}
                </CategoryProvider>
              </QuestionProvider>
            </CommentProvider>
          </FavoritesProvider>
        </CartProvider>
        </PurchaseProvider>
      </UserProvider>
    </ProductProvider>
  );
};

export default AppProvider;
