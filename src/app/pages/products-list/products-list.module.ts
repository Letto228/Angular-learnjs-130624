import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    imports: [ProductsListComponent],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
