import {productsReducer} from './products/products.reducer';
import {productsFeature} from './products/products.state';

export const storeReducer = {
    [productsFeature]: productsReducer,
};
