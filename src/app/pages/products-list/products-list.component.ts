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
    readonly product = productsMock;

    onProductBuy(productID: Product['_id']) {
        // eslint-disable-next-line no-console
        console.log('Buy product id', productID);
    }
}
