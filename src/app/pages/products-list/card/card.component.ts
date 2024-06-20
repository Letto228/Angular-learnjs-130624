import {Component} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    template: `
        <div class="card-container">
            <mat-card>
                <mat-card-title-group>{{ product.name }}</mat-card-title-group>
                <img mat-card-image [src]="product.images[0].url" [alt]="product.name" />
                <mat-card-footer>
                    <p class="card-container__price">Price: {{ product.price }} USD</p>
                    <mat-card-actions>
                        <button mat-button (click)="buyOnClick($event)">Buy</button>
                    </mat-card-actions>
                </mat-card-footer>
            </mat-card>
        </div>
    `,
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    readonly product: Product = productsMock[0];

    buyOnClick($event: Event) {
        $event.stopPropagation();
        alert("The button 'Buy' was pressed");
    }
}
