import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';
import {LoadDirection} from '../../shared/load-direction.enum';

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

    onLoad(loadDirection: LoadDirection) {
        // Just for test
        if (this.products === null || this.products.length === 0) {
            return;
        }

        const randomProducts = this.getRandomProducts(this.products, 7);

        if (loadDirection === LoadDirection.UP) {
            this.products.unshift(...randomProducts);
        } else {
            this.products.push(...randomProducts);
        }

        this.changeDetectorRef.markForCheck();
    }

    private getRandomProducts(products: Product[], amount: number): Product[] {
        for (let i = products.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [products[i], products[j]] = [products[j], products[i]];
        }

        return products.slice(0, amount);
    }
}
