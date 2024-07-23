import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
// import {Store} from '@ngrx/store';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {addProducts, loadProducts} from './products.actions';
// import {State} from '../state';

@Injectable()
export class ProductsEffects {
    private readonly action$ = inject(Actions);
    private readonly productsApiService = inject(ProductsApiService);
    // private readonly store = inject<Store<State>>(Store);

    // loadProducts$ = createEffect(
    //     () =>
    //         this.action$.pipe(
    //             // filter(action => action.type === loadProducts.type)
    //             ofType(loadProducts),
    //             switchMap(({subCategoryId}) =>
    //                 this.productsApiService.getProducts$(subCategoryId).pipe(
    //                     tap(products => {
    //                         this.store.dispatch(addProducts(products));
    //                     }),
    //                 ),
    //             ),
    //         ),
    //     {dispatch: false},
    // );
    loadProducts$ = createEffect(
        () =>
            this.action$.pipe(
                // filter(action => action.type === loadProducts.type)
                ofType(loadProducts),
                switchMap(({subCategoryId}) =>
                    this.productsApiService
                        .getProducts$(subCategoryId)
                        .pipe(map(products => addProducts(products))),
                ),
            ),
        {dispatch: true},
    );
}
