import {createAction} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';
import {SubCategory} from '../../shared/categories/sub-category.interface';

export enum ActionTypes {
    AddProducts = '[Products] Add products',
    LoadProducts = '[Products] Load products',
}

export const addProducts = createAction(
    ActionTypes.AddProducts,
    (products: Product[]) => ({products}), // paramsFn
);

// addProducts([...]) => {type: ActionTypes.AddProducts, ...paramsFn([...])}

export const loadProducts = createAction(
    ActionTypes.LoadProducts,
    (subCategoryId?: SubCategory['_id'] | null) => ({subCategoryId}),
);
