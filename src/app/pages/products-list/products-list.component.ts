import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductsService} from '../../shared/products/products.service';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    protected products$!: Observable<Product[]>;
    @Output() itemBtnBuyClick = new EventEmitter<string>();

    constructor(private readonly productsService: ProductsService) {}

    ngOnInit(): void {
        this.products$ = this.productsService.getAll();
    }

    onBtnBuyClick(productId: string): void {
        this.itemBtnBuyClick.emit(productId);
    }
}
