import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState, productsFeature} from './products.state';

// export const productsFeatureSelector = (state: State) => state[productsFeature];
export const productsFeatureSelector = createFeatureSelector<ProductsState>(productsFeature);

// export const productsDataSelector = (state: State) => productsFeatureSelector(state).data;
export const productsDataSelector = createSelector(
    productsFeatureSelector,
    productsState => productsState.data, // projector
);
// export const productsDataSelector = (state: State) => projector(productsFeatureSelector(state));
// export const productsDataSelector = createSelector(
//     productsFeatureSelector,
//     userFeatureSelector,
//     (productsState, userState) => productsState.data, // projector
// );
// export const productsDataSelector = (state: State) => projector(productsFeatureSelector(state), userFeatureSelector(state));
