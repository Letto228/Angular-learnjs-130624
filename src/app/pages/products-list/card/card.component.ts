import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: Product | null = null;
    @Output() readonly productBuy = new EventEmitter<Product['_id']>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        if (this.product !== null) {
            this.productBuy.emit(this.product?._id);
        }
    }

    isStarActive(starIndex: number): boolean {
        const rating = this.product?.rating ?? 1;

        return rating >= starIndex;
    }
}
