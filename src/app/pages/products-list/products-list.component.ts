import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    private readonly productsStoreService = inject(ProductsStoreService);

    readonly products$ = this.productsStoreService.products$;

    // For easy
    name = '';

    // For hard
    propertyName: string | any = ''; // keyof Product
    searchPropertyValue: any;

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

    changeNameFilter(filterValue: string) {
        this.name = filterValue;
        this.changeDetectorRef.markForCheck();
    }

    changeValueFilter(valueFilter: string | number) {
        this.searchPropertyValue = valueFilter;
        this.changeDetectorRef.markForCheck();
    }

    changeValueFilterCategory(category: string) {
        this.propertyName = category;
        this.changeDetectorRef.markForCheck();
    }
}
