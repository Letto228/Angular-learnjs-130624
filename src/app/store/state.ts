import {ProductsState, productsFeature} from './products/products.state';

export interface State {
    [productsFeature]: ProductsState;
}
