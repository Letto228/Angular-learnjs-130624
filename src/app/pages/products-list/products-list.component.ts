import {Component} from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    protected readonly CardComponent = CardComponent;
}
