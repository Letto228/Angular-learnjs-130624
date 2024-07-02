import {ChangeDetectionStrategy, Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly productData: Product;
    readonly cart: Array<Product['_id']> = [];

    constructor() {
        this.productData = this.randomProduct;
    }

    addToCart(id: Product['_id']) {
        this.cart.push(id);

        // eslint-disable-next-line no-console
        console.log(this.cart);
    }

    get randomProduct(): Product {
        const randomProductIndex = Math.round(Math.random() * (productsMock.length - 1));

        return productsMock[randomProductIndex];
    }
}
