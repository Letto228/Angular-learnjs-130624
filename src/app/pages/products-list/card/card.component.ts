import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly productData: Product;
    imageIndex: number;

    constructor() {
        this.productData = this.randomProduct;
        this.imageIndex = 0;

        setInterval(() => {
            this.imageIndex = this.nextImageIndex;
        }, 2000);
    }

    get nextImageIndex(): number {
        return (this.imageIndex + 1) % this.productData.images.length;
    }

    get randomProduct(): Product {
        const randomProductIndex = Math.round(Math.random() * (productsMock.length - 1));

        return productsMock[randomProductIndex];
    }

    get currentImage(): Product['images'][number] {
        return this.productData.images[this.imageIndex];
    }

    buyProduct(event: MouseEvent): void {
        event.stopPropagation();
        // eslint-disable-next-line no-console
        console.log('Нажата кнопка купить продукт: ', this.productData);
    }
}
