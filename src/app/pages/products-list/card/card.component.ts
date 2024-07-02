import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    protected readonly productsMock = productsMock;

    onBuy(event: Event) {
        event.stopPropagation();
        // eslint-disable-next-line no-console
        console.log('Buy button clicked!');
    }
}
