import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product = productsMock[0];

    action(productId: string) {
        console.log(`Выбрали товар ${productId}`); // eslint-disable-line no-console
    }
}
