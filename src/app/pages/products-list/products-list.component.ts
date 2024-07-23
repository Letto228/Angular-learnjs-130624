import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';
import {BrandsService} from '../../shared/brands/brands.service';
import {State} from '../../store/state';
import {productsDataSelector} from '../../store/products/products.selectors';
import {loadProducts} from '../../store/products/products.actions';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    // private readonly productsStoreService = inject(ProductsStoreService);
    // private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly brandsService = inject(BrandsService);
    private readonly store = inject<Store<State>>(Store);

    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            // this.productsStoreService.loadProducts(subCategoryId);
            this.store.dispatch(loadProducts(subCategoryId));
        }),
        // switchMap(() => this.productsStoreService.products$),
        switchMap(() =>
            this.store.pipe(
                // map(state => state[productsFeature].data),
                // distinctUntilChanged(),
                select(productsDataSelector),
            ),
        ),
    );

    readonly brands$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.brandsService.loadBrands(subCategoryId);
        }),
        switchMap(() => this.brandsService.brands$),
    );

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): Product['_id'] {
        return item._id;
    }
}
