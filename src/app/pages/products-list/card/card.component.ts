import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';
import {defaultData} from './const';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: Product = defaultData;
    @Output() addToCart = new EventEmitter<Product['_id']>();
    imageIndex = 0;

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.addToCart.emit(this.product._id);
    }

    nextImageIndex(event: Event) {
        event.stopPropagation();
        this.imageIndex = (this.imageIndex + 1) % this.product.images.length;
    }

    prevImageIndex(event: Event) {
        event.stopPropagation();
        this.imageIndex = this.imageIndex ? this.imageIndex - 1 : this.product.images.length - 1;
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
