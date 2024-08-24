import productPaidData from '../data/ProductPaidData';
import { getProductById } from './ProductController';

export const getPaidProductsByPersonId = (personId) => {
    return productPaidData.filter(productPaid => productPaid.personId === personId)
        .map(productPaid => {
            const product = getProductById(productPaid.productId);
            return { ...product, status: productPaid.status };
        });
};
