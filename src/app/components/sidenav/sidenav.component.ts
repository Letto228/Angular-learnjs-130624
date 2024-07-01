import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../shared/products/product.interface';
import {ProductsService} from '../../shared/products/products.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @Input() isSidenavOpened = false;

    @Output() readonly isSidenavOpenedChange = new EventEmitter<boolean>();

    readonly basket: Product[] = [];

    constructor(readonly productsService: ProductsService) {}

    toggleSidenavOpened() {
        this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
    }

    onItemBtnBuyClick(productId: string) {
        const product = this.productsService.getById(productId);

        if (product) {
            this.basket.push(product);

            if (!this.isSidenavOpened) {
                this.toggleSidenavOpened();
            }
        }
    }
}
