import {Component} from '@angular/core';
import {Product} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/products.mock';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    standalone: true,
    imports: [CardComponent, CommonModule],
})
export class ProductsListComponent {
    products: Product[] = productsMock;
}
