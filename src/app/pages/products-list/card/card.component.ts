import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Product} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    standalone: true,

    imports: [MatCardModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    @Input() product: Product | null = null;
    currency = '$';
    onAddClick(event: MouseEvent) {
        event.stopPropagation();
        console.info(`Event type: ${event.type}`);
    }
}
