import {NgModule} from '@angular/core';
import {AsyncPipe, NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {CardModule} from './card/card.module';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CardModule, NgForOf, AsyncPipe, MatIconModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
