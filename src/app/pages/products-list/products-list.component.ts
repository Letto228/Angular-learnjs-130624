import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);

    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        switchMap(subCategoryId =>
            this.productsStoreService.products$.pipe(
                map(products => {
                    if (subCategoryId === 'all-products') {
                        return products;
                    }

                    return products?.filter(
                        (product: Product) => product.subCategory === subCategoryId,
                    );
                }),
            ),
        ),
    );

    constructor() {
        this.productsStoreService.loadProducts();
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    trackBy(_index: number, item: Product): Product['_id'] {
        return item._id;
    }
}
