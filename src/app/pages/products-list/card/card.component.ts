import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product!: Product;
    @Output() readonly btnBuyClick = new EventEmitter<string>();

    onProductBuy(event: Event) {
        event.stopPropagation();
        this.btnBuyClick.emit(this.product._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
