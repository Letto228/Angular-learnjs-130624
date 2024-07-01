import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card-mini',
    template: `
        <div class="card-mini-container">
            <p>{{ product.name }}</p>
            <div class="card-mini__btn-delete">
                <button mat-icon-button color="warn" (click)="onRemoveProductBtnClick(product._id)">
                    <mat-icon>cancel</mat-icon>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            .card-mini-container {
                border: solid 1px white;
                border-radius: 3px;
                padding: 10px 15px;
                margin: 7px;

                position: relative;
            }

            .card-mini__btn-delete {
                position: absolute;
                top: -20px;
                right: -20px;
            }

            p {
                margin: 0;
            }
        `,
    ],
})
export class CardMiniComponent {
    @Input() product!: Product;
    @Output() removeProductOnClick = new EventEmitter<string>();

    onRemoveProductBtnClick(id: string) {
        this.removeProductOnClick.emit(id);
    }
}
