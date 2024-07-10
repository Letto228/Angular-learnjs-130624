import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';
import {LoadDirection} from '../../shared/scroll-with-loading/scroll-with-loading.directive';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    products: Product[] | null = null;

    constructor() {
        setTimeout(() => {
            this.products = productsMock;

            this.changeDetectorRef.markForCheck();
        }, 3000);
    }

    onProductBuy(id: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    onLoad(event: LoadDirection) {
        if (event === LoadDirection.top) {
            this.loadTopData();
        }

        if (event === LoadDirection.bottom) {
            this.loadBottomData();
        }
    }

    private loadTopData() {
        // eslint-disable-next-line no-console
        console.log(`Загрузка данных top (сверху)`);
    }

    private loadBottomData() {
        // eslint-disable-next-line no-console
        console.log(`Загрузка данных bottom (снизу)`);
    }
}
