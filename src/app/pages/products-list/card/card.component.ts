import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly cardData = productsMock[this.getRandomIndex()];
    imageIndex = 0;
    currentImage = this.cardData.images[this.imageIndex];

    constructor() {
        setInterval(() => {
            this.nextImage();
        }, 2000);
    }

    nextImage(): void {
        this.imageIndex = (this.imageIndex + 1) % this.cardData.images.length;
        this.currentImage = this.cardData.images[this.imageIndex];
    }

    getRandomIndex(): number {
        return Math.round(Math.random() * (productsMock.length - 1));
    }

    buyProduct(event: MouseEvent): void {
        event.stopPropagation();
        // eslint-disable-next-line no-console
        console.log('Нажата кнопка купить продукт: ', this.cardData);
    }
}
